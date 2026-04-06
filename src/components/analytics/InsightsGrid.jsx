import React from 'react';
import { TrendingUp, AlertCircle, Sparkles } from 'lucide-react';

const InsightsGrid = () => {
  const insights = [
    {
      title: "Highest Spending",
      value: "Rent & Bills",
      desc: "Accounts for 52% of your total outflow this month.",
      icon: <AlertCircle size={20} />,
      theme: "bg-slate-900 text-white",
      subText: "text-slate-400"
    },
    {
      title: "Saving Potential",
      value: "$240.00",
      desc: "By reducing 'Shopping' by 15%, you can reach this goal.",
      icon: <Sparkles size={20} className="text-emerald-500" />,
      theme: "bg-white border border-slate-100 shadow-sm text-slate-900",
      subText: "text-slate-500"
    },
    {
      title: "Monthly Trend",
      value: "8.4% Up",
      desc: "Your overall spending is slightly higher than last month.",
      icon: <TrendingUp size={20} className="text-indigo-500" />,
      theme: "bg-white border border-slate-100 shadow-sm text-slate-900",
      subText: "text-slate-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {insights.map((item, index) => (
        <div key={index} className={`${item.theme} p-7 rounded-[32px] transition-transform hover:-translate-y-1 duration-300`}>
          <div className="mb-4 opacity-80">{item.icon}</div>
          <p className={`text-[10px] font-black uppercase tracking-widest mb-1 opacity-70`}>{item.title}</p>
          <h4 className="text-2xl font-black italic">{item.value}</h4>
          <p className={`${item.subText} text-xs mt-4 font-medium leading-relaxed`}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default InsightsGrid;