
import {
  MapPin,
  Phone,
  Globe,
  Building2,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

function ClinicCard({
  clinic,
  onViewDetails,
  onBookAppointment,
}) {
  return (
    <article className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md xl:flex-row xl:items-center">
      {/* Clinic image */}
      <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-pink-50 text-pink-600 shadow-sm">
        {clinic.image ? (
          <img
            src={clinic.image}
            alt={clinic.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <Building2 size={42} />
        )}
      </div>

      {/* Clinic information */}
      <div className="min-w-0 flex-1 space-y-2">
        <h3 className="text-base font-bold text-slate-700">
          {clinic.name}
        </h3>

        <p className="flex items-start gap-2 text-sm leading-6 text-slate-500">
          <MapPin
            size={17}
            className="mt-1 shrink-0 text-pink-600"
          />
          <span>{clinic.address}</span>
        </p>

        {clinic.website && (
          <a
            href={clinic.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 break-all text-sm text-slate-500 hover:text-pink-600"
          >
            <Globe size={17} className="shrink-0" />
            {clinic.website}
            <ExternalLink size={13} />
          </a>
        )}

        {clinic.phone && (
          <a
            href={`tel:${clinic.phone}`}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-pink-600"
          >
            <Phone size={17} />
            {clinic.phone}
          </a>
        )}

        {clinic.area && (
          <p className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={17} />
            {clinic.area}
          </p>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex w-full shrink-0 flex-col gap-3 xl:w-52">
        <button
          type="button"
          onClick={() => onViewDetails?.(clinic)}
          className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-3 text-center text-xs font-bold text-white shadow-md transition hover:bg-fuchsia-700"
        >
          <Building2 size={16} />
          MORE ABOUT THIS LOCATION
        </button>

        <button
          type="button"
          onClick={() => onBookAppointment?.(clinic)}
          className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-3 text-center text-xs font-bold text-white shadow-md transition hover:bg-fuchsia-700"
        >
          <CalendarDays size={16} />
          FIND A DOCTOR AND SCHEDULE
        </button>
      </div>
    </article>
  );
}

export default ClinicCard;
