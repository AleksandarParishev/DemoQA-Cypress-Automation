
import AlertsFramesWindowsPage from "../../../POM/AlertsFramesWindowsPage"
import 'cypress-iframe'; 


describe('DemoQaSiteTesting', () => {
    beforeEach(() => {
        
        cy.on('uncaught:exception', () => false);
      });

    it('Test Browser Windows - Browser Tab', function () {
      
      cy.visit( '/browser-windows') //import baseURL from config
      AlertsFramesWindowsPage.tabButton.click()
      cy.visit('/sample')
          cy.url()
          .should('include', '/sample')
          cy.get('h1')
          .should('have.text', 'This is a sample page')
      }),
        // If the element doesn't have an <a> tag, target and href attributes it will work this way. 
        // https://stackoverflow.com/questions/69942630/cypress-how-to-handle-new-tab-without-target-and-href-attribute
    
    it('Test Browser Windows - Example shows how to work witn button that opens new tab without "target: _blank" and "href" attributes.', () => {  
      
      cy.visit( '/browser-windows', {
        onBeforeLoad(win) {
          cy.stub(win, 'open')
        }
      });
      AlertsFramesWindowsPage.tabButton.click();
        cy.window().then(() => {
        cy.visit('/sample', { failOnStatusCode: false })
        })
      AlertsFramesWindowsPage.sampleHeading.should('have.text','This is a sample page')
        cy.go(-1)
      AlertsFramesWindowsPage.windowButton.click();
        cy.window().then(() => {
        cy.visit( '/sample', { failOnStatusCode: false })
        })
        cy.go(-1)
      AlertsFramesWindowsPage.msgWindowButtonWrapper.click();
        cy.window().then(() => {
        cy.visit( '/sample', { failOnStatusCode: false })
        })
      });
    it('Test Browser Windows - NewWindow', () =>{

        cy.visit('/browser-windows')
      AlertsFramesWindowsPage.windowButton.click()
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = '/sample';
            }).as("popup")
        })
      AlertsFramesWindowsPage.windowButton.click()
         cy.get('@popup')
          .should("be.called")
        cy.get('h1')
          .should('have.text', 'This is a sample page')
      }),
    it('Test Browser Windows - NewWindowMSG', () =>{
      
        cy.visit('/browser-windows').then((win) =>{
        cy.stub(win, 'open').returns({}).as('open')
        })
        AlertsFramesWindowsPage.messageWindowButton.click()
        cy.get('@open').should('have.been.calledWith', '','MsgWindow')
      }),
    it('Test Alerts - should display an alert when the "Click Button to see alert" button is clicked', () => {

        cy.visit('/alerts');
        // Click the button that triggers an alert
        AlertsFramesWindowsPage.alertButton.click();
    
        // Verify that an alert was triggered
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('You clicked a button');
        });
      });
    it('Test Alerts - should display a delayed alert after clicking the button', () => {
        
        cy.visit('/alerts');
        // Click the button that triggers a delayed alert
        AlertsFramesWindowsPage.timerAlertButton.click();
    
        // Wait for the alert to appear after 5 seconds
        cy.wait(5000);

        // Verify that the delayed alert was triggered
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('This alert appeared after 5 seconds');
        });
      });
    it('Test Alerts - should display a confirm box after clicking the button', () => {

        cy.visit('/alerts');
        // Click the button that triggers the confirm box
       AlertsFramesWindowsPage.confirmButton.click();
    
        // Intercept the confirm box
        cy.on('window:confirm', (confirmText) => {
          expect(confirmText).to.equal('Do you confirm action?');
        });
        AlertsFramesWindowsPage.confirmResult.should('contain', "You selected Ok");
      });
    it('Test Alerts - should display a prompt box after clicking the button', () => {
    
        cy.visit('/alerts', {
          onBeforeLoad(win) {
            // Stub the window.prompt method to return "Aleksandar"
            cy.stub(win, 'prompt').returns('Aleksandar');
          },
        });
        // Click the button that triggers the prompt box
        AlertsFramesWindowsPage.promtButton.click();
    
        // Check that the input was filled with "Aleksandar"
        AlertsFramesWindowsPage.promptResult.should('contain', "You entered Aleksandar");
      });
    it('Test Frames - should check the background color of an element within an iframe', () => {

          // Visit the page with the iframe
        cy.visit('/frames')
        AlertsFramesWindowsPage.frame1.then(($iframe) => {
        // Get the iframe's content window and document
             const iframeContent = $iframe.contents().find("body");
        // Check the background color of the body element within the iframe
            cy.wrap(iframeContent).should("have.css", "background-color", "rgb(169, 169, 169)");
            // Replace "rgb(169, 169, 169)" with the expected background color
            // based on the provided HTML snippet
          });
      });
    it('Test Nested Frames', () => {
      cy.visit('/nestedframes')

       // Switch to the parent frame using its ID
       AlertsFramesWindowsPage.frame1.its('0.contentDocument').should('exist').then(cy.wrap)
       .its('body').should('contain.text', 'Parent frame');
       AlertsFramesWindowsPage.iframe.should('exist')
     
      });
    it("Test Modal Dialogs - Should open and test the small modal", () => {

        cy.visit('/modal-dialogs')
        // Click the "Small modal" button to open the modal
        cy.contains("Small modal").click();
          
        // Interact with elements inside the modal
        AlertsFramesWindowsPage.modal.type("This is a small modal. It has very less content");
        cy.contains("Close").click();
      });
    it("Test Modal Dialogs - Should open and test the large modal", () => {

        cy.visit('/modal-dialogs')
        AlertsFramesWindowsPage.largeModal.click(),
        cy.contains('Large Modal'),
        cy.contains('Close').click() 
      });
  
})