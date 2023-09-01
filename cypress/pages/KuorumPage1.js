class KuorumPage1 {
  elements = {
    cookies: () => cy.get('[class*="fs-cc-banner_button w-button"]'),
    list: () => cy.get("#w-dropdown-list-0 > div.dropmenu-wrapper > div:nth-child(1) > div.dropmenu-links > a:nth-child(2)"),
    buyCenter: () => cy.get("#cover-cta-Compra"),
    madridButton: () => cy.contains('Cómo').scrollIntoView() ,
    reservation: () => cy.contains('Abre los puntos del orden').scrollIntoView() ,
    x: () => cy.contains('Tecnología que se adapta ').scrollIntoView() ,
    hour: () => cy.get('a[href="/clientes-feed"]').eq(0),
    submit: () =>cy.get('div.navbar_buttons a').eq(4),
    burger: () => cy.get('#w-dropdown-toggle-0 > div.icon.w-icon-dropdown-toggle'),
    name: () => cy.get('input[data-name="Nombre"]'),
    email: () => cy.get('input[placeholder="Email"]'),
    sector: () => cy.get('#Sector-2').select('ONG'),
    ORG: () => cy.get('input[data-name="Organizacion"]'),
    use: () => cy.get('#Casos-De-Uso-contacto').select('Asambleas'),
    telephone: () => cy.get('input[data-name="Telefono"]'),
    acceptConditions: () => cy.get('#wf-form-Form-demo > div.recaptcha-wrapper > label > div.w-checkbox-input.w-checkbox-input--inputType-custom.form_checkbox'),
    submitQuestionary: () => cy.get('#wf-form-Form-demo > input.button.is-large.is-beatyblue.w-button'),
    



  };
  acceptCookies(){
    this.elements.cookies().click();
    this.elements.burger().click();
  }
  clickList() {

    this.elements.list().click();
   
  }
  clickButton() {
    this.elements.madridButton().click();
  }
  clickReservation() {
   
    this.elements.reservation().click();
  
    this.elements.x().click();
    this.elements.hour().click();
    this.elements.submit().click();
   
  }
  enterData() {
    this.elements.name().type("Victor");
    this.elements.email().type("bigfishx@@icloud.com");
    this.elements.sector();
    this.elements.ORG().type("Kuorum.org");
    this.elements.use();
    this.elements.telephone().type("666427468");
    this.elements.acceptConditions().click();
   
    this.elements.submitQuestionary().click();
   

  
  }
}
export const loginPage = new KuorumPage1();
