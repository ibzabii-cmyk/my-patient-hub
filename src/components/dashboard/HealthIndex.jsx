import { AreaChart, Tooltip, Area, ResponsiveContainer } from "recharts";

const healthData = [
  { month: "Jan", income: 1200 },
  { month: "Feb", income: 1800 },
  { month: "Mar", income: 1500 },
  { month: "Apr", income: 2400 },
  { month: "May", income: 2100 },
  { month: "Jun", income: 3200 },
  { month: "Jul", income: 2700 },
  { month: "Aug", income: 3800 },
  { month: "Sep", income: 3400 },
  { month: "Oct", income: 4500 },
];

const symptomsData = [
  { month: "Jan", value: 15 },
  { month: "Feb", value: 9 },
  { month: "Mar", value: 14 },
  { month: "Apr", value: 29 },
  { month: "May", value: 27 },
  { month: "Jun", value: 30 },
  { month: "Jul", value: 48 },
  { month: "Aug", value: 36 },
  { month: "Sep", value: 28 },
  { month: "Oct", value: 51 },
  { month: "Nov", value: 61 },
  { month: "Dec", value: 72 },
];

function ChartTooltip({ active, payload, dataKey, label }) {
  if (!active || !payload?.length) return null;

  const point = payload[0].payload;
  const value = point[dataKey];

  return (
    <div className="rounded-xl border border-gray-100 bg-[rgb(0,0,0,0.80)] px-3 py-2 shadow-lg">
      <p className="text-sm font-semibold text-white">
        {point.month || label}
      </p>

      <p className="mt-1 text-sm font-medium text-white">
        {dataKey === "income"
          ? `Income: ${Number(value).toLocaleString()}`
          : `Symptoms: ${value}`}
      </p>
    </div>
  );
}

function ChartCard({ title, data, dataKey, gradientId }) {
  return (
    <div className="relative h-64 overflow-hidden rounded-xl bg-white">
      {/* Title */}
      <div className="absolute left-6 top-7 z-10">
        <h3 className="text-[16px] font-semibold text-slate-500">{title}</h3>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-xl font-bold text-[#364b70]">70%</span>

          <span className="text-[14px] font-bold text-lime-500">+3%</span>
        </div>
      </div>

      {/* Wavy chart */}
      <div className="absolute inset-x-0 bottom-0 h-41">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 2,
              left: 2,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#364b70" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#364b70" stopOpacity={0.04} />
              </linearGradient>
            </defs>

            <Tooltip
              cursor={false}
              content={(props) => <ChartTooltip {...props} dataKey={dataKey} />}
            />

            <Area
              type="monotone"
              dataKey={dataKey}
              stroke="#364b70"
              strokeWidth={2}
              fill={`url(#${gradientId})`}
              dot={false}
              activeDot={{
                r: 4,
                fill: "#ffffff",
                stroke: "#364b70",
                strokeWidth: 2,
              }}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function HealthIndex() {
  return (
    <div className="grid grid-cols-1 gap-0">
      <ChartCard
        title="Health Index"
        data={healthData}
        dataKey="income"
        gradientId="healthGradient"
      />

      <ChartCard
        title="Symptoms"
        data={symptomsData}
        dataKey="value"
        gradientId="symptomsGradient"
      />
    </div>
  );
}

export default HealthIndex;
