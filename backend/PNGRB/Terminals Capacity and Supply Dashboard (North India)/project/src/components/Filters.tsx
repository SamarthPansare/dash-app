import React from 'react';
import { Product, TransportMode } from '../types/terminal';
import { terminalsData } from '../data/terminals';

interface FiltersProps {
  selectedTerminal: string;
  selectedProduct: Product;
  selectedMode: TransportMode;
  onTerminalChange: (terminal: string) => void;
  onProductChange: (product: Product) => void;
  onModeChange: (mode: TransportMode) => void;
}

export const Filters: React.FC<FiltersProps> = ({
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
        <label className="text-sm font-medium text-gray-700 mb-1">Terminal</label>
        <select
          value={selectedTerminal}
          onChange={(e) => onTerminalChange(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">All Terminals</option>
          {terminalsData.map((terminal) => (
            <option key={terminal.location} value={terminal.location}>
              {terminal.location}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Product</label>
        <select
          value={selectedProduct}
          onChange={(e) => onProductChange(e.target.value as Product)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="MS">Motor Spirit (MS)</option>
          <option value="HSD">High Speed Diesel (HSD)</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">Transport Mode</label>
        <select
          value={selectedMode}
          onChange={(e) => onModeChange(e.target.value as TransportMode)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="road">Road</option>
          <option value="rail">Rail</option>
          <option value="pipeline">Pipeline</option>
        </select>
      </div>
    </div>
  );
};