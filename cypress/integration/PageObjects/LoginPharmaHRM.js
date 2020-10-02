

class LoginPagePharma
{
    visit(value)
    {
       const Url = cy.visit(value)
    }
    email(value)
    {
        const field = cy.get('#username')
        field.type(value)
        return this
    }
    password(value)
    {
        const field = cy.get('#password')
        field.type(value)
        return this
    }
    submit()
    {
        const button = cy.get('[type=submit]')
        button.click()
    }
    service(value)
    {
        const service = cy.get(`a[href*="${value}"]`)
        service.click()
    }
}

export default  LoginPagePharma



