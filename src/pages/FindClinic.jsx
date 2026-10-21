import { useOutletContext } from "react-router-dom";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPinned, List, Building2 } from "lucide-react";

import { clinics } from "../data/clinics";

import ClinicHeader from "../components/find-clinic/ClinicHeader";
import ClinicSearch from "../components/find-clinic/ClinicSearch";
import ClinicFilters, {
  initialFilters,
} from "../components/find-clinic/ClinicFilters";
import ClinicMap from "../components/find-clinic/ClinicMap";
import ClinicList from "../components/find-clinic/ClinicList";
import ClinicDetails from "../components/find-clinic/ClinicDetails";

function FindClinic() {
  const navigate = useNavigate();
const { openSidebar } = useOutletContext();
  // Map or List view
  const [activeView, setActiveView] = useState("map");

  // Search values
  const [searchValues, setSearchValues] = useState({
    search: "",
    location: "",
  });

  // Clinic filters
  const [filters, setFilters] = useState(initialFilters);

  // Selected clinic
  const [selectedClinic, setSelectedClinic] = useState(null);

  // Clinic details modal
  const [detailsClinic, setDetailsClinic] = useState(null);

  // Search handler
  const handleSearch = (values) => {
    setSearchValues(values);
    setSelectedClinic(null);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({ ...initialFilters, ages: [] });
    setSearchValues({ search: "", location: "" });
    setSelectedClinic(null);
  };

  // Filter clinics
  const filteredClinics = useMemo(() => {
    return clinics.filter((clinic) => {
      const search = searchValues.search.toLowerCase();
      const location = searchValues.location.toLowerCase();

      const matchesSearch =
        !search ||
        clinic.name.toLowerCase().includes(search) ||
        clinic.specialty.toLowerCase().includes(search) ||
        clinic.address.toLowerCase().includes(search);

      const matchesLocation =
        !location ||
        clinic.address.toLowerCase().includes(location) ||
        clinic.area.toLowerCase().includes(location);

      const matchesSpecialty =
        !filters.specialty ||
        clinic.specialty === filters.specialty;

      const matchesGender =
        !filters.gender ||
        clinic.gender === filters.gender;

      const matchesCondition =
        !filters.condition ||
        clinic.condition === filters.condition;

      const matchesLanguage =
        !filters.language ||
        clinic.language === filters.language;

      const matchesAge =
        filters.ages.length === 0 ||
        filters.ages.some((age) =>
          clinic.ages.includes(age)
        );

      const matchesOnline =
        !filters.online || clinic.online;

      const matchesPrimary =
        !filters.primary || clinic.primary;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesSpecialty &&
        matchesGender &&
        matchesCondition &&
        matchesLanguage &&
        matchesAge &&
        matchesOnline &&
        matchesPrimary
      );
    });
  }, [searchValues, filters]);

  // Select a clinic on the map
  const handleSelectClinic = (clinic) => {
    setSelectedClinic(clinic);
  };

  // Show clinic details
  const handleViewDetails = (clinic) => {
    setDetailsClinic(clinic);
  };

  // Navigate to Find Doctor
  const handleBookAppointment = (clinic) => {
    setDetailsClinic(null);

    navigate(
      `/findDoctor?clinicId=${encodeURIComponent(clinic.id)}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-700">
      {/* Main page content */}
      <main className="mx-auto w-full max-w-[1600px] px-4 py-6 lg:px-8">
        {/* Header and hero */}
        <div className="overflow-hidden rounded-3xl shadow-sm">
         <ClinicHeader onMenuClick={openSidebar} />

          <ClinicSearch onSearch={handleSearch} />
        </div>

        {/* Map / List navigation */}
        <div className="my-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setActiveView("map")}
            className={`flex min-w-36 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
              activeView === "map"
                ? "bg-white text-pink-600 shadow-md"
                : "text-slate-500 hover:bg-white"
            }`}
          >
            <MapPinned size={20} />
            Map
          </button>

          <button
            type="button"
            onClick={() => setActiveView("list")}
            className={`flex min-w-36 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
              activeView === "list"
                ? "bg-white text-pink-600 shadow-md"
                : "text-slate-500 hover:bg-white"
            }`}
          >
            <List size={20} />
            List
          </button>

          <div className="ml-auto flex items-center gap-2 text-sm text-slate-500">
            <Building2 size={18} />
            <span>{filteredClinics.length} Clinics</span>
          </div>
        </div>

        {/* Filters and results */}
        <div className="flex flex-col gap-6 lg:flex-row">
          <ClinicFilters
            filters={filters}
            onChange={setFilters}
            onClear={handleClearFilters}
          />

          <div className="min-w-0 flex-1">
            {activeView === "map" ? (
              <ClinicMap
                clinics={filteredClinics}
                selectedClinic={selectedClinic}
                onSelectClinic={handleSelectClinic}
              />
            ) : (
              <ClinicList
                clinics={filteredClinics}
                onViewDetails={handleViewDetails}
                onBookAppointment={handleBookAppointment}
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 py-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © 2026, made with ♥ by MyPIHUB for a better web.
          </p>

          <div className="flex gap-6">
            <a href="/" className="hover:text-pink-600">
              MyPatientHUB
            </a>
            <span>About Us</span>
            <span>Blog</span>
          </div>
        </footer>
      </main>

      {/* Clinic details modal */}
      <ClinicDetails
        clinic={detailsClinic}
        onClose={() => setDetailsClinic(null)}
        onBookAppointment={handleBookAppointment}
      />
    </div>
  );
}

export default FindClinic;
