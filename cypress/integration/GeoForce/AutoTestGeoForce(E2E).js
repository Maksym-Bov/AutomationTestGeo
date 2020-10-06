

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
             }
        })

    })

    it('first load Etms',function  ()
    {
            //ожидание скрытия модального окна
        
        cy.get('#loader > .modal-dialog').should('not.be.visible')
    })
           
    it('Verification-hidefields-grid-layer-FY',() =>
    {
            // скрытие СТ , слои и ФО
        cy.get('#mainHeading').should('be.visible')
            .should('contain','Сводная таблица').click().click()

        cy.get('#layerHeading').should('be.visible')
            .should('contain','Слои').click().click()

        cy.get('#filtersHeading').should('be.visible')
            .should('contain','Фильтр организаций').click().click()
            
    })
     
    it('Select-region',function()  // выбор областей  ФО
    {
        cy.get('[for="filtersRegions"]').should('contain','Области')

        cy.get('[data-id=filtersRegions]').click()

        cy.get('.bs-container > .dropdown-menu.open > .bs-actionsbox > .btn-group > .bs-deselect-all').click().should('contain','Отменить все')
    
        if (this.data.country = "ua" )
        {
            cy.get('.bs-container > .dropdown-menu.open >').contains(this.data.KievRegion).click()

            cy.get('.bs-container > .dropdown-menu.open >').contains(this.data.KievCity).click()
                
            cy.get('.bs-container > .dropdown-menu.open >').contains(this.data.LvivRegion).click()
        }

        else if (this.data.country = "ru" )
        {
            cy.get('.bs-container > .dropdown-menu.open >').contains(this.data.MoscowCity).click()

            cy.get('.bs-container > .dropdown-menu.open >').contains(this.data.MoscowRegion).click()

            cy.get('.bs-container > .dropdown-menu.open >').contains(this.data.RostovRegion).click()
                
                
        }
            cy.get('[data-id=filtersRegions]').click()
            
    })

    it('Select-CompanyTypes',function() //выбор типов организаций ФО
    {
        cy.get('[ng-show="main.companyTypes.length"]').should('contain','Типы организаций')
        
        cy.get('[ng-show="main.companyTypes.length"] > label > .ng-scope').check().should('be.checked')
        
        cy.get(`[ng-show="main.filtersSelected.indexOf(\'companyTypes\') != -1"]`).click()
        cy.get('#bs-select-3-0 > .text').click()

        cy.get('#bs-select-3-1 > .text').click()

        cy.get('#bs-select-3-2 > .text').click()

        cy.get('#bs-select-3-3 > .text').click()

        cy.get('#bs-select-3-4 > .text').click()
        cy.get(`[ng-show="main.filtersSelected.indexOf(\'companyTypes\') != -1"]`).click()

        Button.applyButtonFO()
    })

    it('ZoomMap', function() // маштаб на карте организаций ФО 
    {
            
        cy.get('[ng-click="main.zoomToCompanies(); $event.stopPropagation();"]').should('be.visible').dblclick()
        cy.get('[data-original-title="Масштабировать по всем организациям"]').should('be.visible')
    })
    it('ButtonresetFO', ()=>
    {

        cy.get('#filtersApplyCollapse > .pull-right').click()
    })              

    it('Polygonbrush', ()=> 
    {
     
        Button.BrashButton()

        cy.get('svg > g > path:nth-child(2)')// полигон на карте 
        .click()

        Button.BrashButtonDone()
        cy.wait(30000)
          
    })

    it('Agrid CompanyCount', () =>
    {
        grid.AgridCompany()
    })

    it('Agrid Turnover', () =>
    {
        grid.AgridTurnover()

    }) 

   it('Agrid MSSKU', () =>
    {
        grid.AgridMSSKUandColumns()

    })

    it('PolygonErase', () =>
    {
        Button.BrashButton()

        cy.get('[ng-class="{active: !main.currentUser.id}"]').click()
        cy.get('svg > g > path:nth-child(2)') // полигон на карте 
        .click()

        Button.BrashButtonDone()
       
    })

    
    it('Agrid CompanyCount Zero', () =>
    {
        grid.AgridCompanyZero()
    })

    it('Agrid Turnover Zero', () =>
    {
        grid.AgridTurnoverZero()

    }) 

   it('Agrid MSSKU Zero', () =>
    {
        grid.AgridMSSKUandColumnsZero()
    
    })   







    it('Organization card', ()=>
    { 



    
    }) 

 
    
       
        
        


       
})
