import * as route from "@helpers/route";
import * as elements from "@helpers/elements";
import * as asserts from "@helpers/asserts";
import { ROUTES } from '@tests/consts/routes';
import * as auth from "@tests/data/login.data";
import * as login from "@tests/page/login.page";

describe('login', () => {
    // hooks
    beforeEach(() => {
        route.visit(ROUTES.login);
    });
    
    it('Ensure the error message is displayed when user input invalid password', () => {
        elements.fillField(login.usernameField, auth.INVALID_LOGIN.username);
        elements.fillField(login.passwordField, auth.INVALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.errorAlert, 'Epic sadface: Username and password do not match any user in this service');
    });

});