describe('Amazon Automation Test', () =>{

    it('(Open Amazon.com)', () => {
        cy.visit('/');
        cy.get('a[href="/ref=nav_logo"]').should('be.visible')
    });

    it('(Search thing)', () => {
        
        cy.get('input[id="twotabsearchtextbox"]').should('be.visible').type('Samsung')
        cy.get('input[id="nav-search-submit-button"]').should('be.visible').click()

    });

    it('Featured listing', () => {

        
        cy.get('span[id="a-autoid-0-announce"]').should('be.visible').click()
        cy.get('a[id="s-result-sort-select_1"]').should('be.visible').click()

    });

    
    
})