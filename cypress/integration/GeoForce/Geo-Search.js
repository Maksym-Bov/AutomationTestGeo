

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
            cy.get('[ng-click="main.zoomMap.in()"]').should('be.visible').dblclick()
            cy.get('[data-original-title="Масштабировать по всем организациям"]').should('be.visible')
        })          


    it('Polygonbrush', ()=> 
    {
     
        Button.BrashButton()

        cy.get('svg > g > path:nth-child(2)')// полигон на карте 
        .click()

        Button.BrashButtonDone().wait(2000)
        cy.get('[ng-show="grid.morionLoading"]').should('not.be.visiable')
        grid.AgridTurnover()


        

    })   
    it('PolygonErase', () =>
    {
        Button.BrashButton()

        cy.get('[ng-class="{active: !main.currentUser.id}"]').click()
        cy.get('svg > g > path:nth-child(2)') // полигон на карте 
        .click()

        Button.BrashButtonDone()
       

    })    


   



    it('Organization card', ()=>
    { 



    
    }) 

      /*  it('PolygonVoronogo', ()=>
    { 
        cy.get('[ui-sref="layerConfig"]').click().wait(2000)
        cy.get('[ng-model="layerConfig.layer.voronoi.enable"]').click().should('be.checked')
        cy.get('[data-id="voronoiLayerCompanyTypes"]').click()
        cy.get('#bs-select-13-1').click()
        cy.get('[data-id="voronoiLayerCompanyTypes"]').click()
        cy.get('[data-id="voronoiLayerPolygons"]').click()
        cy.get('.bs-container > .dropdown-menu.open > .bs-actionsbox > .btn-group > .bs-deselect-all').click()
        cy.get('#bs-select-15-9').click()
        cy.get('[data-id="voronoiLayerPolygons"]').click()
        cy.get('[ng-disabled="!layerForm.$valid"]').click()
        cy.get('#loader > .modal-dialog').should('not.be.visible')
        cy.get('[ng-click="layerConfig.layer.save();"]').click().wait(5000)
        //cy.get('#loader > .modal-dialog').should('not.be.visible')
        cy.get('[ng-click="dialog.deferred.resolve()"]').click()
        cy.get('#loader > .modal-dialog').should('not.be.visible')

        






    
    })    */
    
       
        
        


       
})
