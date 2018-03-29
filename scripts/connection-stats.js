'use strict';

/***********************************
* Network Information API
* https://wicg.github.io/netinfo
************************************
* returns:
*
* NetworkInformation {
*   downlink: 10,
*   downlinkMax: Infinity,
*   effectiveType: "4g",
*   onchange: null,
*   ontypechange: null,
*   rtt: 100,
*   type: "wifi"
* }
*
***********************************/

// Check support for network connection
if (navigator.connection) {
  // network connection detection is supported
  var connection = navigator.connection;
  
  switch (conntection.effectiveType) {
    case '2g':
      // Do something
      break;
    case '3g':
      // Do something
      break;
    case '4g':
      // Do something
      break;
    case 'slow-2g':
      // Do something
      break;
  }
  
  switch (connection.type) {
    case 'bluetooth':
      // Do something
      break;
    case 'cellular':
      // Do something
      break;
    case 'ethernet':
      // Do something
      break;
    case 'mixed':
      // Do something
      break;
    case 'none':
      // Do something
      break;
    case 'other':
      // Do something
      break;
    case 'unknown':
      // Do something
      break;
    case 'wifi':
      // Do something
      break;
    case 'wimax':
      // Do something
      break;
  }
  
  function updateConnectionStatus() {
    // console.log("Connection type changed from " + type + " to " + connection.type);
  }

connection.addEventListener('typechange', updateConnectionStatus);

connection.addEventListener('change', updateConnectionStatus);

  console.log(connection);
} else {
  
}
