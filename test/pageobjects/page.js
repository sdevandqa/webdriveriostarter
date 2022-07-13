/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

module.exports = class Page {
    open (path) {
        // Reference our config value.
        return browser.url(browser.options.baseUrl)
    }
}
