import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";
import Header from "../components/Header";

function Insights() {
  const { transactions } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);

  const currentMonth = new Date().toISOString().slice(0,7); // YYYY-MM
  const monthData = transactions.filter(t => t.date.startsWith(currentMonth));

  const expense = monthData.filter(t=>t.type==="expense").reduce((a,b)=>a+b.amount,0);
  const income = monthData.filter(t=>t.type==="income").reduce((a,b)=>a+b.amount,0);
  const savings = income - expense;

  const highestCategory = Object.values(
    monthData.filter(t=>t.type==="expense").reduce((acc,t)=>{
      if(!acc[t.category]) acc[t.category] = {name:t.category, value:0};
      acc[t.category].value += t.amount;
      return acc;
    }, {})
  ).sort((a,b)=>b.value - a.value)[0];

  const warning = expense > income;
  const cardBg = theme === "light" ? "bg-gray-300" : "bg-gray-800";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";

  return (
    <div className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${theme === "light" ? "bg-gray-400" : "bg-gray-900"}`}>
      <Header />
      <h1 className={`text-2xl sm:text-3xl font-bold mt-4 mb-6 ${textColor}`}>Insights Overview</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={`${cardBg} p-5 rounded-2xl shadow`}>
          <p className={`text-sm ${theme==="light"?"text-gray-500":"text-gray-300"}`}>Income</p>
          <h2 className="text-xl font-bold text-green-500 mt-2">₹{income}</h2>
        </div>
        <div className={`${cardBg} p-5 rounded-2xl shadow`}>
          <p className={`text-sm ${theme==="light"?"text-gray-500":"text-gray-300"}`}>Expense</p>
          <h2 className="text-xl font-bold text-red-500 mt-2">₹{expense}</h2>
        </div>
        <div className={`${cardBg} p-5 rounded-2xl shadow`}>
          <p className={`text-sm ${theme==="light"?"text-gray-500":"text-gray-300"}`}>Savings</p>
          <h2 className="text-xl font-bold text-blue-500 mt-2">₹{savings}</h2>
        </div>
        <div className={`${cardBg} p-5 rounded-2xl shadow`}>
          <p className={`text-sm ${theme==="light"?"text-gray-500":"text-gray-300"}`}>Top Category</p>
          <h2 className="text-lg font-bold mt-2">{highestCategory?.name || "N/A"}</h2>
        </div>
      </div>

      {/* Detailed Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className={`${cardBg} p-6 rounded-2xl shadow`}>
          <h3 className={`text-lg font-semibold mb-3 ${textColor}`}>Highest Spending Category</h3>
          <p className="text-xl font-bold">{highestCategory?.name}</p>
          <p className="text-red-500 mt-2">₹{highestCategory?.value}</p>
        </div>

        <div className={`${cardBg} p-6 rounded-2xl shadow`}>
          <h3 className={`text-lg font-semibold mb-3 ${textColor}`}>Monthly Summary</h3>
          <p className=" text-blue-500">Income: ₹{income}</p>
          <p className=" text-red-500">Expense: ₹{expense}</p>
          <p className="text-sm font-semibold mt-2 text-green-500">Net: ₹{savings}</p>
        </div>

        <div className={`${cardBg} p-6 rounded-2xl shadow lg:col-span-2`}>
          <h3 className={`text-lg font-semibold mb-3 ${textColor}`}>Financial Status</h3>
          <p className={`text-sm ${warning ? "text-red-500" : "text-green-500"}`}>
            {warning ? "⚠️ Your expenses are higher than income" : "✅ You are managing your finances well"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Insights;