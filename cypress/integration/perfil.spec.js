/// <reference types="cypress" />

import telaInicial from "../support/pages/telaInicial"
import dashboard from "../support/pages/dashboard"

describe('', () => {
    beforeEach('logar', () => {
        cy.visit("https://linea-align.homologacao.net.br/login")
        dashboard.logar1()


    })

    it('funcoes', () => {
        dashboard.acessarFuncoes()
        dashboard.adicionarFuncoes()
        dashboard.editarFuncao()



    }) 










})