import React, { useState } from 'react';
import { Terminal, terminalsData } from './data/terminals';
import { Filters } from './components/Filters';
import { TerminalChart } from './components/TerminalChart';
import { CostChart } from './components/CostChart';
import { TurnoverChart } from './components/TurnoverChart';
import { BarChart } from 'lucide-react';

function App() {
  const [selectedTerminal, setSelectedTerminal] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const filteredTerminals = terminalsData.filter((terminal) => {
    if (selectedTerminal && terminal.location !== selectedTerminal) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <BarChart className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              BPCL Terminals Capacity, Supply, and Transportation Cost Dashboard
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Filters
          terminals={terminalsData}
          selectedTerminal={selectedTerminal}
          selectedProduct={selectedProduct}
          selectedMode={selectedMode}
          onTerminalChange={setSelectedTerminal}
          onProductChange={setSelectedProduct}
          onModeChange={setSelectedMode}
        />

        <div className="grid grid-cols-1 gap-8">
          <TerminalChart
            terminals={filteredTerminals}
            selectedProduct={selectedProduct}
            selectedMode={selectedMode}
          />
          <TurnoverChart terminals={filteredTerminals} />
          <CostChart terminals={filteredTerminals} />
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Delhi terminal has the highest capacity (45,680 KL) and handles the largest volume</li>
            <li>Pipeline transportation is predominant in Haryana terminals</li>
            <li>Rail transport is more common in Punjab terminals</li>
            <li>Mountain regions (J&K, Ladakh) rely heavily on road transport</li>
            <li>Unit costs increase significantly with distance from supply sources</li>
          </ul>
        </div>

        <footer className="mt-8 text-sm text-gray-600">
          <p>Source: Oil Companies</p>
          <p>Data as of 31.03.2023</p>
        </footer>
      </main>
    </div>
  );
}

export default App;