import React, { useState } from 'react';
import { Home, Presentation as GasStation, Baseline as Pipeline, Building2 } from 'lucide-react';
import Highcharts from 'highcharts';
import StatCard from './components/StatCard';
import ProgressChart from './components/ProgressChart';
import Chart3D from './components/Chart3D';

// Data structure remains the same
const data = [
  { 
    state: 'Madhya Pradesh',
    png: {
      total_target: 40000,
      pro_rata_target: 40000,
      achievement: 22284
    },
    cng: {
      total_target: 2,
      pro_rata_target: 2,
      achievement: 6
    },
    pipeline: {
      total_target: 320,
      pro_rata_target: 320,
      achievement: 400
    },
    entity: 'GAIL Gas Limited'
  },
  {
    state: 'Rajasthan',
    png: {
      total_target: 100000,
      pro_rata_target: 100000,
      achievement: 50121
    },
    cng: {
      total_target: 6,
      pro_rata_target: 6,
      achievement: 11
    },
    pipeline: {
      total_target: 344,
      pro_rata_target: 344,
      achievement: 357
    },
    entity: 'Rajasthan State Gas Limited'
  },
  {
    state: 'Uttar Pradesh',
    png: {
      total_target: 65000,
      pro_rata_target: 65000,
      achievement: 16515
    },
    cng: {
      total_target: 5,
      pro_rata_target: 5,
      achievement: 13
    },
    pipeline: {
      total_target: 347,
      pro_rata_target: 347,
      achievement: 397
    },
    entity: 'Torrent Gas Private Limited'
  },
  {
    state: 'Andhra Pradesh',
    png: {
      total_target: 50000,
      pro_rata_target: 50000,
      achievement: 66301
    },
    cng: {
      total_target: 9,
      pro_rata_target: 9,
      achievement: 13
    },
    pipeline: {
      total_target: 622,
      pro_rata_target: 622,
      achievement: 366
    },
    entity: 'Bhagyanagar Gas Limited'
  },
  {
    state: 'Gujarat',
    png: {
      total_target: 60000,
      pro_rata_target: 60000,
      achievement: 35681
    },
    cng: {
      total_target: 3,
      pro_rata_target: 3,
      achievement: 28
    },
    pipeline: {
      total_target: 329,
      pro_rata_target: 329,
      achievement: 580
    },
    entity: 'Gujarat Gas Limited'
  }
];

// Calculate totals and other metrics
const entityCounts = data.reduce((acc, curr) => {
  acc[curr.entity] = (acc[curr.entity] || 0) + 1;
  return acc;
}, {});

const sortedEntities = Object.entries(entityCounts)
  .sort(([,a], [,b]) => b - a)
  .map(([name, count]) => ({ name, count }));

const totalPNG = data.reduce((acc, curr) => acc + curr.png.achievement, 0);
const totalCNG = data.reduce((acc, curr) => acc + curr.cng.achievement, 0);
const totalPipeline = data.reduce((acc, curr) => acc + curr.pipeline.achievement, 0);

const totalPNGTarget = data.reduce((acc, curr) => acc + curr.png.total_target, 0);
const totalCNGTarget = data.reduce((acc, curr) => acc + (curr.cng.total_target || 0), 0);
const totalPipelineTarget = data.reduce((acc, curr) => acc + curr.pipeline.total_target, 0);

const pngProgress = ((totalPNG / totalPNGTarget) * 100).toFixed(1);
const cngProgress = ((totalCNG / (totalCNGTarget || totalCNG)) * 100).toFixed(1);
const pipelineProgress = ((totalPipeline / totalPipelineTarget) * 100).toFixed(1);

