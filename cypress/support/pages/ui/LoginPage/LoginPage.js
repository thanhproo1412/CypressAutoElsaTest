class LoginPage {
  static getInputUsername() {
    return cy.get('div.sign-in input[name="email"]');
  }

  static getInputPassword() {
    return cy.get('div.sign-in input[name="password"]');
  }

  static getLoginBtn() {
    return cy.contains('div button', 'Sign in');
  }
}

export default LoginPage;
