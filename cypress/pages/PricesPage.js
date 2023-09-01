class PricesPage {
  elements = {
    calcula: () => cy.get('img.faq-pricing_icon').eq(1),
    calcula1: () => cy.get('div[aria-expanded="true"] img'),
    name: () => cy.get('input.input-style').eq(0),
    email: () => cy.get('input[data-name="Email"]').eq(1),
    sector: () => cy.get('input[data-name="Organización"]'),
   
    up: () => cy.get('#email-form > div > div.heading-style-h3').scrollIntoView(),
    ORG: () => cy.get('#Organizaci-n'),
    use: () => 
    cy.get('form[name="wf-form-Pricing-form"] select').eq(0)
    .select('Asambleas'),
    modal: () => 
    cy.get('select.input-style').eq(1)
    .select('10.000'),

    telephone: () => cy.get('input.phone-pricing'),
    acceptConditions: () => cy.get('div.w-checkbox-input').eq(1),
    submitQuestionary: () => cy.get('input.is-full'),
    
    burger: () => cy.get('img.faq-pricing_icon').eq(0),
   
  };

    visit() {
      cy.visit('https://www.kuorum.org/precios');
    }
    hipoteca() {
      
      cy.url().should('include', '/precios');
      cy.contains('h1', 'Consulta nuestros precios');
      this.elements.burger().click();
      this.elements.calcula().click();
      this.elements.calcula1().click();
  }

  calcula() {
  
    this.elements.name().type("Victor");
    this.elements.email().type("bigfishx@icloud.com");
    this.elements.up();
    this.elements.sector();
    this.elements.ORG().type("Kuorum.org");
    this.elements.use();
    this.elements.telephone().type("666427468");
    this.elements.modal();
    this.elements.acceptConditions().click();
   
    


}
  
    getInfo() {
     
    up: () => cy.get('#email-form > div > div.heading-style-h3').scrollIntoView(),
    this.elements.up();
    }
  
   
  }
  
;
export const saucedemoPage = new PricesPage();
  