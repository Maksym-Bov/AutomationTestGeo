let nameTitle = 'Welcome!';
let url = 'https://demo.pharmahrm.com/test-etms-6.0/ru/etms';
let username ='sergey';
let user_id = '1085'
let password = 'proxima';



Cypress.Commands.add("Login", () =>{

    cy.visit(url)
    cy.title().should('eq',nameTitle)
    cy.get('#username')
    .type(username).should('have.value',username)
    cy.get('#password')
    .type(password).should('have.value',password)
    cy.get('.btn').click()
})


Cypress.Commands.add("loginTest", (email,password) =>{

    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('#Email').clear()
    cy.get('#Email').type(email)
    cy.get('input[value =admin]').clear()
    cy.get('input[value =admin]').type(password)
    cy.get('input[type=submit]').click()
})