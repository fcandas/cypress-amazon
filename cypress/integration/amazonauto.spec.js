describe('Amazon Automation Test', () =>{

    it('(Open Amazon.com)', () => {
        cy.visit('/');
        cy.get('a[href="/ref=nav_logo"]').should('be.visible')
    });

    it('(Search thing)', () => {
        
        cy.get('input[id="twotabsearchtextbox"]').should('be.visible').type('Samsung')
        cy.get('input[id="nav-search-submit-button"]').should('be.visible').click()

    });
    
})