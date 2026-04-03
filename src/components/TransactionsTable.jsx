import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function TransactionsTable() {
  const { transactions } = useContext(AppContext);
  console.log(transactions)
  return (
    <div className="bg-white p-4 shadow mt-6">
      <h2 className="mb-4 font-bold">Transactions</h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {transactions.slice(0,8).map(t => (
            <tr key={t.id||0}>
              <td>{t.date||0}</td>
              <td>₹{t.amount||0}</td>
              <td>{t.category||0}</td>
              <td>{t.type||0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsTable;