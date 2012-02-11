App.Views.Pomodoros.Show = Backbone.View.extend({
  initialize: function(options) {
    this.collection = options.collection;

    _.bindAll(this);
    $('#show .remove').bind('click', this.remove);
    $('#show .cancel').bind('click', this.cancel);
  },

  render: function() {
    return this;
  },

  remove: function() {
    this.model.destroy();

    this.goHome();
  },

  cancel: function() {
    this.goHome();
  },

  leave: function() {
    $('#show .cancel').unbind('click');
    $('#show .remove').unbind('click');
  },

  goHome: function() {
    var router = new App.Routers.Pomodoros();
    router.navigate('', true);

    this.leave();
  }
});
