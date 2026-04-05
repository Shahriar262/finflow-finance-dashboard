import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

const FinanceGrid = ({ balance, income, expenses }) => {
  
  
  const dashboardCardData = [
    {
      id: 1,
      label: "Total Balance",
      value: balance,
      icon: <Wallet size={24} />,
      bg: "bg-indigo-50",
      text: "text-indigo-600",
    },
    {
      id: 2,
      label: "Total Income",
      value: income,
      icon: <TrendingUp size={24} />,
      bg: "bg-emerald-50",
      text: "text-emerald-600",
    },
    {
      id: 3,
      label: "Total Expenses",
      value: expenses,
      icon: <TrendingDown size={24} />,
      bg: "bg-rose-50",
      text: "text-rose-600",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {dashboardCardData.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 transition-shadow hover:shadow-md"
        >
        
          <div className={`p-4 rounded-xl ${item.bg} ${item.text}`}>
            {item.icon}
          </div>

          
          <div>
            <p className="text-sm font-medium text-slate-500">{item.label}</p>
            <h3 className="text-2xl font-bold text-slate-900">
              ${item.value.toLocaleString()}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FinanceGrid;