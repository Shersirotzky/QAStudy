/// <reference types="cypress" />

import telaInicial from "../support/pages/telaInicial"
import dashboard from "../support/pages/dashboard"

describe('', () => {
    beforeEach('logar', () => {
        cy.visit("")
        telaInicial.logar()


    })

    it('funcoes', () => {

        dashboard.acessarFuncoes()
        dashboard.adicionarFuncoes()
        dashboard.editarFuncao()
        //dashboard.excluirFuncao()



    })

    it.only('colaboradores', () => {
        dashboard.cadColaborador()

    })










})