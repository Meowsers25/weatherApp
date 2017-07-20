/*global $*/

 $(document).ready(function() {
     
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
            $("#data").html("latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude); 
         });
     }
 
    var api = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139"
    
    $.getJSON(api, function(data) {
       // alert(data.coord.lon);
    });
});
 
  
    
