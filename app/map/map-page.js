const MapViewModel = require("./map-view-model");
const mapsModule = require("nativescript-google-maps-sdk");
const geoJson = require('./data');

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

function onMapReady(args) {
    //console.log("onMapReady",args);
    const mapView = args.object;
    const marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(45.6522854,13.7661518);
    marker.title = "Colazione";
    marker.color ="green";
    marker.userData = {index: 1};
    mapView.addMarker(marker);

    const marker2 = new mapsModule.Marker();
    marker2.position = mapsModule.Position.positionFromLatLng(45.6494483851283454,13.763895034790037);
    marker2.title = "Colazione";
    marker2.color ="green";
    marker2.userData = {index: 1};
    mapView.addMarker(marker2);
}

function geoJsonMap(args){
    const mapView = args.object;
    geoJson.features.forEach(feature => {
        const marker = new mapsModule.Marker();
        marker.position = mapsModule.Position.positionFromLatLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
        marker.title = feature.properties.evento;
        marker.color ="blue";
        marker.userData = {index: 1};
        mapView.addMarker(marker);
    })
}

exports.geoJsonMap = geoJsonMap;
exports.onMapReady = onMapReady;
exports.onNavigatingTo = onNavigatingTo;
