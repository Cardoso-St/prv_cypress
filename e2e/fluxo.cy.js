/// <reference types="cypress"/>

describe("Testar fluxo completo", () => {

    it("Testar o fluxo completo: login -> dashboard -> cadastro -> dashboard.", () => {

        //Login
        cy.visit("../login.html");
        cy.get('#email')
            .type("admin@email.com")
            .should("have.value", "admin@email.com")
        cy.get('#senha')
            .type("123456")
            .should("have.value", "123456")
        cy.get('#logar').click()
        cy.url().should('include', '/dashboard.html')

        //dashboard
        cy.get('#add-user').click()
        
        //cadastro
        cy.url().should('include', '/cadastro.html')
        cy.get('#nome')
            .type("Splashador")
            .should("have.value", "Splashador")
        cy.get('#cadastro-email')
            .type("splashador@teste.com")
            .should("have.value", "splashador@teste.com")
        cy.get('#senha1')
            .type("splashador123")
            .should("have.value", "splashador123")
        cy.get('#senha2')
            .type("splashador123")
            .should("have.value", "splashador123")
        cy.get('#cadastrar').click()

        //dashboard
        cy.url().should('include', '/dashboard.html')
    });
  

  });