///<reference types = "cypress" />
describe('Access Bank Credit 360', () => {
    it('Navigate to URL', () => {
        cy.clearCookies()
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/en/#/auth/login')
    })

    it('Ensure user can Login', () => {
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('etukudoe')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(7000)
    })

    it('Credit Appraisal', () => {
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-12 > span.ng-tns-c3-12').click()
        cy.get(':nth-child(2) > .ripplelink > .ng-tns-c3-13').click()
        cy.wait(70000)
        //cy.get('#searchString').type('1302171685322') //Search Loan Application via ref
        //cy.get('.panel > .pull-right > :nth-child(2)').click() //Search
        cy.get(':nth-child(1) > .ui-selection-column > p-dtradiobutton > .ui-radiobutton > .ui-radiobutton-box').click()
        cy.wait(70000)
        cy.get('#sectionId').select('ACCOUNT OFFICER :: RELATIONSHIP SUMMARY').should('be.visible','ACCOUNT OFFICER :: RELATIONSHIP SUMMARY')
        cy.wait(70000)
        cy.get('.col-md-12 > .form-horizontal > .form-group > :nth-child(3)').click()
        cy.wait(30000)
        cy.get('.swal2-confirm').click()
        cy.wait(30000)
        cy.get('p-tabview[_ngcontent-c5=""] > :nth-child(1) > :nth-child(1) > :nth-child(3) > a > .ui-tabview-title').click()
        
        //Refer Back
        //cy.get('.panel-body > .btn-primary').click()
        //cy.get('#trailId').select('ACCOUNT OFFICER -- Tolulope Abimbola')
        //cy.get('#trailId').select('RELATIONSHIP MANAGER -- ROY-EGBOKHAN OREOLUWA')
        //cy.get(':nth-child(2) > :nth-child(2) > #comment').type('')
        //cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        //Decline
        //cy.get('.panel-body > .btn-danger').click()
        //Accept
        cy.get('.panel-body > .btn-success').click()
        //cy.get('.col-md-5 > .panel-body > .form-horizontal > .form-group > :nth-child(2) > #comment').type('Testing Cypress')
        //cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(10000)
        cy.get('.col-md-5 > .panel-body > .form-horizontal > .form-group > :nth-child(2) > #comment').type('Hello Cypress Testing')
        cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.wait(70000)
        cy.get('.swal2-confirm').click()
        cy.wait(100000)
        cy.get('.swal2-confirm').click()
        cy.wait(50000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click() //Logout


        //Select Approver
        //cy.get(':nth-child(19) > .panel-body > .btn-default').click() 
        //cy.get('#search').type('')
       
    })    
})    
