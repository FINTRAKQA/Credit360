///<reference types = "cypress" />
describe('Access Bank Credit 360', () => {
    it('Navigate to URL', () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/en/#/auth/login')
    })

    it('Ensure user can Login', () => {
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('ibikunlew')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(7000)
    })

    it('Credit Appraisal', () => {
        cy.get(':nth-child(3) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-8 > span.ng-tns-c3-8').click()
        cy.get(':nth-child(2) > .ripplelink > .ng-tns-c3-9').click()
        cy.wait(300000)
        cy.get('#searchString').type('1306247850638') //Search Loan Application via ref
        cy.get('.panel > .pull-right > :nth-child(2)').click() //Search
        cy.wait(70000)
        cy.get('.ui-radiobutton-box').click()
        cy.get('p-tabview[_ngcontent-c5=""] > :nth-child(1) > :nth-child(1) > :nth-child(3) > a > .ui-tabview-title').click()
    })

    it('Accept', () => {
        //cy.get('p-tabview[_ngcontent-c5=""] > :nth-child(1) > :nth-child(1) > :nth-child(3) > a > .ui-tabview-title').click()
        cy.get('.panel-body > .btn-success').click()
        cy.get('.col-md-5 > .panel-body > .form-horizontal > .form-group > :nth-child(2) > #comment').type('Almost there')
        cy.get('#vote').select('Accept').should('be.visible', 'Accept')
        cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(100000)
        cy.get('.swal2-confirm').click()
        cy.wait(250000)
        cy.screenshot()
        cy.get('.swal2-confirm').click()
        cy.wait(50000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click() //Logout
    })
})