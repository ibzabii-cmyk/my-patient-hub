
import { useEffect } from "react";
import {
  X,
  Building2,
  MapPin,
  Phone,
  Globe,
  Stethoscope,
  Languages,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

function ClinicDetails({
  clinic,
  onClose,
  onBookAppointment,
}) {
  useEffect(() => {
    if (!clinic) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [clinic, onClose]);

  if (!clinic) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="clinic-details-title"
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 px-6 py-5 text-white">
          <div className="flex items-center gap-3">
            <Building2 size={25} />

            <h2
              id="clinic-details-title"
              className="text-xl font-bold"
            >
              Clinic Details
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close clinic details"
            className="rounded-lg p-2 transition hover:bg-white/20"
          >
            <X size={22} />
          </button>
        </div>

        {/* Clinic information */}
        <div className="space-y-6 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-pink-50 text-pink-600">
              {clinic.image ? (
                <img
                  src={clinic.image}
                  alt={clinic.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Building2 size={38} />
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800">
                {clinic.name}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {clinic.area}
              </p>
            </div>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-5">
            <div className="flex items-start gap-3">
              <MapPin
                size={20}
                className="mt-0.5 shrink-0 text-pink-600"
              />

              <div>
                <h4 className="font-semibold text-slate-700">
                  Address
                </h4>
                <p className="mt-1 text-sm text-slate-500">
                  {clinic.address}
                </p>
              </div>
            </div>

            {clinic.phone && (
              <div className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="shrink-0 text-pink-600"
                />

                <div>
                  <h4 className="font-semibold text-slate-700">
                    Phone
                  </h4>
                  <a
                    href={`tel:${clinic.phone}`}
                    className="mt-1 block text-sm text-slate-500 hover:text-pink-600"
                  >
                    {clinic.phone}
                  </a>
                </div>
              </div>
            )}

            {clinic.website && (
              <div className="flex items-start gap-3">
                <Globe
                  size={20}
                  className="shrink-0 text-pink-600"
                />

                <div className="min-w-0">
                  <h4 className="font-semibold text-slate-700">
                    Website
                  </h4>

                  <a
                    href={clinic.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center gap-2 break-all text-sm text-pink-600 hover:underline"
                  >
                    {clinic.website}
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="rounded-xl bg-gray-50 p-5">
            <h4 className="mb-4 font-bold text-slate-800">
              Clinic Information
            </h4>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Stethoscope size={18} className="text-pink-600" />
                {clinic.specialty || "General"}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Languages size={18} className="text-pink-600" />
                {clinic.language || "Not specified"}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CalendarDays size={18} className="text-pink-600" />
                {clinic.online
                  ? "Online Scheduling Available"
                  : "Contact Clinic for Scheduling"}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Building2 size={18} className="text-pink-600" />
                {clinic.primary
                  ? "Primary Care"
                  : "Specialist Clinic"}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-gray-200 px-5 py-3 font-semibold text-slate-600 hover:bg-gray-50"
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => onBookAppointment?.(clinic)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-fuchsia-600 px-5 py-3 font-semibold text-white transition hover:bg-fuchsia-700"
            >
              <CalendarDays size={18} />
              Find a Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicDetails;
