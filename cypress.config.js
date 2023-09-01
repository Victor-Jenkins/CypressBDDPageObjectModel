const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const fs = require("fs");
const path = require("path");

// Función para verificar si existe el directorio y crearlo si no
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Directorio "${directory}" creado.`);
  }
}

async function setupNodeEvents(on, config) {
  // Crear el directorio para los archivos JSON si no existe
  const jsonDirectory = path.join(__dirname, "cypress", "cucumber-json");
  ensureDirectoryExists(jsonDirectory);

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "wi2ikb",
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/*.feature",
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
