class SauceDemoPage {
    visit() {
      cy.visit('https://www.saucedemo.com/');
    }
  
    
  
    selectRandomItemsToBuy(count) {
      // Obtener todos los elementos disponibles para comprar
      cy.get('.inventory_list div.inventory_item').then(items => {
        // Obtener un arreglo de índices aleatorios para seleccionar
        const randomIndexes = Array.from(Array(items.length).keys()).sort(() => Math.random() - 0.5).slice(0, count);
  
        // Hacer clic en los elementos seleccionados
        randomIndexes.forEach(index => {
          cy.wrap(items[index])
            .find('button.btn_primary')
            .click();
        });
      });
    }
  
    goToCheckout() {
      cy.get('#shopping_cart_container').click();
      cy.get('#checkout').click();
      cy.get('#first-name').type("Victor");
      cy.get('#last-name').type("Bañó Rodríguez");
      cy.get('#postal-code').type("08220");
      cy.get('#continue').click();





    }
  
    verifyConfirmationPage() {
        cy.get('#finish').click();
      cy.url().should('include', '/checkout-complete');
      cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    }
  }
  
;
export const saucedemoPage = new SauceDemoPage();
  