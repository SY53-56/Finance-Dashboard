import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";

function InsightsPage() {
  const { transactions } = useContext(AppContext);

  // 👉 Filter current month (Feb example)
  const febData = transactions.filter((item) =>
    item.date.startsWith("2026-03")
  );
  
console.log(transactions)
  const expense = febData
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);
console.log( "expense",expense)
  const income = febData
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);
console.log( "income",income)
  const savings = income - expense;

  // 👉 Highest category
  const highestCategory = Object.values(
    febData
      .filter((item) => item.type === "expense")
      .reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = { name: item.category, value: 0 };
        }
        acc[item.category].value += item.amount;
        return acc;
      }, {})
  ).sort((a, b) => b.value - a.value)[0];

  const warning = expense > income;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      
      {/* Header */}
      <Header />

      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mt-4 mb-6 dark:text-white">
        Insights Overview
      </h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Income</p>
          <h2 className="text-xl font-bold text-green-500 mt-2">
            ₹{income}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Expense</p>
          <h2 className="text-xl font-bold text-red-500 mt-2">
            ₹{expense}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Savings</p>
          <h2 className="text-xl font-bold text-blue-500 mt-2">
            ₹{savings}
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Top Category</p>
          <h2 className="text-lg font-bold mt-2">
            {highestCategory?.name || "N/A"}
          </h2>
        </div>

      </div>

      {/* Detailed Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

        {/* Highest Spending */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-3 dark:text-white">
            Highest Spending Category
          </h3>
          <p className="text-xl font-bold">
            {highestCategory?.name}
          </p>
          <p className="text-red-500 mt-2">
            ₹{highestCategory?.value}
          </p>
        </div>

        {/* Monthly Summary */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-3 dark:text-white">
            Monthly Summary
          </h3>
          <p className="text-sm">Income: ₹{income}</p>
          <p className="text-sm">Expense: ₹{expense}</p>
          <p className="text-sm font-semibold mt-2">
            Net: ₹{savings}
          </p>
        </div>

        {/* Warning */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow lg:col-span-2">
          <h3 className="text-lg font-semibold mb-3 dark:text-white">
            Financial Status
          </h3>

          <p
            className={`text-sm ${
              warning ? "text-red-500" : "text-green-500"
            }`}
          >
            {warning
              ? "⚠️ Your expenses are higher than income"
              : "✅ You are managing your finances well"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default InsightsPage;