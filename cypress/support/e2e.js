// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import 'cypress-mochawesome-reporter/register';
import './commands';
Cypress.on('uncaught:exception', (err) => {
  // Ignora erros de chunk do webpack
  if (err.message && err.message.includes('Loading chunk')) {
    return false;
  }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')