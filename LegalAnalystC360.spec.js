///<reference types = "cypress" />
describe('Access Bank Credit 360', () => {
    it('Navigate to URL', () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/en/#/auth/login')
    })

    it('Ensure user can Login', () => {
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('oladipof')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(7000)
    })

    it('Generate Offer letter', () => {
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-11 > span.ng-tns-c3-11').click()
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c3-12').click()
        cy.wait(19000)
        cy.get(':nth-child(1) > :nth-child(7) > .ui-cell-data > div > a').click()
        cy.wait(39000)
        cy.get(':nth-child(3) > .row > .col-md-12 > :nth-child(3)').click()
        cy.get('#offerletterTemplateId').select('OFFER LETTER - TERM LOANS').should('be.visible', 'OFFER LETTER - TERM LOANS')
        cy.get('p-dialog.ng-tns-c1-20 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(19000)
        cy.get('.swal2-confirm').should('be.visible').click()
        cy.wait(19000)
        cy.get('.swal2-confirm').should('be.visible').click()
        cy.wait(10000)
        cy.get('.panel-heading > .row > .col-md-12 > .btn-danger').click()
        cy.wait(19000)
        cy.get('#isFinalOfferLetter').click()
        cy.get(':nth-child(1) > [_ngcontent-c5=""][style="margin-bottom:0"] > :nth-child(3) > .row > .col-md-12 > .btn-success').click()
        cy.get('.swal2-confirm').click()
        cy.wait(19000)
        cy.screenshot()
        cy.get('.swal2-confirm').click()
    })

    it('Ensure user can Logout', () => {
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click()
    })
})