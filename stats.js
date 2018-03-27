'use strict';

// https://w3c.github.io/battery/#the-navigator-interface
// We get the initial value when the promise resolves ...
//
// result:
//
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
  
  var charging        = battery.charging;
  var chargingTime    = battery.chargingTime;
  var dischargingTime = battery.dischargingTime;
  var level           = Math.floor(battery.level * 100);
  var levelIndicator  = document.getElementById('levelIndicator');
  var levelPercentage = document.getElementById('levelPercentage');
  var dischardText    = document.getElementById('dischargeText');
  var dischargeHours  = document.getElementById('dischargeHours');
  var dischargeMins   = document.getElementById('dischargeMins');
  
  
  if(!charging){
    var dischargeDecimal = (dischargingTime / 3600);
    var arrayDecimal = dischargeDecimal.toString().split('.');
    
    if(dischargeDecimal > 1) {
      dischargeHours.textContent = arrayDecimal[0];
      dischargeMins.textContent = (arrayDecimal[1] * 60) / 100;
    } else {
      
      dischargeHours.textContent = arrayDecimal[0];
      dischargeHours.textContent = 0;
      // dischargeMins.textContent = arrayDecimal[1];
    }
  // charging = true
  } else {
    // Output to HTML elements...
    dischargeText.textContent   = 'Charging...';
    document.getElementById('tester').style.display = 'none';
  }
  
  // Output to HTML elements...
  levelPercentage.textContent = level;
  levelIndicator.style.width = ((level * 76) / 100 )+'px';
  // dischargeHours.textContent = ;
  // dischargeMins.textContent = ;
  
  
  
  // ... and any subsequent updates.
  battery.onlevelchange = function() {
    levelIndicator.style.width = ((Math.floor(this.level * 100) * 76) / 100 )+'px';
    levelPercentage.textContent = Math.floor(this.level * 100);
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
