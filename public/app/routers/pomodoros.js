App.Routers.Pomodoros = Backbone.Router.extend({
  routes: {
    '':    'index',
    'new': 'new',
    'timer?id=:id&minutes=:minutes&ui-state=dialog': 'timer',
    'show?id=:id': 'show'
  },

  initialize: function() {
    this.collection = new App.Collections.Pomodoros();
    this.collection.fetch();
  },

  index: function() {
    var view = new App.Views.Pomodoros.List({
      collection: this.collection
    });

    $('#home [data-role=content]').html(view.render().el);
    $('#home [data-role=listview]').listview();
  },

  'new': function() {
    var view = new App.Views.Pomodoros.New({
      collection: this.collection
    });
  },

  show: function(id) {
    var pomodoro = this.collection.get(id);
    var view = new App.Views.Pomodoros.Show({
      model: pomodoro
    });

    $('#show [data-role=content]').html(view.render().el);
    $('#show [data-role=collapsible]').collapsible();
  },

  timer: function(id, minutes) {
    var pomodoro = this.collection.get(id);
    var view = new App.Views.Pomodoros.Timer({
      model: pomodoro,
      minutes: minutes
    });
  }
});
