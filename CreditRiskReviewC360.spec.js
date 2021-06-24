///<reference types = "cypress" />
describe('Access Bank Credit 360', () => {
    it('Navigate to URL', () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/en/#/auth/login')
    })

    it('Ensure user can Login', () => {
        //cy.get('.m-t-60 > .col-xs-12 > .form-control').type('onoduc')
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('oyegokeo')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(7000)
    })

    it('Credit Appraisal', () => {
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-10 > span.ng-tns-c3-10').click()
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c3-11').click()
        cy.wait(300000)
        cy.get('#searchString').type('1306247850638') //Search Loan Application via ref
        cy.get('.panel > .pull-right > :nth-child(2)').click() //Search
        cy.wait(70000)
        cy.get('.ui-radiobutton-box').click()
    })

    it('Monitoring Triggers', () => {
        cy.wait(70000)
        cy.get(':nth-child(10) > a > .ui-tabview-title').contains('Monitoring Triggers').click()
        cy.get('.col-md-6 > #loanApplicationDetailId').select('AGRIC CREDIT FOR FOOD CROPS -- AUBURN OAK').should('be.visible','AGRIC CREDIT FOR FOOD CROPS -- AUBURN OAK')
        cy.get('#monitoringTrigger').type('Checking inside')
        cy.get('form.ng-touched > .row > .col-md-12 > .btn-warning').click()
        cy.get('form.ng-untouched > .row > .col-md-12 > .btn-success').click()
    })

    it('Conditions', () => {
        cy.get('p-tabview[_ngcontent-c5=""] > :nth-child(1) > :nth-child(1) > :nth-child(5) > a > .ui-tabview-title').click()
        cy.get('app-credit-condition > :nth-child(1) > .col-md-6 > .form-control').select('AGRIC CREDIT FOR FOOD CROPS -- AUBURN OAK').should('be.visible','AGRIC CREDIT FOR FOOD CROPS -- AUBURN OAK')
        cy.get(':nth-child(3) > .form-horizontal > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-thead > tr.ui-state-default > [style="width: 110px;"] > .ui-column-title > .pull-right > .ui-button > .ui-button-text').click()
        cy.get('#condition').type('Cypress testing again')
        cy.get('#condition-modal > .ui-dialog > .ui-dialog-content > .panel > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(3) > .col-md-6 > .checkbox-container > #isExternal').click()
        cy.get('form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn-success').click()
    })

    it('Transaction Dynamics', () => {
        cy.get(':nth-child(6) > a > .ui-tabview-title').click()
        cy.get('app-transaction-dynamics > :nth-child(1) > .col-md-6 > .form-control').select('AGRIC CREDIT FOR FOOD CROPS -- AUBURN OAK').should('be.visible','AGRIC CREDIT FOR FOOD CROPS -- AUBURN OAK')
        cy.get(':nth-child(5) > .form-horizontal > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-thead > tr.ui-state-default > [style="width: 110px;"] > .ui-column-title > .pull-right > .ui-button > .ui-button-text').click()
        cy.get('#dynamics').type('This is a test using cypress')
        cy.get('.ng-invalid.ng-dirty > .panel-body > .form-horizontal > :nth-child(3) > .col-md-6 > .checkbox-container > #isExternal').click()
        cy.get('#position').type('1')
        cy.get('#dynamics-modal > .ui-dialog > .ui-dialog-content > .panel > form.ng-touched > .panel-footer > .row > .col-md-12 > .btn-success').click()
    })

    it('Accept', () => {
        cy.get('p-tabview[_ngcontent-c5=""] > :nth-child(1) > :nth-child(1) > :nth-child(3) > a > .ui-tabview-title').click()
        cy.get('.panel-body > .btn-success').click()
        cy.get('.col-md-5 > .panel-body > .form-horizontal > .form-group > :nth-child(2) > #comment').type('Almost there')
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