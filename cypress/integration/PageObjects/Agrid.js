
class Agrid 
{

    AgridCompanyApi()
    {
        cy.request('POST','https://demo.pharmahrm.com/test-etms-6.0/ru/etms/comparison',
        {"ids":[1085,1169,1175,1178,1181,1184,1187,1190,1193,1196,1199,1202,1205,1208,1211,1214,1217,1220,1223,1226,1229,1232,1235,1238,1241,1244,1247,1674]
        ,"direction":52,
        "version":126,
        "fields":["companyTypes","mssku","turnover"]
        }).then(function (response)
        { 
              
            const  companyTypesCnt = Object.values(response.body)[0].companyTypes[0].cnt
            cy.contains('.ag-row-position-absolute.ag-row-first > div:nth-child(5)',companyTypesCnt)
             
            
        })
    }

    AgridTurnoverApi()
    {
        cy.request('POST','https://demo.pharmahrm.com/test-etms-6.0/ru/etms/comparison',
        {"ids":[1085,1169,1175,1178,1181,1184,1187,1190,1193,1196,1199,1202,1205,1208,1211,1214,1217,1220,1223,1226,1229,1232,1235,1238,1241,1244,1247,1674]
        ,"direction":52,
        "version":126,
        "fields":["companyTypes","mssku","turnover"]
        }).then(function (response)
        {    
            const Turnover = Object.values(response.body)[0].turnover/ 1000000
            cy.contains('.ag-row-first > div:nth-child(6) > div > div.div-percent-value',Turnover)
        })
    
    }

    AgridMSSKUandColumns()
    {
        // Set Columns Agrid
        cy.get('[data-target="#configGridColumn"]').click()

        cy.get('#configGridColumn > .modal-dialog > .modal-content > .modal-body').should('be.visible')

        cy.get(':nth-child(1) > .node > .row-checkbox > .ng-pristine').uncheck()
        cy.get(':nth-child(4) > .node > .row-checkbox > .ng-pristine').check()
        cy.get(':nth-child(5) > tr > .row-checkbox > .ng-pristine ').uncheck()

        cy.get('#configGridColumn > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#loader > .modal-dialog').should('not.be.visible').wait(2000) 

        cy.get('.ag-row-first > div:nth-child(8)')
        .then((geoObject) =>
        {
           const  ValueMSSKU =geoObject[0].innerText
           const IntValueMSSKU = parseInt(ValueMSSKU,10)
          cy.get('.ag-row-first > div:nth-child(8)').should('contain',IntValueMSSKU)
        })
        cy.get('[data-target="#configGridColumn"]').click()

        cy.get('#configGridColumn > .modal-dialog > .modal-content > .modal-body').should('be.visible')

        cy.get(':nth-child(1) > .node > .row-checkbox > .ng-valid').check()
        cy.get(':nth-child(4) > .node > .row-checkbox > .ng-valid').uncheck()
        cy.get(':nth-child(5) > tr > .row-checkbox > .ng-valid').check()

        cy.get('#configGridColumn > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        
        cy.get('#loader > .modal-dialog').should('not.be.visible').wait(2000) 
        
    }

    AgridMSSKUandColumnsZero()
    {
        // Set Columns Agrid
        cy.get('[data-target="#configGridColumn"]').click()

        cy.get('#configGridColumn > .modal-dialog > .modal-content > .modal-body').should('be.visible')

        cy.get(':nth-child(1) > .node > .row-checkbox > .ng-valid').uncheck()
        cy.get(':nth-child(4) > .node > .row-checkbox > .ng-valid').check()
        cy.get(':nth-child(5) > tr > .row-checkbox > .ng-valid').uncheck()

        cy.get('#configGridColumn > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#loader > .modal-dialog').should('not.be.visible').wait(2000) 

        cy.get('.ag-row-first > div:nth-child(8)').should('contain',0)
          
        cy.get('[data-target="#configGridColumn"]').click()

        cy.get('#configGridColumn > .modal-dialog > .modal-content > .modal-body').should('be.visible')

        cy.get(':nth-child(1) > .node > .row-checkbox > .ng-valid').check()
        cy.get(':nth-child(4) > .node > .row-checkbox > .ng-valid').uncheck()
        cy.get(':nth-child(5) > tr > .row-checkbox > .ng-valid').check()

        cy.get('#configGridColumn > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        
        cy.get('#loader > .modal-dialog').should('not.be.visible').wait(2000) 
        
    }

    AgridTurnover()
    {
        
       

        cy.get('.ag-row-first > div:nth-child(6)')
        .then( (geoObject) =>
        {    
            const Turnover = geoObject[0].innerText
           
            cy.get('.ag-row-first > div:nth-child(6)').should('contain',Turnover)
        })
    
    }
    AgridTurnoverZero()
    {
        
        cy.get('.ag-row-first > div:nth-child(6)').should('contain',0)
    
    }

    AgridCompany()
    {
        cy.get('.ag-row-position-absolute.ag-row-first > div:nth-child(5)')
        .then((geoObject)=>
        {

            const CountCompany = geoObject[0].innerText
           
            cy.get('.ag-row-position-absolute.ag-row-first > div:nth-child(5)').should('contain',CountCompany)
        })

    }

    AgridCompanyZero()
    {

        cy.get('.ag-row-position-absolute.ag-row-first > div:nth-child(5)').should('contain',0)
    
    }
    
  



}

export default Agrid