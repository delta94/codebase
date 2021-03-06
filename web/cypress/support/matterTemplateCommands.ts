Cypress.Commands.add('createMatterTemplate', (matterTemplateName) => {
  cy.loginAsAdminUser().then(() => {
    cy.visit('/portal/admin/matter-templates');

    cy.wait(1000);

    cy.contains('Create Matter Template').click();

    cy.wait(1000);

    cy.get('[data-testid="create-matter-template-form"]')
      .should('exist');

    cy
      .get('[data-testid="matter-template-form-name"]')
      .type(matterTemplateName);

    cy.get(
      '[data-testid="matter-template-form-javascript-module"]'
    ).type(matterTemplateName);

    cy.get('.react-select-category__control')
      .click()
      .get('.react-select-category__menu')
      .find('.react-select-category__option')
      .first()
      .click();


    cy
      .get('[data-testid="create-matter-template-form-submit"]')
      .click();

    cy.get('[data-testid="create-matter-template-form"]')
      .should('not.exist');

    cy.get('[data-testid="create-matter-template-form"]')
      .should('not.exist');
  });
});

Cypress.Commands.add('deleteMatterTemplate', (matterTemplateName) => {
  cy.loginAsAdminUser().then(() => {
    cy.visit('/portal/admin/matter-templates');

    cy.wait(1000);

    cy.get('[data-testid="matter-template-table"]')
      .within(() => {
        cy.contains(matterTemplateName).click({ force: true });
      });

    cy.get('[data-testid="update-matter-template-form"]')
      .should('exist');

    cy.get('[data-testid="matter-template-form-name"]').invoke('val')
      .should('eq', matterTemplateName);

    cy.get('[data-testid="delete-matter-template-button"]').click();

    cy.get('[data-testid="update-matter-template-form"]')
      .should('not.exist');
  });
});
