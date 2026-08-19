import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';
faker.locale = 'pt_BR';

describe('Testes End To End do fluxo de cadastro e login', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    });


    it('Deve fazer o cadastro e validar o login com o usuário cadastrado', () => {
      
        let email = `teste${Date.now()}@teste.com`
        let senha = 'senha2026'
        cadastroPage.preencherCadastro('Rita Cardoso', email, '11987654321', senha, senha)
        cy.wait(5000)
        cy.url().should('include', 'dashboard')
        cy.get('#logout-button').click()

        cy.visit('login.html')
        cy.login(email, senha)
        cy.url().should('include', 'dashboard' )

    });


});