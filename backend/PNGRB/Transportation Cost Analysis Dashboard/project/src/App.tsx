import React from 'react';
import DashboardCard from './components/DashboardCard';
import { omcData, bpclData, ioclData } from './data/transportationData';
import { Truck, Info } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Truck className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">
                Transportation Cost Analysis Dashboard
              </h1>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Info className="w-4 h-4 mr-2" />
              <span>Data as of 31.03.2023</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-8">
          <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Dashboard Overview</h2>
            <p className="text-blue-800">
              This dashboard presents a comprehensive analysis of transportation costs for major oil marketing companies
              in North India. The visualization includes cost breakdowns by mode of transport, volume analysis, and
              terminal-wise comparisons.
            </p>
          </div>

          <DashboardCard 
            title="OMCs Transportation Costs" 
            data={omcData} 
          />
          <DashboardCard 
            title="BPCL Transportation Costs" 
            data={bpclData} 
          />
          <DashboardCard 
            title="IOCL Transportation Costs" 
            data={ioclData} 
          />
        </div>
      </main>

      <footer className="bg-white shadow-md mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold text-gray-900">Data Source</h3>
              <p className="text-gray-600">Oil Marketing Companies</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Coverage</h3>
              <p className="text-gray-600">North India Terminals and Refineries</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Analysis Period</h3>
              <p className="text-gray-600">Financial Year 2022-23</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;