import React, { useMemo } from "react";
import { useApp } from "../context/AppContext";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import BalanceTrendChart from "../components/dashboard/BalanceTrendChart";
import SpendingCategories from "../components/dashboard/SpendingCategories";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import InsightsCard from "../components/dashboard/InsightsCard";
import FinanceGrid from "../components/dashboard/FinanceGrid";

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
    <div className="space-y-8 max-w-[1600px] mx-auto">
        
      {/* Dashboard header */}
      <DashboardHeader />

      {/* Finance grid cards for showing balance, income & expenses */}
      <FinanceGrid
        balance={stats.balance}
        income={stats.income}
        expenses={stats.expenses}
      />

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <BalanceTrendChart />
        </div>

        <div>
          <SpendingCategories />
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RecentTransactions />
        </div>
        <div>
          <InsightsCard />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
