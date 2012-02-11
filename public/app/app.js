var App = {
  Routers: {},
  Models: {},
  Collections: {},
  Views: {
    Pomodoros: {}
  }
};

// initialize application settings and default router.
App.init = function() {
  var router = new App.Routers.Pomodoros();

  Backbone.history.start();
};

$(document).bind("mobileinit", function() {
  $.mobile.linkBindingEnabled = false;
  $.mobile.pushStateEnabled = false;
  $.mobile.hashListeningEnabled = false;
});
