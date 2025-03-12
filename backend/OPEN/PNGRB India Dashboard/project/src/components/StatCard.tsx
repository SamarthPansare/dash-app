import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 font-medium">{title}</h3>
        <div className="text-gray-400">{icon}</div>
      </div>
      <div className="flex items-baseline justify-between">
        <p className="text-2xl font-semibold">{value}</p>
        <span className={`px-2 py-1 rounded-full text-sm ${
          isPositive ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
        }`}>
          {change}
        </span>
      </div>
    </div>
  );
};

export default StatCard;