
Cypress.Commands.add('getDataFromJson', (filePath) => {
    return cy.readFile(filePath).then(async (data) => {
        return data;
    });
});