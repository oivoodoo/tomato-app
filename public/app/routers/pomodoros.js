App.Routers.Pomodoros = Backbone.Router.extend({
  routes: {
    '':    'index',
    'new': 'new',
    'timer?id=:id&minutes=:minutes&ui-state=dialog': 'timer',
    'show?id=:id': 'show'
  },

  index: function() {
    var collection = new App.Collections.Pomodoros();
    collection.fetch();

    var view = new App.Views.Pomodoros.List({
      collection: collection
    });

    $('#home [data-role=content]').html(view.render().el);
    $('#home [data-role=listview]').listview();
  },

  'new': function() {
    var collection = new App.Collections.Pomodoros();
    collection.fetch();

    var view = new App.Views.Pomodoros.New({
      collection: collection
    });
  },

  show: function(id) {
    var collection = new App.Collections.Pomodoros();
    collection.fetch();

    var pomodoro = collection.get(id);

    var view = new App.Views.Pomodoros.Show({
      model: pomodoro
    });

    $('#show [data-role=content]').html(view.render().el);
    $('#show [data-role=collapsible]').collapsible();
  },

  timer: function(id, minutes) {
    var view = new App.Views.Pomodoros.Timer({
      minutes: minutes
    });
  }
});
