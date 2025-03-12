import React, { useState } from 'react';
import { BarChart3, Truck, Info } from 'lucide-react';
import TransportationChart from './components/TransportationChart';
import CostBreakdownChart from './components/CostBreakdownChart';
import DataTable from './components/DataTable';
import { transportationData } from './data/transportationData';

function App() {
  const [selectedTerminal, setSelectedTerminal] = useState(transportationData.terminals[0].location);
  const [selectedProduct, setSelectedProduct] = useState('MS');
  const [selectedMode, setSelectedMode] = useState('All');

  const totalCost = transportationData.terminals.reduce((acc, terminal) => acc + terminal.totalCost, 0);
  const totalQuantity = transportationData.terminals.reduce((acc, terminal) => {
    const msTotal = terminal.msReceived.road + terminal.msReceived.rail + terminal.msReceived.pipeline;
    const hsdTotal = terminal.hsdReceived.road + terminal.hsdReceived.rail + terminal.hsdReceived.pipeline;
    return acc + msTotal + hsdTotal;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Cost of Transportation by OMCs in Existing Scenario (HPCL)
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold">Total Transportation Cost</h3>
            </div>
            <p className="text-2xl font-bold text-blue-600">Rs {totalCost.toFixed(2)} Cr</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold">Total Quantity Handled</h3>
            </div>
            <p className="text-2xl font-bold text-green-600">{totalQuantity.toFixed(2)} TMT</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold">Average Cost per TMT</h3>
            </div>
            <p className="text-2xl font-bold text-orange-600">
              Rs {((totalCost * 10000000) / totalQuantity).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <select
            className="p-2 border rounded-md bg-white shadow-sm"
            value={selectedTerminal}
            onChange={(e) => setSelectedTerminal(e.target.value)}
          >
            {transportationData.terminals.map((terminal) => (
              <option key={terminal.location} value={terminal.location}>
                {terminal.location}
              </option>
            ))}
          </select>
          <select
            className="p-2 border rounded-md bg-white shadow-sm"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option value="MS">Motor Spirit (MS)</option>
            <option value="HSD">High-Speed Diesel (HSD)</option>
          </select>
          <select
            className="p-2 border rounded-md bg-white shadow-sm"
            value={selectedMode}
            onChange={(e) => setSelectedMode(e.target.value)}
          >
            <option value="All">All Modes</option>
            <option value="Rail">Rail</option>
            <option value="Road">Road</option>
            <option value="Pipeline">Pipeline</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TransportationChart
              data={transportationData.terminals}
              selectedTerminal={selectedTerminal}
              selectedProduct={selectedProduct}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CostBreakdownChart data={transportationData.terminals} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Transportation Data
          </h2>
          <DataTable data={transportationData.terminals} />
        </div>

        <footer className="text-sm text-gray-600 mt-8">
          <p>Source: Oil Companies</p>
          <p>Data as of 31.03.2023</p>
        </footer>
      </main>
    </div>
  );
}

export default App;