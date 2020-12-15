

describe('My suite', ()=>
{
    it('NAvigation Tests', ()=>
    {

        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo store') // home

        cy.get('.ico-register').contains('Reg').click()
        cy.title().should('eq','nopCommerce demo store. Register') // Reg page

        cy.go('back') // вернуть назад стрелка
        cy.title().should('eq','nopCommerce demo store')// home

        cy.go('forward') // вернуть вперед стрелка
        cy.title().should('eq','nopCommerce demo store. Register')

        cy.go(-1)// back
        cy.title().should('eq','nopCommerce demo store')// home

        cy.go(1)// forward
        cy.title().should('eq','nopCommerce demo store. Register')// home

        cy.reload()

    }
    )

}
)