import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function TransactionsTable() {
  const { transactions } = useContext(AppContext);
console.log("transition", transactions)
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="mb-6 text-xl font-bold dark:text-white">Recent Transactions</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-300">Date</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-300">Category</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-300">Type</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-600 dark:text-gray-300">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.slice(0, 8).map((t) => (
              <tr key={t.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{t.date}</td>
                <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{t.category}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    t.type === 'income'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {t.type}
                  </span>
                </td>
                <td className={`py-3 px-4 text-right font-semibold ${
                  t.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {t.type === 'income' ? '+' : '-'}₹{t.amount.toLocaleString()}
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