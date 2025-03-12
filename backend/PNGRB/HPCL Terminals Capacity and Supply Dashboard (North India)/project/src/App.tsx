import React, { useState } from 'react';
import { File as Oil } from 'lucide-react';
import { terminals } from './data/terminals';
import { Filters } from './components/Filters';
import { KPICards } from './components/KPICards';
import { TerminalChart } from './components/TerminalChart';
import { CapacityChart } from './components/CapacityChart';
import { TurnoverChart } from './components/TurnoverChart';
import { CostChart } from './components/CostChart';
import { DataTable } from './components/DataTable';
import type { Product, TransportMode } from './types/terminal';

function App() {
  const [selectedTerminal, setSelectedTerminal] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product>('MS');
  const [selectedMode, setSelectedMode] = useState<TransportMode>('road');

  const filteredTerminals = selectedTerminal
    ? terminals.filter(t => t.location === selectedTerminal)
    : terminals;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex items-center gap-2">
          <Oil size={32} />
          <h1 className="text-2xl font-bold">
            HPCL Terminals Capacity and Supply Dashboard (North India)
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        <Filters
          terminals={terminals}
          selectedTerminal={selectedTerminal}
          selectedProduct={selectedProduct}
          selectedMode={selectedMode}
          onTerminalChange={setSelectedTerminal}
          onProductChange={setSelectedProduct}
          onModeChange={setSelectedMode}
        />

        <KPICards terminals={filteredTerminals} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TerminalChart
            terminals={filteredTerminals}
            selectedProduct={selectedProduct}
          />
          <CapacityChart terminals={filteredTerminals} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TurnoverChart terminals={filteredTerminals} />
          <CostChart terminals={filteredTerminals} />
        </div>

        <DataTable terminals={filteredTerminals} />
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-sm">
          <p>Source: Oil Companies</p>
          <p>Data as of 31.03.2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;