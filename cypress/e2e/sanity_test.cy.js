describe('The sanity test suite for accesstravel.com', () => {


const main_page_url = 'https://www.accesstravel.com/en-US/Home/Index'

  Cypress.on('uncaught:exception', (err, runnable) => {
    //returning false here prevents Cypress from
    //failing the test
    return false
  })

  it('navigate to main page', () => {
    cy.visit(main_page_url)
  })

  it('verify hotels tab of the page', () => {
    cy.visit(main_page_url)
    cy.get('[class="hotels"]').should("be.visible")
    cy.get('[class="hotels"]').click()
    cy.get('.sub-heading').should('be.visible')

  })


  it('verify guides tab of the page', () => {
    cy.visit(main_page_url)
    cy.get('[class="guides js-list-guides"]').should("be.visible")
    cy.get('[class="guides js-list-guides"]').click()
    cy.get('.col-lg-9 > .btn').should('be.visible')

  })


  it('verify tours tab of the page', () => {
    cy.visit(main_page_url)
    cy.get('[class="tours js-list-tours"]').should("be.visible")
    cy.get('[class="tours js-list-tours"]').click()
    cy.get('.guide-form').should('be.visible')

  })


  it('verify tours attraction list tab of the page', () => {
    cy.visit(main_page_url)
    cy.get('[class="tours attraction-link"]').should("be.visible")
    cy.get('[class="tours attraction-link"]').click()
    cy.get('.attractions-search__head-title').should('be.visible')

  })

  it('verify Login on main page', () => {
    cy.visit(main_page_url)
    cy.get('div.nav-access > [href="/en-US/Account/Login"]').should("be.visible")
    cy.get('div.nav-access > [href="/en-US/Account/Login"]').click()
    cy.get('.login-headline').should('be.visible')

  })

  it('verify Signup on main page', () => {
    cy.visit(main_page_url)
    cy.get('div.nav-access > [href="/en-US/Account/Register"]').should("be.visible")
    cy.get('div.nav-access > [href="/en-US/Account/Register"]').click()
    cy.get('.registration-headline').should('be.visible')

  })

})