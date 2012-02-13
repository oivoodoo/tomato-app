App.Views.Pomodoros.Show = Backbone.View.extend({
  tagName: 'div',
  attributes: { 'data-role': 'collapsible' },

  initialize: function(options) {
    var self = this;

    this.collection = options.collection;

    _.bindAll(this);
    $('#show .remove').bind('click', this.remove);
    $('#show .cancel').bind('click', this.cancel);

    $('#timer').bind('pagehide', function() {
      self.cleanupTimer.call(self);
    });

    $('#show [data-role=footer] li').bind('click', function() {
      $.mobile.changePage('#timer', 'pop', true, true);

      var minutes = $(this).find('a').text();
      var seconds = 0;

      self.timer = setInterval(function() {
        if (seconds % 60 === 0) {
          minutes -= 1;
          seconds = 60;
        }
        seconds -= 1;

        if (minutes === 0) {
          seconds = 0;
          clearInterval(timer);
          self.timer = null;
        }

        $('#timer .minutes').html(minutes);
        $('#timer .seconds').html(seconds);
      }, 1000);
    });
    $('#timer .cancel').bind('click', function(event) {
      event.preventDefault();
      self.cleanupTimer.call(self);
      $('#timer').dialog('close');
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
    $('#timer .cancel').unbind('click');
    $('#timer').unbind('pagehide');
  },

  cleanupTimer: function() {
    // timer preferences
    $('#timer .minutes').text(0);
    $('#timer .seconds').text(0);

    if (this.timer) {
      clearInterval(this.timer);
    }
  },

  goHome: function() {
    var router = new App.Routers.Pomodoros();
    router.navigate('', true);

    this.leave();
  }
});
