import React, { useMemo } from "react";
import { useApp } from "../../context/AppContext";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const BalanceTrendChart = () => {
  const { transactions } = useApp();

  const chartData = useMemo(() => {
    const sortedData = [...transactions].sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    );

    const finalChartData = [];
    let tempBalance = 0;

    for (let i = 0; i < sortedData.length; i++) {
      const item = sortedData[i];

      if (item.type === "income") {
        tempBalance += item.amount;
      } else {
        tempBalance -= item.amount;
      }

      const d = new Date(item.date);
      const day = d.getDate();
      const month = d.toLocaleString("en-US", { month: "short" });

      finalChartData.push({
        name: `${day} ${month}`,
        balance: tempBalance,
      });
    }

    return finalChartData;
  }, [transactions]);

  if (chartData.length === 0) {
    return (
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-[400px] flex items-center justify-center">
        <p className="text-slate-400 font-medium">No transaction data available</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-[400px] w-full">
      <h3 className="text-lg font-bold text-slate-800 mb-6">Balance Trend</h3>
      
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={chartData}> 
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
          <YAxis hide={true} />
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Area 
            type="monotone" 
            dataKey="balance" 
            stroke="#4f46e5" 
            fillOpacity={1} 
            fill="url(#colorView)" 
            strokeWidth={3}
          />
          <defs>
            <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceTrendChart;
