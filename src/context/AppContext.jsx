import { createContext, useState, useEffect } from "react";
import { transactionsData } from "../data/data";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  // ✅ Load from localStorage OR fallback to data.js
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : transactionsData;
  });

  // ✅ Role
  const [role, setRole] = useState("viewer");

  // ✅ Add Transaction
  const addTransaction = (newTransaction) => {
    if (role !== "admin") return; // सुरक्षा (important)

    setTransactions((prev) => [...prev, newTransaction]);
  };

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        addTransaction,
        role,
        setRole,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};