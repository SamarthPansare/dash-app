import React, { useState } from 'react';
import { File as Oil } from 'lucide-react';
import { Filters } from './components/Filters';
import { TerminalChart } from './components/TerminalChart';
import { PieChart } from './components/PieChart';
import { DataTable } from './components/DataTable';
import { terminalsData } from './data/terminals';
import { Product, TransportMode } from './types/terminal';

function App() {
  const [selectedTerminal, setSelectedTerminal] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product>('MS');
  const [selectedMode, setSelectedMode] = useState<TransportMode>('road');

  const filteredData = selectedTerminal
    ? terminalsData.filter(terminal => terminal.location === selectedTerminal)
    : terminalsData;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Oil className="h-8 w-8 text-indigo-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">
              Terminals Capacity and Supply Dashboard (North India)
            </h1>
          </div>
        </div>

        {/* Filters */}
        <Filters
          selectedTerminal={selectedTerminal}
          selectedProduct={selectedProduct}
          selectedMode={selectedMode}
          onTerminalChange={setSelectedTerminal}
          onProductChange={setSelectedProduct}
          onModeChange={setSelectedMode}
        />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TerminalChart
            data={filteredData}
            selectedProduct={selectedProduct}
            selectedMode={selectedMode}
          />
          <PieChart data={filteredData} />
        </div>

        {/* Data Table */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Terminal Details</h2>
          <DataTable data={filteredData} />
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-600">
          <p>Source: Oil Companies</p>
          <p>Data as of 31.03.2023</p>
        </footer>
      </div>
    </div>
  );
}

export default App;