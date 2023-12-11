# Cypress Tests for Symphony App Frame (SAF)

This repository contains Cypress tests to automate testing for Symphony App Frame (SAF). These tests cover various functionalities to ensure the application works as expected.

## Prerequisites

Before running the tests, ensure you have the following tools installed:

- Node.js (which comes with npm)
- Git
- Cypress

## Getting Started

### Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/martinskopec/yunex-test-cypress.git
```
<br />

### Install Dependencies
Once you have the repository downloaded, you need to install necessary dependencies:

```bash
cd your-repository
npm install
```
<br />

### Set Environment Variables
Because it's not a good practice to have sensitive information hardcoded within the code, you also need to create 
`.env` file in the project root and write the following lines into that file. 
<br /> 
**You need to replace `username`, `password` and `url` with the correct values!**  
```bash
LOGIN_USERNAME=username
LOGIN_PASSWORD=password
BASE_URL=url
```

<br />

### Running the Tests
To execute the tests there are two ways: <br />
- using Cypress UI (Launchpad / Test Runner)
```bash
npx cypress open
```
or
```bash
npm run cy:open
```
Choose `E2E Testing` in the Launchpad window.

<br />

- using command line
```bash
npm run cy:run
```
This will open the Cypress Test Runner UI, from which you can select and run individual test files or all tests.

<br />

### Running Tests in Headless Mode
To run tests in headless mode (in the terminal), use the following command:
```bash
npm run cy:run
```
This command runs all tests in the terminal without the graphical interface. The `Chrome` is set as the default browser. 
If you want to change the browser, do it in `package.json` file under `scripts` or you can use the following command, 
where you can add more parameters like `--headed` (execution with UI), `--browser firefox` etc. 
```bash
npx cypress run
```
<br />

### Writing Tests
All test files are located in the `cypress/e2e` directory. Feel free to modify or add new tests based on your requirements.

<br />

### Additional Information
- Custom commands or utilities can be added in the `cypress/support` directory.

<br />

Enjoy your testing! :)
