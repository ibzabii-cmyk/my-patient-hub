import { useRef, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const appointmentData = [
  {
    month: "Jan",
    emergency: 44,
    examination: 13,
    consultation: 11,
    routine: 21,
  },
  {
    month: "Feb.",
    emergency: 55,
    examination: 23,
    consultation: 17,
    routine: 7,
  },
  {
    month: "Mar.",
    emergency: 41,
    examination: 20,
    consultation: 15,
    routine: 25,
  },
  {
    month: "Apr.",
    emergency: 67,
    examination: 8,
    consultation: 15,
    routine: 13,
  },
  {
    month: "May",
    emergency: 22,
    examination: 13,
    consultation: 21,
    routine: 22,
  },
  {
    month: "Jun",
    emergency: 43,
    examination: 27,
    consultation: 14,
    routine: 8,
  },
];

const appointmentTypes = [
  { key: "emergency", name: "Emergency", color: "#168bff" },
  { key: "examination", name: "Examination", color: "#00d99b" },
  { key: "consultation", name: "Consultation", color: "#ffab12" },
  { key: "routine", name: "Routine Checkup", color: "#ff4261" },
];

// Tooltip: show only month and Emergency value
function CustomTooltip({ active, label, hiddenItems }) {
  if (!active || hiddenItems.includes("emergency")) {
    return null;
  }

  const selectedMonth = appointmentData.find((item) => item.month === label);

  if (!selectedMonth) return null;

  return (
    <div className="rounded-md border border-gray-200 bg-white px-3 py-2 shadow-md">
      <p className="mb-1 text-sm font-medium text-gray-700">
        {selectedMonth.month}
      </p>

      <p className="text-sm font-medium text-[#168bff]">
        Emergency: {selectedMonth.emergency}
      </p>
    </div>
  );
}

function AppointmentChart() {
  const [hiddenItems, setHiddenItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const chartRef = useRef(null);

  // Toggle chart categories
  const toggleItem = (key) => {
    setHiddenItems((previous) =>
      previous.includes(key)
        ? previous.filter((item) => item !== key)
        : [...previous, key]
    );
  };

  // Find the topmost visible bar segment for rounded corners
  const visibleTypes = appointmentTypes.filter(
    (item) => !hiddenItems.includes(item.key)
  );

  const topVisibleKey = visibleTypes[visibleTypes.length - 1]?.key;

  // Download helper
  const downloadFile = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMenuOpen(false);
  };

  // Download SVG
  const downloadSVG = () => {
    const svg = chartRef.current?.querySelector("svg");
    if (!svg) return;

    const clone = svg.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const { width, height } = svg.getBoundingClientRect();

    clone.setAttribute("width", String(Math.round(width)));
    clone.setAttribute("height", String(Math.round(height)));

    const source = new XMLSerializer().serializeToString(clone);

    const blob = new Blob([source], {
      type: "image/svg+xml;charset=utf-8",
    });

    downloadFile(blob, "appointment-chart.svg");
  };

  // Download PNG
  const downloadPNG = () => {
    const svg = chartRef.current?.querySelector("svg");
    if (!svg) return;

    const clone = svg.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const rect = svg.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));

    clone.setAttribute("width", String(width));
    clone.setAttribute("height", String(height));

    const source = new XMLSerializer().serializeToString(clone);

    const blob = new Blob([source], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width * 2;
      canvas.height = height * 2;

      const context = canvas.getContext("2d");

      if (!context) {
        URL.revokeObjectURL(url);
        setMenuOpen(false);
        return;
      }

      context.scale(2, 2);
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);

      URL.revokeObjectURL(url);

      canvas.toBlob((pngBlob) => {
        if (pngBlob) {
          downloadFile(pngBlob, "appointment-chart.png");
        } else {
          setMenuOpen(false);
        }
      }, "image/png");
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      setMenuOpen(false);
    };

    image.src = url;
  };

  // Download CSV
  const downloadCSV = () => {
    const headers = [
      "Month",
      "Emergency",
      "Examination",
      "Consultation",
      "Routine Checkup",
    ];

    const rows = appointmentData.map((item) => [
      item.month,
      item.emergency,
      item.examination,
      item.consultation,
      item.routine,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\r\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    downloadFile(blob, "appointment-chart.csv");
  };

  // Clickable legend item
  const renderLegendItem = (item) => {
    const isHidden = hiddenItems.includes(item.key);

    return (
      <button
        key={item.key}
        type="button"
        onClick={() => toggleItem(item.key)}
        aria-pressed={!isHidden}
        className="flex cursor-pointer items-center gap-1.5"
      >
        <span
          className="h-3.5 w-3.5 shrink-0 rounded-sm transition-opacity duration-200"
          style={{
            backgroundColor: item.color,
            opacity: isHidden ? 0.3 : 1,
          }}
        />

        <span
          className="text-sm transition-colors duration-200"
          style={{
            color: isHidden ? "#a3a3a3" : "#454545",
          }}
        >
          {item.name}
        </span>
      </button>
    );
  };

  return (
    <div className="w-full rounded-3xl bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-[#343a40]">Appointment</h2>

        {/* Hamburger menu */}
        <div className="relative">
          <button
            type="button"
            aria-label="Appointment menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
            className="flex flex-col gap-1 p-1"
          >
            <span className="h-[2px] w-4 rounded bg-slate-500" />
            <span className="h-[2px] w-4 rounded bg-slate-500" />
            <span className="h-[2px] w-4 rounded bg-slate-500" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full z-50 mt-1 w-36 rounded-lg border border-gray-100 bg-white p-1 shadow-md">
              <button
                type="button"
                onClick={downloadSVG}
                className="w-full rounded-md px-2 py-1.5 text-left text-xs text-gray-700 hover:bg-gray-100"
              >
                Download SVG
              </button>

              <button
                type="button"
                onClick={downloadPNG}
                className="w-full rounded-md px-2 py-1.5 text-left text-xs text-gray-700 hover:bg-gray-100"
              >
                Download PNG
              </button>

              <button
                type="button"
                onClick={downloadCSV}
                className="w-full rounded-md px-2 py-1.5 text-left text-xs text-gray-700 hover:bg-gray-100"
              >
                Download CSV
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div ref={chartRef} className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={appointmentData}
            barCategoryGap="8%"
            margin={{ top: 8, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#e5e7eb"
              strokeWidth={0.8}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              tick={{ fill: "#454545", fontSize: 13 }}
            />

            <YAxis
              domain={[0, 120]}
              ticks={[0, 30, 60, 90, 120]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#454545", fontSize: 12 }}
            />

            <Tooltip
              content={<CustomTooltip hiddenItems={hiddenItems} />}
              cursor={{ fill: "rgba(22, 139, 255, 0.05)" }}
            />

            {appointmentTypes.map((item) => (
              <Bar
                key={item.key}
                dataKey={item.key}
                name={item.name}
                stackId="appointments"
                fill={item.color}
                hide={hiddenItems.includes(item.key)}
                barSize={45}
                radius={
                  item.key === topVisibleKey ? [8, 8, 0, 0] : [0, 0, 0, 0]
                }
                label={{
                  position: "inside",
                  fill: "#ffffff",
                  fontSize: 10,
                  fontWeight: 600,
                }}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Clickable Legend */}
      <div className="mt-4 flex flex-col items-center gap-y-2">
        {/* First row: three categories */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {appointmentTypes
            .filter((item) => item.key !== "routine")
            .map(renderLegendItem)}
        </div>

        {/* Second row: Routine Checkup */}
        {renderLegendItem(
          appointmentTypes.find((item) => item.key === "routine")
        )}
      </div>
    </div>
  );
}

export default AppointmentChart;
