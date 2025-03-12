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
    <div className="flex gap-4 mb-6">
      <select
        className="px-4 py-2 border rounded-lg"
        value={selectedTerminal}
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
        className="px-4 py-2 border rounded-lg"
        value={selectedProduct}
        onChange={(e) => onProductChange(e.target.value as Product)}
      >
        <option value="MS">Motor Spirit (MS)</option>
        <option value="HSD">High-Speed Diesel (HSD)</option>
      </select>

      <select
        className="px-4 py-2 border rounded-lg"
        value={selectedMode}
        onChange={(e) => onModeChange(e.target.value as TransportMode)}
      >
        <option value="pipeline">Pipeline</option>
        <option value="rail">Rail</option>
        <option value="road">Road</option>
      </select>
    </div>
  );
};