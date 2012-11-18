App.Views.Tomatos.Show = Backbone.View.extend({
  tagName: 'div',
  attributes: { 'data-role': 'collapsible' },

  initialize: function(options) {
    var self = this;

    this.collection = options.collection;

    _.bindAll(this);
    $('#show .remove').bind('click', this.remove);
    $('#show .cancel').bind('click', this.cancel);
    $('#show [data-role=footer] li').bind('click', function() {
      var minutes = $(this).find('a').text();

      var router = new App.Routers.Tomatos();
      router.navigate('timer?id=' + self.model.id +
                      '&minutes=' + minutes +
                      '&ui-state=dialog', true);
    });
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

  leave: function() {
    $('#show .cancel').unbind('click');
    $('#show .remove').unbind('click');
    $('#show [data-role=footer] li').unbind('click');
  },

  goHome: function() {
    var router = new App.Routers.Tomatos();
    router.navigate('', true);
    this.leave();
  }
});
