import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function LineChartBox() {
  const { transactions } = useContext(AppContext);
  const [view, setView] = useState("expense");

  // ✅ Filter
  const filteredTransactions = transactions.filter((item) =>
    view === "expense" ? item.type === "expense" : item.type === "income"
  );

  // ✅ Group by month
  const data = Object.values(
    filteredTransactions.reduce((acc, item) => {
      const month = item.date;

      if (!acc[month]) {
        acc[month] = { name: month, amount: 0 };
      }

      acc[month].amount += item.amount;
      return acc;
    }, {})
  );

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg w-full h-80">
      {/* Header + Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          {view === "expense" ? "Expense Trend" : "Income Trend"}
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => setView("expense")}
            className={`px-3 py-1 rounded ${
              view === "expense" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Expense
          </button>

          <button
            onClick={() => setView("income")}
            className={`px-3 py-1 rounded ${
              view === "income" ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            Income
          </button>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="amount"
            stroke={view === "expense" ? "#EF4444" : "#22C55E"}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartBox;