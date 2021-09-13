# Introduction
This project focuses on automated tests for Borrowing Calculator and contrbutes the quality check of the frontend web application.

# Getting Started

Cypress is a Javascript testing framework designed to perform end-to-end testing or UI testing a web application

The cypress-cucumber-preprocessor adds support for using feature files when testing with Cypress.

# Introduction
This project focuses on automated tests for Borrowing Calculator and contrbutes the quality check of the frontend web application.

# Getting Started

Cypress is a Javascript testing framework designed to perform end-to-end testing or UI testing for a web application

The cypress-cucumber-preprocessor adds support for using feature files when testing with Cypress.

To work with Cypress we need a working installation of Node.js on the system.


# Installation

```npm install```

The above command will install all of the required packages for the project once after the cloning is successful

_NOTE_:  **please install the packages from the root directory**

Dependencies:

The project mainly requires cypress and cypress-cucumber-preprocessor as a primary dependencies and also added a supporting package to help build the framework more robustly. It is best practice to update the libraries with the latest versions for the better support. 

# Run the tests

```cypress run --browser chrome```

The above command will run all the test from all the available feature files on Chrome browser. If the browser is not specified by default tests will run on electron browser in headless mode.

_NOTE_: if cypress is not installed globally, use ```./node_modules/.bin/cypress run --browser chrome``` or ```npx cypress run --browser chrome``` to run the tests

1. To Run the subset of tests using tags or run a single test

Create a tag to the tests(e.g @regression or @test1)

Run the following command to run the tests alone

```cypress-tags --env TAGS="@calculate" --browser chrome```

_NOTE_: If cypress-tags is not identified, use ```./node_modules/.bin/cypress-tags --env TAGS="@calculate" ``` or ```npx cypress-tags --env TAGS="@calculate" ``` to run the tests

The package is listed below

https://www.npmjs.com/package/cypress-cucumber-preprocessor

2. To Run the cypress tests in headless mode on CICD use the below command

```npx cypress-tags --env TAGS="@regression" --browser electron --headless```

3. To Run the tests on open mode use the following command to open the cypress and select a test to run

```cypress open```

_NOTE_: if cypress is not installed globally, use ```./node_modules/.bin/cypress open``` or ```npx cypress open```


# Test Results

A HTML test report will be generted at the following location after successful test run

```/mochawesome-report```

The package is listed below

https://www.npmjs.com/package/mochawesome

When there is a failure screenshots will be captured and saved at following location

```/cypress/screenshots```

_NOTE_: This project is configured in cypress.json to retry 2 times when there is a failure in run mode

# Refernces

Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress

Also refer to the repo -https://github.com/TheBrainFamily/cypress-cucumber-preprocessor for full documentation on cypress cucumber





# Installation

```npm install```

The above command will install all of the required packages for the project once after the cloning is successful

_NOTE_:  **please install the packages from the root directory**

Dependencies:

The project mainly requires cypress and cypress-cucumber-preprocessor as a primary dependencies and also added a supporting package to help build the framework more robustly and it is best practice to update the libraries with the latest versions for the better support. 

# Run the tests

```cypress run --browser chrome```
The above command will run all the test from all the available feature files on Chrome browser
_NOTE_: if cypress is not installed globally, use ```./node_modules/.bin/cypress run --browser chrome``` or ```npx cypress run --browser chrome``` to run the tests

1. To Run the cypress tests using tags or run a single test

Create a tag to the tests(e.g @regression or @test1)
Run the following command to run the tests alone
```cypress-tags --env TAGS="@calculate" --browser chrome```
_NOTE_: If cypress-tags is not identified, use ```./node_modules/.bin/cypress-tags --env TAGS="@calculate" ```or ```npx cypress-tags --env TAGS="@calculate" ``` to run the tests

The package is listed below
https://www.npmjs.com/package/cypress-cucumber-preprocessor

2. To Run the cypress tests in headless mode on CICD use the below command
```npx cypress-tags --env TAGS="@regression" --browser electron --headless```

3. To Run the tests on open mode use the following command to open the cypress and select a test to run
```cypress open```
_NOTE_: if cypress is not installed globally, use ```./node_modules/.bin/cypress open``` or ```npx cypress open```


# Test Results
A HTML test report will be generted at the following location after successful test run
```/mochawesome-report```
The package is listed below
https://www.npmjs.com/package/mochawesome

_NOTE_: This project is configured in cypress.json to retry 2 times when there is a failure in run mode

# References

Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress

Also refer to the repo -https://github.com/TheBrainFamily/cypress-cucumber-preprocessor for full documentation on cypress cucumber

