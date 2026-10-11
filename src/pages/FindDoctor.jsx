import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./FindDoctor.css";

const services = [
  {
    title: "Primary Care and Internal MD",
    description: "Our doctors partner with you to help you reach your wellness goals.",
    icon: "primary-care",
  },
  {
    title: "Emergency Care",
    description: "We provide emergency care for adults and children.",
    icon: "emergency-care",
  },
  {
    title: "Imaging Services",
    description: "From X-ray to MRI scans, find the imaging services you need.",
    icon: "imaging",
  },
  {
    title: "Urgent Care",
    description: "Convenient care for non-life-threatening health concerns.",
    icon: "urgent-care",
  },
];

const specialties = [
  "Anesthesiology",
  "Dermatology",
  "Emergency medicine",
  "Neurology",
  "Consultation",
  "Ophthalmology",
];

const navigation = [
  { label: "Dashboard", icon: "▦", to: "/dashboard" },
  { label: "Appointments", icon: "▣", to: "/appointments" },
  { label: "Find Doctor", icon: "▥", to: "/findDoctor", active: true },
  { label: "Find Clinic", icon: "⌂", to: "/findClinic" },
  { label: "Chat", icon: "▤", to: "/chat" },
  { label: "Find MarketPlace", icon: "▱", to: "/findMarketPlace" },
  { label: "Find Pharmacy", icon: "✚", to: "/findPharmacy" },
  { label: "My Dependents", icon: "▣", to: "/myDependents" },
  { label: "My Account", icon: "⚒", to: "/myAccount" },
  { label: "Settings", icon: "⚙", to: "/settings" },
];

function BrandMark() {
  return (
    <div className="fd-brand" aria-label="MyPatientHUB">
      <img className="fd-brand-logo" src="/images/find-doctor/my-pihub-logo.jpg" alt="MyPiHUB logo" />
      <span>MyPatientHUB</span>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.4 4.4" />
    </svg>
  );
}

function ServiceIcon({ type }) {
  const images = {
    "primary-care": "primary-care.jpg",
    "emergency-care": "emergency-care.jpg",
    imaging: "imaging.jpg",
    "urgent-care": "urgent-care.jpg",
  };
  return <img className="fd-service-icon" src={`/images/find-doctor/${images[type]}`} alt="" aria-hidden="true" />;
}

function FindDoctor() {
  const [doctorQuery, setDoctorQuery] = useState("");
  const [location, setLocation] = useState("");
  const [expandedService, setExpandedService] = useState("");
  const [expandedSpecialty, setExpandedSpecialty] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const filteredSpecialties = useMemo(() => {
    const query = (doctorQuery.trim() || selectedSpecialty).toLowerCase();
    if (!query) return specialties;
    return specialties.filter((specialty) => specialty.toLowerCase().includes(query));
  }, [doctorQuery, selectedSpecialty]);

  function handleSearch(event) {
    event.preventDefault();
    const terms = [...new Set([doctorQuery.trim(), selectedSpecialty, location.trim()].filter(Boolean))];
    if (!terms.length) {
      setSearchMessage("Enter a doctor's name, specialty, or location to begin your search.");
      return;
    }
    setSearchMessage(`Search filters applied: ${terms.join(" · ")}.`);
  }

  function useCurrentLocation() {
    if (!navigator.geolocation) {
      setSearchMessage("Location services are not available in this browser.");
      return;
    }
    setSearchMessage("Finding your current location…");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation(`${coords.latitude.toFixed(3)}, ${coords.longitude.toFixed(3)}`);
        setSearchMessage("Your current location is ready. Select Search to continue.");
      },
      () => setSearchMessage("Location access was unavailable. You can enter a ZIP code or neighborhood instead."),
      { timeout: 8000, maximumAge: 60000 },
    );
  }

  function chooseSpecialty(specialty) {
    setSelectedSpecialty(specialty);
    setDoctorQuery(specialty);
    setSearchMessage(`${specialty} selected. Select Search to find matching doctors.`);
  }

  return (
    <div className="find-doctor-page">
      <aside className="fd-sidebar">
        <BrandMark />
        <nav className="fd-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link className={`fd-nav-item${item.active ? " is-active" : ""}`} to={item.to} key={item.label} aria-current={item.active ? "page" : undefined}>
              <span className="fd-nav-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <section className="fd-app-card" aria-label="Download the MyPiHUB mobile app">
          <span className="fd-help-icon" aria-hidden="true">?</span>
          <p className="fd-app-heading">Download</p>
          <p className="fd-app-subtitle">MyPiHUB Mobile App</p>
          <div className="fd-store-buttons">
            <button type="button" aria-label="Download for iPhone"></button>
            <button type="button" aria-label="Download for Android">▶</button>
          </div>
        </section>
      </aside>

      <main className="fd-main">
        <header className="fd-topbar">
          <div className="fd-page-label">
            <div className="fd-breadcrumb"><span aria-hidden="true">⌂</span><span>/</span><span>Searchdoctor</span></div>
            <strong>Searchdoctor</strong>
          </div>
          <button className="fd-menu-button" type="button" aria-label="Open navigation">☰</button>
          <div className="fd-topbar-actions">
            <label className="fd-global-search">
              <SearchIcon />
              <input type="search" placeholder="Type here…" aria-label="Search the site" />
            </label>
            <button className="fd-logout" type="button"><span aria-hidden="true">●</span> Log out</button>
            <button className="fd-top-icon" type="button" aria-label="Settings">⚙</button>
            <button className="fd-top-icon" type="button" aria-label="Notifications">♟</button>
          </div>
        </header>

        <div className="fd-content">
          <section className="fd-hero" aria-labelledby="fd-title">
            <div className="fd-hero-breadcrumb"><span aria-hidden="true">⌂</span><span>/</span><span>Searchdoctor</span></div>
            <div className="fd-hero-content">
              <h1 id="fd-title">Find a Doctor</h1>
              <p>Search Doctors and schedule an appointment</p>
              <form className="fd-search-form" onSubmit={handleSearch}>
                <label className="fd-search-input">
                  <SearchIcon />
                  <input value={doctorQuery} onChange={(event) => { setDoctorQuery(event.target.value); setSelectedSpecialty(""); }} placeholder="Search a doctor by name, specialty" aria-label="Search a doctor by name or specialty" />
                </label>
                <input className="fd-location-input" value={location} onChange={(event) => setLocation(event.target.value)} placeholder="ZIP Code or Neighborhood" aria-label="ZIP code or neighborhood" />
                <button className="fd-current-button" type="button" onClick={useCurrentLocation}>Current</button>
                <button className="fd-search-button" type="submit">Search</button>
              </form>
              {searchMessage && <p className="fd-search-message" role="status">{searchMessage}</p>}
            </div>
          </section>

          <section className="fd-panel fd-services-panel" aria-labelledby="fd-services-title">
            <h2 id="fd-services-title">Special Services</h2>
            <div className="fd-service-grid">
              {services.map((service) => {
                const open = expandedService === service.title;
                return (
                  <button className={`fd-service-card${open ? " is-open" : ""}`} type="button" key={service.title} aria-expanded={open} onClick={() => setExpandedService(open ? "" : service.title)}>
                    <ServiceIcon type={service.icon} />
                    <span className="fd-card-copy"><span className="fd-card-title">{service.title}</span><span className="fd-card-description">{open ? service.description : `${service.description.slice(0, 54)}${service.description.length > 54 ? "…" : ""}`}</span></span>
                    <span className="fd-chevron" aria-hidden="true">⌄</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="fd-panel fd-specialties-panel" aria-labelledby="fd-specialties-title">
            <h2 id="fd-specialties-title">Find Doctors By Specialty</h2>
            <p className="fd-section-subtitle">Select a Specialty to View all Doctors and schedule an Appointment</p>
            <div className="fd-specialty-grid">
              {filteredSpecialties.map((specialty) => {
                const open = expandedSpecialty === specialty;
                return (
                  <div className={`fd-specialty-wrap${open ? " is-open" : ""}`} key={specialty}>
                    <button className="fd-specialty-card" type="button" aria-expanded={open} onClick={() => setExpandedSpecialty(open ? "" : specialty)}>
                      <span>{specialty}</span><span className="fd-chevron" aria-hidden="true">⌄</span>
                    </button>
                    {open && <div className="fd-specialty-detail"><p>Explore doctors and appointment options for <strong>{specialty}</strong>.</p><button type="button" onClick={() => chooseSpecialty(specialty)}>Search this specialty</button></div>}
                  </div>
                );
              })}
              {filteredSpecialties.length === 0 && <p className="fd-empty-specialties">No specialties match this search. Try another name or specialty.</p>}
            </div>
          </section>
        </div>

        <footer className="fd-footer">
          <span>© 2026, made with <span className="fd-heart">♥</span> by MyPiHUB for a better web.</span>
          <div><a href="#about" onClick={(event) => event.preventDefault()}>MyPatientHUB</a><a href="#about" onClick={(event) => event.preventDefault()}>About Us</a><a href="#blog" onClick={(event) => event.preventDefault()}>Blog</a></div>
        </footer>
      </main>
    </div>
  );
}

export default FindDoctor;
