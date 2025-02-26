import testData from '../../fixtures/testData/TC_001_Login.json';
import LoginAction from '../../support/pages/LoginPage/LoginAction';

describe('Login', () => {
  it('Login to elsa', () => {
    // Log the environment details
    cy.log('Environment:', Cypress.env('envName'));
    cy.log('Base URL:', Cypress.env('baseUrl'));

    // Visit the website
    cy.visit(Cypress.env('baseUrl')+'/sign-in');

    // Login
    LoginAction.login(testData.username, testData.password);

    // Verify that the user is logged in
    // cy.url().should('include', '/welcome');


  });
});
