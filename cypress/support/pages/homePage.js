/// <reference types="cypress" />

export default {
    accessLogin() {
        cy.visit("/");
            cy.get('#top_header')

        cy.get('.fa-user')
            .click();
    },

    accessRegister(){
        cy.visit("/");
            cy.get('#top_header')

        cy.get('.fa-lock')
            .click();
    }
}