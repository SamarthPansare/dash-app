import React, { useState } from 'react';
import { FlipHorizontal as PipelineHorizontal, Home, TrendingUp, Map, Users, Factory, Truck, Gauge } from 'lucide-react';
import KPICard from './components/KPICard';
import PipelineChart from './components/PipelineChart';
import EntityPerformance from './components/EntityPerformance';
import ConsumptionChart from './components/ConsumptionChart';
import FilterBar from './components/FilterBar';
import GeographicalProgress from './components/GeographicalProgress';

function App() {
  const [selectedRound, setSelectedRound] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedEntity, setSelectedEntity] = useState('all');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <PipelineHorizontal className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">PNGRB Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Last Updated: Mar 2024</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <FilterBar 
          selectedRound={selectedRound}
          selectedYear={selectedYear}
          selectedEntity={selectedEntity}
          onRoundChange={setSelectedRound}
          onYearChange={setSelectedYear}
          onEntityChange={setSelectedEntity}
        />

        {/* KPI Cards - Two Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <KPICard
            title="Total Pipeline Infrastructure"
            value="4,60,466 inch-km"
            icon={<PipelineHorizontal className="h-6 w-6" />}
            change="+9.6% YoY"
            trend="up"
          />
          <KPICard
            title="DPNG Connections"
            value="1.29 Cr"
            icon={<Home className="h-6 w-6" />}
            change="+17.7% YoY"
            trend="up"
          />
          <KPICard
            title="Gas Consumption"
            value="1,232 MMSCM"
            icon={<TrendingUp className="h-6 w-6" />}
            change="+9.47% YoY"
            trend="up"
          />
          <KPICard
            title="Top Performing GA"
            value="Noida"
            icon={<Map className="h-6 w-6" />}
            change="99.20% Achievement"
            trend="up"
          />
          <KPICard
            title="Total Authorized Entities"
            value="38"
            icon={<Users className="h-6 w-6" />}
            change="+5 New"
            trend="up"
          />
          <KPICard
            title="Industrial Connections"
            value="12,450"
            icon={<Factory className="h-6 w-6" />}
            change="+15.3% YoY"
            trend="up"
          />
          <KPICard
            title="CNG Stations"
            value="4,875"
            icon={<Truck className="h-6 w-6" />}
            change="+22.4% YoY"
            trend="up"
          />
          <KPICard
            title="Network Utilization"
            value="85.6%"
            icon={<Gauge className="h-6 w-6" />}
            change="+5.2% YoY"
            trend="up"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <PipelineChart />
          <EntityPerformance />
        </div>

        {/* Full Width Geographical Progress */}
        <div className="mb-6">
          <GeographicalProgress />
        </div>

        {/* Bottom Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConsumptionChart />
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Network Development Metrics</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Pipeline Network</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Steel Pipeline</p>
                    <p className="text-lg font-bold text-blue-700">3,50,466 inch-km</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">MDPE Pipeline</p>
                    <p className="text-lg font-bold text-green-700">1,10,000 inch-km</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Connection Types</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Domestic PNG</p>
                    <p className="text-lg font-bold text-blue-700">1.29 Cr</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Commercial PNG</p>
                    <p className="text-lg font-bold text-green-700">25,340</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Regional Distribution</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Northern Region</span>
                    <span className="font-semibold text-purple-700">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Western Region</span>
                    <span className="font-semibold text-purple-700">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Southern Region</span>
                    <span className="font-semibold text-purple-700">22%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Eastern Region</span>
                    <span className="font-semibold text-purple-700">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Additional Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Investment (₹ Cr)</h3>
              <p className="mt-1 text-2xl font-semibold text-gray-900">17,500</p>
              <p className="text-sm text-green-600">+12.3% from last year</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Employment Generated</h3>
              <p className="mt-1 text-2xl font-semibold text-gray-900">75,000+</p>
              <p className="text-sm text-green-600">Direct & Indirect</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Cities Covered</h3>
              <p className="mt-1 text-2xl font-semibold text-gray-900">295</p>
              <p className="text-sm text-green-600">+45 new cities</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Carbon Offset (MT)</h3>
              <p className="mt-1 text-2xl font-semibold text-gray-900">2.5M</p>
              <p className="text-sm text-green-600">Annual reduction</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;