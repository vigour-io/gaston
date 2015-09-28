#!/usr/bin/env node

var Config = global.Config = require('../lib/config')

var log = require('npmlog')
var daemon = require('../lib/daemon')

Config.init()
  .then(daemon.start)
  .then(onStarted)
  .catch(onError)

function onStarted () {
  log.info('gaston', 'gaston running as a daemon on port', daemon.port)
  log.info('gaston', 'http server running on port', daemon.httpServer.port)
}

function onError (err) {
  log.error('gaston', err.stack)
}
