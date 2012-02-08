App.Routers.Pomodoros = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function() {
    var collection = new App.Collections.Pomodoros();
    collection.fetch({
      success: function() {
        new App.Views.Pomodoros.List({
          collection: collection
        });
      }
    });
  }
});
