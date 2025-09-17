/// <reference types="cypress" />

export default {
    doRegister() {
        cy.get('#btnRegister')
            .click();
    },

    checkErrorMessage(message) {
        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', message);
    },

    fillName(name) {
        cy.get('#user')
            .type(name);
    },

    fillEmail(email) {
        cy.get('#email')
            .type(email);
    },

    fillPassword(password) {
        cy.get('#password')
            .type(password);
    },

    checkSuccessMessage(name) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!');
        
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    
    }

}