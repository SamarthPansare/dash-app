import React from 'react';

interface KPICardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  trend?: 'up' | 'down';
}

const KPICard: React.FC<KPICardProps> = ({ title, value, icon, change, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <div className="text-blue-600">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KPICard;