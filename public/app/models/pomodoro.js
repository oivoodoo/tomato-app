App.Models.Pomodoro = Backbone.Model.extend({
  validate: function(attributes) {
    if (_.isEmpty(attributes.name)) {
      return "This field is required.";
    }
  }
});
