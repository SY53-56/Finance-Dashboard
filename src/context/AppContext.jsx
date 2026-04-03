import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  // ✅ Only localStorage (no data.js)
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [role, setRole] = useState("viewer");

  // ✅ Add Transaction (Admin only)
  const addTransaction = (newTransaction) => {
    if (role !== "admin") return;
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