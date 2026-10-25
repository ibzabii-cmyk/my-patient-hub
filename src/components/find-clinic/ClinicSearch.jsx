
import { useState } from "react";
import {
  Search,
  MapPin,
  LocateFixed,
  LoaderCircle,
} from "lucide-react";

function ClinicSearch({ onSearch }) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Search for clinics using entered values
  const handleSearch = (event) => {
    event.preventDefault();

    onSearch?.({
      search: search.trim(),
      location: location.trim(),
    });

    setMessage("");
  };

  // Get the user's current location
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setMessage("Geolocation is not supported.");
      return;
    }

    setLoading(true);
    setMessage("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLocation(
          `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`
        );

        setLoading(false);
      },
      () => {
        setMessage(
          "Unable to access your location. Please enter it manually."
        );
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  };

  return (
    <section className="rounded-b-3xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 px-5 pb-12 pt-8 text-white sm:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-4 text-3xl font-bold sm:text-5xl">
          Find a Clinic
        </h1>

        <p className="mb-9 text-sm text-white/90 sm:text-lg">
          Search Clinics and schedule an appointment
          with doctors through Clinic
        </p>

        <form
          onSubmit={handleSearch}
          className="flex flex-col items-stretch justify-center gap-3 lg:flex-row"
        >
          {/* Clinic name search */}
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-gray-600 lg:w-64">
            <Search size={20} className="shrink-0" />

            <input
              type="text"
              placeholder="Search"
              aria-label="Search clinics"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>

          {/* Location input */}
          <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-gray-600 lg:w-72">
            <MapPin size={20} className="shrink-0" />

            <input
              type="text"
              placeholder="Zip Code or Neighborhood"
              aria-label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>

          {/* Current location button */}
          <button
            type="button"
            onClick={handleCurrentLocation}
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 text-sm font-bold text-gray-800 transition hover:bg-cyan-300 disabled:opacity-60"
          >
            {loading ? (
              <LoaderCircle
                size={18}
                className="animate-spin"
              />
            ) : (
              <LocateFixed size={18} />
            )}

            CURRENT
          </button>

          {/* Search button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 text-sm font-bold text-gray-800 transition hover:bg-cyan-300"
          >
            <Search size={18} />
            SEARCH
          </button>
        </form>

        {message && (
          <p role="status" className="mt-4 text-sm text-white">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default ClinicSearch;
