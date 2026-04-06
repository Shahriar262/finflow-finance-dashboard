import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useApp } from "../../context/AppContext";

const chartData = [
  { name: "Rent & Bills", value: 1200 },
  { name: "Food & Dining", value: 500 },
  { name: "Shopping", value: 300 },
  { name: "Travel", value: 150 },
];

// Slightly more vibrant colors for better contrast in both modes
const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#F43F5E"];

const SpendingChart = () => {
  const { theme } = useApp();
  const isDark = theme === "dark";

  return (
    <div className="w-full h-full flex flex-col min-h-[350px]">
      <div className="flex-1 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              innerRadius="65%" // Slightly thinner for a more modern "Donut" look
              outerRadius="85%"
              paddingAngle={8}
              dataKey="value"
              stroke="none"
              cx="50%"
              cy="50%"
              // Add a subtle entrance animation
              animationBegin={0}
              animationDuration={1200}
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  className="outline-none hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
            </Pie>

            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? "#0f172a" : "#ffffff", 
                borderRadius: "16px", 
                border: isDark ? "1px solid #1e293b" : "none", 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)", 
                fontSize: "12px",
                padding: "12px",
                color: isDark ? "#f8fafc" : "#1e293b"
              }}
              itemStyle={{
                fontWeight: "bold",
                color: isDark ? "#cbd5e1" : "#475569"
              }}
              cursor={{ fill: "transparent" }}
            />

            <Legend 
              verticalAlign="bottom" 
              align="center"
              iconType="circle" 
              iconSize={10}
              layout="horizontal"
              formatter={(value) => (
                <span className="text-slate-600 dark:text-slate-400 font-bold text-[11px] uppercase tracking-wider ml-1">
                  {value}
                </span>
              )}
              wrapperStyle={{ 
                paddingTop: "30px", 
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Optional: Central Text for Total - Dribbble Style */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none mt-[-15px]">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Total</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">$2,150</p>
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;