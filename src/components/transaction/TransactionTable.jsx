import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft, Trash2 } from "lucide-react";
import { useApp } from "../../context/AppContext"; 

const TransactionTable = ({ transactions, onDelete }) => {
  const { role } = useApp();
  
  const isAdmin = role === "admin";

  return (
    <div className="bg-white dark:bg-slate-900 lg:rounded-[32px] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden transition-colors duration-300">
      {/* Large screen */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
              <th className="px-6 py-5 text-[12px] font-black text-slate-700 dark:text-slate-400 uppercase tracking-widest">
                Transaction
              </th>
              <th className="px-6 py-5 text-[12px] font-black text-slate-700 dark:text-slate-400 uppercase tracking-widest">
                Category
              </th>
              <th className="px-6 py-5 text-[12px] font-black text-slate-700 dark:text-slate-400 uppercase tracking-widest">
                Date
              </th>
              <th className="px-6 py-5 text-[12px] font-black text-slate-700 dark:text-slate-400 uppercase tracking-widest text-right">
                Amount
              </th>
              {/* Header section isAdmin check */}
              {isAdmin && (
                <th className="px-6 py-5 text-[12px] font-black text-slate-700 dark:text-slate-400 uppercase tracking-widest text-right">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {transactions.map((t, index) => (
              <motion.tr
                key={t.id || index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${t.type === "income" ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" : "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400"}`}
                    >
                      {t.type === "income" ? (
                        <ArrowUpRight size={18} />
                      ) : (
                        <ArrowDownLeft size={18} />
                      )}
                    </div>
                    <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {t.description || t.title}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold capitalize">
                    {t.category}
                  </span>
                </td>
                <td className="px-6 py-5 text-sm font-semibold text-slate-500 dark:text-slate-500">
                  {new Date(t.date).toLocaleDateString()}
                </td>
                <td
                  className={`px-6 py-5 text-right font-bold ${t.type === "income" ? "text-emerald-500 dark:text-emerald-400" : "text-slate-800 dark:text-white"}`}
                >
                  {t.type === "income" ? "+" : "-"}${t.amount.toLocaleString()}
                </td>
               
                {isAdmin && (
                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => onDelete(t.id)}
                      className="p-2 text-slate-500 hover:text-rose-500 cursor-pointer hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-xl transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                )}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile responsiveness */}
      <div className="md:hidden divide-y divide-slate-100 dark:divide-slate-800">
        {transactions.map((t, index) => (
          <motion.div
            key={t.id || index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${t.type === "income" ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" : "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400"}`}
              >
                {t.type === "income" ? (
                  <ArrowUpRight size={18} />
                ) : (
                  <ArrowDownLeft size={18} />
                )}
              </div>
              <div>
                <p className="font-bold text-slate-800 dark:text-slate-200 text-[14px]">
                  {t.description || t.title}
                </p>
                <div className="flex items-center gap-2 mt-0.5 text-[10.6px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                  {t.category}{" "}
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />{" "}
                  {new Date(t.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`text-right font-bold text-[15px] ${t.type === "income" ? "text-emerald-500 dark:text-emerald-400" : "text-slate-900 dark:text-white"}`}
              >
                {t.type === "income" ? "+" : "-"}${t.amount.toLocaleString()}
              </div>
              
              {isAdmin && (
                <button
                  onClick={() => onDelete(t.id)}
                  className="p-2 text-slate-500 active:text-rose-500 cursor-pointer"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;
