import React from 'react';
import { Terminal } from '../types/terminal';
import { Fuel, Truck, IndianRupee, BarChart3 } from 'lucide-react';

interface KPICardsProps {
  terminals: Terminal[];
}

export const KPICards: React.FC<KPICardsProps> = ({ terminals }) => {
  const totalCapacity = terminals.reduce((sum, t) => sum + t.capacityKL, 0);
  const totalVolume = terminals.reduce((sum, t) => sum + t.totalVolumeKL, 0);
  const avgTurnover = terminals.reduce((sum, t) => sum + t.annualCapacityTurnover, 0) / terminals.length;
  const totalTransportCost = terminals.reduce((sum, t) => sum + t.transportationCost, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="rounded-full bg-blue-100 p-3 mr-4">
          <Fuel className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Capacity</p>
          <p className="text-xl font-semibold">{totalCapacity.toLocaleString()} KL</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="rounded-full bg-green-100 p-3 mr-4">
          <Truck className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Volume</p>
          <p className="text-xl font-semibold">{totalVolume.toLocaleString()} KL</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="rounded-full bg-purple-100 p-3 mr-4">
          <BarChart3 className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Avg Turnover</p>
          <p className="text-xl font-semibold">{avgTurnover.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
        <div className="rounded-full bg-red-100 p-3 mr-4">
          <IndianRupee className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Transport Cost</p>
          <p className="text-xl font-semibold">₹{totalTransportCost.toFixed(2)} Cr</p>
        </div>
      </div>
    </div>
  );
};