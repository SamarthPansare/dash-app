import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';

Highcharts3D(Highcharts);

const EntityPerformance = () => {
  const options = {
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
      text: 'Entity-wise Performance',
      style: { fontSize: '16px', fontWeight: 'bold' }
    },
    xAxis: {
      categories: ['IGL', 'Gujarat Gas Ltd', 'BPCL', 'Adani Gas', 'GAIL Gas', 'Megha City Gas'],
      labels: {
        style: { color: '#666' }
      }
    },
    yAxis: {
      title: {
        text: 'Achievement (%)',
        style: { color: '#666' }
      }
    },
    plotOptions: {
      column: {
        depth: 25,
        colorByPoint: true
      }
    },
    series: [{
      name: 'Achievement',
      data: [212, 156, 143, 128, 98, 19],
      colors: ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0891b2', '#4f46e5']
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
    </div>
  );
};

export default EntityPerformance;