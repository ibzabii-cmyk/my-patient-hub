import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const clinicData = [
  { name: "Food Panda", value: 25 },
  { name: "Grab Food", value: 3 },
  { name: "Zomato", value: 12 },
  { name: "Lazada", value: 7 },
  { name: "Uber Eats", value: 10 },
];

const COLORS = ["#172554", "#9CA3AF", "#22C55E", "#E83E8C", "#2563EB"];

function ClinicTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const clinic = payload[0].payload;

    return (
      <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg">
        <p className="text-xs font-semibold text-slate-700">{clinic.name}</p>
        <p className="mt-1 text-sm text-slate-500">
          Promotion: {clinic.value}%
        </p>
      </div>
    );
  }

  return null;
}

function MarketUsageDonutChart() {
  return (
    <div className="h-52 w-full max-w-56">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={clinicData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="72%"
            outerRadius="90%"
            paddingAngle={2}
            stroke="white"
            strokeWidth={2}
          >
            {clinicData.map((clinic, index) => (
              <Cell key={clinic.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip content={<ClinicTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MarketUsageDonutChart;
