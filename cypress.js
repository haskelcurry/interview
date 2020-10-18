it('should debug', () => {
  cy.visit('/my/page/path');

  cy.get('.selector-in-question');

  debugger;
});
