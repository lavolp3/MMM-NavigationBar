/* Magic Mirror
 * Module: MMM-NavigationBar
 * Author: Dirk Kovert (lavolp3)
 * jshint esversion: 6
 */


Module.register("MMM-NavigationBar", {

  defaults: {
    updateInterval: 10 * 60 * 1000,     //10 minutes
    sections: ["home", "calendar", "weather", "music", "soccer", "stocks", "home automation"],
    sectionIcons: {
      "home": "home",
      "weather": "cloud-sun-rain",
      "music": "play-circle",
      "calendar": "calendar-alt",
      "soccer": "futbol",
      "home automation": "home-signal",
      "stocks": "chart-line",
    },
    iconSize: 60,
    debug: true
  },

  start: function() {
    console.log("Starting Navigation Bar");
    this.updateDom();
  },

  getStyles: function() {
    return [this.file("navigation.css")];
  },

  getDom: function() {
    var container = document.createElement("div");
    container.className = "naviContainer";
    self = this;
    for (var i = 0; i < this.config.sections.length; i++) {
      var buttonDiv = document.createElement("div");
      buttonDiv.className = "naviButton fas fa-"+this.config.sectionIcons[this.config.sections[i]];
      buttonDiv.style.fontSize = this.config.iconSize + "px";
      button.addEventListener("click", function() {
        self.sendNotification("PAGE_CHANGED", i);
      });
      //this.log(buttonDiv.className);
      container.appendChild(buttonDiv);
    }
    return container;
  },

  socketNotificationReceived: function(notification, payload) {
  },


  log: function(msg) {
      if (this.config && this.config.debug) {
          Log.info(`${this.name}: ` + JSON.stringify(msg));
      }
  },

});
