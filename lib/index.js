var client = require('./io-client.js')

module.exports = {
  info: require('./api/info').bind(client),
  bundle: require('./api/bundle').bind(client),
  build: require('./api/build').bind(client),
  getProjects: require('./api/get-projects').bind(client),
  startProject: require('./api/start-project').bind(client),
  stopProject: require('./api/stop-project').bind(client),
  unregisterProject: require('./api/unregister-project').bind(client)
}
