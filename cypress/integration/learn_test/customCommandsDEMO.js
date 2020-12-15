
describe('CustomSuite', function()
    {
        beforeEach(function ()
        {
            cy.fixture('test').then(function(data){
    
               this.data=data
            })
        })
        it('Login test',function()
            {
               
                cy.loginTest("admin@yourstore.com","admin")//valid
                cy.title().should('be.equal','Dashboard / nopCommerce administration')
                cy.clearCookies()

                cy.loginTest("admin@yourstore.com","admin12")//in valid
                cy.title().should('not.be.equal','Dashboard / nopCommerce administration')
                cy.clearCookies()

                cy.loginTest("qadmin@yourstore.com","admin")//valid
                cy.title().should('not.be.equal','Dashboard / nopCommerce administration')
                cy.clearCookies()

            })
            it('Add customer',function()
            {
               //Login script
             
                cy.visit('https://admin-demo.nopcommerce.com/login')
                cy.get('#Email').clear()
                cy.get('#Email').type(this.data.email)
                cy.get('input[value =admin]').clear()
                cy.get('input[value =admin]').type(this.data.password)
                cy.get('input[type=submit]').click()// sing in

                //Script  for Adding new customer
                cy.log('Adding customer............')
        
            })  
            it('Edit customer ',function()
            {
               
                cy.visit('https://admin-demo.nopcommerce.com/login')
                cy.get('#Email').clear()
                cy.get('#Email').type(this.data.email)
                cy.get('input[value =admin]').clear()
                cy.get('input[value =admin]').type(this.data.password)
                cy.get('input[type=submit]').click()// sing in
               
                //Script  for Editing new customer
                cy.log('Editing customer............')
            })        
            
    })