import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {saucedemoPage} from '@pages/saucedemoPage1'

Given('I am on the Clikalia website', () => {
  saucedemoPage.visit("https://clikalia.es/vender");
});
When("As user clicks on Hipoteca", () => {
  saucedemoPage.hipoteca();
});
When('I select calcula tu hipoteca', () => {
  saucedemoPage.calcula();
});
Then('I proceed to get information', () => {
  saucedemoPage.getInfo();
});


