'use strict';

// NetworkInformation {
//   downlink: 10,
//   downlinkMax: Infinity,
//   effectiveType: "4g",
//   onchange: null,
//   ontypechange: null,
//   rtt: 100,
//   type: "wifi"
// }

// support for network connection
if (navigator.connection) {
  var connectionInfo = navigator.connection;

  console.log(connectionInfo);
} else {
  
}
