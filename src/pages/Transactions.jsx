import React, { useState } from "react";
import TransactionTable from "../components/transaction/TransactionTable";
import { useApp } from "../context/AppContext";
import { Search, Plus, FilterX, X } from "lucide-react";

const TransactionsPage = () => {
  const { transactions, role, addRecord, deleteRecord } = useApp();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for New Record
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    type: "expense",
  });

  // Filtering Logic
  const filteredData = transactions.filter((t) => {
    const matchesFilter = filter === "all" || t.type === filter;
    const searchStr = search.toLowerCase();
    return (
      matchesFilter &&
      (t.description?.toLowerCase().includes(searchStr) ||
        t.category?.toLowerCase().includes(searchStr))
    );
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;

    const newEntry = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      amount: parseFloat(formData.amount),
    };

    addRecord(newEntry);
    setIsModalOpen(false);
    setFormData({
      description: "",
      amount: "",
      category: "Food",
      type: "expense",
    });
  };

  return (
    <div className="space-y-8 p-2 transition-colors duration-300">
      {/* Header & Search Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Transactions
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-1">
            Manage your FinFlow activity log
          </p>
        </div>

        <div className="flex items-center gap-3">
          {role === "admin" && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex cursor-pointer items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-indigo-100 dark:shadow-none transition-all active:scale-95 shrink-0"
            >
              <Plus size={18} /> Add Transaction
            </button>
          )}

          <div className="relative flex-1 md:flex-none">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 pr-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/20 w-full md:w-64 dark:text-white"
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
            className={`px-6 py-2 cursor-pointer rounded-xl text-xs md:text-[13px] font-bold uppercase tracking-widest transition-all ${
              filter === tab
                ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-white shadow-sm"
                : "text-slate-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
        {filteredData.length > 0 ? (
          <TransactionTable
            transactions={filteredData}
            onDelete={deleteRecord}
          />
        ) : (
          <div className="py-20 text-center">
            <FilterX
              className="mx-auto text-slate-300 dark:text-slate-700 mb-4"
              size={48}
            />
            <p className="text-slate-500 font-bold italic">
              No transactions found
            </p>
          </div>
        )}
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <form
            onSubmit={handleAddSubmit}
            className="bg-white dark:bg-slate-900 w-full max-w-md p-8 rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 space-y-5"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold dark:text-white">
                Add New Record
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-rose-500"
              >
                <X size={20} />
              </button>
            </div>

            <input
              required
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-5 py-3.5 bg-slate-100 dark:bg-slate-800 rounded-2xl outline-none text-sm font-bold dark:text-white"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                required
                type="number"
                placeholder="Amount"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="px-5 py-3.5 bg-slate-100 dark:bg-slate-800 rounded-2xl outline-none text-sm font-bold dark:text-white"
              />

              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="px-5 py-3.5 bg-slate-100 dark:bg-slate-800 rounded-2xl outline-none text-sm font-bold dark:text-slate-400"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            <div>
              <input
                required
                type="text"
                placeholder="Category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="px-5 py-3.5 bg-slate-100 dark:bg-slate-800 rounded-2xl outline-none text-sm font-bold dark:text-white"
              />
            </div>

            <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-indigo-700 transition-all">
              Save Record
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TransactionsPage;
