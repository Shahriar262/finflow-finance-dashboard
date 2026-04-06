import { useEffect, useState } from "react";
import mockData from "../data/mockData.json";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("finflow_transactions");
    return saved ? JSON.parse(saved) : mockData;
  });
  const [role, setRole] = useState("admin");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("finflow_transactions", JSON.stringify(transactions));
  }, [transactions]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const addRecord = (newRecord) =>
    setTransactions([newRecord, ...transactions]);
  const deleteRecord = (id) =>
    setTransactions(transactions.filter((t) => t.id !== id));

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        addRecord,
        deleteRecord,
        role,
        setRole,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
