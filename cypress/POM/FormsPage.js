class FormsPage {
get getUrl() {
    return cy.visit('https://demoqa.com/automation-practice-form');
  }

get firstNameInput() {
    return cy.get('#firstName');
  }

 get lastNameInput() {
    return cy.get('#lastName');
  }

get emailInput() {
    return cy.get('#userEmail');
  }

get genderRadio() {
    return cy.get('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label');
  }

get phoneNumberInput() {
    return cy.get('#userNumber');
  }

get dateOfBirthInput() {
    return cy.get('#dateOfBirthInput');
  }

get todayDatePicker() {
    return cy.get('.react-datepicker__day--today');
  }

get subjectsInput() {
    return cy.get('#subjectsContainer');
  }

get hobbiesCheckbox() {
    return cy.get('#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label');
  }

get pictureUploadInput() {
    return cy.get('#uploadPicture');
  }

get currentAddressInput() {
    return cy.get('#currentAddress');
  }

get stateDropdown() {
    return cy.get('#state > div > div.css-1wy0on6');
  }

get cityDropdown() {
    return cy.get('#city > div > div.css-1wy0on6');
  }

get submitButton() {
    return cy.get('#submit');
  }

get successMessage() {
    return cy.contains('Thanks for submitting the form');
  }

get closeButton() {
    return cy.contains('Close');
  }
}


  export default new FormsPage();
  