const APPLICATIONTYPESINGLE = '#application_type_single';
const APPLICATIONTYPEJOINT = '#application_type_joint';
const NUMBEROFDEPENDENTS = '[title="Number of dependants"]';
const PROPERTYTYPEHOME = '#borrow_type_home';
const PROPERTYTYPEINVESTMENT = '#borrow_type_investment';
const INCOME = '[aria-labelledby="q2q1"]';
const OTHERINCOME = '[aria-labelledby="q2q2"]';
const LIVINGEXPENSES = '#expenses';
const HOMELOANREPAYMENT = '#homeloans';
const OTHERLOANREPAYMENT = '#otherloans';
const OTHERCOMMITMENTS = '[aria-labelledby="q3q4"]';
const CREDIITTCARDLIMIT = '#credit';
const CALCULATE = '.btn--borrow__calculate';
const ESTIMATE = '#borrowResultTextAmount'
const STARTOVER = '.start-over';

export default class HowMuchCanIBorrow {

    static Visit() {
        const URL = Cypress.env('url');
        cy.visit(URL);
    }

    static getApplicant(applicationType) {
        switch (applicationType.toLowerCase()) {
            case 'single':
                return APPLICATIONTYPESINGLE;
            case 'joint':
                return APPLICATIONTYPEJOINT;
        }
    }

    static getPropertyType(propertyType) {
        switch (propertyType) {
            case 'home':
                cy.log(PROPERTYTYPEHOME);
                return PROPERTYTYPEHOME;
            case 'investment':
                return PROPERTYTYPEINVESTMENT;
        }
    }

    static async enterDetails(applicationType, numberOfDependents) {

        const applicantType = this.getApplicant(applicationType);
        await cy.get(applicantType).click();
        await cy.get(NUMBEROFDEPENDENTS)
            .select(numberOfDependents.trim(), { force: true });
        await cy.get(PROPERTYTYPEHOME).click({ force: true });

    }

    static enterEarnings(income, otherIncome) {
        cy.get(INCOME).clear().type(income);
        cy.get(OTHERINCOME).clear().type(otherIncome);

    }

    static enterExpenses(livingExpenses, hlRepayment, olRepayment, otherCommitments, creditCardLimit) {
        cy.get(LIVINGEXPENSES).clear().type(livingExpenses);
        cy.get(HOMELOANREPAYMENT).clear().type(hlRepayment);
        cy.get(OTHERLOANREPAYMENT).clear().type(olRepayment);
        cy.get(OTHERCOMMITMENTS).clear().type(otherCommitments);
        cy.get(CREDIITTCARDLIMIT).clear().type(creditCardLimit);
    }

    static calculateBarrowingPower() {
        cy.get(CALCULATE).should('be.visible').click({ force: true });
    }

    static validateBorrowingEstimate(estimate) {
        cy.get(ESTIMATE).should('have.value', estimate);
    }

    static startOver() {
        cy.get(STARTOVER).first().click();
    }

    static validateFormIsClear() {
        cy.get(APPLICATIONTYPESINGLE).should('be.checked');
        cy.get(NUMBEROFDEPENDENTS).should('have.value', 0);
        cy.get(PROPERTYTYPEHOME).should('be.checked');
        cy.get(INCOME).should('have.value', 0);
        cy.get(OTHERINCOME).should('have.value', 0);
        cy.get(LIVINGEXPENSES).should('have.value', 0);
        cy.get(HOMELOANREPAYMENT).should('have.value', 0);
        cy.get(OTHERLOANREPAYMENT).should('have.value', 0);
        cy.get(OTHERCOMMITMENTS).should('have.value', 0);
        cy.get(CREDIITTCARDLIMIT).should('have.value', 0);

    }
}