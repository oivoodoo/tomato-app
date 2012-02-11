App.Views.Pomodoros.List = Backbone.View.extend({
  el: '#pomodoros-list',

  initialize: function(options) {
    this.collection = options.collection;
  },

  render: function() {
    var self = this;

    $(this.el).empty();

    var views = [];
    this.collection.each(function(item) {
      var view = new App.Views.Pomodoros.Item({ model: item });
      $(self.el).append(view.render().el);
    });

    return this;
  }
});
