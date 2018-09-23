const Client = require('./client/client')

module.exports = {
  onConnection: function(ws) {
    new Client(ws, this.wssEmitter)
  }
}