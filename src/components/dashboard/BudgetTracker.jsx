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
      className="bg-white p-6 rounded-[28px] border border-slate-100 shadow-sm"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
          <Wallet size={20} />
        </div>
        {isOverBudget && (
          <div className="flex items-center gap-1 text-rose-500 bg-rose-50 px-2 py-1 rounded-lg">
            <AlertCircle size={14} />
            <span className="text-[10px] font-bold uppercase">Warning</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <h4 className="text-base font-bold text-slate-800">Monthly Budget</h4>
        <p className="text-xs text-slate-400 font-medium">Limit: ${monthlyBudget.toLocaleString()}</p>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`absolute top-0 left-0 h-full rounded-full ${
            isOverBudget ? 'bg-rose-500' : 'bg-indigo-600'
          }`}
        />
      </div>

      <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
        <span className="text-slate-400">Spent: ${spentAmount}</span>
        <span className={`${isOverBudget ? 'text-rose-500' : 'text-slate-800'}`}>
          {Math.round(percentage)}%
        </span>
      </div>

      <p className="mt-4 text-[11px] text-slate-400 leading-relaxed italic">
        * You have <span className="text-indigo-600 font-bold">${monthlyBudget - spentAmount}</span> remaining for this month.
      </p>
    </motion.div>
  );
};

export default BudgetTracker;