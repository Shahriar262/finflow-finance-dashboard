import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Download, Calendar, ShieldCheck, ArrowRightLeft } from 'lucide-react';

const actions = [
  { label: 'Add Entry', icon: <Plus size={18} />, color: 'bg-indigo-600 text-white shadow-indigo-100' },
  { label: 'Reports', icon: <Download size={18} />, color: 'bg-white text-slate-600 border border-slate-200' },
  { label: 'Transfer', icon: <ArrowRightLeft size={18} />, color: 'bg-white text-slate-600 border border-slate-200' },
  { label: 'Schedule', icon: <Calendar size={18} />, color: 'bg-white text-slate-600 border border-slate-200' },
];

const QuickActions = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-3 items-center overflow-x-auto pb-2 scrollbar-hide no-scrollbar"
    >
      {actions.map((action, i) => (
        <motion.button
          key={i}
          whileHover={{ y: -2, shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-[13px] md:text-sm transition-shadow whitespace-nowrap shadow-sm ${action.color}`}
        >
          {action.icon}
          {action.label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default QuickActions;