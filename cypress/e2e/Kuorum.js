import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/KuorumPage1'

Given("A web browser is at the Kuorum page", () => {
  cy.visit("https://www.kuorum.org/");
});
When("A user accept cookies", () => {
  loginPage.acceptCookies();
});
When("Click on List", () => {
  loginPage.clickList();
});
Then("the url will contains the subdirectory", () => {
  cy.url().should("contains", ".org");
});
Then("I want explore navigation", () => {
  loginPage.clickButton();
});
Then("Start a reservation", () => {
  loginPage.clickReservation();
});
Then("A user enters the personal data with an incorrect email", () => {
  loginPage.enterData();
});