import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, AlertCircle } from 'lucide-react';

const BudgetTracker = () => {
  
  const monthlyBudget = 5000;
  const spentAmount = 3800;
  const percentage = (spentAmount / monthlyBudget) * 100;
  const isOverBudget = percentage > 90;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    
      className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        
        <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          <Wallet size={20} />
        </div>
        {isOverBudget && (
          <div className="flex items-center gap-1 text-rose-500 bg-rose-50 dark:bg-rose-900/30 px-2 py-1 rounded-lg">
            <AlertCircle size={14} />
            <span className="text-[10px] font-bold uppercase">Warning</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <h4 className="text-base font-bold text-slate-800 dark:text-white">Monthly Budget</h4>
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Limit: ${monthlyBudget.toLocaleString()}</p>
      </div>

      {/* Progress Bar Container */}
      <div className="relative w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`absolute top-0 left-0 h-full rounded-full ${
            isOverBudget ? 'bg-rose-500' : 'bg-indigo-600 dark:bg-indigo-500'
          }`}
        />
      </div>

      <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
        <span className="text-slate-400 dark:text-slate-500">Spent: ${spentAmount}</span>
        <span className={`${isOverBudget ? 'text-rose-500' : 'text-slate-800 dark:text-slate-200'}`}>
          {Math.round(percentage)}%
        </span>
      </div>

      <p className="mt-4 text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed italic">
        * You have <span className="text-indigo-600 dark:text-indigo-400 font-bold">${monthlyBudget - spentAmount}</span> remaining for this month.
      </p>
    </motion.div>
  );
};

export default BudgetTracker;