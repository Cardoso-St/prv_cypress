/// <reference types="cypress"/>

describe("Teste botão cadastro", () => {

      it("Testar se a função de busca de usuários retorna resultados esperados.", () => {
        cy.visit("../cadastro.html");
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
        cy.url().should('include', '/dashboard.html')
      });
    

    });