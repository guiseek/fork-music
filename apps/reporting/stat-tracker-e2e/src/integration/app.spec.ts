import { getGreeting } from '../support/app.po';

describe('reporting-stat-tracker', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to reporting-stat-tracker!');
  });
});
