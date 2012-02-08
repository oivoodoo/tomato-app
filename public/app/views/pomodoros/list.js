App.Views.Pomodoros.List = Backbone.View.extend({
  el: '#container',

  initialize: function() {
    this.render();
  },

  render: function() {
    $(this.el).html('test');
  }
});
