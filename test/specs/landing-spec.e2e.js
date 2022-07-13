var mocha = require('mocha')

const LandingPage = require('../pageobjects/landing.page');

describe('Access Dashboard', () => {
    before(function(done){
        console.log("Example of a before hook. I will fire once in this test!")
    });

    it('should enable acception of cookie disclaimer', async() => {
        await LandingPage.open()
        await LandingPage.acceptCookie()
    });

    it('should display sign in button', async () => {
        await expect(LandingPage.signInButton).toBeExisting();
    });

    it('should contain the correct text', async () => {
        await expect(LandingPage.signInButton).toHaveTextContaining('Sign in');
    });

    it('should enable user to navigate to the sign in screen', async () => {
        await LandingPage.clickSignInButton()
    });
});


