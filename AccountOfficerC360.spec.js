///<reference types = "cypress" />
describe('Access Bank Credit 360', () => {
    it('Navigate to URL', () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/en/#/auth/login')
        cy.wait(35000) 
    })

    it('Ensure user can Login', () => {
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('abidoyet')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(7000)
        cy.url().should('include', '/dashboard')
        cy.wait(7000)
    })

    it('Credit Application', () => {
        //cy.get('#menu-button > i').click()
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c3-3').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-16 > span.ng-tns-c3-16').click()
        cy.get(':nth-child(6) > .ripplelink > .ng-tns-c3-17').click()
        //Start Loan Application
        cy.get('#startLoanTypeId').select('Corporate/SME').should('be.visible','Corperat/SME')
        cy.get(':nth-child(3) > .col-md-4 > #startLoanTypeId').select('Single Customer').should('be.visible', 'Single Customer')
        cy.get('.card > .panel > .panel-footer > .row > .col-md-12 > .btn').click()
        //Customer Information
        cy.get('.col-md-4 > #search').type('auburn')
        cy.wait(5000)
        cy.get('.ui-radiobutton-box').click()
        //Customer Information Details for: AUBURN OAK
        cy.get('.col-md-12 > div > .btn-primary').click()
        //Credit Bureau Search
        cy.get('.ui-datatable-even > :nth-child(8)').click()
        
        //cy.get('.swal2-confirm').click()

        //UPLOAD
        // cy.get(':nth-child(1) > :nth-child(3) > .btn').click()
        // const fixtureFile = 'Sample.pdf';
        //     cy.get('.col-md-12 > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(2) > .col-md-8 > .form-control').attachFile(fixtureFile);
        //     cy.get('div.col-md-4 > .btn').click()
        //     cy.get('.swal2-confirm').click()
        //     cy.get('.ui-datatable-even > :nth-child(8)').click()

        //     cy.get(':nth-child(2) > :nth-child(3) > .btn').click() 
        //     cy.get('.col-md-12 > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(2) > .col-md-8 > .form-control')
        //         .attachFile('Sample2.pdf');
        //     cy.get('div.col-md-4 > .btn').click()
        //     cy.get('.swal2-confirm').click()
        //     cy.get('.ui-datatable-even > :nth-child(8)').click()

            // cy.get(':nth-child(3) > :nth-child(3) > .btn').click() 
            // cy.get('.col-md-12 > form.ng-untouched > .panel-body > .form-horizontal > :nth-child(2) > .col-md-8 > .form-control')
            //     .attachFile('Sample3.pdf');
            // cy.get('div.col-md-4 > .btn').click()
            // cy.get('.swal2-confirm').click()
            

        cy.get('.btn > .ui-button-text').click() //Proceed
        //Application Type
        cy.get('#productClassProcessId').select('FAM Based').should('be.visible','FAM Based')
        cy.get('.card > .panel > .ng-invalid > .panel-footer > .row > .col-md-12 > .btn').click()
        //New Loan
        cy.get('#requireCollateralTypeId').select('No Collateral Required').should('be.visible','No Collateral Required')
        cy.get('#loantermSheetId').select('3909620423').should('be.visible','3909620423')
        cy.get('#loansWithOthers').type('0')
        cy.get('#productClassId').select('Non-Credit Program').should('be.visible','Non-Credit Program')
        cy.get('#relatedEmployerId').select('ABIA STATE').should('be.visible','ABIA STATE')
        
    })

    it('Add Facility', () => {
        cy.get('.ui-button-info > .ui-button-text').click()
        cy.wait(7000)
        cy.get('#proposedProductId').select('AGRIC CREDIT FOR FOOD CROPS AGFC').should('be.visible','AGRIC CREDIT FOR FOOD CROPS AGFC')
        cy.wait(7000)
        cy.get(':nth-child(2) > :nth-child(1) > .form-control').clear().type('300')
        cy.get('#proposedAmount').type('39000000')
        cy.get('#crmsFundingSourceId').select('FS1000-Balance Sheet').should('be.visible','FS1000-Balance Sheet')
        cy.get('#loanPurpose').type('Hello from cypress')
        cy.get('#operatingCasaAccountId').select('0689194355(CURRENT ACCOUNT - NGN)').should('be.visible','0689194355(CURRENT ACCOUNT - NGN)')
        cy.get('#approvedTradeCycleId').select('60').should('be.visible','60')
        cy.get('#loanDetailReviewTypeId').select('INITIAL').should('be.visible','INITIAL')
        cy.get('#sectorId').select('AGRICULTURE, FORESTRY AND FISHING').should('be.visible','AGRICULTURE, FORESTRY AND FISHING')
        cy.get('#subSectorId').select('Fishing').should('be.visible','Fishing')
        cy.get('#currencyId').select('Naira NGN').should('be.visible','Naira NGN')
        cy.get('#crmsPaymentSourceId').select('GRS010-Cash').should('be.visible','GRS010-Cash')
        cy.get('#repaymentScheduleId').select('Monthly').should('be.visible','Monthly')
        cy.get('#interestRepaymentId').select('Monthly').should('be.visible','Monthly')
        cy.get('[style="overflow: auto;"] > :nth-child(3) > .pull-right').click()
        //cy.get('.pull-right > .ui-button-text').click()
        cy.get('.swal2-confirm').click()
        cy.get(':nth-child(1) > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.get('.swal2-confirm').click()
    })    

    it('Loan Eligibility Requirements', () =>{
        cy.get('.ui-datatable-even > [style="width: 350px;"]').click()
        //Environment and Social Risk
        cy.get('.btn-group > .btn').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(2) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(3) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(4) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(5) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(7) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(8) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(9) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(10) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(11) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(13) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(14) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(15) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(16) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(17) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(18) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(19) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(21) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(22) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(23) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(24) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(25) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(26) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(28) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(30) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(31) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(32) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(33) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(35) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('.ui-tabview-panel > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(37) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('p-dialog.ng-tns-c1-139 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-primary.pull-right').click()
        cy.get('p-dialog.ng-tns-c1-139 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        //Green Loan Identification
        cy.get('.btn-group > .btn').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(2) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(3) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(4) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(5) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(6) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(7) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(8) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(9) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(10) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(11) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        cy.get('div[_ngcontent-c10=""] > p-datatable > .ui-datatable > .ui-datatable-tablewrapper > table > .ui-datatable-data > :nth-child(12) > :nth-child(2) > .ui-cell-data > .radio-inline').click()
        //cy.get('.btn btn-primary pull-right').contains('Show Summary').click()
        cy.get('p-dialog.ng-tns-c1-140 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-primary.pull-right').click()
        cy.get('p-dialog.ng-tns-c1-140 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        cy.get('p-dialog.ng-tns-c1-140 > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-danger').click()
        cy.get(':nth-child(5) > .row > .col-md-12 > .btn-success').click()
        cy.wait(30000)
    })

    it('Credit Appraisal', () => {
        cy.wait(30000)
        cy.get(':nth-child(1) > .ui-selection-column > p-dtradiobutton > .ui-radiobutton > .ui-radiobutton-box').click()
        cy.get(':nth-child(9) > a > .ui-tabview-title').click()
        cy.get('.form-group > .btn-warning').click()
        cy.get('#creditTemplateId').select('FAM').should('be.visible','FAM')
        cy.get('form.ng-dirty > .panel-footer > .row > .col-md-12 > .btn').click()
        cy.get('#sectionId').select('ACCOUNT OFFICER :: RELATIONSHIP SUMMARY').should('be.visible','ACCOUNT OFFICER :: RELATIONSHIP SUMMARY')
        cy.wait(70000)
        cy.get('.col-md-12 > .form-horizontal > .form-group > :nth-child(4)').click()
        cy.get('.swal2-confirm').click()
        cy.get(':nth-child(1) > :nth-child(1) > p-tabview[_ngcontent-c12=""] > :nth-child(1) > :nth-child(1) > :nth-child(2) > a > .ui-tabview-title').click()
        cy.get('.panel-body > .btn-success').click()
        cy.get('.col-md-5 > .panel-body > .form-horizontal > .form-group > :nth-child(2) > #comment').type('Hello from Cypress')
        cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-success').click()
        //cy.get('#comment-modal > .ui-dialog > .ui-dialog-content > .panel > .panel-footer > .row > .col-md-12 > .btn-danger').click() //Cancel
        cy.wait(50000)
        cy.get('.swal2-confirm').click
        cy.wait(50000)
        //cy.get('.swal2-cancel').click() //Select another approver
        //cy.get('#search').type() //Search staff name
        cy.wait(50000)
        cy.get('.swal2-confirm').click()
        cy.wait(50000)
        cy.screenshot()
        cy.get('.swal2-confirm').click()
        cy.wait(50000)
        cy.get('[width="100%"] > :nth-child(2) > .material-icons').click() //Logout
    })       
})