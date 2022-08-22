/// <reference types="cypress"/>

import dashboard from "../support/pages/dashboard";
import telaInicial from "../support/pages/telaInicial";


//Como cliente preciso 
//logar na aplicação para fazer gestão dos pacientes

describe("Login", () => {
    //Fazer login correto

    // before(function () {
    //     cy.log('Tudo aqui é executado uma única vez ANTES  de TODOS os casos de testes')

    // })


    // after(function () {
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function () {
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
    // })



    beforeEach("Dado que acessei a pagina de login", () => {
        cy.visit("")
        telaInicial.logar();

    })










})



















