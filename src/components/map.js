import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { geolocated } from "react-geolocated";

const DEFAULT_LANGITUDE = 14.610276;
const DEFAULT_LATITUDE = 40.783546;

class Maps extends React.Component {
  render() {
    return (
      <Map center={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]} zoom={14}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy;<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]}>
          <Popup>Trasporti Amatrudo srl, Via Zeccagnuolo, n. 19</Popup>
        </Marker>
      </Map>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(Maps);
