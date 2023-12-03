
import Booksfixtures from "../../cypress/fixtures/Booksfixtures.json"
class BookstoreApp{
   
get getURL(){
  return 'https://demoqa.com/'
}
get randomUsername(){
  return  `Aleksandar${Math.floor(Math.random() * 10000)}`;
}
get newUser(){
  return cy.get('#newUser')
}
get firstname(){
  return cy.get('#firstname')
}
get lastname(){
  return cy.get('#lastname')
}
get userName(){
  return cy.get('#userName')
}
get password(){
  return cy.get('#password')
}
get register(){
  return cy.get('#register')
}
get loginButton(){
  return cy.get('#login')
}
get closeSmallModalok(){
  return cy.get('#closeSmallModal-ok')
}



    generateToken(){
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            body: {
                userName: Booksfixtures.loginData.username,
                password: Booksfixtures.loginData.password
              },
            headers: {
                        "Content-Type": "application/json",
                      },
                     }).then((generateTokenResponse) => {
                      expect(generateTokenResponse.status).to.equal(200);
                      const authToken = generateTokenResponse.body.token;
                      Cypress.env('authToken', authToken);
                      cy.log(`authToken: ${authToken}`);
                      

  })
}

    backEndLogIn(){
     
        const authToken = Cypress.env('authToken');

    cy.request({
          method: "POST",
          url: "https://demoqa.com/Account/v1/Login",
          body: {
            userName: "Aleksandar",
            password: "Aleksandar12345@"
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // Pass the token in the headers
          },
        }).then((loginResponse) => {
          expect(loginResponse.status).to.equal(200);
          const logIn = loginResponse.body.username;
        cy.log(`logIn: ${logIn}`);
        });
      };
    }

  export default new BookstoreApp();
