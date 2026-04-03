import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

function DashboardCards() {
  const { transactions } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);

  // Expense
  const totalExpense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  // Income
  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  // Balance
  const balance = totalIncome - totalExpense;

  // Theme-based backgrounds
  const bgBalance = theme === "light" ? "bg-blue-100 text-blue-900" : "bg-blue-700 text-white";
  const bgIncome = theme === "light" ? "bg-green-100 text-green-900" : "bg-green-700 text-white";
  const bgExpense = theme === "light" ? "bg-red-100 text-red-900" : "bg-red-700 text-white";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className={`p-6 rounded-2xl shadow-lg ${bgBalance}`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium">Total Balance</h3>
            <p className="text-3xl font-bold mt-2">₹{balance.toLocaleString()}</p>
          </div>
          <DollarSign className="w-8 h-8 opacity-80" />
        </div>
      </div>

      <div className={`p-6 rounded-2xl shadow-lg ${bgIncome}`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium">Total Income</h3>
            <p className="text-3xl font-bold mt-2">₹{totalIncome.toLocaleString()}</p>
          </div>
          <TrendingUp className="w-8 h-8 opacity-80" />
        </div>
      </div>

      <div className={`p-6 rounded-2xl shadow-lg ${bgExpense}`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium">Total Expenses</h3>
            <p className="text-3xl font-bold mt-2">₹{totalExpense.toLocaleString()}</p>
          </div>
          <TrendingDown className="w-8 h-8 opacity-80" />
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;