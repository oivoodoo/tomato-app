App.Views.Pomodoros.New = Backbone.View.extend({
  initialize: function(options) {
    this.collection = options.collection;

    _.bindAll(this);
    $('#new .create').bind('click', this.create);
  },

  render: function() {
    $(this.el).html(this.template());
  },

  create: function() {
    this.collection.create({
      name: $('#new #name').val(),
      decription: $('#new #description').val()
    });

    var router = new App.Routers.Pomodoros();
    router.navigate('', true);

    // We should unbind all events and clean form.
    this.leave();

    return false;
  },

  leave: function() {
    $('#new .create').unbind('click');
    $('#new #name').val('');
    $('#new #description').val('');
  }
});
