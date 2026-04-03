import { useEffect, useState } from "react";
import mockData from "../data/mockData.json";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(mockData);
  const [role, setRole] = useState("admin");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = ()=>{
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return(
    <AppContext.Provider value={{transactions, setTransactions, role, setRole, theme, toggleTheme}}>
        {children}
    </AppContext.Provider>
  )
};