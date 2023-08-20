Feature: Comprar productos en Sauce Demo

  Scenario: Seleccionar y comprar 4 artículos al azar
    Given I am on the Sauce Demo website
    When As user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
    And I select 4 random items to buy
    And I proceed to checkout
    Then I should see the confirmation page
