import React from "react";

export const Card = ({
  icon,
  title,
  value,
  valueCurrency,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  valueCurrency: string;
}) => {
  return (
    <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-white/80">{title}</span>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-bold text-white">{value}</span>
        <span className="text-xl text-white/80 mb-1">{valueCurrency}</span>
      </div>
    </div>
  );
};
