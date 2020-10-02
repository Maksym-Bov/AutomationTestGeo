
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

}

export default ButtonGeoForce