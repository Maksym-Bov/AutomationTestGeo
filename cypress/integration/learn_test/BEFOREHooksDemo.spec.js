
describe('MyTestsuit', ()=>
    {

        before(() => {
            
            cy.log(' ******** This is SETUP block *******')
            
            // runs once before all tests in the block
          })
          after(() => {
            cy.log(' ******** This is TEAR DOWN block *******')
            // runs once after all tests in the block
          })

        
          beforeEach(() => {
            cy.log(' ******** This is LOGIN block *******')
            // runs before each test in the block
          })
        
          afterEach(() => {
            cy.log(' ******** This is LOGOUT block *******')
            // runs after each test in the block
          })
        


        it('searching', ()=>
            {
                cy.log('******** This is Searching Test ********')

            }
            )
            
        it('advanced searching', ()=>
        {
            cy.log('***** This is Searching Test ********')

        }
        )
        
        it('listing Products', ()=>
            {
                cy.log('***** This is Searching Test ********')

            }
            )
    }
    )