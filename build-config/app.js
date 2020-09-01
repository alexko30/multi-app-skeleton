const parseCommandLine = require('minimist');

const { app } = parseCommandLine(process.argv.slice(2));
const appsConfig = {
  client: {
    port: 3000,
    startupFileName: 'index.client.jsx'
  },
  tenant: {
    port: 3001,
    startupFileName: 'index.tenant.jsx'
  }
};

module.exports = appsConfig[app];