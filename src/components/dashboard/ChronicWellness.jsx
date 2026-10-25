import { useRef, useState } from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const wellnessData = [
  { year: "2017", Malaria: 85, Cold: 80, Typhoid: 50, Cough: 85 },
  { year: "2018", Malaria: 60, Cold: 35, Typhoid: 90, Cough: 25 },
  { year: "2019", Malaria: 30, Cold: 35, Typhoid: 90, Cough: 90 },
  { year: "2020", Malaria: 25, Cold: 90, Typhoid: 10, Cough: 30 },
  { year: "2021", Malaria: 105, Cold: 20, Typhoid: 40, Cough: 55 },
  { year: "2022", Malaria: 25, Cold: 85, Typhoid: 15, Cough: 20 },
];

const diseases = [
  { name: "Malaria", color: "#168bff" },
  { name: "Cold", color: "#00d99b" },
  { name: "Typhoid", color: "#ffab12" },
  { name: "Cough", color: "#ff4261" },
];

function ChronicWellness() {
  const [activeDiseases, setActiveDiseases] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const chartRef = useRef(null);

  const toggleDisease = (name) => {
    setActiveDiseases((previous) =>
      previous.includes(name)
        ? previous.filter((item) => item !== name)
        : [...previous, name]
    );
  };

  // Download a file
  const downloadFile = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
  };

  // Get the rendered SVG chart
  const getChartSVG = () => {
    const svg = chartRef.current?.querySelector("svg");

    if (!svg) {
      console.error("Chart SVG not found.");
      return null;
    }

    const clone = svg.cloneNode(true);

    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    const rect = svg.getBoundingClientRect();

    clone.setAttribute("width", String(rect.width));
    clone.setAttribute("height", String(rect.height));

    return new XMLSerializer().serializeToString(clone);
  };

  // Download SVG
  const downloadSVG = () => {
    const svgString = getChartSVG();

    if (!svgString) return;

    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });

    downloadFile(blob, "chronic-wellness.svg");
    setMenuOpen(false);
  };

  // Download PNG
  const downloadPNG = () => {
    const svgString = getChartSVG();

    if (!svgString) return;

    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(svgBlob);
    const image = new Image();

    image.onload = () => {
      try {
        const svg = chartRef.current?.querySelector("svg");
        const rect = svg?.getBoundingClientRect();

        if (!rect || !rect.width || !rect.height) {
          throw new Error("Chart dimensions are unavailable.");
        }

        const scale = 2;
        const canvas = document.createElement("canvas");

        canvas.width = Math.round(rect.width * scale);
        canvas.height = Math.round(rect.height * scale);

        const context = canvas.getContext("2d");

        if (!context) {
          throw new Error("Canvas context is unavailable.");
        }

        context.scale(scale, scale);
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, rect.width, rect.height);

        context.drawImage(image, 0, 0, rect.width, rect.height);

        canvas.toBlob((blob) => {
          URL.revokeObjectURL(url);

          if (!blob) {
            console.error("Could not create PNG.");
            return;
          }

          downloadFile(blob, "chronic-wellness.png");
          setMenuOpen(false);
        }, "image/png");
      } catch (error) {
        URL.revokeObjectURL(url);
        console.error("PNG export failed:", error);
      }
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      console.error("Could not render chart as an image.");
    };

    image.src = url;
  };

  // Download CSV
  const downloadCSV = () => {
    const headers = ["Year", "Malaria", "Cold", "Typhoid", "Cough"];

    const rows = wellnessData.map((item) => [
      item.year,
      item.Malaria,
      item.Cold,
      item.Typhoid,
      item.Cough,
    ]);

    const escapeCSV = (value) => `"${String(value).replace(/"/g, '""')}"`;

    const csv = [
      headers.map(escapeCSV).join(","),
      ...rows.map((row) => row.map(escapeCSV).join(",")),
    ].join("\r\n");

    const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8;" });

    downloadFile(blob, "chronic-wellness.csv");
    setMenuOpen(false);
  };

  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-[20px] tracking-tight text-[#343a40] font-bold">
          Chronic wellness Tracker
        </h2>

        {/* Hamburger Menu */}
        <div className="relative">
          <button
            type="button"
            aria-label="Download chart"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex flex-col gap-1 rounded-md p-2"
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
                className="w-full rounded-lg px-3 py-2 text-left text-[13px] hover:bg-gray-100"
              >
                Download SVG
              </button>

              <button
                type="button"
                onClick={downloadPNG}
                className="w-full rounded-lg px-3 py-2 text-left text-[13px] hover:bg-gray-100"
              >
                Download PNG
              </button>

              <button
                type="button"
                onClick={downloadCSV}
                className="w-full rounded-lg px-3 py-2 text-left text-[13px] hover:bg-gray-100"
              >
                Download CSV
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Radar Chart */}
      <div ref={chartRef} className="h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={wellnessData} cx="50%" cy="47%" outerRadius="62%">
            <PolarGrid gridType="polygon" stroke="#e2e2e2" strokeWidth={1.2} />

            <PolarAngleAxis
              dataKey="year"
              tick={{
                fill: "#a3a3a3",
                fontSize: 14,
              }}
              tickLine={false}
            />

            <PolarRadiusAxis
              angle={90}
              domain={[0, 120]}
              ticks={[0, 30, 60, 90, 120]}
              tick={{
                fill: "#454545",
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            {diseases.map((disease) => {
              const isActive = activeDiseases.includes(disease.name);

              return (
                <Radar
                  key={disease.name}
                  name={disease.name}
                  dataKey={disease.name}
                  stroke={disease.color}
                  fill={disease.color}
                  strokeOpacity={isActive ? 1 : 0}
                  fillOpacity={isActive ? 0.25 : 0}
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={false}
                  isAnimationActive={false}
                />
              );
            })}
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Clickable Legend */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 pb-4">
        {diseases.map((disease) => {
          const isActive = activeDiseases.includes(disease.name);

          return (
            <button
              key={disease.name}
              type="button"
              onClick={() => toggleDisease(disease.name)}
              aria-pressed={isActive}
              className="flex cursor-pointer items-center gap-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span
                className="h-3.5 w-3.5 rounded-full transition-opacity duration-200"
                style={{
                  backgroundColor: disease.color,
                  opacity: isActive ? 1 : 0.3,
                }}
              />

              <span className="text-[13px] text-[#454545]">{disease.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ChronicWellness;
