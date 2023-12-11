import loginWithCredentials from '../support/authHelper';

describe('Login to the SAF application and then change the language', () => {
  beforeEach(() => {
    const baseUrl = Cypress.env('BASE_URL');
    cy.clearAllCookies()
    cy.visit(baseUrl)
  })
  
  it('user log in to the application', () => {
    loginWithCredentials();
    cy.contains('Symphony').should("be.visible")
  })

  it('user switch the language to English', () => {
    loginWithCredentials()
    cy.contains('OA').should("be.visible").click()
    cy.contains("Sprache").should("be.visible").trigger('mouseover')
    cy.contains(/^English$/).click()
  })
})