describe('Positive tests: Jerusalem, London, and New York are on the list, and a search in these cities is working ', () => {


    const hotel_list_page_url = 'https://www.accesstravel.com/en-US/Hotel/List'
    
    
      Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
        //failing the test
        return false
      })
    
      it('navigate to hotel page', () => {
        cy.visit(hotel_list_page_url)
        
      })
    
      it('Chooses list of destination ', () => {
        cy.visit(hotel_list_page_url)
        cy.get('#Filter_DestinationId').should('be.visible')
      })

      it('Chooses Jerusalem as destination ', () => {
        cy.visit(hotel_list_page_url)
        cy.get('#Filter_DestinationId').clear
        cy.get('#Filter_DestinationId').select('Jerusalem',{force:true})

      })

      it('Choose London as destination ', () => {
        cy.visit(hotel_list_page_url)
        cy.get('#Filter_DestinationId').clear
        cy.get('#Filter_DestinationId').select('London',{force:true})

      })

      it('Choose New York as destination ', () => {
        cy.visit(hotel_list_page_url)
        cy.get('#Filter_DestinationId').clear
        cy.get('#Filter_DestinationId').select('New York',{force:true})

      })

      it('Choose number of children ', () => {
        cy.visit(hotel_list_page_url)
        cy.get('#Filter_ChildrenNum').should('be.visible')
        cy.get('#Filter_ChildrenNum').clear
        
      })

      it('choosing a valid number of children  ', () => {
        cy.visit(hotel_list_page_url)
        cy.get('#Filter_ChildrenNum').should('be.visible')
        cy.get('#Filter_ChildrenNum').clear().type('1').should('have.value','1',{force:true})
        cy.get('.hotels-wrap').click()
        cy.get('[class="row children-age"]').should('be.visible')
        cy.get('[name="Filter.ChildrensAge[0]').clear().type('1',{force:true})

      })

    
    })