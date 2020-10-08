
class  ButtonGeoForce
{
    applyButtonFO()
    {
        const buttoncontain = cy.contains('#filtersApplyCollapse > [type="submit"]','Применить') 
        const button = cy.get('#filtersApplyCollapse > [type="submit"]').click()
             
      
    }
    resetButtonFO()
    {
        const buttoncontain = cy.contains('#filtersApplyCollapse > .pull-right','Сбросить')
        const button = cy.get('#filtersApplyCollapse > .pull-right').click()
    }
    BrashButton()
    {
        const buttoncontain = cy.contains('[ui-sref="grid.brush"]','Кисть')
        const button = cy.get('[ui-sref="grid.brush"]').click()
    }
    BrashButtonDone ()
    {
        const buttoncontain = cy.contains('[ui-sref="grid"]','Done')
        const button = cy.get('[ui-sref="grid"]').click()
    }
    ButtonConfigPV ()
    {
        
        const button = cy.get('[ui-sref="layerConfig"]').click()
    }
    CheckboxConfigPV (check)
    {
       if(check === 1)
       {
            const checkbox = cy.get('[ng-model="layerConfig.layer.voronoi.enable"]').check() 
       }
       else if(check === 0)
       {
            const checkbox = cy.get('[ng-model="layerConfig.layer.voronoi.enable"]').uncheck()
       }
       else
       {
           if(check == null )
           {
            console.log(`Error variable CheckboxConfigPV , input 1 or 0`)
           }
           else
           {
            console.log(`Error variable CheckboxConfigPV ${check}, input 1 or 0`)
           }
           
       }
       
    }

}

export default ButtonGeoForce