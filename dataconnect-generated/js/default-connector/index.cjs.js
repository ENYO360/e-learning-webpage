const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'e-learning-webpage',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

