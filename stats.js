'use strict';

// https://w3c.github.io/battery/#the-navigator-interface
// We get the initial value when the promise resolves ...
// result:
// BatteryManagery {
// 	charging: false,
// 	chargingTime: Infinity,
// 	dischargingTime: 8940,
// 	level: 0.59,
// 	onchargingchange: null,
// 	onchargingtimechange: null,
// 	ondischargingtimechange: null,
// 	onlevelchange: null
// }
navigator.getBattery().then(function(battery) {
  console.log(battery);
  var charging = battery.charging;
  var chargingTime = battery.charginTime;
  var dischargingTime = battery.dischargingTime;
  var level = battery.level;
  
  
  var dischargeDecimal = (dischargingTime / 3600);
  //  (.XX x 100 ) / 60
  //  .XX      ?
  //  ---  =  ----
  //  100      60
  
  console.log(window.performance.memory);
  
  
  
  var batteryLevel = Math.floor(level * 100) ;
  console.log('Battery level: ' + batteryLevel + '%');
  // ... and any subsequent updates.
  battery.onlevelchange = function() {
    console.log(this.level);
  };
});

function updateBatteryStatus(battery) {
  document.querySelector('#charging').textContent = battery.charging ? 'charging' : 'not charging';
  document.querySelector('#level').textContent = battery.level;
  document.querySelector('#dischargingTime').textContent = battery.dischargingTime / 60;
  
  navigator.getBattery().then(function(battery) {
  // Update the battery status initially when the promise resolves ...
    updateBatteryStatus(battery);

    // .. and for any subsequent updates.
    battery.onchargingchange = function () {
      updateBatteryStatus(battery);
    };

    battery.onlevelchange = function () {
      updateBatteryStatus(battery);
    };

    battery.ondischargingtimechange = function () {
      updateBatteryStatus(battery);
    };
  });
}
