# Getting Started
WebDriverIO starter project using page object model. Automated against Amazon as the base URL.

# TO-DO
Parameterized baseUrl/further the test harnessing.

# Requirements / Initial Setup
- Setup and install Java JRE on local machine
- npm install webdriverio
- npm install -g selenium-standalone
- selenium-standalone install
- npm install -g selenium-standalone
- selenium-standalone start

# Running Tests:
- npx wdio run ./wdio.conf.js - Run all tests.
- .\node_modules\.bin\wdio wdio.conf.js --spec .\test\specs\dashboard-spec.e2e.js - Run single file.