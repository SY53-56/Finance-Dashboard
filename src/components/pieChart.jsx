import { useContext } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { AppContext } from "../context/AppContext";

function PieChartBox() {
  const { transactions } = useContext(AppContext);

  const COLORS = ["#4F46E5", "#22C55E", "#F59E0B", "#EF4444", "#06B6D4"];

  // ✅ Filter only expenses
  const data = Object.values(
    transactions
      .filter(
        (item) =>
          item.category !== "Salary" && item.category !== "Freelance"
      )
      .reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = { name: item.category, value: 0 };
        }
        acc[item.category].value += item.amount;
        return acc;
      }, {})
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Expenses</h2>
        <span className="text-sm text-gray-400">This Month</span>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={50}   // 🔥 donut style
              outerRadius={90}
              paddingAngle={3}
              label={({ percent }) =>
                `${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index % COLORS.length],
                }}
              ></span>
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="text-sm font-semibold">
              ₹{item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;