/// <reference types="cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../pages/homePage';
import registerPage from '../pages/registerPage';

const email = 'vitor@teste.com';

Given("I am on register screen", () => {
    homePage.accessRegister();
})

Given("I fill name", () => {
    registerPage.fillName('Vitor');
})

Given("I fill email {string}", (email) => {
    registerPage.fillEmail(email)
})

Given("I fill password {string}", (password) => {
    registerPage.fillPassword(password);
})

Given("I fill my datas of register", (password) => {
    registerPage.fillName('Vitor');
    registerPage.fillEmail(email);
    registerPage.fillPassword('123456');
})

When("I click on register", () => {
    registerPage.doRegister();
})

Then("I see message {string} on register", (message) => {
    registerPage.checkErrorMessage(message);
})

Then("I see success message on register", (message) => {
    
})
