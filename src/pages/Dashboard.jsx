import PromotionCard from "../components/dashboard/ClinicPromotion";
import PromotionPharmacy from "../components/dashboard/PharmacyPromotion";
import MarketUsage from "../components/dashboard/MarketUsage";
import HealthIndex from "../components/dashboard/HealthIndex";
import ChronicWellness from "../components/dashboard/ChronicWellness";
import AppointmentChart from "../components/dashboard/AppointmentChart";
import MapLocation from "../components/dashboard/MapLocation";
import PreviousAppointments from "../components/dashboard/PreviousAppointments";
import UpcomingAppointments from "../components/dashboard/UpcomingAppointments";
import Doctors from "../components/dashboard/Doctors";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="w-full space-y-6 bg-gray-100 p-4 md:p-6">
      {/* Dashboard Title */}
      <h1 className="text-2xl font-bold text-gray-700">
        Welcome To MyPatientHUB!
      </h1>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Promotion by Clinics */}
        <div className="min-h-60 rounded-xl bg-white p-5 shadow-sm">
          <PromotionCard />
        </div>

        {/* Promotion by Pharmacies */}
        <div className="min-h-60 rounded-xl bg-white p-5 shadow-sm">
          <PromotionPharmacy />
        </div>

        {/* Smart Market Usage */}
        <div className="min-h-60 rounded-xl bg-white p-5 shadow-sm">
          <MarketUsage />
        </div>

        {/* Health Index and Symptoms */}
        <div className="overflow-hidden rounded-xl">
          <HealthIndex />
        </div>
        {/* chronicWellness */}
        <div className="overflow-hidden rounded-xl">
          <ChronicWellness />
        </div>
        {/* AppointmentChart */}
        <div className="overflow-hidden rounded-xl">
          <AppointmentChart />
        </div>

        {/* Map and Appointments */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:col-span-2">
          {/* Map - Left Side */}
          <div className="overflow-hidden rounded-xl">
            <MapLocation />
          </div>

          {/* Appointments - Right Side */}
          <div className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-xl">
              <PreviousAppointments />
            </div>

            <div className="overflow-visible rounded-xl">
              <UpcomingAppointments />
            </div>
          </div>
        </div>
      </div>
      <Doctors />
      <Footer/>
    </div>
  );
}

export default Dashboard;
