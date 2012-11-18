App.Views.Tomatos.List = Backbone.View.extend({
  tagName: 'ul',
  attributes: {
    'data-role': 'listview',
    'data-inset': 'true',
    'data-filter': 'true'
  },

  initialize: function(options) {
    var self = this;

    this.collection = options.collection;

    _.bindAll(this);
    this.$('li a').live('click', function() {
      self.leave();

      var id = $(this).data('id');

      // This fix problem with jquery data cache.
      $('#show').data('url', '#show?id=' + id);
      $.mobile.changePage('#show?id=' + id);
    });
  },

  render: function() {
    var self = this;

    var views = [];
    this.collection.each(function(item) {
      var view = new App.Views.Tomatos.Item({ model: item });
      $(self.el).append(view.render().el);
    });

    return this;
  },

  leave: function() {
    this.$('li a').unbind('click');
  }
});
