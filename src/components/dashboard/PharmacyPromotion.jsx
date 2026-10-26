import PharmacyDonutChart from "./PharmacyDonutChart";
function PromotionPharmacy() {
  const clinics = [
    {
      name: (
        <>
          ALPRO
          <br />
          PHARMACY NILAI
        </>
      ),
      logo: "/images/food.png",
      percentage: "15%",
    },
    {
      name: (
        <>
          ALPRO
          <br />
          PHARMACY
          <br />
          PEKAN NILAI
        </>
      ),
      logo: "https://mypihub.web.app/static/media/logo-atlassian.d92c4f81bb3efbf288b3ef71ce2fbfb0.svg",
      percentage: "12%",
    },
    {
      name: <>OK PHARMACY</>,
      logo: "https://mypihub.web.app/static/media/logo-slack.d8feb9c5b2a92c377e8c5b7a10faabc9.svg",
      percentage: "5%",
    },
    {
      name: (
        <>
          PHARMART
          <br />
          PHARMACY NILAI
        </>
      ),
      logo: "https://mypihub.web.app/static/media/logo-spotify.3f055cde07c024fb2b73063b46416f1b.svg",
      percentage: "9%",
    },
    {
      name: (
        <>
          Health Lane Family
          <br />
          Pharmacy
        </>
      ),

      logo: "https://mypihub.web.app/static/media/logo-jira.f9c1ddbe3e751a29bd16580977ade064.svg",
      percentage: "14%",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-slate-700 sm:text-lg lg:mb-7">
          Promotion by Pharmacies
        </h2>

        <button
          type="button"
          aria-label="More information"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 text-base font-bold text-slate-500"
        >
          !
        </button>
      </div>

      {/* Responsive content */}
      <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[0.8fr_1.2fr] sm:gap-4 lg:gap-6">
        {/* Chart and button */}
        <div className="flex flex-col items-center gap-5">
          <PharmacyDonutChart />

          <button
            type="button"
            className="w-36 max-w-52 rounded-lg bg-[#91a2c0] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7185a8] sm:text-xs lg:text-sm lg:mt-16 cursor-pointer"
          >
            MORE DETAILS
          </button>
        </div>

        {/* Clinic list */}
        <div className="flex min-w-0 flex-col gap-5 sm:gap-4 lg:gap-7">
          {clinics.map((clinic, index) => (
            <div
              key={index}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-slate-100 pb-2 last:border-b-0 sm:pb-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src={clinic.logo}
                  alt=""
                  className="h-8 w-8 shrink-0 object-contain sm:h-7 sm:w-7 lg:h-9 lg:w-9"
                />

                <p className="wrap-break-word text-sm leading-snug text-slate-600 sm:text-xs lg:text-sm">
                  {clinic.name}
                </p>
              </div>

              <p className="text-sm font-medium text-slate-500 sm:text-xs lg:text-sm">
                {clinic.percentage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromotionPharmacy;
