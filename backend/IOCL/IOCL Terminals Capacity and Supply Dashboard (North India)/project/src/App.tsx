import React, { useState } from 'react';
import { File as Oil } from 'lucide-react';
import { terminalsData } from './data/terminals';
import { Filters } from './components/Filters';
import { TerminalChart } from './components/TerminalChart';
import { CapacityChart } from './components/CapacityChart';
import { TurnoverChart } from './components/TurnoverChart';
import { DataTable } from './components/DataTable';

function App() {
  const [selectedTerminal, setSelectedTerminal] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const filteredTerminals = selectedTerminal
    ? terminalsData.filter(t => t.location === selectedTerminal)
    : terminalsData;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Oil className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              IOCL Terminals Capacity and Supply Dashboard (North India)
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

        <div className="grid gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TerminalChart
              terminals={filteredTerminals}
              selectedProduct={selectedProduct}
              selectedMode={selectedMode}
            />
            <CapacityChart terminals={filteredTerminals} />
          </div>
          
          <TurnoverChart terminals={filteredTerminals} />
          
          <DataTable
            terminals={filteredTerminals}
            selectedProduct={selectedProduct}
            selectedMode={selectedMode}
          />
        </div>

        <footer className="mt-12 text-sm text-gray-600">
          <p>Source: Oil Companies</p>
          <p>Data as of 31.03.2023</p>
        </footer>
      </main>
    </div>
  );
}

export default App;