class ElementsPage {
   
    get getURL(){
        return 'https://demoqa.com/'
    }
    get textBox(){
        return cy.get('#item-0')
    }
    get usernameTextBox(){
        return cy.get('#userName')
    }
    get usernameEmail(){
        return cy.get('#userEmail')
    }
    get currentAddress(){
        return cy.get('#currentAddress')
    }
    get permanentAddress(){
        return cy.get('#permanentAddress')
    }
    get submit(){
        return cy.get('#submit')
    }
    get output(){
        return cy.get('#output')
    }
    get CheckBox(){
        return cy.get('#item-1')
    }
    get selectCheckBox(){
        return cy.get('#tree-node > ol > li > span > label > span.rct-checkbox > svg')
    }
    get CheckBox2(){
        return cy.get('#item-1')
    }
    get CheckBox2one(){
        return cy.get('#tree-node > ol > li > span > button > svg')
    }
    get CheckBox2two(){
        return cy.get('#tree-node > ol > li > ol > li:nth-child(3) > span > button > svg')
    } 
    get CheckBox2three(){
        return cy.get('#tree-node > ol > li > ol > li.rct-node.rct-node-parent.rct-node-expanded > ol > li:nth-child(2) > span > label > span.rct-checkbox > svg')
    }
    
    get RadioBar() {
        return cy.get('#item-2')
    }
    get YesRadio() {
      return cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > div:nth-child(2) > label')
    }
    get verifyRadioBarText() {
       return cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > p')
    }
    get NoRadioDisabled() {
      return cy.get('#noRadio')
    }
    get WebTables() {
      return cy.get('#item-3')
    }
    get addNewRecordButton(){
        return cy.get('#addNewRecordButton')
    }
    get FirstName(){
        return cy.get('#firstName')
    }
    get LastName(){
        return cy.get('#lastName')
    }
    get userEmail(){
        return cy.get('#userEmail')
    }
    get age(){
      return cy.get('#age')
    }
    get salary(){
    return cy.get('#salary')
    }
    get department(){
    return cy.get('#department')
    }
    get verifyAddedRecord() {
          return cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(4) > div')
        }
    get selectRowCount(){
          return cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-center > span.select-wrap.-pageSizeOptions > select')
        }
    get searchInWebTable() {
          return cy.get('#searchBox')
        }
    get navigateToButtons() {
          return cy.get('#item-4')
        }
    get doubleClickButton() {
          return cy.get('#doubleClickBtn')
        }
    get rightClickButton() {
          return cy.get('#rightClickBtn')
        }
    get clickDynamicButton() {
          return cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > div:nth-child(3)')
        }
    get verifyDoubleClickMessage() {
          return cy.get('#doubleClickMessage')
        }
    get verifyRightClickMessage() {
          return cy.get('#rightClickMessage')
        }
    get verifyDynamicClickMessage() {
          return cy.get('#dynamicClickMessage')
        }
    get navigateToLinks() {
        return cy.get('#item-5')
        }
    get navigateToBrokenLinksImages() {
        return cy.get('#item-6')
        }
    get SimpleLink() {
          return cy.get('#simpleLink')
        }
    get clickDynamicLink() {
          return cy.get('#dynamicLink').click();
        }
    get CreateAPI() {
          return cy.get('#created')
        }
    get NoContentAPI() {
          return cy.get('#no-content').click();
        }
    get MoveAPI() {
          return cy.get('#moved').click();
        }
    get BadRequest() {
          return cy.get('#bad-request');
        }
    get unauthorized() {
          return cy.get('#unauthorized');
        }
    get forbiden() {
          return cy.get('#forbidden')
        } 
    get invalidUrl() {
          return cy.get('#invalid-url')
        }
    get validIMG() {
          return cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > img:nth-child(2)')
        }
    get brokenIMG() {
          return cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > img:nth-child(6)')
        }
    get validLink() {
          return cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > a:nth-child(10)')
        }
    get uploadFile() {
          return cy.get('#uploadFile')
        }
    get downloadButton() {
          return cy.get('#downloadButton')
        }
    get enableAfter() {
          return  cy.get('#enableAfter')
        }   
    get colorChange() {
          return  cy.get('#colorChange')
        }   
    get verifyVisibleAfterVisible() {
          return cy.get('#visibleAfter')
        }
      }
      
  export default new ElementsPage();
  