import React, { useState } from 'react';
import { TransportationChart } from './components/TransportationChart';
import { CostBreakdownChart } from './components/CostBreakdownChart';
import { TotalCostChart } from './components/TotalCostChart';
import { Filters } from './components/Filters';
import { transportationData } from './data/transportationData';
import { TransportMode, Product } from './types/data';
import { Fuel, TrendingUp } from 'lucide-react';

function App() {
  const [selectedTerminal, setSelectedTerminal] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product>('MS');
  const [selectedMode, setSelectedMode] = useState<TransportMode>('pipeline');

  const filteredData = selectedTerminal
    ? transportationData.filter(item => item.location === selectedTerminal)
    : transportationData;

  const totalTransportationCost = transportationData.reduce((acc, item) => acc + item.totalCost, 0);
  const totalVolume = transportationData.reduce((acc, item) => {
    const msVolume = item.msReceived.road + item.msReceived.rail + item.msReceived.pipeline;
    const hsdVolume = item.hsdReceived.road + item.hsdReceived.rail + item.hsdReceived.pipeline;
    return acc + msVolume + hsdVolume;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Fuel className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Cost of Transportation by IOCL in Existing Scenario
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-lg font-semibold">Total Transportation Cost</h2>
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{totalTransportationCost.toFixed(2)} Cr</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <Fuel className="w-6 h-6 text-green-600" />
              <h2 className="text-lg font-semibold">Total Volume Transported</h2>
            </div>
            <p className="text-3xl font-bold text-gray-900">{totalVolume.toFixed(2)} TMT</p>
          </div>
        </div>

        <Filters
          data={transportationData}
          selectedTerminal={selectedTerminal}
          selectedProduct={selectedProduct}
          selectedMode={selectedMode}
          onTerminalChange={setSelectedTerminal}
          onProductChange={setSelectedProduct}
          onModeChange={setSelectedMode}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <TransportationChart data={filteredData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <CostBreakdownChart data={filteredData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <TotalCostChart data={filteredData} />
        </div>

        <footer className="text-sm text-gray-600">
          <p>Source: Oil Companies</p>
          <p>Data as of 31.03.2023</p>
        </footer>
      </main>
    </div>
  );
}

export default App;