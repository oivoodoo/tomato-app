App.Models.Tomato = Backbone.Model.extend({
  initialize: function() {
    this.localStorage = this.collection.localStorage;
  },

  validate: function(attributes) {
    if (_.isEmpty(attributes.name)) {
      return "This field is required.";
    }
  },

  isCompleted: function() {
    return this.get('status') === 'completed';
  }
});
