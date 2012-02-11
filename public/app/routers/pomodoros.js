App.Routers.Pomodoros = Backbone.Router.extend({
  routes: {
    '':         'index',
    'new':      'new',
    ':id':     'show'
  },

  index: function() {
    var collection = new App.Collections.Pomodoros();
    collection.fetch();

    var view = new App.Views.Pomodoros.List({
      collection: collection
    });

    $('#container').html(view.render().el);
    $('#container ul').listview();
  },

  'new': function() {
    var collection = new App.Collections.Pomodoros();
    collection.fetch();

    var view = new App.Views.Pomodoros.New({
      collection: collection
    });
  },

  show: function(id) {
    debugger;

    var pomodoro = new App.Models.Pomodoro({ id: id });
    pomodoro.fetch();

    var view = new App.Views.Pomodoros.Show({
      model: pomodoro
    });
  }
});
