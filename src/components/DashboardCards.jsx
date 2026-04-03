import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function DashboardCards() {
const {transactions} = useContext(AppContext)
console.log(transactions)
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-white shadow">Balance: ₹{90 }</div>
      <div className="p-4 bg-white shadow">Income: ₹{ 89 }</div>
      <div className="p-4 bg-white shadow">Expense: ₹{78}</div>
    </div>
  );
}

export default DashboardCards;