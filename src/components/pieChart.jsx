import { useContext, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";

function PieChartBox() {
  const { transactions } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);
  const [view, setView] = useState("expense");

  const COLORS = ["#4F46E5", "#22C55E", "#F59E0B", "#EF4444", "#06B6D4"];

  // Filter transactions based on view
  const filteredTransactions = transactions.filter(item => item.type === view);

  // Group by category
  const data = Object.values(
    filteredTransactions.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = { name: item.category, value: 0 };
      }
      acc[item.category].value += item.amount;
      return acc;
    }, {})
  );

  return (
    <div className={`rounded-2xl shadow-lg p-5 w-full
      ${theme === "light" ? "bg-gray-100 text-gray-900" : "bg-gray-800 text-white"}
    `}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          {view === "expense" ? "Expense Breakdown" : "Income Breakdown"}
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => setView("expense")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              view === "expense"
                ? "bg-red-500 text-white"
                : `${theme === "light" ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`
            }`}
          >
            Expense
          </button>
          <button
            onClick={() => setView("income")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              view === "income"
                ? "bg-green-500 text-white"
                : `${theme === "light" ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`
            }`}
          >
            Income
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={90}
              paddingAngle={3}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: theme === "light" ? "#fff" : "#1f2937",
                border: "none",
                borderRadius: "8px",
                color: theme === "light" ? "#000" : "#fff",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)"
              }}
              formatter={(value) => [`₹${value.toLocaleString()}`, "Amount"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-2">
        {data.length === 0 ? (
          <p className={`${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>No data available</p>
        ) : (
          data.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                <span className="text-sm">{item.name}</span>
              </div>
              <span className="text-sm font-semibold">
                ₹{item.value.toLocaleString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default PieChartBox;