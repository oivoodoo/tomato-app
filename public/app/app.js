var App = {
  Routers: {},
  Models: {},
  Collections: {},
  Views: {
    Tomatos: {}
  }
};

// initialize application settings and default router.
App.init = function() {
  var router = new App.Routers.Tomatos();
  Backbone.history.start();
};

$(function() {
  $(window).resize( function(){
      $('html').toggleClass('landscape, portrait');
  });
});

