

      describe("API Test - /Account/v1/Authorized", () => {
        beforeEach(() => {
            // This code will run before any test in this suite
            cy.on('uncaught:exception', () => false);
          });


it("Should create a user, generate a token, login, and then delete the user", () => {
  const baseUrl = ('/')
  const createUserUrl = "/Account/v1/User";
  const loginUrl = "/Account/v1/Login";
  const deleteUrl = "/Account/v1/User/";

  // Generate a random username
  const randomUsername = `Aleksandar${Math.floor(Math.random() * 10000)}`;
  cy.log(`randomUsername: ${randomUsername}`);

  // Define the request payloads
  const createUserRequest = {
    userName: randomUsername,
    password: "Aleksandar!@#123",
  };

  // Step 1: Create the user
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

    // Step 2: Generate a token
    cy.request({
      method: "POST",
      url: `${baseUrl}/Account/v1/GenerateToken`,
      body: {
        userName: randomUsername,
        password: "Aleksandar!@#123",
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((generateTokenResponse) => {
      expect(generateTokenResponse.status).to.equal(200);
      const authToken = generateTokenResponse.body.token;
      cy.log(`authToken: ${authToken}`);

      // Step 3: Login with the created user and use the generated token
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

        // Step 4: Continue with actions after login (if needed)

        // Delay the DELETE request to ensure it follows the login request
        cy.wait(2000); // Adjust the delay as needed

        // Step 5: Delete the user using the generated token
        cy.request({
          method: "DELETE",
          url: `${baseUrl}${deleteUrl}${createdUserID}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // Pass the token in the headers
          },
        }).then((deleteResponse) => {
          cy.log(`Delete Response: ${JSON.stringify(deleteResponse)}`);
          expect(deleteResponse.status).to.be.oneOf([200, 204]);

          // Perform additional verifications or actions as needed
        });
      });
    });
  });
});
});