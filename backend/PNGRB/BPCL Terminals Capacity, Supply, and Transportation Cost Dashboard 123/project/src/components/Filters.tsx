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
  onModeChange,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <select
        className="p-2 border rounded-lg"
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
        className="p-2 border rounded-lg"
        value={selectedProduct}
        onChange={(e) => onProductChange(e.target.value)}
      >
        <option value="">All Products</option>
        <option value="MS">Motor Spirit (MS)</option>
        <option value="HSD">High-Speed Diesel (HSD)</option>
      </select>

      <select
        className="p-2 border rounded-lg"
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