import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const chartData = [
  { name: "Rent & Bills", value: 1200 },
  { name: "Food & Dining", value: 500 },
  { name: "Shopping", value: 300 },
  { name: "Travel", value: 150 },
];

const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

const SpendingChart = () => {
  return (
    /* Removed extra bg, border, and shadow to avoid double border issue */
    <div className="w-full h-full flex flex-col min-h-[350px]">
      <div className="flex-1 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              // Percentage-based radius for perfect responsiveness
              innerRadius="60%" 
              outerRadius="80%"
              paddingAngle={6}
              dataKey="value"
              stroke="none"
              cx="50%"
              cy="50%"
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  className="outline-none"
                />
              ))}
            </Pie>

            <Tooltip 
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', 
                fontSize: '11px',
                padding: '8px 12px'
              }} 
            />

            <Legend 
              verticalAlign="bottom" 
              align="center"
              iconType="circle" 
              iconSize={8}
              layout="horizontal"
              wrapperStyle={{ 
                paddingTop: '20px', 
                fontSize: '12px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendingChart;