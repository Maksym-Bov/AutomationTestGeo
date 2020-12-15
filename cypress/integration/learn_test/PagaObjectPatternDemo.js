

import loginPage from '../PageObjects/LoginPage'


describe('Test Suite', function()
{
    it('Valid Login Test', function()
    {
        cy.clearCookies()
        const login = new loginPage()
        login.visit()
        login.fillEmail('admin@yourstore.com')
        login.fillpassword('admin')
        login.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })
})