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

    
    
})