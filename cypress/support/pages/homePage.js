/// <reference types="cypress" />

export default {
    accessLogin() {
        cy.visit("/");
            cy.get('#top_header')
                .should('be.visible');

        cy.get('.fa-user')
            .should('be.visible')
            .click();
    },

    accessRegister(){
        cy.visit("/");
            cy.get('#top_header')
                .should('be.visible');

        cy.get('.fa-lock')
            .should('be.visible')
            .click();
    }
}