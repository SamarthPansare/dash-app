import React from 'react';
import { Terminal, Product, TransportMode } from '../types/terminal';

interface FiltersProps {
  terminals: Terminal[];
  selectedTerminal: string;
  selectedProduct: Product;
  selectedMode: TransportMode;
  onTerminalChange: (terminal: string) => void;
  onProductChange: (product: Product) => void;
  onModeChange: (mode: TransportMode) => void;
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
        onChange={(e) => onProductChange(e.target.value as Product)}
      >
        <option value="MS">Motor Spirit (MS)</option>
        <option value="HSD">High Speed Diesel (HSD)</option>
      </select>

      <select
        className="bg-white border border-gray-300 rounded-md px-4 py-2"
        value={selectedMode}
        onChange={(e) => onModeChange(e.target.value as TransportMode)}
      >
        <option value="road">Road</option>
        <option value="rail">Rail</option>
        <option value="pipeline">Pipeline</option>
      </select>
    </div>
  );
};