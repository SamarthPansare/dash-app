import React from 'react';
import { TerminalData } from '../types/terminal';

interface FiltersProps {
  terminals: TerminalData[];
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
  onModeChange,
}) => {
  return (
    <div className="flex gap-4 mb-6">
      <select
        className="bg-white border border-gray-300 rounded-md px-4 py-2"
        value={selectedTerminal}
        onChange={(e) => onTerminalChange(e.target.value)}
      >
        <option value="">All Terminals</option>
        {terminals.map((terminal) => (
          <option key={terminal.location} value={terminal.location}>
            {terminal.location}
          </option>
        ))}
      </select>

      <select
        className="bg-white border border-gray-300 rounded-md px-4 py-2"
        value={selectedProduct}
        onChange={(e) => onProductChange(e.target.value)}
      >
        <option value="">All Products</option>
        <option value="MS">MS (Petrol)</option>
        <option value="HSD">HSD (Diesel)</option>
      </select>

      <select
        className="bg-white border border-gray-300 rounded-md px-4 py-2"
        value={selectedMode}
        onChange={(e) => onModeChange(e.target.value)}
      >
        <option value="">All Modes</option>
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="pipeline">Pipeline</option>
      </select>
    </div>
  );
};