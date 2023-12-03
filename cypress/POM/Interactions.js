class Interaction{
      get getURL(){
        return 'https://demoqa.com/'
}
      get sortableListOne() {
        return cy.get('#demo-tabpane-list > div > div:nth-child(1)');
      }
    
      get sortableListThree() {
        return cy.get('#demo-tabpane-list > div > div:nth-child(3)');
      }
      get sortableGridTab() {
        return cy.get('#demo-tab-grid');
      }
      get sortableGridOne() {
        return cy.get('#demo-tabpane-grid > div > div > div:nth-child(1)');
      }
    
      get sortableGridThree() {
        return cy.get('#demo-tabpane-grid > div > div > div:nth-child(3)');
      }
      get firstListItem() {
        return cy.get('#verticalListContainer > li:nth-child(1)');
      }
    
      get secondListItem() {
        return cy.get('#verticalListContainer > li:nth-child(2)');
      }


      get SelectableGridTab(){
        return cy.get('#demo-tab-grid')
      }
      
      get firstGridItem() {
        return cy.get('#row1 > li:nth-child(1)')
      }
    
      get thirdGridItem() {
        return cy.get('#row1 > li:nth-child(3)')
      }

      get Drag() {
        return cy.get('#draggable')
      }
      
      get Drop() {
        return cy.get('#droppable')
      }

      get AxisRestricted () {
        return cy.get('#draggableExample-tab-axisRestriction')
      }
      get restrictedX () {
        return cy.get('#restrictedX')
      }
      get restrictedY () {
        return cy.get('#restrictedY')
      }

      get containerRestriction () {
        return cy.get('#draggableExample-tab-containerRestriction')
      }
      get containmentWrapper () {
        return  cy.get('#containmentWrapper > div')
      }
      get draggableWidget() {
        return  cy.get('#draggableExample-tabpane-containerRestriction > div.draggable.ui-widget-content.m-3 > span')
      }
      get droppableTabAccept() {
        return cy.get('#droppableExample-tab-accept')
      }
    
      get acceptableElement() {
        return cy.get('#acceptable');
      }
    
      get acceptDropContainer() {
        return cy.get('#acceptDropContainer #droppable');
      }
    
      get droppedText() {
        return cy.get('p');
      }

      get preventPropagationTab() {
        return cy.get('#droppableExample-tab-preventPropogation')
      }
    
      get dragBox() {
        return cy.get('#dragBox');
      }
    
      get notGreedyDropBox() {
        return cy.get('#notGreedyDropBox');
      }
    
      get notGreedyInnerDropBox() {
        return cy.get('#notGreedyInnerDropBox');
      }
      get revertableTab() {
        return cy.get('#droppableExample-tab-revertable');
      }
    
      get revertableDraggable() {
        return cy.get('#revertable');
      }
    
      get revertableDropContainer() {
        return cy.get('#revertableDropContainer');
      }
    
      get dropBox() {
        return cy.get('#revertableDropContainer .drop-box');
      }
    
      get notRevertableDraggable() {
        return cy.get('#notRevertable');
      }
      get draggableCursorStyle() {
        return cy.get('#draggableExample-tab-cursorStyle')
      }
      get cursorCenter() {
        return cy.get('#cursorCenter')
      }
      get cursorTopLeft() {
        return cy.get('#cursorTopLeft')
      }

      
}
export default new Interaction();