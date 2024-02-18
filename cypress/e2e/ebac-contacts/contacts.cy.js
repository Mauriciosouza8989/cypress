/// <reference types="cypress" />

describe("Tests for contacts page", ()=>{
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('shuld check if the page is on', ()=>{
        cy.get('input').should('have.length', 3)
        cy.screenshot('contact-page')
    })
    it('should add a new contact', ()=>{
        cy.get('input[type="text"]').type('Maurício')
        cy.get('input[type="email"]').type('mauricio@email.com')
        cy.get('input[type="tel"]').type('11 98765-4321')
        cy.get('button[type="submit"]').click()
        cy.screenshot('contact-added')
    })
    it('should edit a contact', ()=>{
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear().type('Maurício Sousa')
        cy.get('.alterar').click()
        cy.screenshot('contact-edited')
    })
    it('should delete a contact', ()=>{
        cy.get('.delete').last().click()
        cy.screenshot('contact-deleted')
    })
})