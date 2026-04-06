import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Download, Calendar, ArrowRightLeft } from 'lucide-react';

const actions = [
  { 
    label: 'Add Entry', 
    icon: <Plus size={18} />, 
    color: 'bg-indigo-600 text-white shadow-indigo-100 dark:shadow-none hover:bg-indigo-700' 
  },
  { 
    label: 'Reports', 
    icon: <Download size={18} />, 
    color: 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800' 
  },
  { 
    label: 'Transfer', 
    icon: <ArrowRightLeft size={18} />, 
    color: 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800' 
  },
  { 
    label: 'Schedule', 
    icon: <Calendar size={18} />, 
    color: 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800' 
  },
];

const QuickActions = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 overflow-x-auto no-scrollbar transition-colors duration-300"
    >
      {actions.map((action, i) => (
        <motion.button
          key={i}
          whileHover={{ y: -2, shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-[13px] md:text-sm transition-all whitespace-nowrap shadow-sm ${action.color}`}
        >
          {action.icon}
          {action.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default QuickActions;