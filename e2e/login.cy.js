/// <reference types="cypress"/>

describe("Testar página de login", () => {
  it("Carregar página de login ", () => {
    cy.visit("../login.html");
  });

  it("Verificar se a mensagem de erro aparece ao inserir credenciais incorretas.", () => {
    cy.visit("../login.html");
    cy.get('#email')
        .type("steven@teste.com")
        .should("have.value", "steven@teste.com")
    cy.get('#senha')
        .type("123456")
        .should("have.value", "123456")
    cy.get('#logar').click()
    cy.get('#login-error')
        .should('have.text', "Credenciais incorretas")
  });

  it("Verificar se ao inserir credenciais corretas, o usuário é redirecionado para a página de dashboard.", () => {
    cy.visit("../login.html");
    cy.get('#email')
        .type("admin@email.com")
        .should("have.value", "admin@email.com")
    cy.get('#senha')
        .type("123456")
        .should("have.value", "123456")
    cy.get('#logar').click()
    cy.url().should('include', '/dashboard.html')
  });
  
});
