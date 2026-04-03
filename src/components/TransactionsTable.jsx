import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";

function TransactionsTable() {
  const { transactions } = useContext(AppContext);
  const { theme } = useContext(ThemeContext); // Get current theme

  const isLight = theme === "light";

  return (
    <div className={`${isLight ? "bg-white text-gray-900" : "bg-gray-800 text-gray-200"} p-6 rounded-2xl shadow-lg mt-6`}>
      <h2 className="mb-6 text-xl font-bold">{`Recent Transactions`}</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={`${isLight ? "border-gray-200" : "border-gray-700"} border-b`}>
              <th className="text-left py-3 px-4 font-semibold">Date</th>
              <th className="text-left py-3 px-4 font-semibold">Category</th>
              <th className="text-left py-3 px-4 font-semibold">Type</th>
              <th className="text-right py-3 px-4 font-semibold">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.slice(0, 8).map((t) => (
              <tr
                key={t.id}
                className={`${isLight ? "border-gray-100 hover:bg-gray-50" : "border-gray-700 hover:bg-gray-700"} border-b transition-colors`}
              >
                <td className="py-3 px-4">{t.date}</td>
                <td className="py-3 px-4">{t.category}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    t.type === "income"
                      ? isLight ? "bg-green-100 text-green-800" : "bg-green-900 text-green-200"
                      : isLight ? "bg-red-100 text-red-800" : "bg-red-900 text-red-200"
                  }`}>
                    {t.type}
                  </span>
                </td>
                <td className={`py-3 px-4 text-right font-semibold ${
                  t.type === "income" ? (isLight ? "text-green-600" : "text-green-400") : (isLight ? "text-red-600" : "text-red-400")
                }`}>
                  {t.type === "income" ? "+" : "-"}₹{t.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionsTable;