# Getting Started
WebDriverIO starter project using page object model. Automated against Amazon as the base URL.

# Requirements / Initial Setup
- Setup and install Java JRE on local machine
- npm install webdriverio
- npm install -g selenium-standalone
- selenium-standalone install
- selenium-standalone start

# Running Tests:
- npx wdio run ./wdio.conf.js - Run all tests.
- .\node_modules\.bin\wdio wdio.conf.js --spec .\test\specs\dashboard-spec.e2e.js - Run single file.
- .\node_modules\.bin\wdio wdio.conf.js --baseUrl=<base_url_to_target>" -- change base url

