var start = module.exports = function start(options){
  var client = this;
  return new Promise(function(resolve, reject){
    return client.connectedPromise
      .then(function(){
        client.socket.on('started', resolve);
        client.socket.on('errored', reject);
        
        client.socket.emit('start', options);
      });
  });
};