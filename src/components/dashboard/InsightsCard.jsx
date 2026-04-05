import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useApp } from "../../context/AppContext";
import {
  Lightbulb,
  TrendingDown,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const InsightsCard = () => {
  const { transactions } = useApp();

  const insightData = useMemo(() => {
    const expenses = transactions.filter((t) => t.type === "expense");
    const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

    const catMap = {};
    expenses.forEach(
      (t) => (catMap[t.category] = (catMap[t.category] || 0) + t.amount),
    );
    const topCat = Object.keys(catMap).reduce(
      (a, b) => (catMap[a] > catMap[b] ? a : b),
      "None",
    );

    return { totalExpense, topCat };
  }, [transactions]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      
      className="bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 p-8 rounded-[32px] border border-slate-700 shadow-2xl h-full relative overflow-hidden group transition-all duration-300"
    >
      
      <div className="absolute -right-16 -top-16 w-56 h-56 bg-indigo-500 opacity-10 rounded-full blur-[80px] group-hover:opacity-20 transition-opacity"></div>
      <div className="absolute -left-16 -bottom-16 w-40 h-40 bg-purple-500 opacity-5 rounded-full blur-[60px]"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header section */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 border border-indigo-500/30">
              <Lightbulb size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-50 tracking-tight">
                Smart Analysis
              </h3>
              <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">
                FinFlow AI Engine
              </p>
            </div>
          </div>
          <Sparkles size={18} className="text-indigo-400 animate-pulse" />
        </div>

        <div className="space-y-5 flex-grow">
          {/* Card Item */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <TrendingDown size={16} className="text-indigo-300" />
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Spending Tip
              </p>
            </div>
            <p className="text-[14px] leading-relaxed text-slate-200 font-medium">
              You've spent the most on{" "}
              <span className="text-white font-bold underline decoration-indigo-500 underline-offset-4">
                {insightData.topCat}
              </span>
              . Setting a limit could save you more.
            </p>
          </div>

          {/* Card Item */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <Target size={16} className="text-emerald-400" />
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Savings Goal
              </p>
            </div>
            <p className="text-[14px] leading-relaxed text-slate-200 font-medium">
              Reduce {insightData.topCat} by 10% to save{" "}
              <span className="text-emerald-400 font-bold">
                ${Math.floor(insightData.totalExpense * 0.1)}
              </span>{" "}
              next month.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-[14px] font-bold shadow-lg shadow-indigo-900/40 flex items-center justify-center gap-2 transition-all active:scale-95 group/btn">
          Unlock Premium Insights
          <ArrowRight
            size={16}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default InsightsCard;
