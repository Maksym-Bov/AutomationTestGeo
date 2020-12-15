
describe('MyTestSuite', function(){


    before(function ()
    {
        cy.fixture('test').then(function(data){

           this.data=data
        })
    })
    it('FixturesDemoTest', function()
        {

            cy.visit('https://admin-demo.nopcommerce.com/login')
            cy.get('#Email').clear()
            cy.get('#Email').type(this.data.email)
            cy.get('input[value =admin]').clear()
            cy.get('input[value =admin]').type(this.data.password)
            cy.get('input[type=submit]').click()// sing in


        })
})