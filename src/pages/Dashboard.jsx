import PromotionCard from "../components/dashboard/PromotionCard";
function Dashboard() {
  return (
    <div className="w-full space-y-6 p-4 md:p-6">
      {/* Dashboard Title */}
      <h1 className="text-2xl font-bold text-gray-800">
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
          <h2 className="font-semibold text-gray-700">
            Promotion by Pharmacies
          </h2>
        </div>

        {/* Smart Market Usage */}
        <div className="min-h-60 rounded-xl bg-white p-5 shadow-sm">
          <h2 className="font-semibold text-gray-700">
            Smart Market Usage by app
          </h2>
        </div>

        {/* Health Information */}
        <div className="grid gap-5">
          <div className="min-h-40 rounded-xl bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-gray-700">Health Index</h2>
          </div>

          <div className="min-h-40 rounded-xl bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-gray-700">Symptoms</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
