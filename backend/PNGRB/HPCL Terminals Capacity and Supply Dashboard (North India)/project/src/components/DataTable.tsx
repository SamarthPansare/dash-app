import React from 'react';
import { Terminal } from '../types/terminal';

interface DataTableProps {
  terminals: Terminal[];
}

export const DataTable: React.FC<DataTableProps> = ({ terminals }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Terminal Details</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity (KL)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Volume (KL)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Turnover</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transport Cost (Rs Cr)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Cost (Rs/KL)</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {terminals.map((terminal) => (
            <tr key={terminal.location} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{terminal.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{terminal.capacityKL.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{terminal.totalVolumeKL.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{terminal.annualCapacityTurnover.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{terminal.transportationCost.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{terminal.unitCost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};