

describe('Suite Name', ()=>
    {
        it('Hobbies check boxes', ()=>
        {

            cy.visit("http://demo.automationtesting.in/Register.html")

            cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')//чек боксы по контенту value  по id 
            cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
            cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

            cy.get('#checkbox1').uncheck().should('not.be.checked')
            cy.get('#checkbox2').uncheck().should('not.be.checked')
            cy.get('#checkbox3').uncheck().should('not.be.checked')

            cy.get('input[type=checkbox]').check(['Cricket','Hockey'])/// чек боксы по контенту value по всем чекбоксам 

        }
        )

        it('Skills Drop Down', ()=>
        {

            cy.get('#Skills').select('Android').should('have.value','Android')


        }
        )
        
        it('Languages Multi Select', ()=>
        {

            cy.get('#msdd').click()
            cy.get('.ui-corner-all').contains('English').click()
            cy.get('.ui-corner-all').contains('Japanese').click()


        }
        )

        it('Select countries searchable drop down', ()=>
        {

            cy.get('[role=combobox]').click({force: true}) // Принудительный щелчок независимо от его активного состояния
            cy.get('.select2-search__field').type('Ind')// поиск в выпадаещем списке  и ввод текста
            cy.get('.select2-search__field').type('{enter}') // нажатие ентер на клавиатуре

         
            

        }
        )
    }
    )