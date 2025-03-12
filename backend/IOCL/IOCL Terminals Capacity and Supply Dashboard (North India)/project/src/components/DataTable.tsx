import React from 'react';
import { Terminal } from '../data/terminals';

interface DataTableProps {
  terminals: Terminal[];
  selectedProduct: string;
  selectedMode: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  terminals,
  selectedProduct,
  selectedMode
}) => {
  const getTotal = (terminal: Terminal, type: 'ms' | 'hsd', mode?: string) => {
    const data = type === 'ms' ? terminal.msReceived : terminal.hsdReceived;
    return mode ? data[mode as keyof typeof data] : Object.values(data).reduce((a, b) => a + b, 0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Terminal
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Capacity (KL)
            </th>
            {selectedProduct !== 'HSD' && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                MS (TMT)
              </th>
            )}
            {selectedProduct !== 'MS' && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                HSD (TMT)
              </th>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Annual Turnover
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {terminals.map((terminal) => (
            <tr key={terminal.location}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {terminal.location}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {terminal.capacityKL.toLocaleString()}
              </td>
              {selectedProduct !== 'HSD' && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {getTotal(terminal, 'ms', selectedMode).toFixed(1)}
                </td>
              )}
              {selectedProduct !== 'MS' && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {getTotal(terminal, 'hsd', selectedMode).toFixed(1)}
                </td>
              )}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {terminal.annualCapacityTurnover.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};