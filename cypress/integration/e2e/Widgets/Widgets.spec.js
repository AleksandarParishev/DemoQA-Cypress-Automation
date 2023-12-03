import Widgets from "../../../POM/Widgets"; 

describe('DemoQaSiteTesting', () => {
      beforeEach(() => {
      // This code will run before any test in this suite
      cy.on('uncaught:exception', () => false);
      });
  
    it("Test Accordian", () => {
        
        cy.visit('/accordian')
  
        Widgets.loremIpsumText
        Widgets.section1Heading.click()
        
        Widgets.section2Heading.click()
        Widgets.section2Content
        Widgets.section2Heading.click()
        
        Widgets.section3Heading.click()
        // cy.get('#section3Content > p').should('includes','more-or-less normal distribution of letters')
        Widgets.section3Content.should(($p) => {
            expect($p.text()).to.include('more-or-less normal distribution of letters');
        });
      }),
    it('Test Auto Complete - Should select Red, Blue, and Yellow', () => {
      
        cy.visit('/auto-complete')
 
        // Function to type and select a color
        const typeAndSelectColor = (color) => {
          Widgets.autoCompleteMultipleInput.type(color);
          Widgets.autoCompleteMenu
            .should('be.visible')
            .contains('.auto-complete__option', color)
            .click();
        };
      
        // Type and select 'Red'
        typeAndSelectColor('Red');
      
        // Type and select 'Blue'
        typeAndSelectColor('Yellow');
      
        // Type and select 'Yellow'
        typeAndSelectColor('Blue');
      
        // Verify that the selected values are displayed in the field
        Widgets.autoCompleteMultiValueLabels.should('have.length', 3);
        Widgets.autoCompleteMultiValueLabels.should('contain', 'Red');
        Widgets.autoCompleteMultiValueLabels.should('contain', 'Blue');
        Widgets.autoCompleteMultiValueLabels.should('contain', 'Yellow');

        Widgets.autoCompleteSingleContainerInput.type('Green').should('be.visible')

        Widgets.autoCompleteOptions.should('have.text', 'Green');
        
        Widgets.autoCompleteInput.contains( 'Green');    
      })
    it('Test Auto Complete - Should select Green in Single Input Field', () => {
        cy.visit('/auto-complete')
      
        // Type 'Green' in the single input field
        Widgets.autoCompleteSingleContainerinput2.type('Green');
      
        // Wait for the dropdown options to appear and select 'Green'
        Widgets.autoCompleteMenu
          .should('be.visible')
          .contains('.auto-complete__option', 'Green')
          .click();
      cy.get('.auto-complete__single-value.css-1uccc91-singleValue').contains('Green')
        // Verify that 'Green' is displayed in the single input field
        // cy.contains('#autoCompleteSingleContainer', 'Green').should('exist'); //?????????? how and what does this mean??
        // cy.get('#autoCompleteSingleContainer > div > div.auto-complete__value-container.auto-complete__value-container--has-value.css-1hwfws3')
        // .invoke('val')
        // .should('contain', 'Green');
      });
    it('Test Date Picker - Date', () => {
        
        cy.visit('/date-picker')

        Widgets.datePickerMonthYearInput.click()
        Widgets.datepicker__day.click()
    
      })
    it('Test Date Picker - Date and time ', () => {
        cy.visit('/date-picker')
    
        Widgets.dateAndTimePicker.click()
        Widgets.datepicker__day.click()
        Widgets.datepicker__time.click()
      })
    it('Test Slider ', () => {
        cy.visit('/slider')
        
        // Locate the slider input element by its ID
        Widgets.sliderContainer
          .invoke('val', 100) // Set the desired value (e.g., 50)
          .trigger('input'); // Trigger the 'input' event to simulate user interaction
          Widgets.sliderContainer.should('have.value', '100')
      })
    it('Test Progress Bar ', () => {
        cy.visit('/progress-bar')
      
        // Locate and click the "Start" button
        Widgets.startStopButton.should('have.text', 'Start').click()
        cy.wait(5000)
        Widgets.startStopButton.should('have.text', 'Stop').click()
        cy.get("div[role='progressbar']").should('have.attr', 'aria-valuenow').then((value) => {
            expect(parseInt(value)).greaterThan(10)
        })
      })
    it('Test Tabs ', () => {
        cy.visit('/tabs')

        // Click the tab you want to verify
        Widgets.originTab.click();
            
        // Assert that the tab content includes the expected text
        Widgets.originTabPane
          .should('include.text', 'Contrary to popular belief,');
            

        Widgets.useTab.click()
        Widgets.useTabPane
          .should('include.text', 'It is a long established fact')

        Widgets.moreTab.should('have.attr', 'aria-disabled', 'true')
            
      }),
    it('Test Tool Tips ', () => {
        cy.visit('/tool-tips')

        Widgets.toolTipButton.trigger('mouseover');
        cy.contains('You hovered over the Button').should('be.visible');

        Widgets.toolTipTextField.trigger('mouseover');
        cy.contains('You hovered over the text field').should('be.visible');

        Widgets.toolTipLink.trigger('mouseover');
        cy.contains('You hovered over the Contrary').should('be.visible');
        
      }) 
    it('Test Menu ', () => {
        cy.visit('/menu#')
        
        Widgets.Menu.realHover('mouse')
        cy.wait(3000)

        Widgets.subMenu.realHover('mouse')
        cy.wait(3000)
        Widgets.subSubMenu.scrollIntoView()

        Widgets.subSubMenu.realHover('mouse')
        cy.wait(3000)
      });
    it('Test Select Menu - Select Value ', () => {
      cy.visit('/select-menu')

        Widgets.selectValue.click()
        cy.contains('A root option').click()
        Widgets.selectValueBar.should(($selectedOption) => {
          expect($selectedOption.text()).to.include('A root option');
        });
      });
    it('Test Select Menu - Select One Dropdown ', () => {
      cy.visit('/select-menu')

        Widgets.selectOneDropdown.click()
        Widgets.mrsOption.click()
        Widgets.singleValue.contains('Mrs.')

        Widgets.oldSelectMenu.select('Green')
        // cy.get('#oldSelectMenu > option:nth-child(7)').select()
        Widgets.oldSelectMenu.contains('Green')

      });
    it('Test Select Menu - Multi Select Dropdown', () => {
      cy.visit('/select-menu')
        Widgets.multiselectDropDown.click();

        // Find the select element and select the option by its value
        // cy.get('.css-2b097c-container').select('Green');
        Widgets.multiselectMenu.contains('Green').click();

        // You can also assert the selected option
        Widgets.multiselectDropDown.should('contain', 'Green')
      })
    it('Test Select Menu - Standard Multiselect ', () => {
      cy.visit('/select-menu')
        Widgets.standardMultiSelect.scrollIntoView();
         
        // Select 'Volvo' while holding Ctrl
        Widgets.standardMultiSelect.select(['Volvo', 'Opel'], { force: true });

        // You can also assert the selections if needed
        Widgets.standardMultiSelect.invoke('val').should('deep.equal', ['volvo', 'opel'].map(val => val.toLowerCase()));
      });

  });  