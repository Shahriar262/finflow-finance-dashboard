import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useApp } from '../../context/AppContext';

const COLORS = ['#4f46e5', '#7c3aed', '#2563eb', '#db2777', '#ea580c'];

const SpendingCategories = () => {
  const { transactions, theme } = useApp();

  const data = useMemo(() => {
    const categories = {};
    
    transactions.filter(t => t.type === 'expense').forEach(t => {
      const catName = t.category.charAt(0).toUpperCase() + t.category.slice(1);
      categories[catName] = (categories[catName] || 0) + t.amount;
    });

    return Object.keys(categories).map(key => ({
      name: key,
      value: categories[key]
    }));
  }, [transactions]);

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm h-[400px] flex flex-col transition-colors duration-300">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Spending by Category</h3>
      
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff', 
                borderRadius: '12px', 
                border: theme === 'dark' ? '1px solid #1e293b' : 'none', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                color: theme === 'dark' ? '#f8fafc' : '#1e293b'
              }}
              itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => <span className="text-slate-600 dark:text-slate-400 text-xs font-semibold">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendingCategories;