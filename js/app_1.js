///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'jenlainacoyle.91d7bf58'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiamVubGFpbmFjb3lsZSIsImEiOiI0ZEs2Y2lZIn0.bI5bfj0mTgm79wsgKJPw2g'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var dataFileToAdd = 'data/dc_national_parks.geojson';

var featureLayer = L.mapbox.featureLayer().loadURL(dataFileToAdd).addTo(map)

featureLayer.on('ready',function(){
  this.setStyle({
    'color':'#eco008',
    'fillColor':'#ec008c',
    'weight':4,
    'opacity':.7
  });
  map.fitBounds(featureLayer.getBounds());
});
