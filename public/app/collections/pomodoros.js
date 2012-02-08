App.Collections.Pomodoros = Backbone.Collection.extend({
  model: App.Models.Pomodoro,
  localStorage: new Store('pomodoros')
});
