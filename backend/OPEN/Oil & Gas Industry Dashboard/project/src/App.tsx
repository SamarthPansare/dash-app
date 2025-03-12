import React, { useState, useEffect } from 'react';
import {
  Users,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  Droplets,
  Wind,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  Factory,
  Shield,
  Flame,
  Briefcase,
  Activity,
  FileText
} from 'lucide-react';

function App() {
  const [workforceData, setWorkforceData] = useState({
    total: 79.8,
    yearOverYear: -0.1,
    employmentRate: 61.1,
    inactivityRate: 36.3
  });

  const [keyDrivers] = useState([
    { name: 'Rising inflation', percentage: 35.0 },
    { name: 'Sustainable development', percentage: 27.0 },
    { name: "Industry's reputation", percentage: 25.0 },
    { name: 'Uncertain political support', percentage: 23.0 },
    { name: 'Global pandemic', percentage: 14.0 }
  ]);

  const [licenseData] = useState({
    production: {
      seaward: 2100,
      landward: 1400
    },
    exploration: {
      seaward: 2250,
      landward: 2250
    },
    other: {
      carbonCapture: 18060,
      gasStorage: 9030,
      methane: 180
    }
  });

  const [productionData, setProductionData] = useState({
    world: {
      oil: 4043.8,
      gas: 1407.2,
      oilChange: -0.2,
      gasChange: -4.2
    },
    europe: {
      oil: 220.4,
      gas: 147.6,
      oilChange: 4.5,
      gasChange: 8.1
    },
    northSea: {
      oil: 181.9,
      gas: 128.4,
      oilChange: -6.3,
      gasChange: -7.0
    }
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkforceData(prev => ({
        ...prev,
        total: prev.total + (Math.random() * 0.2 - 0.1),
        employmentRate: prev.employmentRate + (Math.random() * 0.1 - 0.05),
        inactivityRate: prev.inactivityRate + (Math.random() * 0.1 - 0.05)
      }));

      setProductionData(prev => ({
        world: {
          ...prev.world,
          oil: prev.world.oil + (Math.random() * 2 - 1),
          gas: prev.world.gas + (Math.random() * 1 - 0.5)
        },
        europe: {
          ...prev.europe,
          oil: prev.europe.oil + (Math.random() * 1 - 0.5),
          gas: prev.europe.gas + (Math.random() * 0.5 - 0.25)
        },
        northSea: {
          ...prev.northSea,
          oil: prev.northSea.oil + (Math.random() * 0.5 - 0.25),
          gas: prev.northSea.gas + (Math.random() * 0.5 - 0.25)
        }
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Flame className="h-8 w-8 text-orange-500 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Oil & Gas Industry Dashboard</h1>
            </div>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Workforce Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Workforce</h3>
              <Briefcase className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{workforceData.total.toFixed(1)}%</p>
            <p className="text-sm text-gray-500">Total working population</p>
            <div className="mt-2 flex items-center">
              <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-500 text-sm">-0.1 p.p.</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Employment Rate</h3>
              <Activity className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{workforceData.employmentRate.toFixed(1)}%</p>
            <p className="text-sm text-gray-500">Active employment</p>
            <div className="mt-2 flex items-center">
              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm">+0.2 p.p.</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Inactivity Rate</h3>
              <AlertTriangle className="h-6 w-6 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{workforceData.inactivityRate.toFixed(1)}%</p>
            <p className="text-sm text-gray-500">Economic inactivity</p>
            <div className="mt-2 flex items-center">
              <ArrowUpRight className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="text-yellow-500 text-sm">+0.4 p.p.</span>
            </div>
          </div>
        </div>

        {/* Key Drivers */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Key drivers for energy workers switching jobs in 2022
          </h2>
          <div className="space-y-4">
            {keyDrivers.map((driver, index) => (
              <div key={index} className="flex items-center">
                <div className="w-48 text-sm text-gray-600">{driver.name}</div>
                <div className="flex-1">
                  <div className="relative h-4 bg-gray-200 rounded-full">
                    <div
                      className="absolute h-4 bg-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${driver.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right text-sm font-medium text-gray-900">
                  {driver.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* License Types */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">License Types and Application Fees (£)</h2>
            <FileText className="h-6 w-6 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Production Licenses</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Seaward production</span>
                  <span className="font-medium">£{licenseData.production.seaward}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Landward production</span>
                  <span className="font-medium">£{licenseData.production.landward}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Exploration Licenses</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Seaward exploration</span>
                  <span className="font-medium">£{licenseData.exploration.seaward}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Landward exploration</span>
                  <span className="font-medium">£{licenseData.exploration.landward}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Other Licenses</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Carbon Capture & Storage</span>
                  <span className="font-medium">£{licenseData.other.carbonCapture}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Gas Storage</span>
                  <span className="font-medium">£{licenseData.other.gasStorage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Methane Drainage</span>
                  <span className="font-medium">£{licenseData.other.methane}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-medium text-gray-900 mb-4">World Production</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Oil Production</span>
                  <div className="flex items-center">
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-sm text-red-500">{productionData.world.oilChange}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{productionData.world.oil.toFixed(1)}</p>
                <p className="text-xs text-gray-500">Million tonnes</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Gas Production</span>
                  <div className="flex items-center">
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-sm text-red-500">{productionData.world.gasChange}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{productionData.world.gas.toFixed(1)}</p>
                <p className="text-xs text-gray-500">Billion cubic meters</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-medium text-gray-900 mb-4">Europe Production</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Oil Production</span>
                  <div className="flex items-center">
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">{productionData.europe.oilChange}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{productionData.europe.oil.toFixed(1)}</p>
                <p className="text-xs text-gray-500">Million tonnes</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Gas Production</span>
                  <div className="flex items-center">
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-500">{productionData.europe.gasChange}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{productionData.europe.gas.toFixed(1)}</p>
                <p className="text-xs text-gray-500">Billion cubic meters</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-medium text-gray-900 mb-4">North Sea Region</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Oil Production</span>
                  <div className="flex items-center">
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-sm text-red-500">{productionData.northSea.oilChange}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{productionData.northSea.oil.toFixed(1)}</p>
                <p className="text-xs text-gray-500">Million tonnes</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Gas Production</span>
                  <div className="flex items-center">
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-sm text-red-500">{productionData.northSea.gasChange}%</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{productionData.northSea.gas.toFixed(1)}</p>
                <p className="text-xs text-gray-500">Billion cubic meters</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;