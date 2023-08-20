class ClikaliaPage1 {
  elements = {
    cookies: () => cy.get("#onetrust-reject-all-handler"),
    buy: () => cy.get("#burger-menu-compra"),
    buyCenter: () => cy.get("#cover-cta-Compra"),
    madridButton: () => cy.contains('Madrid'),
    reservation: () => cy.get("#book-appointment-2649"),
    x: () => cy. get ('[data-testid="23-AGOSTO-button"]'),
    hour: () => cy. get ('[data-testid="10:30-button"]'),
    submit: () => cy.get("#arrangeVisit-continueButton"),
    burger: () => cy.get('[data-testid="burgerMenuComponent-drawer-open-btn"]'),
    name: () => cy. get ('[data-testid="sales-ts-contact-name"]'),
    surname: () => cy. get ('[data-testid="sales-ts-contact-surname"]'),
  };
  acceptCookies(){
    this.elements.cookies().click();
  }
  clickBuy() {
    this.elements.burger().click();
    this.elements.buy().click();
    this.elements.buyCenter().click();
  }
  clickButton() {
    this.elements.madridButton().click();
  }
  clickReservation() {
   
    this.elements.reservation().click();
    cy.wait(4000);
    this.elements.x().click();
    this.elements.hour().click();
    this.elements.submit().click();
  }
  enterData() {
    this.elements.name().type("Victor");
    this.elements.surname().type("Bañó Rodríguez");
  }
}
export const loginPage = new ClikaliaPage1();
