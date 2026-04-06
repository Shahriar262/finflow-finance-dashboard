import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp } from 'lucide-react';

const MiniSavingsGoal = () => {
  const targetAmount = 2500;
  const currentSaved = 1625;
  const progress = (currentSaved / targetAmount) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
          <Target size={20} />
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg flex items-center gap-1">
          <TrendingUp size={12} className="text-emerald-600 dark:text-emerald-400" />
          <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">On Track</span>
        </div>
      </div>

      <div className="space-y-1 mb-4">
        <h4 className="text-base font-bold text-slate-800 dark:text-white">New MacBook Pro</h4>
        <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Goal: ${targetAmount.toLocaleString()}</p>
      </div>
      
      {/* Animated Progress Bar */}
      <div className="relative w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-indigo-600 dark:bg-indigo-500 rounded-full"
        />
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
          ${currentSaved.toLocaleString()} <span className="text-slate-300 dark:text-slate-600 font-medium text-[10px]">saved</span>
        </p>
        <p className="text-[11px] font-black text-indigo-600 dark:text-indigo-400">{Math.round(progress)}%</p>
      </div>

      <motion.button 
        whileHover={{ x: 3 }}
        className="mt-5 w-full text-center text-[12px] font-bold text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-center gap-1"
      >
        View Goal Details <span className="text-lg">→</span>
      </motion.button>
    </motion.div>
  );
};

export default MiniSavingsGoal;