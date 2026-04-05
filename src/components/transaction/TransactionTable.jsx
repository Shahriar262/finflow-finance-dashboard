import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, Search, Filter } from 'lucide-react';

const TransactionTable = ({ transactions }) => {
  return (
    <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Transaction</th>
              <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Category</th>
              <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">Date</th>
              <th className="px-6 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {transactions.map((t, index) => (
              <motion.tr 
                key={t.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      t.type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                    }`}>
                      {t.type === 'income' ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                    </div>
                    <span className="font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                      {t.description}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold capitalize">
                    {t.category}
                  </span>
                </td>
                <td className="px-6 py-5 text-sm font-semibold text-slate-400">
                  {new Date(t.date).toLocaleDateString()}
                </td>
                <td className={`px-6 py-5 text-right font-black ${
                  t.type === 'income' ? 'text-emerald-500' : 'text-slate-800'
                }`}>
                  {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable