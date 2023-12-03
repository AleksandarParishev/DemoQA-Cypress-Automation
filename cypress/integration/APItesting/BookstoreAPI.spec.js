
import BookstoreApp from "../../POM/BookstoreApp"
import Booksfixtures from "../../fixtures/Booksfixtures.json"

const baseUrl = "https://demoqa.com";

const userId = "b6194835-70e9-4504-944f-91730bec8d66"

describe("API Test", () => {
    beforeEach(() => {
        // This code will run before any test in this suite
        cy.on('uncaught:exception', () => false);
        BookstoreApp.generateToken()
        BookstoreApp.backEndLogIn()
        

      });
      it("Should GET book", () => {
        
        cy.fixture("Booksfixtures.json").then((fixtureData) => {
          // Use the fixture data in your request body
          cy.request({
            method: "GET",
            url: `${baseUrl}/BookStore/V1/Books`,
            headers: {
              "Content-Type": "application/json",
            },
            body: fixtureData, // Use the loaded fixture data here
          }).then((response) => {
            expect(response.status).to.equal(200);
            const Book = response.body.books;
            cy.log(`Book : ${JSON.stringify(Book)}`);
          });
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
            body: Booksfixtures.bookDataPOSTapi2
            }).then((response) => {
             
                cy.log(JSON.stringify(response.body));
              });
      });
    it("Should DELETE book", () => {

        cy.request({
            method: "DELETE",
            url: `${baseUrl}/BookStore/V1/Books?UserId=${userId}`, //In the provided documentation, the parameter "UserId" is described as a string and marked as a query parameter. This means that it should be included in the URL as a query parameter when making the request. In Cypress, you can add query parameters to the request by appending them to the URL using the ? symbol.
            headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${Cypress.env('authToken')}`
                    },
            body: Booksfixtures.bookDELETE
                    
          });
        });          
});
                
            