import React from 'react';
import { TransportationData, TransportMode, Product } from '../types/data';

interface Props {
  data: TransportationData[];
  onTerminalChange: (terminal: string) => void;
  onProductChange: (product: Product) => void;
  onModeChange: (mode: TransportMode) => void;
}

export const Filters: React.FC<Props> = ({
  data,
  onTerminalChange,
  onProductChange,
  onModeChange
}) => {
  return (
    <div className="flex gap-4 mb-6">
      <select
        className="px-4 py-2 rounded border border-gray-300"
        onChange={(e) => onTerminalChange(e.target.value)}
      >
        <option value="">All Terminals</option>
        {data.map(item => (
          <option key={item.location} value={item.location}>
            {item.location}
          </option>
        ))}
      </select>

      <select
        className="px-4 py-2 rounded border border-gray-300"
        onChange={(e) => onProductChange(e.target.value as Product)}
      >
        <option value="">All Products</option>
        <option value="MS">MS</option>
        <option value="HSD">HSD</option>
      </select>

      <select
        className="px-4 py-2 rounded border border-gray-300"
        onChange={(e) => onModeChange(e.target.value as TransportMode)}
      >
        <option value="">All Modes</option>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="pipeline">Pipeline</option>
      </select>
    </div>
  );
};