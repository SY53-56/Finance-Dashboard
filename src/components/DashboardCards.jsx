import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

function DashboardCards() {
  const { transactions } = useContext(AppContext);

  // ✅ Expense
  const totalExpense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  // ✅ Income
  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  // ✅ Balance
  const balance = totalIncome - totalExpense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-blue-100 text-sm font-medium">Total Balance</h3>
            <p className="text-3xl font-bold mt-2">₹{balance.toLocaleString()}</p>
          </div>
          <DollarSign className="w-8 h-8 opacity-80" />
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-green-100 text-sm font-medium">Total Income</h3>
            <p className="text-3xl font-bold mt-2">₹{totalIncome.toLocaleString()}</p>
          </div>
          <TrendingUp className="w-8 h-8 opacity-80" />
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-red-100 text-sm font-medium">Total Expenses</h3>
            <p className="text-3xl font-bold mt-2">₹{totalExpense.toLocaleString()}</p>
          </div>
          <TrendingDown className="w-8 h-8 opacity-80" />
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;