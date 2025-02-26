const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    envName: "qa",
    baseUrl: "https://speechanalyzer.elsaspeak.com",
    username: "qa-username",
    password: "qa-password",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
