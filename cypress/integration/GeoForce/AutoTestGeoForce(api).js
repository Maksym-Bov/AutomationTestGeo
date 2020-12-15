
import LoginPagePharma from '../PageObjects/LoginPharmaHRM'

import ButtonGeoForce from '../PageObjects/ButtonGeoForce'

import Agrid from '../PageObjects/Agrid'


describe('TestcaseSearch',function()
{

    beforeEach(function ()
    {
        cy.fixture('options-testGeoForce').then(function(data)
        {
           this.data=data
        })
    })   
    
    let p = 0;
    let direction =0;
    let CompanyMorionId =0;

    it('Version-api', function()
    {
         
         cy.request(
        {
            method:'GET',
            url:this.data.ApiUrl + 'etms/api/version',
            headers:
            {
                Authorization:this.data.ApiAuthorization
            }
        }).should((response) =>
            {
                if (Object.keys(Object.values(response)[0]).length == 0) 
                {
                    expect(response.status).to.eq('пустой обьект')
                }
                expect(response.status).to.eq(200)
            }) 
    })

    it('Polygons2-api', function()  
    {

        cy.request(
        {
            method:'GET',
            url:this.data.ApiUrl + 'etms/api/polygons2',
            headers:
            {
                Authorization:this.data.ApiAuthorization
            }     
        }).should((response) =>
            {
                if (Object.keys(Object.values(response)[0]).length == 0) 
                { 
                    expect(response.status).to.eq('пустой обьект')
                }
                expect(response.status).to.eq(200)
                direction = (Object.values(response)[0][0].direction_id);
                p = (Object.values(response)[0][0].polygon_id) 
            }) 
    })
    
    it('Polygons2BU-api', function() 
    {
            
        cy.request(
        {
            method:'GET',
            url:this.data.ApiUrl + 'etms/api/polygons2?bu='+direction,
            headers:
            {
                Authorization:this.data.ApiAuthorization
            }      
         }).should((response) =>
            {
                if (Object.keys(Object.values(response)[0]).length == 0) 
                { 
                    expect(response.status).to.eq('пустой обьект')
                }
                expect(response.status).to.eq(200)
                let direction = (Object.values(response)[0][0].direction_id);
                expect(direction).to.eq(this.data.Direction_Id)                                                         
            }) 
    })

    it('Users-api', function() 
    {
            
        cy.request(
        {
            method:'GET',
            url:this.data.ApiUrl + 'etms/api/users',
            headers:
            {
                Authorization:this.data.ApiAuthorization
            }     
        }).should((response) =>
            {     
                if (Object.keys(Object.values(response)[0]).length == 0) 
                { 
                    expect(response.status).to.eq('пустой обьект')
                }
                expect(response.status).to.eq(200)
            }) 
    })
     
    it('Polygon-api', function() 
    {
        
        cy.request(
        {
            method:'GET',
            url:this.data.ApiUrl + 'etms/api/polygon/' + p,
            headers:
            {
                Authorization:this.data.ApiAuthorization
            }
        }).should((response) =>
            {     
                if (Object.keys(Object.values(response)[0]).length == 0) 
                { 
                    expect(response.status).to.eq('пустой обьект')
                }
                expect(response.status).to.eq(200)
            }) 
    })

    it('Tasks-api', function() 
    {
        
            let today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth()+1;
            if(month == 1 || month == 2 || month == 3 )
            {
                month = month + 12
            }
            month = month - 3;
            let date = `${year}-${month}`;
    
        cy.request(
        {
            method:'GET',
            url:this.data.ApiUrl + 'etms/api/tasks?date=' + date,
            headers:
            {
                Authorization:this.data.ApiAuthorization
            }
        }).should((response) =>
            {     
                if (Object.keys(Object.values(response)[0]).length == 0) 
                { 
                    expect(response.status).to.eq('пустой обьект')
                }
                expect(response.status).to.eq(200)
                CompanyMorionId = (Object.values(response)[0][0].morionid)

            }) 
    })
         
    it('CompanyInfo-api', function() 
    {
        
        cy.request(
        {
            method:'GET',
            url:this.data.ApiUrl + 'etms/api/companyInfo/' + CompanyMorionId,
            headers:
            {
                Authorization:this.data.ApiAuthorization
            }
        }).should((response) =>
            {     
                if (Object.keys(Object.values(response)[0]).length == 0) 
                { 
                    expect(response.status).to.eq('пустой обьект')
                }
                expect(response.status).to.eq(200)
               
            }) 
    })

    it('CompanyCategories-api', function() 
    {
        
        cy.request(
        {
            method:'GET',
            url:this.data.ApiUrl + 'etms/api/cats',
            headers:
            {
                Authorization:this.data.ApiAuthorization
            }
        }).should((response) =>
            {     
                if (Object.keys(Object.values(response)[0]).length == 0) 
                { 
                    expect(response.status).to.eq('пустой обьект')
                }
                expect(response.status).to.eq(200)
               
            }) 
    })

    it('UsersCompany-api', function() 
    {
        
        cy.request(
        {
            method:'GET',
            url:this.data.ApiUrl + 'etms/api/UsersInOrgs',
            headers:
            {
                Authorization:this.data.ApiAuthorization
            }
        }).should((response) =>
            {     
                if (Object.keys(Object.values(response)[0]).length == 0) 
                { 
                    expect(response.status).to.eq('пустой обьект')
                }
                expect(response.status).to.eq(200)
               
            }) 
    })

    





        



        





})     


