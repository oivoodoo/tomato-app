App.Models.Pomodoro = Backbone.Model.extend({
  validate: function(attributes) {
    debugger;
    if (_.isEmpty(attributes.name)) {
      return "empty fields";
    }
  }
});
