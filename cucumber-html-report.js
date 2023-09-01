const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "./cypress/cucumber-json/wilfred.json", // ** Path of .json file **//
  reportPath: "./reports",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "Linux",
      version: "Zorin",
    },
  },
});
