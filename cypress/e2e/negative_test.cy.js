describe('Negative tests: invalid dates will trigger an error', () => {


    const hotel_list_page_url = 'https://www.accesstravel.com/en-US/Hotel/List'


    Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
        //failing the test
        return false
    })

    it('Navigate to hotel page', () => {
        cy.visit(hotel_list_page_url)
    })

    it('Choose London as destination ', () => {
        cy.visit(hotel_list_page_url)
        cy.get('#Filter_DestinationId').clear
        cy.get('#Filter_DestinationId').select('London', { force: true })
    })

    it('Choosing a invalid number of date - 2022-05-13 will trigger an error  ', () => {
        cy.get('[name="Filter.CheckIn"]').should('be.visible')
        cy.get('[name="Filter.CheckIn"]').clear().type('2022-05-13').should('have.value', '2022-05-13', { force: true })
        cy.get('[name="Filter.CheckOut"]').clear().type('2022-05-16').should('have.value', '2022-05-16', { force: true })
        cy.get('.form-centered > .btn').click()
        cy.get('[class="field-validation-error"]').should('be.visible')
    })

    it('Adults-invalid number will trigger an error  ', () => {
        cy.visit(hotel_list_page_url)
        cy.get('#Filter_DestinationId').select('Jerusalem',{force:true})
        cy.get('[name="Filter.CheckIn"]').clear().type('2023-05-13').should('have.value', '2023-05-13', { force: true })
        cy.get('[name="Filter.CheckOut"]').clear().type('2023-05-20').should('have.value', '2023-05-20', { force: true })
        cy.get('#Filter_AdultNum').should('be.visible')
        cy.get('#Filter_AdultNum').clear().type('0').should('have.value', '0', { force: true })
        cy.get('.form-centered > .btn').click()
        cy.get('[class="field-validation-error"]').should('be.visible')
    })

    it('Children-invalid number will trigger an error  ', () => {
        cy.visit(hotel_list_page_url)
        cy.get('#Filter_DestinationId').select('Jerusalem',{force:true})
        cy.get('[name="Filter.CheckIn"]').clear().type('2023-05-13').should('have.value', '2023-05-13', { force: true })
        cy.get('[name="Filter.CheckOut"]').clear().type('2023-05-20').should('have.value', '2023-05-20', { force: true })
        cy.get('#Filter_ChildrenNum').clear().type('10').should('have.value','10',{force:true})
        cy.get('.hotels-wrap').click()
                
        cy.get('.form-centered > .btn').click()
        cy.get('[class="field-validation-error"]').should('be.visible')
    })

})