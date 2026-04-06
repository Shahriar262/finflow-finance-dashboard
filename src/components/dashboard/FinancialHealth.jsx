import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck } from 'lucide-react';

const FinancialHealth = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-sm h-full transition-colors duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
          <Activity size={20} />
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-lg flex items-center gap-1">
          <ShieldCheck size={12} className="text-blue-600 dark:text-blue-400" />
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">Secure</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-base font-bold text-slate-800 dark:text-white">Financial Health</h4>
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Score based on spending</p>
      </div>

      <div className="flex items-end gap-2 mb-2">
        <h2 className="text-3xl font-black text-slate-800 dark:text-white">82</h2>
        <span className="text-sm font-bold text-emerald-500 mb-1">/ 100</span>
      </div>

      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
        Your score is <span className="text-emerald-600 dark:text-emerald-400 font-bold">Excellent</span>. You've saved 15% more than last month.
      </p>
    </motion.div>
  );
};

export default FinancialHealth;