function App() {
  const [displayCount, setDisplayCount] = useState(10);
  const [activeTab, setActiveTab] = useState('states');
  const [sortConfig, setSortState] = useState({ key: null, direction: 'ascending' });

  // 3D Column Chart Options
  const stateProgressOptions = {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: 'State-wise Progress Overview'
    },
    subtitle: {
      text: 'Top 5 States Performance',
      style: {
        color: '#9CA3AF'
      }
    },
    xAxis: {
      categories: data.slice(0, 5).map(item => item.state),
      labels: {
        style: {
          color: '#9CA3AF'
        }
      },
      gridLineColor: '#374151'
    },
    yAxis: {
      title: {
        text: 'Achievement',
        style: {
          color: '#9CA3AF'
        }
      },
      labels: {
        style: {
          color: '#9CA3AF'
        }
      },
      gridLineColor: '#374151'
    },
    plotOptions: {
      column: {
        depth: 25,
        dataLabels: {
          enabled: true,
          color: '#9CA3AF',
          style: {
            textOutline: '1px contrast'
          }
        }
      }
    },
    series: [
      {
        name: 'PNG Connections',
        data: data.slice(0, 5).map(item => item.png.achievement),
        color: '#60A5FA'
      },
      {
        name: 'CNG Stations',
        data: data.slice(0, 5).map(item => item.cng.achievement),
        color: '#34D399'
      },
      {
        name: 'Pipeline (km)',
        data: data.slice(0, 5).map(item => item.pipeline.achievement),
        color: '#F87171'
      }
    ]
  };

  // 3D Pie Chart Options
  const entityDistributionOptions = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'CGD Entity Distribution'
    },
    subtitle: {
      text: 'Distribution by Number of Areas',
      style: {
        color: '#9CA3AF'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%',
          style: {
            color: '#9CA3AF'
          }
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Areas',
      data: sortedEntities.map((entity, index) => ({
        name: entity.name,
        y: entity.count,
        color: Highcharts.color('#60A5FA').brighten((index * 0.2) - 0.3).get()
      }))
    }]
  };

  // Target Achievement Chart Options
  const targetAchievementOptions = {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 25,
        depth: 70
      }
    },
    title: {
      text: 'Target vs Achievement Comparison'
    },
    subtitle: {
      text: 'Overall Progress Analysis',
      style: {
        color: '#9CA3AF'
      }
    },
    xAxis: {
      categories: ['PNG Connections', 'CNG Stations', 'Pipeline Length'],
      labels: {
        style: {
          color: '#9CA3AF'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Values',
        style: {
          color: '#9CA3AF'
        }
      },
      labels: {
        style: {
          color: '#9CA3AF'
        }
      }
    },
    plotOptions: {
      column: {
        depth: 25,
        grouping: false,
        groupZPadding: 10
      }
    },
    series: [
      {
        name: 'Target',
        data: [totalPNGTarget, totalCNGTarget, totalPipelineTarget],
        color: '#60A5FA'
      },
      {
        name: 'Achievement',
        data: [totalPNG, totalCNG, totalPipeline],
        color: '#34D399'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-6 shadow-lg">
        <h1 className="text-2xl font-bold">PNGRB India Dashboard</h1>
        <p className="text-gray-400">Progress of PNG, CNG, and Pipeline Infrastructure (2024)</p>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <StatCard 
          title="PNG Connections"
          value={`${(totalPNG / 1000).toFixed(1)}K`}
          change={`${pngProgress}%`}
          icon={<Home className="w-6 h-6" />}
        />
        <StatCard 
          title="CNG Stations"
          value={totalCNG.toString()}
          change={`${cngProgress}%`}
          icon={<GasStation className="w-6 h-6" />}
        />
        <StatCard 
          title="Pipeline Length"
          value={`${totalPipeline} km`}
          change={`${pipelineProgress}%`}
          icon={<Pipeline className="w-6 h-6" />}
        />
        <StatCard 
          title="CGD Entities"
          value={Object.keys(entityCounts).length.toString()}
          change="+25%"
          icon={<Building2 className="w-6 h-6" />}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <Chart3D options={stateProgressOptions} />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <Chart3D options={entityDistributionOptions} />
        </div>
      </div>

      {/* Target Achievement Chart */}
      <div className="p-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <Chart3D options={targetAchievementOptions} />
        </div>
      </div>

      {/* Progress Bars */}
      <div className="p-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Detailed Progress Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProgressChart 
              title="PNG Connections (Overall)"
              target={totalPNGTarget}
              achieved={totalPNG}
              color="bg-blue-500"
            />
            <ProgressChart 
              title="CNG Stations (Overall)"
              target={totalCNGTarget || totalCNG}
              achieved={totalCNG}
              color="bg-green-500"
              showTargetValue={totalCNGTarget > 0}
            />
            <ProgressChart 
              title="Pipeline Infrastructure (Overall)"
              target={totalPipelineTarget}
              achieved={totalPipeline}
              color="bg-red-500"
            />
          </div>
        </div>
      </div>

      {/* Data Tables */}
      <div className="p-6">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-700">
            <div className="flex">
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'states'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('states')}
              >
                States Performance
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'entities'
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('entities')}
              >
                CGD Entities
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'states' ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left">State</th>
                      <th className="px-6 py-3 text-left">CGD Entity</th>
                      <th className="px-6 py-3 text-right">PNG Target</th>
                      <th className="px-6 py-3 text-right">PNG Achievement</th>
                      <th className="px-6 py-3 text-right">CNG Target</th>
                      <th className="px-6 py-3 text-right">CNG Achievement</th>
                      <th className="px-6 py-3 text-right">Pipeline Target</th>
                      <th className="px-6 py-3 text-right">Pipeline Achievement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {data.map((item) => (
                      <tr key={item.state} className="hover:bg-gray-700">
                        <td className="px-6 py-4">{item.state}</td>
                        <td className="px-6 py-4">{item.entity}</td>
                        <td className="px-6 py-4 text-right">{item.png.total_target.toLocaleString()}</td>
                        <td className="px-6 py-4 text-right">{item.png.achievement.toLocaleString()}</td>
                        <td className="px-6 py-4 text-right">{item.cng.total_target?.toLocaleString() || 'NA'}</td>
                        <td className="px-6 py-4 text-right">{item.cng.achievement.toLocaleString()}</td>
                        <td className="px-6 py-4 text-right">{item.pipeline.total_target.toLocaleString()}</td>
                        <td className="px-6 py-4 text-right">{item.pipeline.achievement.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left">Entity Name</th>
                      <th className="px-6 py-3 text-right">Number of Areas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {sortedEntities.map((entity) => (
                      <tr key={entity.name} className="hover:bg-gray-700">
                        <td className="px-6 py-4">{entity.name}</td>
                        <td className="px-6 py-4 text-right">{entity.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;