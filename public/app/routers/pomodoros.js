App.Routers.Pomodoros = Backbone.Router.extend({
  routes: {
    '':     'index',
    'new':  'new'
  },

  index: function() {
    var collection = new App.Collections.Pomodoros();
    collection.fetch();

    var view = new App.Views.Pomodoros.List({
      collection: collection
    });

    $('#container').html(view.render().el);
  },

  'new': function() {
    var collection = new App.Collections.Pomodoros();
    collection.fetch();

    var view = new App.Views.Pomodoros.New({
      collection: collection
    });
  }
});
