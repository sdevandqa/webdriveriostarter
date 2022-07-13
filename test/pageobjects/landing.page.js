const Page = require('./page');

class LandingPage extends Page {
    get signInButton () {
        return $('#nav-signin-tooltip > a > span');
    }

    get cookieDisclaimerAcceptButton() {
        return $('#sp-cc-accept')
    }

    async clickSignInButton () {
        await this.signInButton.click()
    }

    async acceptCookie() {
        await this.cookieDisclaimerAcceptButton.click()
    }
}

module.exports = new LandingPage();
