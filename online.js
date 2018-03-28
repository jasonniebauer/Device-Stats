'use strict';

// check if device is online
var online = navigator.onLine;
console.log('Device is' + (online ? ' ' : ' not ') + 'online.');
if(online){
  
}

if (navigator.onLine) {
  console.log('online');
} else {
  console.log('offline');
}

window.addEventListener('offline', function(e) {
  console.log('offline');
});

window.addEventListener('online', function(e) {
  console.log('online');
});
