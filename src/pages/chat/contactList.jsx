import { Search, Pencil } from "lucide-react";

const contacts = [
  {
    name: "noman khan",
    message: "short message here...",
    time: "2:30",
    image: "	https://mypihub.web.app/static/media/doctor2.5b57c16bc5ccff0d3d65.jpg",
  },
  {
    name: "noman khan",
    message: "short message here...",
    time: "2:30",
    image: "	https://mypihub.web.app/static/media/doctor2.5b57c16bc5ccff0d3d65.jpg",
  },
  {
    name: "noman khan",
    message: "short message here...",
    time: "2:30",
    image: "	https://mypihub.web.app/static/media/doctor2.5b57c16bc5ccff0d3d65.jpg",
  },
];

function ContactList() {
  return (
    <section className="border-b border-r border-[#e9e9e9] bg-white lg:border-b-0">
      {/* Current User */}
      <div className="flex h-[82px] items-center justify-between border-b border-[#eeeeee] px-4">
        <div className="flex items-center gap-3">
          <img
            src="https://mypihub.web.app/static/media/doctor2.5b57c16bc5ccff0d3d65.jpg"
            alt="Pro Murtaza"
            className="h-14 w-14 rounded-full object-cover shadow-sm"
          />

          <div>
            <h2 className="text-sm font-bold text-[#405273]">
              Pro Murtaza
            </h2>

            <p className="mt-1 text-xs text-[#7c8aa3]">
              online
            </p>
          </div>
        </div>

        <button className="text-gray-500">
          <Pencil size={19} />
        </button>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Contacts"
            className="h-12 w-full rounded-lg border border-[#d5dbe4] bg-white px-4 pr-12 text-sm outline-none placeholder:text-[#a5afc0] focus:border-[#c8cfd9]"
          />

          <Search
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      {/* Contacts */}
      <div className="px-4">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center gap-4 rounded-lg px-1 py-3 transition hover:bg-[#f8f9fb]"
          >
            <img
              src={contact.image}
              alt={contact.name}
              className="h-10 w-10 rounded-full object-cover"
            />

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#405273]">
                  {contact.name}
                </h3>

                <span className="text-xs text-[#526385]">
                  {contact.time}
                </span>
              </div>

              <p className="mt-1 truncate text-base text-[#777777]">
                {contact.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactList;