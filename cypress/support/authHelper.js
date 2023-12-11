const loginWithCredentials = () => {
  const username = Cypress.env('LOGIN_USERNAME');
  const password = Cypress.env('LOGIN_PASSWORD');
  if (username && password) {
      cy.get("#username").should("be.visible").type(username);
      cy.get("#password").should("be.visible").type(password);
      cy.get("#kc-login").should("be.visible").click()      
  } else {
      throw new Error('Username or password is undefined or empty');
  }    
};  
export default loginWithCredentials;