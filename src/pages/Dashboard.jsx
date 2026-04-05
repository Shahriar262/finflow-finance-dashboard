import React, { useMemo } from "react";
import { useApp } from "../context/AppContext";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import BalanceTrendChart from "../components/dashboard/BalanceTrendChart";
import SpendingCategories from "../components/dashboard/SpendingCategories";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import InsightsCard from "../components/dashboard/InsightsCard";
import FinanceGrid from "../components/dashboard/FinanceGrid";
import QuickActions from "../components/dashboard/QuickActions";
import MiniSavingsGoal from "../components/dashboard/MiniSavingsGoal";
import BudgetTracker from "../components/dashboard/BudgetTracker";
import FinancialHealth from "../components/dashboard/FinancialHealth";

const Dashboard = () => {
  const { transactions } = useApp();

  // Calculating total balance for the top cards
  const stats = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const expenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, curr) => acc + curr.amount, 0);

    return {
      income,
      expenses,
      balance: income - expenses,
    };
  }, [transactions]);
  return (
    <div className="space-y-6 md:space-y-8 max-w-7xl mx-auto p-4 md:p-0">
     
      <DashboardHeader />
      <QuickActions />

     
      <FinanceGrid
        balance={stats.balance}
        income={stats.income}
        expenses={stats.expenses}
      />

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
  
  <div className="lg:col-span-2 space-y-6">
    <BalanceTrendChart />
    <RecentTransactions />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <BudgetTracker />
      <FinancialHealth />
    </div>
  </div>

  <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-8 h-fit">
    <SpendingCategories />
    <MiniSavingsGoal />
    <InsightsCard />
  </div>

</div>
    </div>
  );
};

export default Dashboard;
