/// <reference types="cypress"/>

import dashboard from "../support/pages/dashboard";
import telaInicial from "../support/pages/telaInicial";


//Como cliente preciso 
//logar na aplicação para fazer gestão dos pacientes

describe("Login", () => {

    // before(function () {
    //     cy.log('Tudo aqui é executado uma única vez ANTES  de TODOS os casos de testes')

    // })


    // after(function () {
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function () {
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
    // })

    beforeEach('acessar', function () {
        cy.fixture('acessar').then((a) => {
            this.acessar = a

        })
    })


    beforeEach("Dado que acessei a pagina de login", () => {
        cy.visit("")

    })

    it('login', function () {
        dashboard.logar1(this.acessar.loginNaApp)

    })












})



















