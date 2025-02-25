const { defineConfig } = require('cypress');


module.exports = defineConfig({
  projectId: "hgwkwi",
  viewportWidth: 1920,
  viewportHeight: 1080,

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporterConfig.json',
  },

  e2e: {
    baseUrl: "https://the-internet.herokuapp.com/",
    setupNodeEvents(on, config) {

    },
    specPattern: 'cypress/(integration|e2e)/**/*.cy.{js,jsx,ts,tsx}',
  },

  "video": true,
  "videosFolder": "cypress/videos",
  "videoCompression": false,
  "trashAssetsBeforeRuns": true
});
