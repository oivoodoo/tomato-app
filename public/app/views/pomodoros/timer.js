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
      self.leave();
      $('#timer').dialog('close');
    });

    this.render();
  },

  render: function() {
    $.mobile.changePage('#timer', {
      transition: "slide",
      changeHash: false
    });

    var self = this;

    this.startTimer(this.minutes, function() {
      self.breakTime.call(self);
    });

    return this;
  },

  startTimer: function(minutes, action) {
    var self = this;

    var seconds = 0;
    this.timer = setInterval(function() {
      if (seconds % 60 === 0) {
        minutes -= 1;
        seconds = 60;
      }
      seconds -= 1;

      if (minutes === 0 && seconds === 0) {
        seconds = 0;
        self.cleanupTimer.call(self);
        action.call(self);
      }

      self.$('.minutes').html(minutes);
      self.$('.seconds').html(seconds);
    }, 1000);
  },

  cleanupTimer: function() {
    // timer preferences
    $('#timer .minutes').text(0);
    $('#timer .seconds').text(0);

    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  breakTime: function() {
    var self = this;
    $('#timer h1').text('Break Time');
    this.startTimer(5, function() {
      self.model.set({ status: 'completed' });
      var router = new App.Routers.Pomodoros();
      router.navigate('', true);
      self.leave();
    });
  },

  leave: function() {
    $(this.el).unbind('dialogclose');
    this.$('.cancel').unbind('dialogclose');
  }
});
