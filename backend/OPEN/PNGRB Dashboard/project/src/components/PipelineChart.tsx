import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';

// Initialize 3D module
Highcharts3D(Highcharts);

const PipelineChart = () => {
  const options = {
    chart: {
      type: 'area',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: 'Pipeline Infrastructure Progress',
      style: { fontSize: '16px', fontWeight: 'bold' }
    },
    xAxis: {
      categories: ['2022', '2023', '2024', '2025', '2026', '2027'],
      labels: {
        style: { color: '#666' }
      }
    },
    yAxis: {
      title: {
        text: 'Pipeline Length (inch-km)',
        style: { color: '#666' }
      }
    },
    plotOptions: {
      area: {
        depth: 100,
        marker: {
          enabled: false
        }
      }
    },
    series: [{
      name: 'Steel Pipeline',
      data: [280000, 320000, 350466, 390000, 430000, 480000],
      color: '#2563eb'
    }, {
      name: 'MDPE Pipeline',
      data: [80000, 100000, 110000, 130000, 150000, 170000],
      color: '#16a34a'
    }, {
      name: 'Total Pipeline',
      data: [360000, 420000, 460466, 520000, 580000, 650000],
      color: '#9333ea'
    }],
    credits: {
      enabled: false
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="h-[400px]">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>CAGR: 16.33% (Overall)</p>
      </div>
    </div>
  );
};

export default PipelineChart;