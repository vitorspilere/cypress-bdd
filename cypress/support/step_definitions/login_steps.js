// 2 - transformar o gherkin em método/ação
/// <reference types="cypress" />

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../pages/homePage';
import loginPage from '../pages/loginPage';

const email = 'teste@teste.com';

Given("I am on login screen", () => {
    homePage.accessLogin();
})

Given("I fill email", () => {
    loginPage.fillEmail(email);
})

Given("I fill my credencials", () => {
    loginPage.fillEmail(email);
    loginPage.fillPassword('123456');
})

When("I click on Login", () => {
    loginPage.doLogin();
})

Then("I see the message {string}", (message) => {
    loginPage.checkErrorMessage(message);
})

Then("I see success message", () => {
    loginPage.checkSuccessMessage(email);
})