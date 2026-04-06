import React from 'react';
import { TrendingUp, AlertCircle, Sparkles } from 'lucide-react';

const InsightsGrid = () => {
  const insights = [
    {
      title: "Highest Spending",
      value: "Rent & Bills",
      desc: "Accounts for 52% of your total outflow this month.",
      icon: <AlertCircle size={20} />,
       theme: "bg-slate-900 dark:bg-indigo-600 text-white",
      subText: "text-slate-400 dark:text-indigo-100/70"
    },
    {
      title: "Saving Potential",
      value: "$240.00",
      desc: "By reducing 'Shopping' by 15%, you can reach this goal.",
      icon: <Sparkles size={20} className="text-emerald-500 dark:text-emerald-300" />,
      theme: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-slate-900 dark:text-white",
      subText: "text-slate-500 dark:text-slate-400"
    },
    {
      title: "Monthly Trend",
      value: "8.4% Up",
      desc: "Your overall spending is slightly higher than last month.",
      icon: <TrendingUp size={20} className="text-indigo-500 dark:text-indigo-400" />,
      theme: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm text-slate-900 dark:text-white",
      subText: "text-slate-500 dark:text-slate-400"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 transition-colors duration-300">
      {insights.map((item, index) => (
        <div 
          key={index} 
          className={`${item.theme} p-6 rounded-[28px] transition-all hover:-translate-y-1 hover:shadow-md duration-300 group relative overflow-hidden`}
        >
         
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-current opacity-[0.03] rounded-full" />
          
          <div className="mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] opacity-60">
              {item.title}
            </p>
            <h4 className="text-xl font-black tracking-tight italic">
              {item.value}
            </h4>
          </div>

          <p className={`${item.subText} text-[12px] mt-4 font-semibold leading-snug`}>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InsightsGrid;