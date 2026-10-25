
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const clinicLocations = [
  {
    id: 1,
    name: "Clinic 1",
    position: [34.3529, 62.2040],
  },
  {
    id: 2,
    name: "Clinic 2",
    position: [34.3400, 62.1900],
  },
  {
    id: 3,
    name: "Clinic 3",
    position: [34.3650, 62.2200],
  },
];

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function MapLocation() {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Clinic Locations
      </h2>

      <div className="h-[800px] w-full overflow-hidden rounded-lg">
        <MapContainer
          center={[34.3529, 62.2040]}
          zoom={12}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {clinicLocations.map((clinic) => (
            <Marker
              key={clinic.id}
              position={clinic.position}
              icon={redIcon}
            >
              <Popup>{clinic.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapLocation;
