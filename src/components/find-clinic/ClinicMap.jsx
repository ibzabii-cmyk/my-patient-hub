
import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import {
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";

// Custom clinic marker
const clinicIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width:38px;
      height:38px;
      background:#db2777;
      border:3px solid white;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      color:white;
      font-size:21px;
      font-weight:bold;
      box-shadow:0 3px 12px #0003;
    ">+</div>
  `,
  iconSize: [38, 38],
  iconAnchor: [19, 19],
});

// Move map when a clinic is selected
function MapController({ selectedClinic }) {
  const map = useMap();

  useEffect(() => {
    if (selectedClinic) {
      map.flyTo(
        [selectedClinic.lat, selectedClinic.lng],
        13,
        { duration: 1.2 }
      );
    }
  }, [selectedClinic, map]);

  return null;
}

function ClinicMap({
  clinics = [],
  selectedClinic,
  onSelectClinic,
}) {
  return (
    <div className="relative h-[450px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm lg:h-[650px]">
      <MapContainer
        center={[3.139, 101.6869]}
        zoom={10}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController selectedClinic={selectedClinic} />

        {clinics.map((clinic) => (
          <Marker
            key={clinic.id}
            position={[clinic.lat, clinic.lng]}
            icon={clinicIcon}
            eventHandlers={{
              click: () => onSelectClinic?.(clinic),
            }}
          >
            <Popup>
              <div className="min-w-48">
                <h3 className="mb-2 text-base font-bold text-gray-800">
                  {clinic.name}
                </h3>

                <p className="mb-2 flex items-start gap-1 text-sm text-gray-600">
                  <MapPin size={15} />
                  {clinic.address}
                </p>

                {clinic.phone && (
                  <p className="mb-2 flex items-center gap-1 text-sm text-gray-600">
                    <Phone size={15} />
                    {clinic.phone}
                  </p>
                )}

                {clinic.website && (
                  <a
                    href={clinic.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-semibold text-pink-600"
                  >
                    <ExternalLink size={15} />
                    Website
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => onSelectClinic?.(clinic)}
                  className="mt-3 w-full rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-700"
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="pointer-events-none absolute bottom-5 left-5 z-[400] rounded-xl bg-white/95 px-4 py-2 text-xs font-medium text-gray-700 shadow-md">
        {clinics.length} Clinics Found
      </div>
    </div>
  );
}

export default ClinicMap;
