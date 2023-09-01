


## Requisitos previos a su ejecución:
instalar cypress:npm install cypress
Instalar cucumber:npm install cucumber
Instalar: npm install --save-dev cypress-cucumber-preprocessor


## PRUEBAS REALIZADAS EN PROYECTO KUORUM.ORG:

## KUORUM.FEATURE

✓ Ir a https:// www.Kuorum.org
✓ Accedemos y comprobamos que estamos en la web
✓ navegamos por la web comprobando distintos titulos
✓ Añadimos nuestros datos personales en /Clientes
✓ Comprobamos que no podemos enviar el formulario sin añadir un email válido

✓ La automatización se realiza en Cypress. 
✓ Gherkin, BDD y Cucumber.
✓ Reporting. 
✓ Patrones de diseño Page Object Model. 
✓ IDE Visual Studio Code. 

## PRICES.FEATURE
✓ Ir a https:// www.Kuorum.org
✓ Accedemos y comprobamos que estamos en la web
✓ navegamos por la web comprobando distintos dropdowns
✓ Añadimos nuestros datos personales
✓ Comprobamos que podemos rellenar todos los campos correctamente

✓ La automatización se realiza en Cypress. 
✓ Gherkin, BDD y Cucumber.
✓ Reporting. 
✓ Patrones de diseño Page Object Model. 
✓ IDE Visual Studio Code. 

## GENERAR REPORTE

SI QUEREMOS GENERAR UN REPORTE EN FORMATO .html PODEMOS HACERLO CON EL SIGUIENTE SCRIPT

./generate-report.sh

si accedemos al archivo : cypress-report.html podremos visualizar un resumen de las pruebas pasadas y falladas