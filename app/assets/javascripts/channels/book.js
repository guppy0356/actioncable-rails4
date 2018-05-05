App.book = App.cable.subscriptions.create('BookChannel', {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    console.log(data)
  }
});
