import LoginPage from './LoginPage.js';

class LoginAction {
    static login(Username, psw) {
        LoginPage.getInputUsername().type(Username);
        LoginPage.getInputPassword().type(psw);
        LoginPage.getLoginBtn().click();
    }
}

export default LoginAction;
