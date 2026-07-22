import React from 'react';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="glass-card rounded-2xl p-6 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
      </div>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-white/60 shadow-sm backdrop-blur-sm ${color}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;