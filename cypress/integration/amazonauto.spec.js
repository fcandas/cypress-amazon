describe('Amazon Automation Test', () =>{

    it('Go To Amazon.com', () => {

       cy.goToPage();

    });

    it('Search thing', () => {
        
        cy.searchThing();

    });

    it('Featured listing', () => {

        cy.featuredListing();

    });

    it('Click hamburger button', () => {

        cy.clickHMbutton();

    });

    it('Click X', () => {

        cy.clickX();

    });

    
    
})