const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    envName: "qa",
    apiUrl: "https://speechanalyzer.elsaspeak.com/sign-in",
    username: "qa-username",
    password: "qa-password",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
