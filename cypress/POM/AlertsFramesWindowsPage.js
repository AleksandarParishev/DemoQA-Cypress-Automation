class AlertsFramesWindowsPage {
    
    get getURL(){
        return 'https://demoqa.com/'
    }
    get tabButton(){
      return cy.get('#tabButton')
    }
    get sampleHeading(){
      return cy.get('#sampleHeading')
    }
    get windowButton() {
      return cy.get('#windowButton')
    }
    get msgWindowButtonWrapper() {
      return cy.get('#msgWindowButtonWrapper')
    }
    get messageWindowButton() {
      return cy.get('#messageWindowButton')
    }
    get alertButton() {
      return cy.get('#alertButton')
    }
    get timerAlertButton() {
      return cy.get('#timerAlertButton')
    }
    get confirmButton() {
      return cy.get('#confirmButton')
    }
    get confirmResult() {
      return cy.get('#confirmResult')
    }
    get promtButton() {
      return cy.get('#promtButton')
    }
    get promptResult() {
      return cy.get('#promptResult')
    }
    get frame1() {
      return cy.get('#frame1')
    }
    get iframe() {
      return cy.get('html body > iframe')
    }
    get modal() {
      return cy.get(".modal-body")
    }
    get largeModal() {
     return  cy.get('#showLargeModal')
    }
  }
  
  export default new AlertsFramesWindowsPage();