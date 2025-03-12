import React from 'react';
import { Terminal } from '../data/terminals';

interface FiltersProps {
  terminals: Terminal[];
  selectedTerminal: string;
  selectedProduct: string;
  selectedMode: string;
  onTerminalChange: (terminal: string) => void;
  onProductChange: (product: string) => void;
  onModeChange: (mode: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  terminals,
  selectedTerminal,
  selectedProduct,
  selectedMode,
  onTerminalChange,
  onProductChange,
  onModeChange
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Terminal
        </label>
        <select
          value={selectedTerminal}
          onChange={(e) => onTerminalChange(e.target.value)}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">All Terminals</option>
          {terminals.map((terminal) => (
            <option key={terminal.location} value={terminal.location}>
              {terminal.location}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product
        </label>
        <select
          value={selectedProduct}
          onChange={(e) => onProductChange(e.target.value)}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">All Products</option>
          <option value="MS">Motor Spirit (MS)</option>
          <option value="HSD">High Speed Diesel (HSD)</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mode of Transport
        </label>
        <select
          value={selectedMode}
          onChange={(e) => onModeChange(e.target.value)}
          className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">All Modes</option>
          <option value="road">Road</option>
          <option value="rail">Rail</option>
          <option value="pipeline">Pipeline</option>
        </select>
      </div>
    </div>
  );
};