import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'
import {saucedemoPage} from '@pages/saucedemoPage'


Given('I am on the Sauce Demo website', () => {
  saucedemoPage.visit();
});

When("As user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.submitLogin(username,password)
  
});

When('I select 4 random items to buy', () => {
  saucedemoPage.selectRandomItemsToBuy(4);
});

When('I proceed to checkout', () => {
  saucedemoPage.goToCheckout();
});

Then('I should see the confirmation page', () => {
  saucedemoPage.verifyConfirmationPage();
});
