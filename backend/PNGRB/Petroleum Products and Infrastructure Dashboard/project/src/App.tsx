import React, { useState, useMemo } from 'react';
import { Presentation as GasStation } from 'lucide-react';
import ProductionChart from './components/ProductionChart';
import RefineryChart from './components/RefineryChart';
import PipelineChart from './components/PipelineChart';
import TankageChart from './components/TankageChart';
import DataTable from './components/DataTable';
import Filters from './components/Filters';
import { productionData, refineryData, pipelineData, tankageData } from './data/dashboardData';

function App() {
  const [filters, setFilters] = useState({
    year: '',
    product: '',
    refinery: '',
    owner: ''
  });

  const years = useMemo(() => ['2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23'], []);
  const products = useMemo(() => productionData.map(item => item.product), []);
  const refineries = useMemo(() => refineryData.map(item => item.refinery), []);
  const owners = useMemo(() => [...new Set(pipelineData.map(item => item.owner))], []);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredProductionData = useMemo(() => {
    let filtered = [...productionData];
    if (filters.product) {
      filtered = filtered.filter(item => item.product === filters.product);
    }
    return filtered;
  }, [filters.product]);

  const filteredRefineryData = useMemo(() => {
    let filtered = [...refineryData];
    if (filters.refinery) {
      filtered = filtered.filter(item => item.refinery === filters.refinery);
    }
    return filtered;
  }, [filters.refinery]);

  const filteredPipelineData = useMemo(() => {
    let filtered = [...pipelineData];
    if (filters.owner) {
      filtered = filtered.filter(item => item.owner === filters.owner);
    }
    return filtered;
  }, [filters.owner]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <GasStation className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Petroleum Products and Infrastructure Dashboard
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Filters
          years={years}
          products={products}
          refineries={refineries}
          owners={owners}
          onFilterChange={handleFilterChange}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <ProductionChart data={filteredProductionData} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <RefineryChart data={filteredRefineryData} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <PipelineChart data={filteredPipelineData} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <TankageChart data={tankageData} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <DataTable data={filteredProductionData} title="Production Data" />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <DataTable data={filteredRefineryData} title="Refinery Data" />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <DataTable data={filteredPipelineData} title="Pipeline Data" />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <DataTable data={tankageData} title="Tankage Data" />
          </div>
        </div>
      </main>

      <footer className="bg-white shadow-md mt-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-sm text-gray-600">
            Source: Oil Companies | Note: Data for 2022-23 is provisional
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;