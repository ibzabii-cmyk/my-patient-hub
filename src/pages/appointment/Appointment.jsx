import React, { useState } from "react";
import Layout from '../../components/layouts/Layout';
import {
  MdOutlineEventNote,
  MdOutlineAddBox,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdMoreVert,
} from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

function Appointment() {
  const [currentDate, setCurrentDate] = useState(new Date(2022, 3, 1)); // April 2022
  const [activeTab, setActiveTab] = useState("appointments");
  const [upcomingTab, setUpcomingTab] = useState("Months");

  // ===== دیتای نوبت‌ها =====
  const appointments = [
    { day: 5, name: "Blood Bank", color: "bg-blue-500 text-white" },
    { day: 5, name: "Dr. Madiha", color: "bg-orange-400 text-white" },
    { day: 5, name: "DR. Shamsi", color: "bg-red-500 text-white" },
    { day: 8, name: "Apptms DR", color: "bg-orange-400 text-white" },
    { day: 11, name: "Apptms DR", color: "bg-orange-400 text-white" },
    { day: 12, name: "Approved A", color: "bg-purple-500 text-white" },
    { day: 19, name: "Lab Checkup", color: "bg-red-400 text-white" },
    { day: 25, name: "DR. Bilal Vis", color: "bg-blue-500 text-white" },
    { day: 25, name: "DR. Ibrahim", color: "bg-green-500 text-white" },
  ];

  // ===== نمودار خطی =====
  const lineData = [
    { month: "Apr", Count: 50 }, { month: "May", Count: 48 },
    { month: "Jun", Count: 55 }, { month: "Jul", Count: 52 },
    { month: "Aug", Count: 60 }, { month: "Sep", Count: 58 },
    { month: "Oct", Count: 62 }, { month: "Nov", Count: 65 },
    { month: "Dec", Count: 68 },
  ];

  // ===== نمودار ستونی =====
  const barData = [
    { month: "Jan", Emergency: 44, Examination: 13, Consultation: 11, Routine: 21 },
    { month: "Feb", Emergency: 55, Examination: 23, Consultation: 17, Routine: 7 },
    { month: "Mar", Emergency: 41, Examination: 20, Consultation: 15, Routine: 25 },
    { month: "Apr", Emergency: 67, Examination: 8, Consultation: 15, Routine: 13 },
    { month: "May", Emergency: 22, Examination: 13, Consultation: 21, Routine: 22 },
    { month: "Jun", Emergency: 43, Examination: 27, Consultation: 14, Routine: 8 },
  ];

  const previousAppointments = [
    { name: "Dr. Mustafa", type: "Emergency", date: "Tuesday, April 5", image: "https://mypihub.web.app/static/media/doctor2.5b57c16bc5ccff0d3d65.jpg" },
    { name: "DR. KHIRULLAH", type: "consultation", date: "Friday, November 2", image: "https://mypihub.web.app/static/media/doctor2.5b57c16bc5ccff0d3d65.jpg" },
    { name: "DR. Bilal", type: "Eximination", date: "Monday, March 9", image: "https://mypihub.web.app/static/media/doctor2.5b57c16bc5ccff0d3d65.jpg" },
  ];

  // ===== ساخت تقویم =====
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("en", { month: "long" });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const calendarDays = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({ day: prevMonthDays - i, current: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({ day: i, current: true });
  }
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push({ day: calendarDays.length - (firstDay + daysInMonth) + 1, current: false });
  }

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <Layout>
    <div className="p-6 bg-gray-50 min-h-screen font-sans">

      {/* Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-6">
        <button
          onClick={() => setActiveTab("appointments")}
          className={`flex items-center gap-2 px-6 py-2 rounded-full shadow-sm text-sm font-semibold transition ${
            activeTab === "appointments"
              ? "bg-white text-pink-600 shadow-md"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          <MdOutlineEventNote /> Appointments
        </button>
        <button
          onClick={() => setActiveTab("booking")}
          className={`flex items-center gap-2 px-6 py-2 rounded-full shadow-sm text-sm font-semibold transition ${
            activeTab === "booking"
              ? "bg-white text-pink-600 shadow-md"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          <MdOutlineAddBox /> New Booking
        </button>
      </div>

      {/* Grid اصلی */}
      <div className="grid grid-cols-12 gap-6 max-w-[1400px] mx-auto">
        
        {/* ستون چپ/وسط */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-6">
          {/* کارت‌های آماری */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {/* Procedures */}
            <div className="bg-white rounded-2xl p-5 shadow-sm sm:col-span-2">
              <p className="text-sm text-gray-600 font-medium">Procedures Taken</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-gray-800">30</span>
                <span className="text-xs font-semibold text-green-500">+3</span>
              </div>
              <ResponsiveContainer width="100%" height={80}>
                <LineChart data={lineData} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                  <YAxis
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 80]}
                    ticks={[40, 80]}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                    height={25}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}`, 'Visitors']} 
                    contentStyle={{ backgroundColor: '#333', color: '#fff', borderRadius: '8px', border: 'none' }} 
                  />
                  <Line type="monotone" dataKey="Count" stroke="#06b6d4" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Treatments */}
            <div className="bg-white rounded-2xl p-5 shadow-sm sm:col-span-2">
              <p className="text-sm text-gray-600 font-medium">Treatments Taken</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-gray-800">12</span>
                <span className="text-xs font-semibold text-green-500">+1</span>
              </div>
              <ResponsiveContainer width="100%" height={80}>
                <LineChart
                  data={lineData.map((d) => ({ ...d, Count: d.Count * 0.8 }))}
                  margin={{ top: 5, right: 10, left: -25, bottom: 5 }}
                >
                  <YAxis
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 80]}
                    ticks={[40, 80]}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                    height={25}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}`, 'Visitors']} 
                    contentStyle={{ backgroundColor: '#333', color: '#fff', borderRadius: '8px', border: 'none' }} 
                  />
                  <Line type="monotone" dataKey="Count" stroke="#06b6d4" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* New Appointment */}
            <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center sm:col-span-1">
              <MdOutlineAddBox className="text-3xl text-gray-400" />
              <p className="text-sm font-semibold text-gray-700 mt-2 text-center">New Appointment</p>
            </div>
          </div>

          {/* تقویم */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">
                {monthName} {year}
              </h2>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-gray-700 text-white text-xs rounded-md">today</button>
                <button onClick={prevMonth} className="p-1 bg-gray-200 rounded-md hover:bg-gray-300">
                  <MdOutlineKeyboardArrowLeft />
                </button>
                <button onClick={nextMonth} className="p-1 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                  <MdOutlineKeyboardArrowRight />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
                  {weekDays.map((d) => <div key={d}>{d}</div>)}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((d, i) => {
                    const dayEvents = d.current ? appointments.filter((a) => a.day === d.day) : [];
                    return (
                      <div
                        key={i}
                        className={`min-h-[80px] border border-gray-100 rounded-lg p-1 text-xs ${
                          d.current ? "text-gray-700" : "text-gray-300"
                        }`}
                      >
                        <div className="text-right font-medium">{d.day}</div>
                        <div className="space-y-1 mt-1">
                          {dayEvents.map((ev, j) => (
                            <div
                              key={j}
                              className={`${ev.color} text-[10px] px-1 py-0.5 rounded truncate`}
                            >
                              {ev.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ستون راست */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-6">
          {/* نمودار ستونی */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-800">Appointment</h3>
              <MdMoreVert className="text-gray-400" />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData} margin={{ top: 20, right: 5, left: -25, bottom: 5 }}>
                <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip />
                
                <Bar dataKey="Emergency" stackId="a" fill="#3b82f6">
                  <LabelList dataKey="Emergency" position="center" fill="#fff" fontSize={10} />
                </Bar>
                <Bar dataKey="Examination" stackId="a" fill="#22c55e">
                  <LabelList dataKey="Examination" position="center" fill="#fff" fontSize={10} />
                </Bar>
                <Bar dataKey="Consultation" stackId="a" fill="#f59e0b">
                  <LabelList dataKey="Consultation" position="center" fill="#fff" fontSize={10} />
                </Bar>
                <Bar dataKey="Routine" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="Routine" position="center" fill="#fff" fontSize={10} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-[10px] mt-2 text-gray-600">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-sm"></span> Emergency</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-sm"></span> Examination</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-500 rounded-sm"></span> Consultation</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-sm"></span> Routine Checkup</span>
            </div>
          </div>

          {/* Previous Appointments */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-3">Previous Appointments</h3>
            <div className="space-y-3">
              {previousAppointments.map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img
     src={p.image}   
    alt={p.name} 
    className="w-full h-full object-cover" 
    />
  
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{p.name}</p>
                      <p className="text-[10px] text-gray-400">{p.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400">{p.date}</p>
                  </div>
                  <MdMoreVert className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Up Coming Appointments */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-3">Up Coming Appointments</h3>
            <div className="flex bg-blue-50 rounded-full p-1 text-[11px] font-semibold mb-3">
              {["Days", "Months", "Years"].map((t) => (
                <button
                  key={t}
                  onClick={() => setUpcomingTab(t)}
                  className={`flex-1 py-1 rounded-full transition ${
                    upcomingTab === t ? "bg-blue-200 text-blue-900" : "text-gray-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {previousAppointments.map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
  <img 
    src={p.image} 
    alt={p.name} 
    className="w-full h-full object-cover" 
  />
</div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{p.name}</p>
                      <p className="text-[10px] text-gray-400">{p.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400">{p.date}</p>
                  </div>
                  <MdMoreVert className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Appointment;