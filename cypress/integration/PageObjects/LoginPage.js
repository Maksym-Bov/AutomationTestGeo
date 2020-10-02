

class LoginPage
{
    

    visit()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }

    fillEmail(value)
    {
        const field =cy.get('#Email')
        field.clear()
        field.type(value) 
        return this
    }


    fillpassword(value)
    {
        const field =cy.get('input[value =admin]')
        field.clear()
        field.type(value) 
        return this
    }

    submit()
    {

        const button = cy.get('input[type=submit]')
        button.click()
    }

}

export default  LoginPage

