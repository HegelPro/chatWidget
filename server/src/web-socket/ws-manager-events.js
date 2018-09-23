module.exports = {
  onConnection: function(ws) {
    this.wssEmitter.emit('addManager', ws)
  }
}