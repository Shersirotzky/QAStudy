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
            .type('Função teste cyy')
        cy.get('#input-description').click()
            .type('função de testes criada via Cypress')
        cy.get('#check-create-all').click()
        cy.get('.pl-lg-4 > .text-center > .btn').click()




    }

    editarFuncao() {
        cy.get(':nth-child(5) > .text-right > .dropdown > .btn').click()
        cy.get(':nth-child(4) > .text-right > .dropdown > .btn').click()
        cy.get(':nth-child(4) > .text-right > .dropdown > .dropdown-menu > a.dropdown-item').click()
        cy.get('#input-name').click().type('Função teste cy2')
        cy.get('#input-description').click().type('Função de testes editada via cypress')
        cy.get('#check-read-all').click()
        cy.get('.pl-lg-4 > .text-center > .btn').click()
        cy.get('.alert').should('be.visible', 'Ffunção editada com sucesso!')


    }

    // excluirFuncao() {
    //     cy.get(':nth-child(6) > .text-right > .dropdown').click()
    //     cy.get(':nth-child(6) > .text-right > .dropdown > .dropdown-menu > form > .dropdown-item').click()
    //     cy.get('.alert').should('be.visible', 'Função deletada com sucesso!')

    // }

    cadColaborador() {
        cy.get('#management > .nav > :nth-child(4) > a').click()
        cy.get('.col-4 > .btn').click()
        cy.get('#input-email').click().type('sherdias1@gmail.com')
        cy.get('#input-name').click()
        cy.get('#select-role').click()
        cy.get('#check-create-all').click()



    }



















}






export default new Perfil;
