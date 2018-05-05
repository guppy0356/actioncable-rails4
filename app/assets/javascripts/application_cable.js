// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = Cable.createConsumer("ws://localhost:28080");

}).call(this);
