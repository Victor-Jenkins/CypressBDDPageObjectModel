import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {saucedemoPage} from '@pages/PricesPage'

Given('I am on the Kuorum website', () => {
  saucedemoPage.visit("https://www.kuorum.org/precios");
});
When('As user clicks on different dropdowns', () => {
  saucedemoPage.hipoteca();
});
When('I type personal data like a client', () => {
  saucedemoPage.calcula();
});
Then('I can type all personal data in client area', () => {
  saucedemoPage.getInfo();
});


