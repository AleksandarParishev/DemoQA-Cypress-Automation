
const baseUrl = ('/')
const createUserUrl = "/Account/v1/User";
const randomUsername = `Aleksandar${Math.floor(Math.random() * 10000)}`;
// cy.log(`randomUsername: ${randomUsername}`);
Cypress.env('randomUsername', randomUsername);
const loginUrl = "/Account/v1/Login";
const createUserRequest = {
    userName: randomUsername,
    password: "Aleksandar!@#123",
  };
const authToken = Cypress.env('authToken');
const getUrl = "/Account/v1/User/";
const deleteUrl = "/Account/v1/User/";

describe("API Test", () => {
    beforeEach(() => {
        // This code will run before any test in this suite
        cy.on('uncaught:exception', () => false);

        });

      it("Should CREATE a user", () => {

        cy.request({
          method: "POST",
          url: `${baseUrl}${createUserUrl}`,
          body: createUserRequest,
          headers: {
            "Content-Type": "application/json",
          },
        }).then((createUserResponse) => {
          expect(createUserResponse.status).to.equal(201);
          const createdUserID = createUserResponse.body.userID;
          cy.log(`Created UserID: ${createdUserID}`);
          Cypress.env('createdUserID', createdUserID);
            })
        }),

      it("Should Generate TOKEN ", () => {

        cy.request({
            method: "POST",
            url: `${baseUrl}/Account/v1/GenerateToken`,
            body: createUserRequest
          ,
            headers: {
              "Content-Type": "application/json",
            },
          }).then((generateTokenResponse) => {
            expect(generateTokenResponse.status).to.equal(200);
            const authToken = generateTokenResponse.body.token;
            cy.log(`authToken: ${authToken}`);
            Cypress.env('authToken', authToken);

          })
        });
      it("Should LOGIN user", () => {
        cy.request({
            method: "POST",
            url: `${baseUrl}${loginUrl}`,
            body: createUserRequest, // Use the same user credentials for login
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`, // Pass the token in the headers
            },
          }).then((loginResponse) => {
              expect(loginResponse.status).to.equal(200);
              const logIn = loginResponse.body.username;
        cy.log(`logIn: ${logIn}`);
          });
        });
      it("Should GET user", () => {

        cy.request({
            method: "GET",
            url: `${baseUrl}${getUrl}${Cypress.env('createdUserID',)}`,
            headers: {
                      "Content-Type": "application/json",

            Authorization: `Bearer ${Cypress.env('authToken',)}`
                      // Add authentication headers if required for the delete request `
                      },
                  }).then((getResponse) => {
                    expect(getResponse.status).to.equal(200);
                    const getUser = getResponse.body.username;
        cy.log(`getUser: ${getUser}`);
            });
        });
      it("Should DELETE user", () => {

        cy.request({
            method: "DELETE",
            url: `${baseUrl}${deleteUrl}${Cypress.env('createdUserID',)}`,
            headers: {
                    "Content-Type": "application/json",
            Authorization: `Bearer ${Cypress.env('authToken',)}`
                    // Add authentication headers if required for the delete request `
                    },
                  }).then((deleteResponse) => {
                    expect(deleteResponse.status).to.be.oneOf([200, 204]);
                    const deletedUser = deleteResponse.body.username;
            cy.log(`deletedUser: ${deletedUser}`);
                });
            });
});
