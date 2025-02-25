const { defineConfig } = require("cypress");
const path = require("path");
const fs = require("fs");

function loadConfigFile(env) {
  const configPath = path.resolve(__dirname, `./config/${env}.config.js`);

  if (fs.existsSync(configPath)) {
    console.log(`✅ Loading config from: ${configPath}`);
    return require(configPath);
  } else {
    console.warn(`⚠️ Config file for '${env}' not found. Using default.`);
    return {};
  }
}

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

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporterConfig.json",
  },

  env: {
    envName: "Default",
    baseUrl: "https://the-internet.herokuapp.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Ensure this runs only in Node.js
      const env = config.env.configFile || "qa"; // Default to "qa"
      const externalConfig = loadConfigFile(env);

      // Merge external env variables
      config.env = { ...config.env, ...externalConfig.env };

      console.log("🔹 Final merged env:", config.env);

      // Must return updated config
      return config;
    },

    // Default baseUrl (can be overridden in external config)

    specPattern: "cypress/(integration|e2e)/**/*.cy.{js,jsx,ts,tsx}",
  },

  video: true,
  videosFolder: "cypress/videos",
  videoCompression: false,
  trashAssetsBeforeRuns: true,
});
