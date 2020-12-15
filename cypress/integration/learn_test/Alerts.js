
describe('MyTestSuite', ()=> {///https://www.youtube.com/watch?v=yzfp85bVUjY



    it('Alerts', ()=>
        {  

           cy.visit('https://mail.rediff.com/cgi-bin/login.cgi')

           cy.get('input[type=submit]').click()

           cy.on('window:alert',(str) => 
           {
               expect(str).to.equal('Please enter a valid user name')
           }
           )

        }
        )
    })