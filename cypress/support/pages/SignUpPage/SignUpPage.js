class SignUpPage {


  static get getBtnLetCreateAccount() {
    return cy.contains('div.modal__inner button', "No, let’s create an account");
  }

  static get getInputFullName() {
    return cy.get('input.form__input[name="fullName"]');
  }

  static get getInputEmail() {
    return cy.get('input.form__input[name="email"]');
  }

  static get getInputPassword() {
    return cy.get('input.form__input[name="password"]');
  }

  static get getBtnSignUp() {
    return cy.contains('div.sign-up button', 'Create an account');

  }



}

export default SignUpPage;
