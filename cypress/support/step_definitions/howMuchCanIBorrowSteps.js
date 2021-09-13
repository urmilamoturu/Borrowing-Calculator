import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import HowMuchCanIBorrow from '../../models/howMuchCanIBorrowPage';

Given('I navigate to borrowing power calculator', () => {
    HowMuchCanIBorrow.Visit();
});

When(/^I enter my (.*),(.*) details$/, async (applicationType, numberOfDependents) => {
    await HowMuchCanIBorrow.enterDetails(applicationType, numberOfDependents);
});

And(/^I enter my (.*),(.*) income$/, async (income, otherIncome) => {
    await HowMuchCanIBorrow.enterEarnings(income, otherIncome);
});

And('I enter my expenses', async () => {
    cy.getDataFromJson('cypress/support/data/expenses.json').then((data) => {
        cy.log(data.livingExpenses)
        HowMuchCanIBorrow.enterExpenses(data.livingExpenses, data.homeLoanRepayment, data.otherLoanRepayment, data.otherCommitments, data.creditCardLimit);
    });
});

And('I click on calculate borrowing power button', async () => {
    await HowMuchCanIBorrow.calculateBarrowingPower();
});

Then(/^I validate borrowing estimate to be (.*)$/, async (estimate) => {
    await HowMuchCanIBorrow.validateBorrowingEstimate(estimate);
});

When('I click on start over', async () => {
    await HowMuchCanIBorrow.startOver();
});

Then('I validate form is clear', async () => {
    await HowMuchCanIBorrow.validateFormIsClear();
});