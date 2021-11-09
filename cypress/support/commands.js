
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goToPage', () => {

    cy.visit('/');
    cy.get('a[href="/ref=nav_logo"]').should('be.visible')
})

Cypress.Commands.add('searchThing', () => {

    cy.get('input[id="twotabsearchtextbox"]').should('be.visible').type('Samsung')
    cy.get('input[id="nav-search-submit-button"]').should('be.visible').click()

})


Cypress.Commands.add('featuredListing', () => {

    cy.get('span[id="a-autoid-0-announce"]').should('be.visible').click()
    cy.get('a[id="s-result-sort-select_1"]').should('be.visible').click()
})

Cypress.Commands.add('clickHMbutton', () => {

    cy.get('i[class="hm-icon nav-sprite"]').should('be.visible').click()

})

Cypress.Commands.add('clickX', () => {

    cy.get('div[class="nav-sprite hmenu-close-icon"]').should('be.visible').click()

})

Cypress.Commands.add('GotoMainpage', () => {

    cy.get('a[id="nav-logo-sprites"]').should('be.visible').click()

})

Cypress.Commands.add('changeLang', () => {

    cy.get('[id="icp-nav-flyout"]').should('be.visible').click()
    
    cy.get('i[class="a-icon a-icon-radio"]').contains('Español - ES').click()

})








