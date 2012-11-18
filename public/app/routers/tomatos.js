App.Routers.Tomatos = Backbone.Router.extend({
  routes: {
    '':    'index',
    'new': 'new',
    'timer?id=:id&minutes=:minutes&ui-state=dialog': 'timer',
    'show?id=:id': 'show'
  },

  initialize: function() {
    this.collection = new App.Collections.Tomatos();
    this.collection.fetch();
  },

  index: function() {
    var view = new App.Views.Tomatos.List({
      collection: this.collection
    });

    $('#home [data-role=content]').html(view.render().el);
    $('#home [data-role=listview]').listview();
  },

  'new': function() {
    var view = new App.Views.Tomatos.New({
      collection: this.collection
    });
  },

  show: function(id) {
    var tomato = this.collection.get(id);
    var view = new App.Views.Tomatos.Show({
      model: tomato
    });

    $('#show [data-role=content]').html(view.render().el);
    $('#show [data-role=collapsible]').collapsible();
  },

  timer: function(id, minutes) {
    var tomato = this.collection.get(id);
    var view = new App.Views.Tomatos.Timer({
      model: tomato,
      minutes: minutes
    });
  }
});
