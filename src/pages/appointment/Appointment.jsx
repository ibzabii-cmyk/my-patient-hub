import { useState } from "react";

import {
  LayoutDashboard,
  CalendarDays,
  Stethoscope,
  Hospital,
  MessageCircle,
  Store,
  Pill,
  Users,
  UserRound,
  Settings,
  Search,
  Bell,
  Plus,
  ChevronLeft,
  ChevronRight,
  Home,
  Menu,
  Heart,
  LogOut,
  CheckCircle,
  X,
} from "lucide-react";


/* =========================================================
   MENU
========================================================= */

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Appointments",
    icon: CalendarDays,
  },
  {
    name: "Find Doctor",
    icon: Stethoscope,
  },
  {
    name: "Find Clinic",
    icon: Hospital,
  },
  {
    name: "Chat",
    icon: MessageCircle,
  },
  {
    name: "Find MarketPlace",
    icon: Store,
  },
  {
    name: "Find Pharmacy",
    icon: Pill,
  },
  {
    name: "My Dependents",
    icon: Users,
  },
  {
    name: "My Account",
    icon: UserRound,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];


/* =========================================================
   APPOINTMENTS
========================================================= */

const appointments = [
  {
    day: 4,
    title: "Blood Bank Visit",
    color: "blue",
  },
  {
    day: 5,
    title: "Dr. Madiha Visit",
    color: "orange",
  },
  {
    day: 6,
    title: "Dr. Shamsir Visit",
    color: "red",
  },
  {
    day: 12,
    title: "Approved Apptm",
    color: "pink",
  },
  {
    day: 19,
    title: "Lab Checkup",
    color: "red",
  },
  {
    day: 25,
    title: "Dr. Bilal Visit",
    color: "blue",
  },
  {
    day: 25,
    title: "Dr. Ibrahim Visit",
    color: "green",
  },
];


/* =========================================================
   DOCTORS
========================================================= */

const doctors = [
  {
    name: "Dr. Mustafa",
    type: "Emergency",
    day: "Tuesday, April 5",
  },
  {
    name: "Dr. Khirullah",
    type: "Consultation",
    day: "Friday, November 2",
  },
  {
    name: "Dr. Bilal",
    type: "Examination",
    day: "Monday, March 9",
  },
];


/* =========================================================
   APP
========================================================= */

