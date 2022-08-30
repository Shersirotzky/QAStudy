class Perfil {

    logar1(loginNaApp) {
        cy.get(':nth-child(1) > .form-control').type(loginNaApp.email)
        cy.get(':nth-child(2) > .form-control').type(loginNaApp.senha)
        cy.get('.text-center > .btn').click()

    }
    acessarFuncoes() {

        cy.get('#minimizeSidebar').click()
        cy.window().then((win) => { win.eval(' for (const a of document.querySelectorAll("p")) { if (a.textContent.includes("Funções")) { a.click() } } '); });

    }

    adicionarFuncoes() {
        cy.window().then((win) => { win.eval(' for (const elemento of document.querySelectorAll("a")) { if (elemento.textContent.includes("Adicionar")) { elemento.click() } } '); });
        cy.get('input[name="name"]').click()
            .type('teste automatizado via cypress' + Math.random())
        cy.get('#input-description').click()
            .type('função de testes criada via Cypress')
        cy.get('#check-create-all').click()
        cy.get('button[type=submit]').click()


    }

    editarFuncao() {

        cy.get('#datatable > tbody > tr:nth-child(7) > td.text-right > div').as('@btn').click()
        cy.get(':nth-child(7) > .text-right > .dropdown > .dropdown-menu > a.dropdown-item').click()
        cy.get('#input-name').type('teste' + Math.random())
        cy.get('.pl-lg-4 > .text-center > .btn').click()


    }



    cadColaborador() {
        cy.get('body > div.wrapper > div.sidebar > div.sidebar-wrapper.ps-container.ps-theme-default.ps-active-y > ul > li:nth-child(3) > a > p').click()
        cy.get('body > div.wrapper > div.main-panel.ps-container.ps-theme-default > div.content > div > div > div > div > div.card-header > div > div.col-4.text-right > a').click()
        cy.get('#input-email').click().type('sherdias1@gmail.com' + Math.random())
        cy.get('#input-name').type('Testes cy' + Math.random())
        cy.get('select').select('teste automatizado')
        cy.get('.pl-lg-4 > .text-center > .btn').click()


    }

}
























export default new Perfil;
