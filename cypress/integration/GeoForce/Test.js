
import LoginPagePharma from '../PageObjects/LoginPharmaHRM'

import ButtonGeoForce from '../PageObjects/ButtonGeoForce'

import Agrid from '../PageObjects/Agrid'

describe('TestcaseSearch',function()
{

    const Button = new ButtonGeoForce ()
    const login = new LoginPagePharma ()
    const grid = new Agrid ()
    beforeEach(function ()
    {
        cy.fixture('options-testGeoForce').then(function(data)
        {
           this.data=data
        })
    })   


    it('Login', function()
    {
        
        login.visit(this.data.url)
        cy.title().then(function (tit)   // проверка или геофорсе или велком
        {
             if(tit =='Приветствуем в PharmaHRM' || tit == 'Welcome to PharmaHRM')
             {
                 login.service(this.data.service)
             
                 
             }
             else if(tit =='Welcome!')
             {
                login.email(this.data.email)
                login.password(this.data.password)
                login.submit()
               // login.service(this.data.service)

             }
             else
             {
             
             }
        })

    })
    it('first load Etms',function  ()
    {
            //ожидание скрытия модального окна
        cy.get('#loader > .modal-dialog').should('be.visible')   

        cy.get('#loader > .modal-dialog').should('not.be.visible').wait(10000)
        
        
    })



    it('test turnover', ()=>
    {
      grid.AgridTurnover()
      
    })

    
    it('test turnover1', ()=>
    {
       
    })

    

})    