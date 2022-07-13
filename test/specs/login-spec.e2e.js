var mocha = require('mocha')

const LoginPage = require('../pageobjects/login.page');
const LandingPage = require('../pageobjects/landing.page');

describe('Login to Amazon', () => {
    it('should not login with invalid email credentials entered', async () => {
        await LandingPage.open()
        await LandingPage.acceptCookie()
        await LandingPage.clickSignInButton()

        await LoginPage.enterInitialEmailValue('fakeemail3@fakeemail.com')
        //await LoginPage.enterPasswordValue('fakeemail3@fakeemail.com', 'passwordval')

        await expect(LoginPage.flashErrorBox).toBeExisting();
    });
});


