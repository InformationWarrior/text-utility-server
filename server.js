const startServers = require('./App/bootstrap/startServer');

(async () => {
  try {
    await startServers()
  } catch (error) {
    console.error('❌ Error starting the server:', error)
  }
})();