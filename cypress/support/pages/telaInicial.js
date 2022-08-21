class Login {

    logar() {
        cy.get('input[placeholder = "Email"]').type("admin@linea.com")
        cy.get('input[type="password"]').type("secret")
        cy.get('button[type="submit"]').click()

    }

    // logarIncorreto() {
    //     cy.get('input[placeholder= "Email"]').type("adminn@linea.com")
    //     cy.get('input[type="password"]').type("secret")
    //     cy.get('button[type="submit"]').click()

    // }









}
export default new Login;
