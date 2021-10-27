describe('Amazon Automation Test', () =>{

    it('(Open Amazon.com)', () => {
        cy.visit('https://www.amazon.com/');
        cy.get('a[href="/ref=nav_logo"]').should('be.visible')
    });
})