class FormsPage {
    get getURL(){
        return 'https://demoqa.com/'
    }
    get loremIpsumText() {
        return cy.contains("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s");
      }
    
      get section1Heading() {
        return cy.get('#section1Heading');
      }
    
      get section2Heading() {
        return cy.get('#section2Heading');
      }
    
      get section2Content() {
        return cy.contains("It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.");
      }
    
      get section3Heading() {
        return cy.get('#section3Heading');
      }
    
      get section3Content() {
        return cy.get('#section3Content > p');
      }
   
    
      get autoCompleteMultipleInput() {
        return cy.get('#autoCompleteMultiple');
      }
    
      get autoCompleteMenu() {
        return cy.get('.auto-complete__menu');
      }
      get autoCompleteMultiValueLabels() {
        return cy.get('.auto-complete__multi-value__label');
      }
    
      get autoCompleteSingleContainerInput() {
        return cy.get('#autoCompleteSingleContainer');
      }
    
      get autoCompleteOptions() {
        return cy.get('.auto-complete__option');
      }
    
      get autoCompleteInput() {
        return cy.get('.auto-complete__input');
      }
      get autoCompleteSingleContainerinput2() {
        return cy.get('#autoCompleteSingleContainer input')
      }

      get datePickerMonthYearInput() {
        return cy.get('#datePickerMonthYearInput');
      }
      get datepicker__day() {
        return cy.get('.react-datepicker__day--today');
      }
      get dateAndTimePicker() {
        return cy.get('#dateAndTimePickerInput');
      }
    
      get datepicker__time() {
        return cy.get('.react-datepicker__time > div > ul > li:nth-child(61)')
      }
      get sliderContainer() {
        return cy.get('#sliderContainer > div.col-9 > span > input')
      }
      get startStopButton() {
        return cy.get('#startStopButton')
      }

      get originTab() {
        return cy.get('#demo-tab-origin');
      }
    
      get originTabPane() {
        return cy.get('#demo-tabpane-origin');
      }
    
      get useTab() {
        return cy.get('#demo-tab-use');
      }
    
      get useTabPane() {
        return cy.get('#demo-tabpane-use');
      }
    
      get moreTab() {
        return cy.get('#demo-tab-more');
      }

      get toolTipButton() {
        return cy.get('#toolTipButton');
      }
    
      get toolTipTextField() {
        return cy.get('#toolTipTextField');
      }
    
      get toolTipLink() {
        return cy.get('#texToolTopContainer > a:nth-child(1)');
      }

      get Menu() {
        return cy.get("#nav > li:nth-child(2) > a");
      }
      get subMenu() {
        return cy.get('#nav > li:nth-child(2) > ul > li:nth-child(3) > a');
      }

      get subSubMenu() {
        return cy.get('#nav > li:nth-child(2) > ul > li:nth-child(3) > ul > li:nth-child(1) > a');
      }

      get selectValue() {
        return cy.get("#withOptGroup");
      }
      
      get selectValueBar() {
        return cy.get(".css-1uccc91-singleValue");
      }
     

      get selectOneDropdown() {
        return cy.get('#selectOne > div > div.css-1hwfws3');
      }
    
      get mrsOption() {
        return cy.contains('Mrs.');
      }
    
      get singleValue() {
        return cy.get('.css-1uccc91-singleValue');
      }
    
      get oldSelectMenu() {
        return cy.get('#oldSelectMenu');
      }
     
      get multiselectDropDown() {
        return cy.get('#selectMenuContainer > div:nth-child(7) > div > div > div');
      }
      get multiselectMenu() {
        return cy.get('.css-26l3qy-menu > div');
      }
      
      get standardMultiSelect() {
        return cy.get('#cars');
      }
      
      
      
}

export default new FormsPage();
      