const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  e2e: {
    "baseUrl": "https://demoqa.com/", //this url placed here can be called(used) trought the whole project trough using cy.visit ('/') which will wisit this base url and if you have to extend the url you just add the rest of the path cy.visit('/sortable') will lead you to https://demoqa.com/sortable

    //supportFile: false,
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}'
    },
    
});
