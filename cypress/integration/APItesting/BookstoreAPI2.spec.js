
import BookstoreApp from "../../POM/BookstoreApp"
import Booksfixtures from "../../fixtures/Booksfixtures.json"

const baseUrl = "https://demoqa.com";
const ISBN  = "9781449325862"
const authToken = Cypress.env('authToken');
describe("API Test", () => {
    beforeEach(() => {
        // This code will run before any test in this suite
        cy.on('uncaught:exception', () => false);
        BookstoreApp.generateToken()
        BookstoreApp.backEndLogIn()

    });
    it("Should GET book", () => {
      
        cy.request({
            method: "GET",
            url: `${baseUrl}/BookStore/V1/Book?ISBN=${ISBN}`,
            headers: {
                "Content-Type": "application/json",
                },
            });
      });
    it("Should POST book", () => {

        cy.request({
            method: "POST",
            url: `${baseUrl}/BookStore/V1/Books`,
            headers: {
                "Content-Type": "application/json",
                Authorization:  `Bearer ${Cypress.env('authToken')}`  
                },
            body: Booksfixtures.bookDataPOSTapi  //this can be placed in POM, Fixtures (as object in json file) etc.
            }).then((response) => {
                // Log the response to the Cypress console
                cy.log(JSON.stringify(response.body));
              });

      });
    it("Should PUT book with ISBN 9781593275846", () => {

        cy.request({
          method: "PUT",
          url: `${baseUrl}/BookStore/v1/Books/9781449325862`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cypress.env('authToken')}`  
                    
          },
          body: Booksfixtures.bookDataAPI
        })
          
      });  
    it("Should DELETE book", () => {

      cy.request({
      method: "DELETE",
      url: `${baseUrl}/BookStore/V1/Book`,
      headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Cypress.env('authToken')}`  
              },
              body: Booksfixtures.bookDataAPI
                  
        });
      });
});
                
            