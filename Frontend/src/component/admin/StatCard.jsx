
import React from "react";

const StatCard = ({ title, value, icon: Icon, description }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-3">{value}</h3>
          <p className="text-xs text-gray-400 mt-2">{description}</p>
        </div>

        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#083463] flex items-center justify-center">
          {Icon && <Icon size={24} />}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
