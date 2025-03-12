import React from 'react';

interface ProgressChartProps {
  title: string;
  target: number;
  achieved: number;
  color: string;
  showTargetValue?: boolean;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ 
  title, 
  target, 
  achieved, 
  color,
  showTargetValue = true 
}) => {
  const percentage = Math.min(Math.round((achieved / target) * 100), 100);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-sm text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-400">
        <span>Achieved: {achieved.toLocaleString()}</span>
        {showTargetValue ? (
          <span>Target: {target.toLocaleString()}</span>
        ) : (
          <span>Target: NA</span>
        )}
      </div>
    </div>
  );
};

export default ProgressChart;