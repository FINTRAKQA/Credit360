///<reference types = "cypress" />
describe('Access Bank Credit 360', () => {
    it('Navigate to URL', () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/en/#/auth/login')
    })

    it('Ensure can Login', () => {
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('roy-egbokhano')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(7000)
    })

    it.skip('Credit Appraisal', () => {
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-13 > span.ng-tns-c3-13').click()
        cy.get(':nth-child(6) > .ripplelink > .ng-tns-c3-14').click()
        cy.wait(70000)
        //cy.get('#searchString').type('') //Search Loan Application via ref
        //cy.get('.panel > .pull-right > :nth-child(2)').click() //Search
        cy.get(':nth-child(1) > .ui-selection-column > p-dtradiobutton > .ui-radiobutton > .ui-radiobutton-box').click()
        cy.wait(70000)
        cy.get('#sectionId').select('ACCOUNT OFFICER :: RELATIONSHIP SUMMARY').should('be.visible','ACCOUNT OFFICER :: RELATIONSHIP SUMMARY')
        cy.wait(50000)
        cy.get('.col-md-12 > .form-horizontal > .form-group > :nth-child(3)').click()
        cy.get('.swal2-confirm').click()
        //Conditions
        cy.get('p-tabview[_ngcontent-c5=""] > :nth-child(1) > :nth-child(1) > :nth-child(5) > a > .ui-tabview-title').click()
        cy.get('app-credit-condition > :nth-child(1) > .col-md-6 > .form-control').select('AGRIC CREDIT FOR FOOD CROPS -- AUBURN OAK').should('be.visible','AGRIC CREDIT FOR FOOD CROPS -- AUBURN OAK')
        cy.get(':nth-child(3) > .form-horizontal > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-thead > tr.ui-state-default > [style="width: 110px;"] > .ui-column-title > .pull-right > .ui-button > .ui-button-text').click()
        cy.get('#condition').type('Cypress')
        cy.get('#condition-modal > .ui-dialog > .ui-dialog-content > .panel > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(3) > .col-md-6 > .checkbox-container > #isExternal').click()
        cy.get('form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn-success').click()
        //Transaction Dynamics
        cy.get(':nth-child(6) > a > .ui-tabview-title').click()
        cy.get('app-transaction-dynamics > :nth-child(1) > .col-md-6 > .form-control').select('AGRIC CREDIT FOR FOOD CROPS -- AUBURN OAK').should('be.visible','AGRIC CREDIT FOR FOOD CROPS -- AUBURN OAK')
        cy.get(':nth-child(5) > .form-horizontal > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-thead > tr.ui-state-default > [style="width: 110px;"] > .ui-column-title > .pull-right > .ui-button > .ui-button-text').click()
        cy.get('#dynamics').type('This is a test')
        cy.get('.ng-invalid.ng-dirty > .panel-body > .form-horizontal > :nth-child(3) > .col-md-6 > .checkbox-container > #isExternal').click()
        cy.get('#position').type('1')
        cy.get('#dynamics-modal > .ui-dialog > .ui-dialog-content > .panel > form.ng-touched > .panel-footer > .row > .col-md-12 > .btn-success').click()
        //Application Information
        cy.get('p-tabview[_ngcontent-c5=""] > :nth-child(1) > :nth-child(1) > :nth-child(3) > a > .ui-tabview-title').click()
        //Refer Back
        //cy.get('.panel-body > .btn-primary').click()
        //cy.get('#trailId').select('ACCOUNT OFFICER -- Tolulope Abimbola')
        //cy.get(':nth-child(2) > :nth-child(2) > #comment').type('')
        //cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.get('.panel-body > .btn-success').click()
        //Select Approver
        //cy.get(':nth-child(19) > .panel-body > .btn-default').click() 
        //cy.get('#search').type('')
        cy.get('.col-md-5 > .panel-body > .form-horizontal > .form-group > :nth-child(2) > #comment').type('Hello from Cypress')
        cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        //cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-danger').click() //Cancel
        cy.get('.swal2-confirm').click()
        cy.wait(70000)
        cy.get('.swal2-confirm').click()
        cy.wait(50000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click() //Logout


    })

    it('Review Offer Letter', () => {
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-13 > span.ng-tns-c3-13').click()
        cy.get(':nth-child(7) > .ripplelink > .ng-tns-c3-14').click()
        cy.get(':nth-child(1) > :nth-child(7) > .ui-cell-data > div > a').click()
        cy.wait(19000)
        cy.get('.btn-group > .btn-success').click()
        cy.get('.panel-body > .form-group > .col-md-8 > .form-control').type('Accepted')
        cy.get('p-dialog.ng-tns-c1-23 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.get('.swal2-confirm').click()
        cy.wait(19000)
        cy.screenshot()
        cy.get('.swal2-confirm').click()
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click() //Logout
    })
})    