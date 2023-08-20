class SauceDemoPage1 {
  elements = {
    calcula: () => cy.get('#cover-cta-Hipoteca'),
    calcula1: () => cy.get('#calculateMortgageCTA'),
    price: () => cy.get('#mortgage-calculator-property-price-inputPrice-propertyPriceInput'),
    burger: () => cy.get('[data-testid="burgerMenuComponent-drawer-open-btn"]'),
    term: () => cy.get('#mortgage-calculator-contribution-price-inputPrice-propertyPriceInput'),
    propose: () => cy.get('#mortgage-calculator-result-button'),
    interest: () => cy.get('#mortgage-calculator-interest-rate-variable-control'),
    new: () => cy.get('#__next > div > div.sc-2bd4f6bf-0.hjDHjA > div.sc-2bd4f6bf-7.hSzQuL > div.sc-2bd4f6bf-8.jNjzNC > div.sc-7edbacff-0.glSUeU > div:nth-child(2) > div > div'),
    second: () => cy.get('#__next > div > div.sc-2bd4f6bf-0.hjDHjA > div.sc-2bd4f6bf-7.hSzQuL > div.sc-2bd4f6bf-8.jNjzNC > div.sc-7edbacff-0.glSUeU > div:nth-child(2) > ul > li.sc-elYLMi.bMpchm'),
    modalUse: () => cy.get('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div > div:nth-child(1)'),
    modalUse1: () => cy.get('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div > div:nth-child(1) > ul > li:nth-child(3)'),
    modalWhen: () => cy.get('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div > div:nth-child(2)'),
    modalWhen1: () => cy.get('[data-testid="form-information-data-whenBuy-item-2"]'),
    modalHmuch: () => cy.get('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div > div.sc-fmrZth.kzdlLD'),
    modalStatus: () => cy.get('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div > div:nth-child(3) > div > div'),
    modalStatus1: () => cy.get('[data-testid="form-information-data-workSituation-item-0"]'),
    confirmButton: () => cy.get('#button-mortgage-infomation'),
    name: () => cy. get ('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div.sc-a08df9b9-5.igApyW > div:nth-child(1)'),
    surname: () => cy. get ('#modalComponent > div > div.sc-475b5863-0.hMnjkW > form > div.sc-a08df9b9-5.igApyW > div:nth-child(2)'),
  };

    visit() {
      cy.visit('https://clikalia.es/vender');
    }
    hipoteca() {
      this.elements.burger().click();
      cy.get('#burger-menu-hipotecas').click();
      cy.url().should('include', '/hipotecas');
      cy.get('#homeMortgage-coverDesktop > section').should('contain.text', 'Conseguimos tu mejor hipoteca');
      this.elements.calcula().click();

  }

  calcula() {
  this.elements.calcula1().click();
  this.elements.price().click();
  this.elements.price().clear();
  this.elements.price().type("300000");

  this.elements.term().click();
  this.elements.term().clear();
  this.elements.term().type("100000");

  this.elements.interest().click();
  this.elements.new().click();
  this.elements.second().click();
  

  this.elements.propose().click();
  


}
  
    getInfo() {
      this.elements.modalUse().click();
      this.elements.modalUse1().click();
      this.elements.modalWhen().click();
      this.elements.modalWhen1().click();
      this.elements.modalStatus().click();
      this.elements.modalStatus1().click();

      this.elements.modalHmuch().click();
      this.elements.modalHmuch().type("40000");

      this.elements.confirmButton().click();
      this.elements.name().click().type("Victor");
      this.elements.surname().click().type("Bañó Rodríguez");
    }
  
    verifyConfirmationPage() {
        cy.get('#finish').click();
      cy.url().should('include', '/checkout-complete');
      cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    }
  }
  
;
export const saucedemoPage = new SauceDemoPage1();
  