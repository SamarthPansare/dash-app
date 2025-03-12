import React, { useState } from 'react';
import { Truck } from 'lucide-react';
import { TransportationChart } from './components/TransportationChart';
import { CostBreakdownChart } from './components/CostBreakdownChart';
import { Filters } from './components/Filters';
import { transportationData } from './data/transportationData';
import { TransportMode, Product } from './types/data';

function App() {
  const [selectedTerminal, setSelectedTerminal] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product>('MS');
  const [selectedMode, setSelectedMode] = useState<TransportMode>('pipeline');

  const filteredData = transportationData.filter(item => {
    if (selectedTerminal && item.location !== selectedTerminal) return false;
    return true;
  });

  const totalTransportationCost = filteredData.reduce((acc, item) => acc + item.totalCost, 0);
  const totalVolume = filteredData.reduce((acc, item) => {
    const productVolume = selectedProduct === 'MS' 
      ? item.msReceived.pipeline + item.msReceived.rail + item.msReceived.road
      : item.hsdReceived.pipeline + item.hsdReceived.rail + item.hsdReceived.road;
    return acc + productVolume;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Truck className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Cost of Transportation by BPCL in Existing Scenario
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Transportation Cost</h3>
              <p className="text-3xl font-bold text-blue-600">₹{totalTransportationCost.toFixed(2)} Cr</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total {selectedProduct} Volume</h3>
              <p className="text-3xl font-bold text-green-600">{totalVolume.toFixed(2)} TMT</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Average Cost per TMT</h3>
              <p className="text-3xl font-bold text-purple-600">
                ₹{((totalTransportationCost * 10000000) / totalVolume).toFixed(2)}
              </p>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <TransportationChart data={filteredData} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <CostBreakdownChart data={filteredData} />
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Transportation Data Table</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Terminal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Distance (KM)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rail Rate (Rs/ton)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {selectedProduct} Volume (TMT)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Cost (Rs Cr)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((item) => (
                    <tr key={item.location}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.distanceKM}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.railRate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {selectedProduct === 'MS' 
                          ? (item.msReceived.pipeline + item.msReceived.rail + item.msReceived.road).toFixed(2)
                          : (item.hsdReceived.pipeline + item.hsdReceived.rail + item.hsdReceived.road).toFixed(2)
                        }
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.totalCost.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>Source: Oil Companies</p>
          <p>Data as of 31.03.2023</p>
        </footer>
      </main>
    </div>
  );
}

export default App;