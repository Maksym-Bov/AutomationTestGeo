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
       
        cy.get('#loader > .modal-dialog').should('be.visible')    
        cy.get('#loader > .modal-dialog').should('not.be.visible')

    })
    it('Verefication layer Regions', ()=>
    {
      
        
       Button.ButtonConfigPV()
       cy.get('#layers').select('Области')
       cy.get('[form="layerForm"]').click()
       cy.get('#loader').should('not.be.visible').wait(2000)
       cy.contains('[ng-click="layerConfig.layer.save();"]','Сохранить')
       cy.get('[ng-click="layerConfig.layer.save();"]').click()
       

        
    })

    /*it('Polygon-voronogo-see', function()
    {
        Button.ButtonConfigPV()
        cy.contains('[class="panel-title ng-binding"]','Параметры рисования')
        cy.contains('div.filter-item > .ng-binding','Гео деление')
        cy.contains('#layerForm > label > span','Делить по точкам')
        Button.CheckboxConfigPV (1)
        cy.contains('#layerForm > div.ng-scope > div:nth-child(2) > label','Типы организаций')
        cy.get('#layerForm > div.ng-scope > div:nth-child(2)').click()
        cy.get('.bs-container.dropdown.bootstrap-select.show-tick.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required.bs3.open').contains(this.data.Pharmacy).click()
        cy.get('#layerForm > div.ng-scope > div:nth-child(2)').click()
        cy.contains('#layerForm > div.ng-scope > div:nth-child(4) > label','Полигоны')
        cy.get('[data-id="voronoiLayerPolygons"]').click()
        cy.get('.bs-container > .dropdown-menu.open > .bs-actionsbox > .btn-group > .bs-deselect-all')
        .click()
        if (this.data.country === "ua" ) 
        {
            cy.get('.bs-container.dropdown.bootstrap-select.show-tick.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required.bs3.open')
            .contains(this.data.ZhytomyrRegion).click()
        }
        else if (this.data.country === "ru" ) 
        {
            cy.get('.bs-container.dropdown.bootstrap-select.show-tick.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required.bs3.open')
            .contains(this.data.MoscowCity).click()
        }
        cy.get('[data-id="voronoiLayerPolygons"]').click()
        cy.contain('[form="layerForm"]','Показать')
        cy.get('[form="layerForm"]').click()
        cy.get('#loader').should('not.be.visible').wait(2000)
        cy.contains('#layerConfig_body > div > button:nth-child(1)','Отменить')
        cy.get('#layerConfig_body > div > button:nth-child(1)').click()


    })

    it('Polygon-voronogo-save', function()
    {   

        Button.ButtonConfigPV()
        cy.contains('[class="panel-title ng-binding"]','Параметры рисования')
        cy.contains('div.filter-item > .ng-binding','Гео деление')
        cy.contains('#layerForm > label > span','Делить по точкам')
        Button.CheckboxConfigPV (1)
        cy.contains('#layerForm > div.ng-scope > div:nth-child(2) > label','Типы организаций')
        cy.get('#layerForm > div.ng-scope > div:nth-child(2)').click()
        cy.get('.bs-container.dropdown.bootstrap-select.show-tick.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required.bs3.open')
        .contains(this.data.Pharmacy).click()
        cy.get('#layerForm > div.ng-scope > div:nth-child(2)').click()
        cy.contains('#layerForm > div.ng-scope > div:nth-child(4) > label','Полигоны')
        cy.get('[data-id="voronoiLayerPolygons"]').click()
        //cy.get('[ng-show="layerConfig.limitPolygons.length && !layerConfig.limitPolygonsLoading"] > .dropdown > .dropdown-toggle > .filter-option').click()
        cy.get('.bs-container > .dropdown-menu.open > .bs-actionsbox > .btn-group > .bs-deselect-all')
        .click()
     
        if (this.data.country === "ua" ) 
        {
            cy.get('.bs-container.dropdown.bootstrap-select.show-tick.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required.bs3.open')
            .contains(this.data.ZhytomyrRegion).click()
        }
        else if (this.data.country === "ru" ) 
        {
            cy.get('.bs-container.dropdown.bootstrap-select.show-tick.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required.bs3.open')
            .contains(this.data.MoscowCity).click()
        }
        cy.get('[data-id="voronoiLayerPolygons"]').click()
        cy.get('[form="layerForm"]').click()
        cy.get('#loader').should('not.be.visible').wait(2000)
        cy.contain('[ng-click="layerConfig.layer.save();"]','Сохранить')
        cy.get('[ng-click="layerConfig.layer.save();"]').click()
        cy.get('#loader').should('not.be.visible').wait(120000)
        cy.get('.progress-message').should('be.visible')    

        
    })
*/

})