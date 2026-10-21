
import { Building2, SearchX } from "lucide-react";
import ClinicCard from "./ClinicCard";

function ClinicList({
  clinics = [],
  onViewDetails,
  onBookAppointment,
}) {
  return (
    <section className="w-full space-y-4">
      {/* Result count */}
      <div className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm">
        <h2 className="flex items-center gap-2 text-base font-bold text-slate-700">
          <Building2 size={20} className="text-pink-600" />
          Available Clinics
        </h2>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {clinics.length} Results
        </span>
      </div>

      {/* Empty results */}
      {clinics.length === 0 ? (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
          <SearchX size={48} className="mb-4 text-slate-300" />

          <h3 className="text-lg font-bold text-slate-700">
            No Clinics Found
          </h3>

          <p className="mt-2 max-w-sm text-sm text-slate-500">
            No clinics match your search or selected filters.
            Try changing the search terms or clearing the filters.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {clinics.map((clinic) => (
            <ClinicCard
              key={clinic.id}
              clinic={clinic}
              onViewDetails={onViewDetails}
              onBookAppointment={onBookAppointment}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ClinicList;