function App() {
  const [activeMenu, setActiveMenu] =
    useState("Appointments");

  const [month, setMonth] = useState(3);

  const [year, setYear] = useState(2026);

  const [showBooking, setShowBooking] =
    useState(false);

  const [bookingName, setBookingName] =
    useState("");

  const [bookingDate, setBookingDate] =
    useState("");

  const [bookingList, setBookingList] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [period, setPeriod] =
    useState("Days");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);


  /* =====================================================
     MONTHS
  ===================================================== */

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  /* =====================================================
     CALENDAR
  ===================================================== */

  const firstDay =
    new Date(year, month, 1).getDay();

  const daysInMonth =
    new Date(year, month + 1, 0).getDate();


  const calendarCells = Array.from(
    {
      length: firstDay + daysInMonth,
    },
    (_, index) =>
      index < firstDay
        ? null
        : index - firstDay + 1
  );


  /* =====================================================
     CHANGE MONTH
  ===================================================== */

  function changeMonth(amount) {
    const date = new Date(
      year,
      month + amount,
      1
    );

    setMonth(date.getMonth());

    setYear(date.getFullYear());
  }


  /* =====================================================
     TODAY
  ===================================================== */

  function goToToday() {
    const today = new Date();

    setMonth(today.getMonth());

    setYear(today.getFullYear());
  }


  /* =====================================================
     ADD BOOKING
  ===================================================== */

  function addBooking(event) {
    event.preventDefault();

    if (
      !bookingName.trim() ||
      !bookingDate
    ) {
      return;
    }

    const newBooking = {
      title: bookingName,
      day: Number(
        bookingDate.split("-")[2]
      ),
      color: "pink",
    };

    setBookingList([
      ...bookingList,
      newBooking,
    ]);

    setBookingName("");

    setBookingDate("");

    setShowBooking(false);
  }


  /* =====================================================
     SEARCH DOCTORS
  ===================================================== */

  const filteredDoctors =
    doctors.filter((doctor) =>
      doctor.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );


  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-gray-700">


      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      {sidebarOpen && (
        <button
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          aria-label="Close menu"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}


      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-[250px]
          flex-col
          border-r
          border-gray-100
          bg-white
          shadow-sm
          transition-transform
          duration-300
          lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >


        {/* LOGO */}

        <div className="flex h-[75px] items-center border-b border-gray-100 px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2cc5df] text-white">

              <Heart
                size={22}
                fill="currentColor"
              />

            </div>

            <span className="text-lg font-semibold text-gray-700">

              MyPatient

              <span className="font-bold text-[#2cc5df]">
                HUB
              </span>

            </span>

          </div>

        </div>


        {/* NAVIGATION */}

        <nav className="flex-1 overflow-y-auto px-4 py-5">

          {menuItems.map(
            ({ name, icon: Icon }) => (

              <button
                key={name}
                onClick={() => {

                  setActiveMenu(name);

                  setSidebarOpen(false);

                }}
                className={`
                  mb-1
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-lg
                  px-4
                  py-3
                  text-left
                  text-sm
                  transition
                  ${
                    activeMenu === name
                      ? "bg-[#e9faff] font-medium text-[#20b9d4]"
                      : "text-gray-500 hover:bg-gray-50"
                  }
                `}
              >

                <Icon size={18} />

                <span>
                  {name}
                </span>

              </button>

            )
          )}

        </nav>


        {/* APP PROMO */}

        <div className="mx-4 mb-4 rounded-xl bg-[#eafaff] p-4">

          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2cc5df]">

            ?

          </div>

          <h3 className="text-sm font-semibold text-gray-700">

            Download our
            <br />
            mobile app

          </h3>

          <p className="mt-1 text-xs text-gray-400">

            MyPatientHUB Mobile App

          </p>

          <div className="mt-3 flex gap-2">

            <button className="rounded-md bg-gray-800 px-2 py-1 text-[10px] text-white">

              Apple

            </button>

            <button className="rounded-md bg-gray-800 px-2 py-1 text-[10px] text-white">

              Android

            </button>

          </div>

        </div>


        {/* FOOTER */}

        <div className="flex items-center gap-2 border-t border-gray-100 px-5 py-4 text-[11px] text-gray-400">

          <Heart
            size={13}
            fill="currentColor"
          />

          Your health, our priority

        </div>

      </aside>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="lg:ml-[250px]">


        {/* =================================================
            TOP BAR
        ================================================= */}

        <header className="flex min-h-[75px] items-center justify-between border-b border-gray-100 bg-white px-5 sm:px-7">


          {/* LEFT */}

          <div className="flex items-center gap-4">

            <button
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
              onClick={() =>
                setSidebarOpen(true)
              }
            >

              <Menu size={21} />

            </button>


            <div>

              <div className="hidden items-center gap-2 text-xs text-gray-400 sm:flex">

                <Home size={13} />

                <span>/</span>

                <span>
                  {activeMenu}
                </span>

              </div>

              <h2 className="text-lg font-semibold text-gray-700">

                {activeMenu}

              </h2>

            </div>

          </div>


          {/* RIGHT */}

          <div className="flex items-center gap-2 sm:gap-4">


            {/* SEARCH */}

            <div className="relative hidden sm:block">

              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Type here..."
                className="h-9 w-[180px] rounded-lg bg-gray-50 pl-9 pr-3 text-sm outline-none ring-1 ring-gray-100 focus:ring-[#2cc5df]"
              />

            </div>


            {/* LOGOUT */}

            <button className="hidden items-center gap-1.5 text-xs text-gray-500 sm:flex">

              <LogOut size={15} />

              Log out

            </button>


            {/* SETTINGS */}

            <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-50">

              <Settings size={18} />

            </button>


            {/* NOTIFICATION */}

            <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-50">

              <Bell size={18} />

              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-400" />

            </button>

          </div>

        </header>


        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        <div className="p-5 sm:p-7">


          {/* =================================================
              TABS
          ================================================= */}

          <div className="mb-6 flex items-center gap-2">

            <button className="flex items-center gap-2 rounded-lg bg-[#e9faff] px-4 py-2.5 text-sm font-medium text-[#20b9d4]">

              <CalendarDays size={17} />

              Appointments

            </button>


            <button
              onClick={() =>
                setShowBooking(true)
              }
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-gray-500 transition hover:bg-white"
            >

              <Plus size={17} />

              New Booking

            </button>

          </div>


          {/* =================================================
              STATISTICS
          ================================================= */}

          <section className="mb-6 grid gap-5 lg:grid-cols-3">


            {/* PROCEDURES */}

            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">

              <p className="text-sm text-gray-400">
                Procedures Taken
              </p>

              <div className="mt-1 flex items-center gap-2">

                <h3 className="text-2xl font-bold text-gray-700">
                  30
                </h3>

                <span className="text-xs text-green-500">
                  +3
                </span>

              </div>


              <div className="mt-4 h-[70px]">

                <svg
                  viewBox="0 0 320 65"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >

                  <path
                    d="M0 43 Q20 49 40 44 T80 39 T120 36 T160 23 T200 32 T240 17 T280 23 T320 10"
                    fill="none"
                    stroke="#2cc5df"
                    strokeWidth="2.5"
                  />

                </svg>

              </div>


              <div className="flex justify-between text-[10px] text-gray-400">

                {[
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((m) => (
                  <span key={m}>
                    {m}
                  </span>
                ))}

              </div>

            </div>


            {/* TREATMENTS */}

            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">

              <p className="text-sm text-gray-400">
                Treatments Taken
              </p>

              <div className="mt-1 flex items-center gap-2">

                <h3 className="text-2xl font-bold text-gray-700">
                  12
                </h3>

                <span className="text-xs text-green-500">
                  +1
                </span>

              </div>


              <div className="mt-4 h-[70px]">

                <svg
                  viewBox="0 0 320 65"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >

                  <path
                    d="M0 45 Q25 50 45 43 T90 38 T130 41 T170 25 T210 35 T250 19 T285 24 T320 9"
                    fill="none"
                    stroke="#2cc5df"
                    strokeWidth="2.5"
                  />

                </svg>

              </div>


              <div className="flex justify-between text-[10px] text-gray-400">

                {[
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((m) => (
                  <span key={m}>
                    {m}
                  </span>
                ))}

              </div>

            </div>


            {/* NEW APPOINTMENT */}

            <button
              onClick={() =>
                setShowBooking(true)
              }
              className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-dashed border-[#2cc5df] bg-white text-[#2cc5df] transition hover:bg-[#f0fcff]"
            >

              <Plus size={27} />

              <strong className="mt-2 text-sm">
                New Appointment
              </strong>

            </button>

          </section>


          {/* =================================================
              MAIN GRID
          ================================================= */}

          <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">


            {/* =================================================
                CALENDAR
            ================================================= */}

            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">


              {/* CALENDAR HEADER */}

              <div className="mb-5 flex items-center justify-between">

                <h3 className="text-lg font-semibold text-gray-700">

                  {monthNames[month]} {year}

                </h3>


                <div className="flex items-center gap-1">

                  <button
                    onClick={goToToday}
                    className="rounded-md px-3 py-2 text-xs text-gray-500 hover:bg-gray-50"
                  >
                    Today
                  </button>

                  <button
                    onClick={() =>
                      changeMonth(-1)
                    }
                    className="rounded-md p-2 text-gray-500 hover:bg-gray-50"
                  >

                    <ChevronLeft
                      size={17}
                    />

                  </button>

                  <button
                    onClick={() =>
                      changeMonth(1)
                    }
                    className="rounded-md p-2 text-gray-500 hover:bg-gray-50"
                  >

                    <ChevronRight
                      size={17}
                    />

                  </button>

                </div>

              </div>


              {/* WEEKDAYS */}

              <div className="grid grid-cols-7">

                {[
                  "Sun",
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                ].map((day) => (

                  <div
                    key={day}
                    className="border-b border-gray-100 p-2 text-center text-xs font-medium text-gray-400"
                  >

                    {day}

                  </div>

                ))}

              </div>


              {/* CALENDAR */}

              <div className="grid grid-cols-7">

                {calendarCells.map(
                  (day, index) => {

                    const dayAppointments =
                      [
                        ...appointments,
                        ...bookingList,
                      ].filter(
                        (item) =>
                          item.day === day
                      );


                    const today =
                      new Date();

                    const isToday =
                      day ===
                        today.getDate() &&
                      month ===
                        today.getMonth() &&
                      year ===
                        today.getFullYear();


                    return (

                      <div
                        key={index}
                        className="min-h-[95px] border-b border-r border-gray-100 p-1.5 sm:min-h-[115px] sm:p-2"
                      >

                        {day && (

                          <span
                            className={`
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              text-xs
                              ${
                                isToday
                                  ? "bg-[#2cc5df] font-semibold text-white"
                                  : "text-gray-500"
                              }
                            `}
                          >

                            {day}

                          </span>

                        )}


                        <div className="mt-1 space-y-1">

                          {dayAppointments.map(
                            (
                              item,
                              eventIndex
                            ) => (

                              <div
                                key={
                                  eventIndex
                                }
                                title={
                                  item.title
                                }
                                className={`
                                  truncate
                                  rounded
                                  px-1.5
                                  py-1
                                  text-[9px]
                                  font-medium
                                  sm:text-[10px]
                                  ${
                                    item.color ===
                                    "blue"
                                      ? "bg-blue-50 text-blue-600"
                                      : ""
                                  }
                                  ${
                                    item.color ===
                                    "orange"
                                      ? "bg-orange-50 text-orange-600"
                                      : ""
                                  }
                                  ${
                                    item.color ===
                                    "red"
                                      ? "bg-red-50 text-red-600"
                                      : ""
                                  }
                                  ${
                                    item.color ===
                                    "pink"
                                      ? "bg-pink-50 text-pink-600"
                                      : ""
                                  }
                                  ${
                                    item.color ===
                                    "green"
                                      ? "bg-green-50 text-green-600"
                                      : ""
                                  }
                                `}
                              >

                                {item.title}

                              </div>

                            )
                          )}

                        </div>

                      </div>

                    );

                  }
                )}

              </div>

            </div>


            {/* =================================================
                RIGHT COLUMN
            ================================================= */}

            <div className="space-y-6">


              {/* APPOINTMENT CHART */}

              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">

                <div className="mb-5 flex items-center justify-between">

                  <h3 className="font-semibold text-gray-700">
                    Appointment
                  </h3>

                  <button className="text-gray-400">
                    •••
                  </button>

                </div>


                <div className="flex h-[210px] items-end justify-between gap-3 border-b border-gray-100 px-2">

                  {[
                    [
                      "Jan",
                      60,
                      90,
                    ],
                    [
                      "Feb",
                      82,
                      110,
                    ],
                    [
                      "Mar",
                      66,
                      85,
                    ],
                    [
                      "Apr",
                      92,
                      120,
                    ],
                    [
                      "May",
                      52,
                      70,
                    ],
                    [
                      "Jun",
                      78,
                      95,
                    ],
                  ].map(
                    ([
                      label,
                      height,
                      number,
                    ]) => (

                      <div
                        key={label}
                        className="flex h-full flex-1 flex-col items-center justify-end"
                      >

                        <span className="mb-1 text-[9px] text-gray-400">
                          {number}
                        </span>


                        <div
                          className="flex w-full max-w-[28px] flex-col overflow-hidden rounded-t-md"
                          style={{
                            height: `${height}%`,
                          }}
                        >

                          <div className="h-[55%] bg-[#2cc5df]" />

                          <div className="h-[20%] bg-[#6bd7a8]" />

                          <div className="h-[15%] bg-[#f4c95d]" />

                          <div className="h-[10%] bg-[#e89ab5]" />

                        </div>


                        <span className="mt-2 text-[10px] text-gray-400">
                          {label}
                        </span>

                      </div>

                    )
                  )}

                </div>


                {/* LEGEND */}

                <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] text-gray-500">

                  <span className="flex items-center gap-1">

                    <i className="h-2 w-2 rounded-full bg-[#2cc5df]" />

                    Emergency

                  </span>

                  <span className="flex items-center gap-1">

                    <i className="h-2 w-2 rounded-full bg-[#6bd7a8]" />

                    Examination

                  </span>

                  <span className="flex items-center gap-1">

                    <i className="h-2 w-2 rounded-full bg-[#f4c95d]" />

                    Consultation

                  </span>

                  <span className="flex items-center gap-1">

                    <i className="h-2 w-2 rounded-full bg-[#e89ab5]" />

                    Routine Checkup

                  </span>

                </div>

              </div>


              {/* PREVIOUS APPOINTMENTS */}

              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">

                <h3 className="mb-4 font-semibold text-gray-700">
                  Previous Appointments
                </h3>


                {filteredDoctors.map(
                  (doctor) => (

                    <div
                      key={doctor.name}
                      className="mb-4 flex items-center gap-3 last:mb-0"
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e9faff] text-[#2cc5df]">

                        <Stethoscope
                          size={20}
                        />

                      </div>


                      <div className="min-w-0 flex-1">

                        <strong className="block truncate text-sm text-gray-700">

                          {doctor.name}

                        </strong>

                        <span className="text-xs text-gray-400">

                          {doctor.type}

                        </span>

                      </div>


                      <small className="text-right text-[9px] text-gray-400">

                        {doctor.day}

                      </small>

                    </div>

                  )
                )}


                {filteredDoctors.length ===
                  0 && (

                  <p className="text-sm text-gray-400">

                    No doctors found.

                  </p>

                )}

              </div>


              {/* UPCOMING */}

              <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">

                <h3 className="mb-4 font-semibold text-gray-700">

                  Up Coming Appointments

                </h3>


                <div className="mb-4 flex rounded-lg bg-gray-50 p-1">

                  {[
                    "Days",
                    "Months",
                    "Years",
                  ].map((item) => (

                    <button
                      key={item}
                      onClick={() =>
                        setPeriod(item)
                      }
                      className={`
                        flex-1
                        rounded-md
                        py-1.5
                        text-xs
                        ${
                          period === item
                            ? "bg-white font-medium text-[#2cc5df] shadow-sm"
                            : "text-gray-400"
                        }
                      `}
                    >

                      {item}

                    </button>

                  ))}

                </div>


                {doctors.map(
                  (doctor) => (

                    <div
                      key={doctor.name}
                      className="mb-4 flex items-center gap-3 last:mb-0"
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e9faff] text-[#2cc5df]">

                        <Stethoscope
                          size={20}
                        />

                      </div>


                      <div className="min-w-0 flex-1">

                        <strong className="block truncate text-sm text-gray-700">

                          {doctor.name}

                        </strong>

                        <span className="text-xs text-gray-400">

                          {doctor.type}

                        </span>

                      </div>


                      <small className="text-right text-[9px] text-gray-400">

                        {doctor.day}

                      </small>

                    </div>

                  )
                )}

              </div>

            </div>

          </section>


          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-gray-100 pt-5 text-[11px] text-gray-400 sm:flex-row">

            <span className="flex items-center gap-1">

              © 2026, made with

              <Heart
                size={11}
                fill="currentColor"
              />

              by MyPatientHUB

            </span>

            <span>
              MyPatientHUB　 About Us　 Blog
            </span>

          </footer>

        </div>

      </main>


      {/* =================================================
          NEW APPOINTMENT MODAL
      ================================================= */}

      {showBooking && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
          onClick={() =>
            setShowBooking(false)
          }
        >

          <form
            onSubmit={addBooking}
            onClick={(event) =>
              event.stopPropagation()
            }
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >


            {/* MODAL HEADER */}

            <div className="mb-5 flex items-start justify-between">

              <div>

                <h2 className="text-xl font-semibold text-gray-700">

                  New Appointment

                </h2>

                <p className="mt-1 text-sm text-gray-400">

                  Enter the appointment details below.

                </p>

              </div>


              <button
                type="button"
                onClick={() =>
                  setShowBooking(false)
                }
                className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"
              >

                <X size={18} />

              </button>

            </div>


            {/* TITLE */}

            <label className="mb-4 block">

              <span className="mb-2 block text-sm font-medium text-gray-600">

                Appointment title

              </span>

              <input
                value={bookingName}
                onChange={(event) =>
                  setBookingName(
                    event.target.value
                  )
                }
                placeholder="e.g. Doctor visit"
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#2cc5df]"
              />

            </label>


            {/* DATE */}

            <label className="mb-5 block">

              <span className="mb-2 block text-sm font-medium text-gray-600">

                Appointment date

              </span>

              <input
                type="date"
                value={bookingDate}
                onChange={(event) =>
                  setBookingDate(
                    event.target.value
                  )
                }
                required
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#2cc5df]"
              />

            </label>


            {/* BUTTONS */}

            <div className="flex justify-end gap-3">

              <button
                type="button"
                onClick={() =>
                  setShowBooking(false)
                }
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-500 hover:bg-gray-50"
              >

                Cancel

              </button>


              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-[#2cc5df] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#20b7d1]"
              >

                <CheckCircle size={16} />

                Save Appointment

              </button>

            </div>

          </form>

        </div>

      )}

    </div>
  );
}


export default App;