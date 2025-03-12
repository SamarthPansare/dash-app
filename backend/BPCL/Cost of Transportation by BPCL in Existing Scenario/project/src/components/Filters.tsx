import React from 'react';
import { TransportationData, TransportMode, Product } from '../types/data';

interface Props {
  data: TransportationData[];
  selectedTerminal: string;
  selectedProduct: Product;
  selectedMode: TransportMode;
  onTerminalChange: (terminal: string) => void;
  onProductChange: (product: Product) => void;
  onModeChange: (mode: TransportMode) => void;
}

export const Filters: React.FC<Props> = ({
  data,
  selectedTerminal,
  selectedProduct,
  selectedMode,
  onTerminalChange,
  onProductChange,
  onModeChange
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Terminal</label>
        <select
          value={selectedTerminal}
          onChange={(e) => onTerminalChange(e.target.value)}
          className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">All Terminals</option>
          {data.map((item) => (
            <option key={item.location} value={item.location}>
              {item.location}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Product</label>
        <select
          value={selectedProduct}
          onChange={(e) => onProductChange(e.target.value as Product)}
          className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="MS">Motor Spirit (MS)</option>
          <option value="HSD">High-Speed Diesel (HSD)</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Mode of Transport</label>
        <select
          value={selectedMode}
          onChange={(e) => onModeChange(e.target.value as TransportMode)}
          className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="pipeline">Pipeline</option>
          <option value="rail">Rail</option>
          <option value="road">Road</option>
        </select>
      </div>
    </div>
  );
};