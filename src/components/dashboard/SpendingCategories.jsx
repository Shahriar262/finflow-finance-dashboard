import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useApp } from '../../context/AppContext';

const COLORS = ['#4f46e5', '#7c3aed', '#2563eb', '#db2777', '#ea580c'];

const SpendingCategories = () => {
  const { transactions } = useApp();

  const data = useMemo(() => {
    const categories = {};
    
    transactions.filter(t => t.type === 'expense').forEach(t => {
      categories[t.category] = (categories[t.category] || 0) + t.amount;
    });

    
    return Object.keys(categories).map(key => ({
      name: key,
      value: categories[key]
    }));
  }, [transactions]);

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-[400px]  flex flex-col">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Spending by Category</h3>
      
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendingCategories;