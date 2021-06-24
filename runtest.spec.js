///<reference types = "cypress" />
describe('Credit 360', () => {
    it("Navigate to URL", () => {
        cy.visit('https://fintrakcredit360web2.azurewebsites.net/en/#/auth/login')
        cy.wait(39000)
    })

    it('Login', () => {
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('abidoyet')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(500)
    })

    it('Select Customer', () => {
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c3-3 > span.ng-tns-c3-3').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c3-16 > span.ng-tns-c3-16').click()
        cy.get(':nth-child(6) > .ripplelink > .ng-tns-c3-17').click() //Credit Appraisal for credit 360
        //we gather dey this thing
        //this git dey igve me headache
        //Lobatan...kini ka ti shey si oro yii bayii
        //Emi mo oun oju mi ti ri
        //shedibalabala shedibolobolo
    })
})