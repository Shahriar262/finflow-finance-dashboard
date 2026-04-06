import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "../../context/AppContext";
import {
  ArrowUpRight,
  ShoppingBag,
  Coffee,
  Home,
  Zap,
  CreditCard,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  Smartphone,
  Car,
} from "lucide-react";

const getCategoryDetails = (category) => {
  const cats = {
    food: {
      icon: <Coffee size={18} />,
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
    shopping: {
      icon: <ShoppingBag size={18} />,
      bg: "bg-purple-50",
      text: "text-purple-600",
    },
    rent: { icon: <Home size={18} />, bg: "bg-blue-50", text: "text-blue-600" },
    utilities: {
      icon: <Zap size={18} />,
      bg: "bg-amber-50",
      text: "text-amber-600",
    },
    salary: {
      icon: <ArrowUpRight size={18} />,
      bg: "bg-emerald-50",
      text: "text-emerald-600",
    },
    transport: {
      icon: <Car size={18} />,
      bg: "bg-slate-50",
      text: "text-slate-600",
    },
    subscription: {
      icon: <Smartphone size={18} />,
      bg: "bg-rose-50",
      text: "text-rose-600",
    },
  };
  return (
    cats[category.toLowerCase()] || {
      icon: <CreditCard size={18} />,
      bg: "bg-slate-50",
      text: "text-slate-600",
    }
  );
};

const RecentTransactions = () => {
  const { transactions } = useApp();
  const [isExpanded, setIsExpanded] = useState(false);

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const displayData = isExpanded
    ? sortedTransactions.slice(0, 10)
    : sortedTransactions.slice(0, 4);

  return (
    <div className="bg-white rounded-[24px] border border-slate-200/60 shadow-sm overflow-hidden transition-all duration-300">
      {/* Header Section */}
      <div className="p-6 border-b border-slate-50 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Activity Log
          </h3>
          <p className="text-[14px] text-slate-500 font-medium">
            Real-time transaction monitoring
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg transition-all"
        >
          {isExpanded ? "Collapse" : "View Full Report"}
          {isExpanded ? (
            <ChevronUp size={14} />
          ) : (
            <ChevronDown
              size={14}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          )}
        </button>
      </div>

      {/* Transactions List */}
      <div className="p-2">
        <motion.div layout className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {displayData.map((t) => {
              const { icon, bg, text } = getCategoryDetails(t.category);
              return (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-center justify-between p-3.5 hover:bg-slate-50/80 rounded-xl transition-all cursor-pointer group"
                >
                  
                  <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                    <div
                      className={`w-10 h-10 rounded-xl ${bg} ${text} flex-shrink-0 flex items-center justify-center`}
                    >
                      {icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-800 text-sm md:text-base truncate">
                        {t.title}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] md:text-[12px] font-semibold text-slate-500">
                        <span className="uppercase truncate">{t.category}</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full shrink-0"></span>
                        <span className="shrink-0">{t.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p
                        className={`font-bold text-[14px] md:text-[16px] ${t.type === "income" ? "text-emerald-600" : "text-slate-900"}`}
                      >
                        {t.type === "income" ? "+" : "-"}$
                        {t.amount.toLocaleString()}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-400 transition-colors">
                        {t.type === "income" ? "Received" : "Debited"}
                      </p>
                    </div>
                    <MoreHorizontal
                      size={16}
                      className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Empty State Footer */}
      {!isExpanded && (
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-50 text-center">
          <p className="text-[11px] text-slate-500 font-medium">
            Verified by FinFlow Security Protocol
          </p>
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;
