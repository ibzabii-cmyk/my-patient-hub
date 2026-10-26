const doctors = [
  {
    id: 1,
    name: "Dr Ahmad",
    speciality: "Neurologist",
    fee: "RM 100",
    discount: "10%",
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "Dr Azam Shah",
    speciality: "Aurthopedic MD",
    fee: "RM 130",
    discount: "20%",
    image: "https://mypihub.web.app/static/media/doctor2.5b57c16bc5ccff0d3d65.jpg",
  },
  {
    id: 3,
    name: "Dr Hanif",
    speciality: "Primary Care MD",
    fee: "RM 200",
    discount: "20%",
    image: "https://mypihub.web.app/static/media/doctor4.394ad9d0de09631db7f4.jpg",
  },
  {
    id: 4,
    name: "Dr Affan",
    speciality: "Cardiologist",
    fee: "RM 400",
    discount: "40%",
    image: "https://mypihub.web.app/static/media/doctor5.50587b7a267b4d9859b2.jpg",
  },
];

function Doctors() {
  return (
    <section className="w-full min-w-0 overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* Title */}
      <div className="px-5 pb-5 pt-6 md:px-6">
        <h2 className="text-lg font-semibold text-[#384e70]">Doctors</h2>
      </div>

      {/* Doctors List */}
      <div className="w-full">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="grid grid-cols-1 items-center gap-4 border-t border-gray-200 px-5 py-4 sm:grid-cols-2 lg:grid-cols-[2fr_1.4fr_1.2fr_0.6fr] lg:gap-5 md:px-6"
          >
            {/* Name */}
            <div className="flex min-w-0 items-center gap-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-10 w-9 shrink-0 object-contain"
              />

              <div className="min-w-0">
                <p className="text-sm font-medium text-[#6b7a99]">Name:</p>
                <p className="text-base font-semibold text-[#384e70]">
                  {doctor.name}
                </p>
              </div>
            </div>

            {/* Speciality */}
            <div className="lg:text-center">
              <p className="text-sm font-medium text-[#6b7a99]">Speciality:</p>
              <p className="text-base font-semibold text-[#384e70]">
                {doctor.speciality}
              </p>
            </div>

            {/* Consultation Fee */}
            <div className="lg:text-center">
              <p className="text-sm font-medium text-[#6b7a99]">
                Consultation_fee:
              </p>
              <p className="text-base font-semibold text-[#384e70]">
                {doctor.fee}
              </p>
            </div>

            {/* Discount */}
            <div className="lg:text-center">
              <p className="text-sm font-medium text-[#6b7a99]">Discount:</p>
              <p className="text-base font-semibold text-[#384e70]">
                {doctor.discount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Doctors;
