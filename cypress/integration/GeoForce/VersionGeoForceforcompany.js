
import LoginPagePharma from '../PageObjects/LoginPharmaHRM'

import ButtonGeoForce from '../PageObjects/ButtonGeoForce'

import Agrid from '../PageObjects/Agrid'


describe('TestcaseSearch',function()
{

    let Urlcompany = [
    'https://arterium-ua.pharmahrm.com/',
    'http://bausch.pharmahrm.com/',
    'https://drreddys.pharmahrm.com/',
    'http://drreddyskz.pharmahrm.com/',
    'https://esparma.pharmahrm.com/',
    'https://pharmstd.pharmahrm.ru/',
    'https://sandoz.pharmahrm.com/',
    'https://sanofi.pharmahrm.com/',
    'http://yuriapharm.pharmahrm.com/',
    'http://avexima.pharmahrm.ru/',
    'https://etms-bayer.pharmahrm.com/',
    'https://unipharmru.pharmahrm.com/',
    'https://sa-etms.pharmahrm.com/',
    'https://etms-teva.pharmahrm.com/',
    'https://gskru.pharmahrm.com/',
    'https://demouz.pharmahrm.com/',
    'http://etmsdev.pharmahrm.com/',
    'https://acino.pharmahrm.com/',
    'http://astrazeneca.pharmahrm.com/',
    'http://mckpharma.pharmahrm.com/',
    'https://kusum.pharmahrm.com/',
    'http://biocodex.pharmahrm.com/',
    'https://krkaby.pharmahrm.com/',
    'http://pfizer.pharmahrm.com/',
    'https://abbottua.pharmahrm.com/',
    'https://recordati.pharmahrm.com/',
    'https://egisua.pharmahrm.com/',
    'https://kusumPH.pharmahrm.com/',
    'https://grandmedical.pharmahrm.com/',
    'https://pfizerru.pharmahrm.com/',
    'http://johnsonua.pharmahrm.com/',
    'https://gsk.pharmahrm.com/',
    'https://drreddysby.pharmahrm.com/',
    'http://astellasua.pharmahrm.com/',
    'http://adamed.pharmahrm.com/',
    'https://demoru.pharmahrm.com/',
    'https://alvogen.pharmahrm.com/',
    'https://deltamedical.pharmahrm.com/',
    'https://acinoru.pharmahrm.com/',
    'https://bionorica.pharmahrm.com/',
    'https://alkaloid-crm.pharmahrm.com/',
    'https://egisru.pharmahrm.com/',
    'https://alkaloid.pharmahrm.com/',
    'https://medochemie.pharmahrm.com/',
    'http://sperco.pharmahrm.com/',
    'https://krka.pharmahrm.com/',
    'https://xantisru.pharmahrm.com/',
    'https://servierua.pharmahrm.com/',
    'https://perrigo.pharmahrm.com/',
    'https://movihealth.pharmahrm.com/',
    'https://egis.pharmahrm.com/',
    'https://gedeon.pharmahrm.com/',
    'https://boehringer.pharmahrm.com/',
    'https://etms.pharmahrm.com/',
    'https://stada.pharmahrm.com/',
    'https://etmsru.pharmahrm.com/',
    'https://etmskz.pharmahrm.com/'
    ];
    
    beforeEach(function ()
    {
        cy.fixture('options-testGeoForce').then(function(data)
        {
           this.data=data
        })
    })   



    for(let i=0;i < Urlcompany.length;i++ )
    {

    it('Version  ' + Urlcompany[i], function()
        {
         
            let Apiurl = Urlcompany[i]
           // console.log(Apiurl)
            cy.request({
               method:'GET',
               url: Apiurl + 'etms/api/version',
               headers:{
   
                   Authorization:this.data.ApiAuthorization
               }
              
               
               }).should((response) =>
                   {
                       expect(response.status).to.eq(200)
                       let version =  Object.values(response)[0].version
                      console.log(`${Apiurl}    ${version} `)
                       
                   }) 

         

        })
    }
        
})