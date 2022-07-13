const Page = require('./page');

class LoginPage extends Page {
    get inputEmail () {
        return $('#ap_email');
    }

    get inputPassword() {
        return $('#ap_password');
    }

    get btnSubmit () {
        return $('#continue');
    }

    get signInSubmitBtn() {
        return $('#signInSubmit');
    }

    get flashErrorBox() {
        return $('#auth-error-message-box > div')
    }

    async enterInitialEmailValue(email) {
        await this.inputEmail.setValue(email);
        await this.btnSubmit.click();
    }

    async enterPasswordValue(email, password) {
        await this.inputPassword.setValue(password);
        await this.signInSubmitBtn.click();
    }
}

module.exports = new LoginPage();
