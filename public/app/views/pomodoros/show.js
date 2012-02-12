App.Views.Pomodoros.Show = Backbone.View.extend({
  tagName: 'div',
  attributes: { 'data-role': 'collapsible' },

  initialize: function(options) {
    this.collection = options.collection;

    _.bindAll(this);
    $('#show .remove').bind('click', this.remove);
    $('#show .cancel').bind('click', this.cancel);
    $('#show [data-role=footer] li').bind('click', this.start);
  },

  render: function() {
    $(this.el).empty();
    $(this.el).append($('<h3>').html(this.model.get('name')));
    $(this.el).append($('<p>').html(this.model.get('description')));

    return this;
  },

  remove: function() {
    this.model.destroy();

    this.goHome();
  },

  cancel: function() {
    this.goHome();
  },

  start: function() {

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
