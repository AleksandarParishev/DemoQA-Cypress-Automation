import Interactions from "../../../POM/Interactions"
import 'cypress-real-events/support';

describe('DemoQaSiteTesting', () => {
    beforeEach(() => {
      // This code will run before any test in this suite
      cy.on('uncaught:exception', () => false);
    });


  it('Test Sortable List', () => {
    cy.visit('/sortable');
      
    // Select the source and target elements you want to move
      Interactions.sortableListOne.as('sourceItem');
      Interactions.sortableListThree.as('targetItem');

    // Use trigger() to perform the drag-and-drop action
      cy.get('@sourceItem').trigger('mousedown', { which: 1 });
      cy.get('@targetItem').trigger('mousemove').trigger('mouseup');

   // Add assertions here to verify the order has changed
    });
  it('Test Sortable Grid ', () => {
    cy.visit('/sortable');
      Interactions.sortableGridTab.click()

      // Select the source and target elements you want to move
      Interactions.sortableGridOne.as('sourceItem');
      
      Interactions.sortableGridThree.as('targetItem');

    // Use trigger() to perform the drag-and-drop action
      cy.get('@sourceItem').trigger('mousedown', { which: 1 });
      cy.get('@targetItem').trigger('mousemove').trigger('mouseup');
    });
  it('Test Selectable List ', () => {
    cy.visit('/selectable');
      
      Interactions.firstListItem.click();
      Interactions.secondListItem.click();

      // Add assertions to check if the rows are selected
      Interactions.firstListItem.should('have.class', 'active');
      Interactions.secondListItem.should('have.class', 'active');

      Interactions.firstListItem.click();
      Interactions.secondListItem.click();

      Interactions.firstListItem.should('not.have.class', 'active');
      Interactions.secondListItem.should('not.have.class', 'active');
    });
  it('Test Selectable Grid ', () => {
    cy.visit('/selectable');
    Interactions.SelectableGridTab.click()


    Interactions.firstGridItem.click();
    Interactions.thirdGridItem.click();

    // Add assertions to check if the rows are selected
    Interactions.firstGridItem.should('have.class', 'active');
    Interactions.thirdGridItem.should('have.class', 'active');

    Interactions.firstGridItem.click();
    Interactions.thirdGridItem.click();

    Interactions.firstGridItem.should('not.have.class', 'active');
    Interactions.thirdGridItem.should('not.have.class', 'active');
    });
  it('Test Resizable - in a box ', () => {

    cy.visit('/resizable');
    


    // Select the resizable box with restrictions
    const resizableBox = '#resizableBoxWithRestriction';

    // Get the initial dimensions of the box
    let initialWidth, initialHeight;
    cy.get(resizableBox).then(($el) => {
      initialWidth = $el.outerWidth();
      initialHeight = $el.outerHeight();
      });

    // Calculate new dimensions for maximum size
    const maxWidth = 500;
    const maxHeight = 300;

    // Calculate new dimensions for minimum size
    const minWidth = 150;
    const minHeight = 150;

    // Resize the box to the maximum size
    cy.get(resizableBox).invoke('css', 'width', `${maxWidth}px`);
    cy.get(resizableBox).invoke('css', 'height', `${maxHeight}px`);

    // Assert that the box has been resized to the maximum size
    cy.get(resizableBox).should(($el) => {
      expect($el.outerWidth()).to.equal(maxWidth);
      expect($el.outerHeight()).to.equal(maxHeight);
    });

    // Resize the box to the minimum size
    cy.get(resizableBox).invoke('css', 'width', `${minWidth}px`);
    cy.get(resizableBox).invoke('css', 'height', `${minHeight}px`);

    // Assert that the box has been resized to the minimum size
    cy.get(resizableBox).should(($el) => {
      expect($el.outerWidth()).to.equal(minWidth);
      expect($el.outerHeight()).to.equal(minHeight);
      });
    });
  it('Test Resizable - Should resize the unrestricted box', () => {
    cy.visit('/resizable');


    // Select the unrestricted resizable box and its handle
    const unrestrictedBox = '#resizable'; // Unique identifier for the unrestricted box
    const handle = `${unrestrictedBox} > span`;

    // Use the cy.viewport() command to make the element fully visible
    cy.viewport(1200, 800); // Adjust the dimensions as needed

    // Scroll the unrestricted box into view
    cy.get(unrestrictedBox).scrollIntoView();

    // Get the initial dimensions of the box
    let initialWidth, initialHeight;
    cy.get(unrestrictedBox).then(($el) => {
      initialWidth = $el.outerWidth();
      initialHeight = $el.outerHeight();
    });

    // Calculate new dimensions for resizing (increase width and height)
    const newWidth = initialWidth + 100;
    const newHeight = initialHeight + 100;

    // Hover over the resizing handle
    cy.get(handle).trigger('mouseover');

    // Simulate mouse click and drag to resize using Cypress's .trigger()
    cy.get(handle).trigger('mousedown', { which: 1 });
    cy.get(unrestrictedBox).trigger('mousemove', { clientX: 300, clientY: 500 });
    cy.get(handle).trigger('mouseup');

    // Wait for a short moment to observe the resize (adjust as needed)
    cy.wait(1000);

    // Calculate new dimensions for lowering (decrease width and height)
    const lowerWidth = initialWidth - 50;
    const lowerHeight = initialHeight - 50;

    // Lower the box back to its original dimensions
    cy.get(handle).trigger('mousedown', { which: 1 });
    cy.get(unrestrictedBox).trigger('mousemove', { clientX: 200, clientY: 300 });
    cy.get(handle).trigger('mouseup');

    // Wait for a short moment to observe the lowering (adjust as needed)
    cy.wait(1000);
    });
  it('Test Droppable - should drag and drop element Tab Simple', () => {
      cy.visit('/droppable');
        
      cy.wait(3000)
    
      Interactions.Drag.trigger('mousedown', { which: 1 });//find the element with id draggable and put the mouse on it?
      cy.wait(3000)
      Interactions.Drop.trigger('mousemove').trigger('mouseup', { force: true });//find the element with id droppable and make movement of mouse
    
      Interactions.Drop.should('have.css', 'background-color', 'rgb(70, 130, 180)');

      Interactions.Drop.should('contain', 'Dropped');

    });
  it('Test Droppable - Drag and drop tab Accept', () => {
    cy.visit('/droppable');
      Interactions.droppableTabAccept.click()
      cy.wait(3000)
      Interactions.acceptableElement.trigger('mousedown', { which: 1 });
      cy.wait(3000)
      Interactions.acceptDropContainer.trigger('mousemove')
      Interactions.acceptDropContainer.should('have.css', 'background-color', 'rgb(60, 179, 113)')
      Interactions.acceptableElement.trigger('mouseup', { force: true })
      cy.wait(3000)
      Interactions.droppedText.contains('Dropped!')
      Interactions.acceptDropContainer.should('have.css', 'background-color', 'rgb(70, 130, 180)');
    }),
  it('Test Droppable - Drag and drop tab Prevent Propagation', () => {
      
      cy.visit('/droppable');
      cy.viewport(1600,900)
     
      Interactions.preventPropagationTab.click()
      cy.wait(3000)
      Interactions.dragBox.trigger('mousedown', { which: 1 });
      cy.wait(3000)
      Interactions.notGreedyDropBox.trigger('mousemove', 'bottom')
      Interactions.notGreedyDropBox.should('have.css', 'background-color', 'rgb(143, 188, 143)')
      Interactions.notGreedyInnerDropBox.should('have.css', 'background-color', 'rgb(60, 179, 113)')
      Interactions.notGreedyInnerDropBox.trigger('mousemove')

      Interactions.notGreedyInnerDropBox.trigger('mouseup', { force: true })
      cy.wait(3000)
      Interactions.notGreedyDropBox.contains('Dropped!')
      Interactions.notGreedyInnerDropBox.should('have.css', 'background-color', 'rgb(70, 130, 180)');
    }),
  it('Test Droppable - Drag and drop tab Revert Draggable', () => {
    cy.visit('/droppable');
      Interactions.revertableTab.click()
      cy.wait(3000)
      Interactions.revertableDraggable.trigger('mousedown', { which: 1 });
      Interactions.revertableDropContainer.trigger('mousemove')
      Interactions.dropBox.should('have.css', 'background-color', 'rgb(60, 179, 113)')
      Interactions.dropBox.trigger('mousemove')
      Interactions.dropBox.should('have.css', 'background-color', 'rgb(143, 188, 143)')
      Interactions.revertableDraggable.trigger('mouseup', { force: true })
      Interactions.dropBox.should('have.css', 'background-color', 'rgb(70, 130, 180)')

      Interactions.notRevertableDraggable.trigger('mousedown', { which: 1 });
      Interactions.dropBox.trigger('mousemove')
      Interactions.notRevertableDraggable.trigger('mouseup', { force: true })
      Interactions.dropBox.should('have.css', 'background-color', 'rgb(70, 130, 180)')
    }),
  it('Test Draggable - should drag element Axis Restricted', () => {
    cy.visit('/dragabble');
  
    cy.wait(3000)
    Interactions.AxisRestricted.click()

    
      // Get the initial position of the elements
      Interactions.restrictedX.then(($el) => {
      const startX = $el[0].getBoundingClientRect().left;
      const startY = $el[0].getBoundingClientRect().top;

      // Move the #restrictedX element to the right
      Interactions.restrictedX.trigger('mousedown', { which: 1 });
      cy.get('body').trigger('mousemove', { clientX: startX + 200, clientY: startY });
      cy.get('body').trigger('mouseup');
        });

      // Get the initial position of the #restrictedY element
      Interactions.restrictedY.then(($el) => {
      const startX = $el[0].getBoundingClientRect().left;
      const startY = $el[0].getBoundingClientRect().top;

      // Move the #restrictedY element down the Y-axis
      Interactions.restrictedY.trigger('mousedown', { which: 1 });
      cy.get('body').trigger('mousemove', { clientX: startX, clientY: startY + 200 });
      cy.get('body').trigger('mouseup');
        });
    });
    it('Test Draggable - Drag Container Restricted', () => {
      cy.visit('/dragabble');
      cy.wait(3000)
      Interactions.containerRestriction.click();


      let initialX, initialY;
        let dragDistanceX = -100; // Specify the distance to drag to the left
        let dragDistanceY = 100;  // Specify the distance to drag down

        // Get the element you want to drag
        Interactions.containmentWrapper.then(($element) => {
            // Click on the element to start dragging
        cy.get($element).trigger('mousedown', { which: 1, force: true });

        // Get its initial position
        initialX = $element[0].getBoundingClientRect().left;
        initialY = $element[0].getBoundingClientRect().top;

        // Perform the drag and drop operation using Cypress drag method
        cy.get('body').trigger('mousemove', { clientX: initialX + dragDistanceX, clientY: initialY + dragDistanceY, force: true });

        // Release the mouse button to drop the element
        cy.get('body').trigger('mouseup', { force: true });
          });

    // Assert that the element is not at its initial starting position
    Interactions.containmentWrapper.should(($element) => {
        const finalX = $element[0].getBoundingClientRect().left;
        const finalY = $element[0].getBoundingClientRect().top;

        // Check that the final position is different from the initial position
        expect(finalX).not.to.equal(initialX);
        expect(finalY).to.be.closeTo(initialY, 1);
      });
    }); 

  it('Test Draggable - should drag element down within a containment area', () => {
      cy.visit('/dragabble');
      cy.wait(3000);

      Interactions.containerRestriction.click();
      let initialY;
      let dragDistanceY = 400;  // Specify the distance to drag down (increase for more movement)

      // Get the element you want to drag (different element this time)
      Interactions.draggableWidget.then(($element) => {
      // Click on the element to start dragging
      cy.get($element).trigger('mousedown', { which: 1, force: true });

      // Get its initial Y position
      initialY = $element[0].getBoundingClientRect().top;

      // Perform the drag and drop operation using Cypress drag method
      cy.get('body').trigger('mousemove', { clientX: 0, clientY: initialY + dragDistanceY, force: true });

      // Release the mouse button to drop the element
      cy.get('body').trigger('mouseup', { force: true });
      });

  // Assert that the element is not at its initial starting Y position
      Interactions.draggableWidget.should(($element) => {
      const finalY = $element[0].getBoundingClientRect().top;

      // Check that the final Y position is different from the initial Y position
      expect(finalY).not.to.equal(initialY);
      });
    });
  it('Test Draggable - should drag element Cursor position', () => {
    cy.visit('/dragabble');
    Interactions.draggableCursorStyle.click()
    cy.wait(3000);
    
    let initialY;
    let dragDistanceY = 400;  // Specify the distance to drag down (increase for more movement)

  // Get the element you want to drag (different element this time)
  Interactions.cursorCenter.then(($element) => {
      // Click on the element to start dragging
      cy.get($element).trigger('mousedown', { which: 1, force: true });

      // Get its initial Y position
      initialY = $element[0].getBoundingClientRect().top;

      // Perform the drag and drop operation using Cypress drag method
      cy.get('body').trigger('mousemove', { clientX: 0, clientY: initialY + dragDistanceY, force: true });
      cy.get('body').should('have.css', 'cursor', 'move')
      // Release the mouse button to drop the element
      cy.get('body').trigger('mouseup', { force: true });

      cy.get('body').should('have.css', 'cursor', 'auto')
  });

  // Assert that the element is not at its initial starting Y position
  Interactions.cursorCenter.should(($element) => {
      const finalY = $element[0].getBoundingClientRect().top;

      // Check that the final Y position is different from the initial Y position
      expect(finalY).not.to.equal(initialY);
    })
  });

  it('Test Draggable - should drag element Cursor position Center', () => {
    cy.visit('/dragabble');
    Interactions.draggableCursorStyle.click()
    cy.wait(3000);
    Interactions.cursorCenter
    .trigger('mousedown', { which: 1 }) // Simulate mouse down
    .trigger('mousemove', { clientX: 1000, clientY: 800 }) // Move the element to a new position
    cy.get('body').should('have.css', 'cursor', 'auto')
    Interactions.cursorCenter.trigger('mouseup'); // Simulate mouse up
    });

  it('Test Draggable - should drag element Cursor position Top Left', () => {
    cy.visit('/dragabble');
    Interactions.draggableCursorStyle.click()
    cy.wait(3000);
    Interactions.cursorTopLeft
    .trigger('mousedown', { which: 1 }) // Simulate mouse down
    .trigger('mousemove', { clientX: 1000, clientY: 800 }) // Move the element to a new position
    Interactions.cursorTopLeft.should('have.css', 'cursor', 'move')
    Interactions.cursorTopLeft.trigger('mouseup'); // Simulate mouse up
    });

});

