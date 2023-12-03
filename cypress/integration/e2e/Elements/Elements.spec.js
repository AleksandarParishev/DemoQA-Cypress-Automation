import ElementsPage from "../../../POM/ElementsPage"

describe('DemoQaSiteTesting', () => {
    beforeEach(() => {
        // This code will run before any test in this suite
        cy.on('uncaught:exception', () => false);
        cy.visit(ElementsPage.getURL)
        cy.contains("Element").click()
      });

  

    it('Navigate Element page', () => {

        cy.contains("Element").click() // to check the whole page if contains the string Element and click the first (if there are more)
      }),

    it('Navigate Textbox', () => {
        
        ElementsPage.textBox.click()
      }),
    it('Fill Textbox and submit',() =>{
       
        ElementsPage.textBox.click()
        cy.wait(3000)

        ElementsPage.usernameTextBox.click().type('Aleksandar')
        ElementsPage.usernameEmail.click().type('aleksandar_parisev@yahoo.com')
        ElementsPage.currentAddress.click().type('bulevar')
        ElementsPage.permanentAddress.click().type('bulevar')
        ElementsPage.submit.click()
        cy.wait(3000)
        ElementsPage.output.contains('aleksandar_parisev@yahoo.com')
      }),
    it('Navigate checkbox',() =>{
        
        ElementsPage.CheckBox.click()
        cy.wait(3000)
        ElementsPage.selectCheckBox.click()
      }),
    it('Test checkbox ',() =>{
      
        ElementsPage.CheckBox2.click()
        cy.wait(3000)
        ElementsPage.CheckBox2one.click()
        ElementsPage.CheckBox2two.click()
        ElementsPage.CheckBox2three.click()
      }),
    it('Test Radiobar button',() =>{
     
        ElementsPage.RadioBar.click()
        cy.wait(3000)
        ElementsPage.YesRadio.click()
        ElementsPage.verifyRadioBarText.contains('You have selected Yes')
        ElementsPage.NoRadioDisabled.should('be.disabled')
      }),
    it('Test Web tables - Add new Record',() =>{
        
        ElementsPage.WebTables.click()
        cy.wait(3000)
        ElementsPage.addNewRecordButton.click()
        ElementsPage.FirstName.type('Aleksandar')
        ElementsPage.LastName.type('Parishev')
        ElementsPage.userEmail.type('aleksandar_parisev@yahoo.com')
        ElementsPage.age.type('23')
        ElementsPage.salary.type('300')
        ElementsPage.department.type('research')

        cy.wait(3000)
        ElementsPage.submit.click()
        ElementsPage.verifyAddedRecord.contains('Aleksandar')
      }),
    it('Test Web tables - Selection',() =>{
    
        ElementsPage.WebTables.click()
        cy.wait(3000)
        ElementsPage.selectRowCount.select('25')// the selection can be made with value like 25 or test like 25 rows
      }),
    it('Test Web tables - Searchbar',() =>{
       
        ElementsPage.WebTables.click()
        cy.wait(3000)
        ElementsPage.searchInWebTable
        .click().type('Kierra')
      }),
    it('Test Buttons',() =>{
      
        ElementsPage.navigateToButtons.click()
        cy.wait(3000)
        cy.url().should('include', '/buttons')
        ElementsPage.doubleClickButton.dblclick()
        ElementsPage.rightClickButton.rightclick()
        ElementsPage.clickDynamicButton.click('left')

        ElementsPage.verifyDoubleClickMessage.contains('You have done a double click')
        ElementsPage.verifyRightClickMessage.contains('You have done a right click')
        ElementsPage.verifyDynamicClickMessage.contains('You have done a dynamic click')
      }),
    it('Test Links - Simple Link',() =>{
        
        ElementsPage.navigateToLinks.click()
        cy.wait(3000)
        // cy.get('#simpleLink').click().url().should('include', 'demoqa')// da se najde nachin kako da ja proveri novootvorenata strana
        ElementsPage.SimpleLink.click()
        .should('have.attr', 'href')
                .then((href) => {
                cy.visit(href)
                cy.url().should('include', '/demoqa.com/')
              })
      }),
    it('Test Links - Dynamic Link',() =>{
       
        ElementsPage.navigateToLinks.click()
        cy.wait(3000)
        ElementsPage.clickDynamicLink.click().url().should('include', 'demoqa')
      }),
    it('Test Links - Create API',() =>{
       
        ElementsPage.navigateToLinks.click()
        cy.wait(3000)
        ElementsPage.CreateAPI.click()
        cy.intercept('GET', 'https://demoqa.com/created', {
        statusCode: 201,
        }) //how to check status text?
      }),
    it('Test Links - No Content API route',() =>{
        
        ElementsPage.navigateToLinks.click()
        cy.wait(3000)
        ElementsPage.NoContentAPI.click()
        cy.intercept('GET', 'https://demoqa.com/no-content', {
          statusCode: 204,
        })
      }),
    it('Test Links - Moved API',() =>{
        
        ElementsPage.navigateToLinks.click()
        cy.wait(3000)
        ElementsPage.MoveAPI.click()
        cy.intercept('GET', 'https://demoqa.com/moved', {
          statusCode: 301 ,
          statusText: 'Moved Permanently (from disk cache)',
          response: '{"url":"demoqa.com"}'
        })
      }),  
    it('Test Links - Moved API (should intercept and check status text)', () => {

        cy.intercept('GET', 'https://demoqa.com/moved', (req) => {
            req.reply({
              statusCode: 301,
              statusText: 'Moved Permanently (from disk cache)', 
            });
          });
      }),
    it('Test Links - Moved API (should intercept and alias the API request)', () => {

        cy.intercept('GET', 'https://demoqa.com/moved').as('apiRequest')
        cy.visit(ElementsPage.getURL+'links')
        ElementsPage.MoveAPI.click()
      
        cy.wait(5000)
        cy.wait('@apiRequest').then((interception) => {
        
        expect(interception.response.statusCode).to.eq(301, 'Moved Permanently (from disk cache)');
        expect(interception.response.body).to.include({"url":"demoqa.com"});
            })
      }), 
    it('Test Links - intercept and alias the API request', () => {

        cy.intercept('GET', 'https://demoqa.com/moved').as('apiRequest2')
        cy.visit(ElementsPage.getURL+'links')
        ElementsPage.MoveAPI.click()
        
        cy.wait(5000)
        cy.wait('@apiRequest2').then((interception) => {
          expect(interception.response.url).to.equal('https://demoqa.com/moved');
            }) 
      }), 
    it('Test Links - BadRequest API', () => {

        cy.intercept('GET', 'https://demoqa.com/bad-request').as('apiBadRequest')
        cy.visit(ElementsPage.getURL+'links')
        ElementsPage.BadRequest.click()
        
        cy.wait(5000)
        cy.wait('@apiBadRequest').then((interception) => {
          expect(interception.response.statusCode).to.equal(400, 'Bad Request');
            }) 
      }),
    it('Test Links - Unauthorized API', () => {

        cy.intercept('GET', 'https://demoqa.com/unauthorized').as('apiUnauthorized')
        cy.visit(ElementsPage.getURL+'links')
        ElementsPage.unauthorized.click()
          
        cy.wait(5000)
        cy.wait('@apiUnauthorized').then((interception) => {
          expect(interception.response.statusCode).to.equal(401, 'Unauthorized');//hot to check the strings unauthorized?
            }) 
      }),
    it('Test Links - Forbiden API', () => {

        cy.intercept('GET', 'https://demoqa.com/forbidden').as('apiForbidden')
        
        cy.visit(ElementsPage.getURL+'links')
        ElementsPage.forbiden.click()
            
        cy.wait(5000)
        cy.wait('@apiForbidden').then((interception) => {
          expect(interception.response.statusCode).to.equal(403, 'forbidden');//hot to check the string unauthorized?
            })
      });
    it('Test Links - NotFound API', () => {

        cy.intercept('GET', 'https://demoqa.com/invalid-url').as('apiNotFound')

        cy.visit(ElementsPage.getURL+'links')
        ElementsPage.invalidUrl.click()
            
        cy.wait(5000)
        cy.wait('@apiNotFound').then((interception) => {
          expect(interception.response.statusCode).to.equal(404,"Not found" );
            })
      }); 
    it('Test Broken Links -images VALID img',() =>{  

      ElementsPage.navigateToBrokenLinksImages.click()
      cy.wait(3000)
      ElementsPage.validIMG
      .should(($img) => {
        // Use a callback to access the DOM element
        expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
      });
    it('Test Broken Links -images BROKEN img',() =>{  

      ElementsPage.navigateToBrokenLinksImages.click()
      cy.wait(3000)
      ElementsPage.brokenIMG
      .should(($img) => {
        // Use a callback to access the DOM element
        expect($img[0].naturalWidth).to.equal(0);
      });
      });
    it('Test Broken Links - Valid link and checks URL', () => {

      cy.visit('https://demoqa.com/broken');

      // Get the href attribute of the valid link using the provided selector
      ElementsPage.validLink
      .invoke('attr', 'href')
      .then((href) => {
        // Visit the URL extracted from the href attribute
        cy.visit(href);

        // Assert that the current URL matches the expected URL (https://demoqa.com/)
        cy.url().should('eq', 'https://demoqa.com/');
        });
      });
    it('Test Broken Links -Broken Link',() =>{

      ElementsPage.navigateToBrokenLinksImages.click()
      const brokenLinkUrl = 'http://the-internet.herokuapp.com/status_codes/500';

      // Use cy.request() to send a GET request to the broken link
      cy.request({
        url: brokenLinkUrl,
        failOnStatusCode: false, // Allow non-2xx responses without failing the test
        }).then((response) => {
        // Assert that the response status code is 500
        expect(response.status).to.equal(500);

        // Assert the content as needed (e.g., check for the error message)
        expect(response.body).to.contain('This page returned a 500 status code.');
        });
      });
    it('Test Upload and Download - Download', () =>{

      cy.visit(ElementsPage.getURL+'upload-download')
      ElementsPage.downloadButton.click()
      cy.readFile('cypress/downloads/sampleFile.jpeg')
      }),
    it('Test Upload and Download - Upload', () =>{

      cy.visit(ElementsPage.getURL+'upload-download')
      ElementsPage.uploadFile.click( 'left').selectFile('flowers-276014_640.jpg')
      }),            
    it('Test Dynamic properties', () =>{

      cy.visit(ElementsPage.getURL+'dynamic-properties')
      ElementsPage.enableAfter.should('be.disabled')
      ElementsPage.colorChange.should('have.css', 'color', 'rgb(255, 255, 255)')
      // cy.wait(5000)
      ElementsPage.enableAfter.should('not.be.disabled')
      ElementsPage.colorChange.should('have.css', 'color').and('eq', 'rgb(220, 53, 69)'),// color of the text can be find in elements and style. This element has dc colors which can be transformed into rgb
      ElementsPage.verifyVisibleAfterVisible.should('be.visible')
      // sometimes this test drops down// how to fix it with some function
      })

})
