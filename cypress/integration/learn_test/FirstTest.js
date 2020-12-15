

describe('MyTestSuite', ()=> {



it('VerifyTitle', ()=>
    {  
        cy.visit('https://www.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
    })
it('VerifyTitle', ()=>
    {  
        cy.visit('https://www.nopcommerce.com/')
        cy.title().should('eq','nopCommerce  store')
    })


})