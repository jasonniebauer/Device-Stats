'use strict';

// Learn more
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation


//
if (navigator.geolocation) {
  /* geolocation is available */
  console.log('geolocation is available');
  
  let geo = navigator.geolocation;
  
  // console.log(geo);
  
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   // do_something(position.coords.latitude, position.coords.longitude);
  //   console.log('Lat:' + position.coords.latitude + ', Long: ' + position.coords.longitude);
  // });
  
  
} else {
  /* geolocation IS NOT available */
  console.log('geolocation IS NOT available');
}
