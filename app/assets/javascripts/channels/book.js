App.book = App.cable.subscriptions.create('BookChannel', {
  connected: function() {},
  disconnected: function() {},
  received: function(book) {
    return $('#book-index').append('<p><span style="font-weight:bold">' + book['title'] + '</span> is ' + book['price'] + 'yen</p>');
  }
});
