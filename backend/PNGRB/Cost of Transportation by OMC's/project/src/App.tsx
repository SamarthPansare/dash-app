import React, { useState } from 'react';
import { TransportMode, Product } from './types/data';
import { transportationData } from './data/transportationData';
import { TransportationChart } from './components/TransportationChart';
import { CostBreakdownChart } from './components/CostBreakdownChart';
import { TotalCostChart } from './components/TotalCostChart';
import { DataTable } from './components/DataTable';
import { Filters } from './components/Filters';
import { Truck } from 'lucide-react';

function App() {
  const [selectedTerminal, setSelectedTerminal] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | ''>('');
  const [selectedMode, setSelectedMode] = useState<TransportMode | ''>('');

  const filteredData = transportationData.filter(item => 
    (!selectedTerminal || item.location === selectedTerminal)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Cost of Transportation by OMCs
            </h1>
          </div>
          <p className="mt-2 text-gray-600">
            If Only Refineries in North Supply to All Terminals
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Filters
          data={transportationData}
          onTerminalChange={setSelectedTerminal}
          onProductChange={setSelectedProduct}
          onModeChange={setSelectedMode}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TransportationChart
              data={filteredData}
              selectedTerminal={selectedTerminal}
              selectedProduct={selectedProduct}
              selectedMode={selectedMode}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CostBreakdownChart data={filteredData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <TotalCostChart data={filteredData} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-semibold mb-4">Detailed Transportation Data</h2>
          <DataTable data={filteredData} />
        </div>

        <footer className="mt-8 text-center text-gray-600 text-sm">
          <p>Source: Oil Companies</p>
          <p>Data as of 31.03.2023</p>
        </footer>
      </main>
    </div>
  );
}

export default App;