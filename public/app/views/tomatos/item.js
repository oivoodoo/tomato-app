App.Views.Tomatos.Item = Backbone.View.extend({
  template: _.template($('#tomato-item').html()),
  tagName: 'li',

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    if (this.model.isCompleted()) {
      $(this.el).addClass('completed');
    }

    return this;
  }
});
