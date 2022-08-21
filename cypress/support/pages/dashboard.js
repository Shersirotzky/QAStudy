class Perfil {

    logar1() {
        cy.get(':nth-child(1) > .form-control').type('admin@linea.com')
        cy.get(':nth-child(2) > .form-control').type('secret')
        cy.get('.text-center > .btn').click()

    }
    acessarFuncoes() {

        cy.get('#minimizeSidebar').click()
        cy.get('#management > .nav > :nth-child(2) > a').click({ force: true })

    }

    adicionarFuncoes() {
        cy.get('.col-4 > .btn').click()
        cy.get('#input-name').click()
        cy.get('#input-name').click()
            .type('Função teste')
        cy.get('#input-description').click()
            .type('função de testes criada via Cypress')
        cy.get('#check-create-all').click()
        cy.get('.pl-lg-4 > .text-center > .btn').click()
        cy.get('.alert').should('be.visible', 'Função criada com sucesso!')


    }

    editarFuncao() {
        cy.get(':nth-child(4) > .text-right > .dropdown > .btn').click()
    }


}






export default new Perfil;