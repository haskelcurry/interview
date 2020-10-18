it('let me debug like a fiend', () => {
  cy.visit('/my/page/path');

  cy.get('.selector-in-question');

  debugger;
});
