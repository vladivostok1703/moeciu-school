import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



const DefaultIcon = L.icon({
  iconUrl: '/8178.png',
  iconSize: [32,32],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function LocationSection() {
  const position: [number, number] = [45.502717,25.336684]; 

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>
          Școala Gimnazială Moieciu de Jos <br /> Moieciu de Jos, Brasov
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
