# Java - Selenium - Cucumber - Automation test demo

This is initial automation test framework using Selenium - Cucumber.

# Installation
1. Access https://github.com/nguyenduy020290/lazadaTestDemo
2. Clone the project
3. Import the project into Eclipse
4. Build the project
5. Download chromedriver from https://sites.google.com/a/chromium.org/chromedriver/downloads, then copy location of chrome driver
6. Open file config.properties (inside src/configuration)
7. Paste the location of chromedriver (copied in step #5) to key ChromeWebDriverLocation
8. Start test: Right click on TestRunner.java --> Run As --> JUnit Test

# Key features of this framework
1. Use Gherkin Cucumber to write down readable scenarios for business users
2. Scalable common functions, dataRepository, PageObjects, stepsDefinition and Features
3. Support test report (logs, images, original cucumber-html, excel...)    

# Project structure
1. commonLibrary: this package consists of classes which contains regularly used functions
2. configuration: this package contains configurable variables and parameters.
3. dataRepository: this package contains message, error text data and test data for scenarios (not yet implemented)
4. pageObjects: this package contains objects from pages of tested system.
5. stepsDefinition: this package contains detailed steps of scenarios to be tested
6. Features: this folder contains cucumber Gherkin .feature files which state business readable scenarios.
7. RE-RUN: contains failed test cases, rerun scenarios (not yet implemented)
8. target: not applicable
9. test-output: this folder contains output report after test finished.
10. log4j.properties: this file contains configuration of log4j
11. pom.xml: this is maven file, contains packages and dependencies needed for projects
