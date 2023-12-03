import FormsPage from "../../../POM/FormsPage"

describe('DemoQaSiteTesting', () => {

it('Forms', () =>{
    cy.on('uncaught:exception', () => false);
    FormsPage.getUrl

    FormsPage.firstNameInput.click().type('Aleksandar')
    FormsPage.lastNameInput.type('Parishev')
    FormsPage.emailInput.type('aleksandar_parisev@yahoo.com')

    FormsPage.genderRadio.click()
    FormsPage.phoneNumberInput.type('1234567891')

    FormsPage.dateOfBirthInput.click()
    FormsPage.todayDatePicker.click()

    FormsPage.subjectsInput.type('onsubject')
    FormsPage.hobbiesCheckbox.click()

    FormsPage.pictureUploadInput.selectFile('flowers-276014_640.jpg')

    FormsPage.currentAddressInput.type('Bulevar')

    FormsPage.stateDropdown.click({force: true})
    cy.contains('Uttar Pradesh').click({force: true})
    FormsPage.cityDropdown.click({force: true})
    cy.contains('Lucknow').click({force: true})

    FormsPage.submitButton.click({force: true})

    cy.contains('Thanks for submitting the form')
    cy.contains('Close').scrollIntoView().click({force: true})
  })


})