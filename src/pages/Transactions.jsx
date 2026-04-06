import React, { useState } from "react";
import TransactionTable from "../components/transaction/TransactionTable";
import { useApp } from "../context/AppContext";
import { Search, Plus, FilterX } from "lucide-react";

const TransactionsPage = () => {
  const { transactions, role } = useApp();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Filtering Logic
  const filteredData = transactions.filter((t) => {
    const matchesFilter = filter === "all" || t.type === filter;
    const matchesSearch =
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 p-2">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Transactions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 font-semibold text-sm mt-1">
            Keep track of your FinFlow activities
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* button for admin role */}
          {role === "admin" && (
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-indigo-100 transition-all active:scale-95 shrink-0">
              <Plus size={18} />
              <span className="hidden sm:inline">Add New</span>
            </button>
          )}

          <div className="relative group flex-1 md:flex-none">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 pr-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all w-full md:w-64 shadow-sm dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 w-fit rounded-2xl">
        {["all", "income", "expense"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              filter === tab
                ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Error/Empty State Handling */}
      {filteredData.length > 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
          <TransactionTable transactions={filteredData} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white dark:bg-slate-900 rounded-[32px] border-2 border-dashed border-slate-100 dark:border-slate-800">
          <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-4">
            <FilterX size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            No transactions found
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mt-2">
            We couldn't find any results for "{search}". Try checking your
            spelling or filters.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setFilter("all");
            }}
            className="mt-6 text-sm font-bold text-indigo-600 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionsPage;
