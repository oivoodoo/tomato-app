App.Views.Pomodoros.New = Backbone.View.extend({
  initialize: function(options) {
    this.collection = options.collection;

    _.bindAll(this);
    $('#new .create').bind('click', this.create);
    $('#new .cancel').bind('click', this.cancel);
  },

  render: function() {
    $(this.el).html(this.template());
  },

  create: function() {
    var self = this;

    this.collection.create({
      name: $('#new #name').val(),
      description: $('#new #description').val()
    }, {
      success: function() {
        self.goHome();
      },
      error: function(model, error) {
        $('#new #name').parent()
          .append($('<label for="name" generated="true" class="error">').html(error))
          .delay(3000).fadeIn(400, function() {
            $('#new .error').remove();
          });
      }
    });


    return false;
  },

  cancel: function() {
    this.goHome();
  },

  leave: function() {
    $('#new .cancel').unbind('click');
    $('#new .create').unbind('click');
    $('#new #name').val('');
    $('#new #description').val('');
  },

  goHome: function() {
    var router = new App.Routers.Pomodoros();
    router.navigate('', true);

    this.leave();
  }
});
