import { getGreeting } from '../support/app.po';

describe('customer-portal', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to customer-portal!');
  });
});
