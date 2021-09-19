mapboxgl.accessToken = 'pk.eyJ1IjoiYXNodXRvc2gxMzAzMjAwMiIsImEiOiJja2h0ZjVjYjkwYTRrMnNwNTE1dGprMGhsIn0.6AuM-xPlizvXnEzZiD5tPA';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [85.816574, 20.254713],
zoom: 13
});
 
map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);

var marker = new mapboxgl.Marker()
.setLngLat([85.816574,20.254713])
.addTo(map);