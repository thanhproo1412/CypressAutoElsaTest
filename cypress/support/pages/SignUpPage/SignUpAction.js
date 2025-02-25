import SignUpPage from './SignUpPage.js';

class SignUpAction {
    static signUp(name, email, password) {

        SignUpPage.getBtnLetCreateAccount.click();
        SignUpPage.getInputFullName.type(name);
        SignUpPage.getInputEmail.type(email);
        SignUpPage.getInputPassword.type(password);
        SignUpPage.getBtnSignUp.click({ force: true });
    }
}

export default SignUpAction;
