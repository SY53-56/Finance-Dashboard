import { useContext, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";

function PieChartBox() {
  const { transactions } = useContext(AppContext);
  const [view, setView] = useState("expense");
  const { theme } = useContext(ThemeContext);

  const COLORS = ["#4F46E5", "#22C55E", "#F59E0B", "#EF4444", "#06B6D4"];

  const filteredTransactions = transactions.filter(item => item.type === view);

  const data = Object.values(
    filteredTransactions.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = { name: item.category, value: 0 };
      acc[item.category].value += item.amount;
      return acc;
    }, {})
  );

  return (
    <div className={`p-5 rounded-2xl shadow-lg w-full transition-colors duration-300 ${theme === "light" ? "bg-gray-200" : "bg-gray-800"}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-lg font-semibold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          {view === "expense" ? "Expense Breakdown" : "Income Breakdown"}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setView("expense")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              view === "expense"
                ? "bg-red-500 text-white"
                : `bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600`
            }`}
          >
            Expense
          </button>
          <button
            onClick={() => setView("income")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              view === "income"
                ? "bg-green-500 text-white"
                : `bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600`
            }`}
          >
            Income
          </button>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="h-64">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={3} label={({ percent }) => `${(percent * 100).toFixed(0)}%`}>
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: theme === "light" ? "#fff" : "#1f2937",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
              formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-2">
        {data.length === 0 ? <p className={theme === "light" ? "text-gray-800" : "text-white"}>No data</p> :
          data.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                <span className={`text-sm ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>{item.name}</span>
              </div>
              <span className={`text-sm font-semibold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                ₹{item.value.toLocaleString()}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PieChartBox;