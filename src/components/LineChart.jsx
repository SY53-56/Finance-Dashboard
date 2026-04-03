import { useContext, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";

function LineChartBox() {
  const { transactions } = useContext(AppContext);
  const [view, setView] = useState("expense");
  const { theme } = useContext(ThemeContext);

  const filteredTransactions = transactions.filter(item => item.type === view);
  const data = Object.values(
    filteredTransactions.reduce((acc, item) => {
      const month = item.date.substring(0, 7);
      if (!acc[month]) acc[month] = { name: month, amount: 0 };
      acc[month].amount += item.amount;
      return acc;
    }, {})
  ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={`p-6 rounded-2xl shadow-xl w-full h-80 transition-colors duration-300 ${theme === "light" ? "bg-gray-200" : "bg-gray-800"}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          {view === "expense" ? "Expense Trend" : "Income Trend"}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setView("expense")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              view === "expense"
                ? "bg-red-500 text-white shadow-md"
                : `bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600`
            }`}
          >
            Expense
          </button>
          <button
            onClick={() => setView("income")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              view === "income"
                ? "bg-green-500 text-white shadow-md"
                : `bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600`
            }`}
          >
            Income
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="70%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={theme === "light" ? "#d1d5db" : "#374151"} />
          <XAxis dataKey="name" stroke={theme === "light" ? "#374151" : "#d1d5db"} fontSize={12} />
          <YAxis stroke={theme === "light" ? "#374151" : "#d1d5db"} fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: theme === "light" ? "#fff" : "#1f2937",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)"
            }}
            formatter={(value) => [`₹${value.toLocaleString()}`, view]}
          />
          <Line
            type="monotone"
            dataKey="amount"
            stroke={view === "expense" ? "#EF4444" : "#22C55E"}
            strokeWidth={3}
            dot={{ fill: view === "expense" ? "#EF4444" : "#22C55E" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartBox;