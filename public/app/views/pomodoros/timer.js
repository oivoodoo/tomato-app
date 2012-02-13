App.Views.Pomodoros.Timer = Backbone.View.extend({
  el: $('#timer'),

  initialize: function(options) {
    var self = this;

    this.minutes = options.minutes;

    _.bindAll(this);

    $('#timer').bind('dialogclose', function() {
      self.leave();
      self.cleanupTimer.call(self);
    });

    this.$('.cancel').bind('click', function(event) {
      event.preventDefault();
      self.cleanupTimer.call(self);
      $(self.el).dialog('close');
    });

    this.render();
  },

  render: function() {
    $.mobile.changePage('#timer', {
      transition: "slide",
      changeHash: false
    });

    var minutes = parseInt(this.minutes, 10);
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

      self.$('.minutes').html(minutes);
      self.$('.seconds').html(seconds);
    }, 1000);

    return this;
  },

  cleanupTimer: function() {
    // timer preferences
    $('#timer .minutes').text(0);
    $('#timer .seconds').text(0);

    if (this.timer) {
      clearInterval(this.timer);
    }
  },

  leave: function() {
    $(this.el).unbind('dialogclose');
    this.$('.cancel').unbind('dialogclose');
  }
});
