App.Collections.tomatos = Backbone.Collection.extend({
  model: App.Models.tomato,
  localStorage: new Store('tomatos')
});
