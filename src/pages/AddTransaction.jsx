import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function AddTransaction() {
  const { addTransaction } = useContext(AppContext);
const navigate =useNavigate()
  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      ...form,
      amount: Number(form.amount),
      id: Date.now(),
    };

    addTransaction(newTransaction);

    setForm({
      amount: "",
      category: "",
      type: "expense",
      date: "",
    });

  navigate("/")
  };

  return (
   <main className="w-full justify-center items-center flex h-[100vh]">
     <div className="w-full max-w-xl mx-auto bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-lg">
      
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold mb-4 dark:text-white">
        Add Transaction
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Row 1 */}
        <div className="grid grid-cols-1 text-white sm:grid-cols-2 gap-4">
          {/* Amount */}
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        {/* Row 2 */}
        <div className="grid text-white grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Type */}
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          {/* Date */}
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
   </main>
  );
}

export default AddTransaction;