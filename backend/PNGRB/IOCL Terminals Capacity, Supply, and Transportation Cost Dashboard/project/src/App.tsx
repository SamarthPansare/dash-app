import React, { useState } from 'react';
import { Filters } from './components/Filters';
import { TerminalChart } from './components/TerminalChart';
import { CostChart } from './components/CostChart';
import { TurnoverChart } from './components/TurnoverChart';
import { terminalsData } from './data/terminals';
import { Fuel } from 'lucide-react';

function App() {
  const [selectedTerminal, setSelectedTerminal] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const filteredData = selectedTerminal
    ? terminalsData.terminals.filter(t => t.location === selectedTerminal)
    : terminalsData.terminals;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Fuel className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              IOCL Terminals Capacity, Supply, and Transportation Cost Dashboard
            </h1>
          </div>
          <p className="mt-2 text-gray-600">North India Region</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Filters
          terminals={terminalsData.terminals}
          selectedTerminal={selectedTerminal}
          selectedProduct={selectedProduct}
          selectedMode={selectedMode}
          onTerminalChange={setSelectedTerminal}
          onProductChange={setSelectedProduct}
          onModeChange={setSelectedMode}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TerminalChart
            data={filteredData}
            selectedProduct={selectedProduct}
            selectedMode={selectedMode}
          />
          <CostChart data={filteredData} />
        </div>

        <div className="mb-6">
          <TurnoverChart data={filteredData} />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Terminal Data Table</h2>
          <div className="overflow-x-auto">
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
                {filteredData.map((terminal) => (
                  <tr key={terminal.location}>
                    <td className="px-6 py-4 whitespace-nowrap">{terminal.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{terminal.capacityKL.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{terminal.totalVolumeKL.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{terminal.annualCapacityTurnover.toFixed(2)}x</td>
                    <td className="px-6 py-4 whitespace-nowrap">{terminal.transportationCost.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{terminal.unitCost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="mt-8 text-center text-sm text-gray-600">
          <p>Source: Oil Companies</p>
          <p>Data as of 31.03.2023</p>
        </footer>
      </main>
    </div>
  );
}

export default App;