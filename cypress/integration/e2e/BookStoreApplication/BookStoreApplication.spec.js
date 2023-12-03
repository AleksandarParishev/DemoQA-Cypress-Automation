
import BookstoreApp from "../../../POM/BookstoreApp";
import Booksfixtures from "../../../fixtures/Booksfixtures.json"

describe('DemoQaSiteTesting', () => {
    beforeEach(() => {
        // This code will run before any test in this suite
        cy.on('uncaught:exception', () => false);
      });

    it.only('Register User', function () {
        //AlertsFramesWindowsPage.visitPage();
        cy.visit('/login')
        BookstoreApp.newUser.click()

        BookstoreApp.firstname.type('Aleksandar')
        BookstoreApp.lastname.type('Parishev')
        BookstoreApp.userName.type(Booksfixtures.loginData.username)
        BookstoreApp.password.type(Booksfixtures.loginData.password)

        cy.get('iframe')
        .first()
        .wrap({ foo: 'bar' }).its('quux').should('not.exist')

        BookstoreApp.register.click()
        });
    it('Bookstore Login', function () {

      //AlertsFramesWindowsPage.visitPage();
      cy.visit('/login')
      BookstoreApp.userName.type('Aleksandar')
      BookstoreApp.password.type('Aleksandar12345@')
      BookstoreApp.loginButton.click()
      cy.url().should('contain', 'profile' )
      })
    it('Bookstore add book', function () {

      //AlertsFramesWindowsPage.visitPage();

      let randomIndex; 

      cy.visit('/login')
      BookstoreApp.userName.type('Aleksandar')
      BookstoreApp.password.type('Aleksandar12345@')
      BookstoreApp.loginButton.click()
        cy.url().should('contain', 'profile' )
      
      
      
      cy.visit('/books')
      // cy.get("[href='\/books\?book\=9781449325862']").click()
      cy.location('pathname').should('equal', '/books')
      

    cy.get('div.action-buttons a')
    .should('exist')
    .should('be.visible')
    .then($links => {
      if ($links.length === 0) {
        // Handle the case where no matching elements are found
        throw new Error('No elements found with selector div.action-buttons a');
      }

      randomIndex = Math.floor(Math.random() * $links.length);
      let bookName = $links[randomIndex].innerText;
      cy.wrap($links[randomIndex]).click({force:true});
      cy.wrap(bookName).as('bookName');
    });

      cy.get('@bookName').then(bookName => {
          cy.get('#title-wrapper label#userName-value').should('contain.text', bookName)
      })

      cy.contains('Add To Your Collection').click({force:true})

      cy.contains('Profile').click({force: true})
      cy.contains('Delete All Books').click({force: true})
      BookstoreApp.closeSmallModalok.click()



      // cy.get("#addNewRecordButton").scrollIntoView().click({force:true})
      // cy.on('window:alert', (alertText) => {
      //     expect(alertText).to.equal('Book added to your collection.');
      //   });
      
        
    })

})

