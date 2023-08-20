import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/ClikaliaPage1'

Given("A web browser is at the Clikalia page", () => {
  cy.visit("https://clikalia.es/vender");
});
When("A user accept cookies", () => {
  loginPage.acceptCookies();
});
When("Click on Buy Flat", () => {
  loginPage.clickBuy();
});
Then("the url will contains the subdirectory", () => {
  cy.url().should("contains", "/vender");
});
Then("I want buy on Madrid", () => {
  loginPage.clickButton();
});
Then("Start a reservation", () => {
  loginPage.clickReservation();
});
Then("A user enters the name and surnames", () => {
  loginPage.enterData();
});