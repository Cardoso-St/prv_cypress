/// <reference types="cypress"/>

describe("Testar dashboard", () => {
  it.only("Testar se a página de dashboard exibe corretamente a lista de usuários.", () => {
    cy.visit("../dashboard.html");
    cy.get('table')
    cy.get('#user-list > :nth-child(1) > :nth-child(1)')
        .should('contains.text', "João")
    cy.get('#user-list > :nth-child(2) > :nth-child(1)')
        .should('contains.text', "Maria")
    cy.get('#user-list > :nth-child(1) > :nth-child(2)')
        .should('contains.text', "joao@email.com")
    cy.get('#user-list > :nth-child(2) > :nth-child(2)')
        .should('contains.text', "maria@email.com")
  });

  it("Testar se a função de busca de usuários retorna resultados esperados.", () => {
    cy.visit("../dashboard.html");
    cy.get('#search')
        .type("João")
        .should("have.value", "João")
    cy.get('table')
    cy.get('#user-list > :nth-child(1) > :nth-child(1)')
        .should('contains.text', "João")
    cy.get('#user-list > :nth-child(1) > :nth-child(2)')
        .should('contains.text', "joao@email.com")
    
  });

  it("Testar se o botão 'Adicionar Usuário' redireciona corretamente para a página de cadastro.", () => {
    cy.visit("../dashboard.html");
    cy.get('#add-user').click()
    cy.url().should('include', '/cadastro.html')
  });
});
