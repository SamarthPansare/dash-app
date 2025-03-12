import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Terminal } from '../data/terminals';

interface CapacityChartProps {
  terminals: Terminal[];
}

export const CapacityChart: React.FC<CapacityChartProps> = ({ terminals }) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Terminal Storage Capacity Distribution'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Capacity Share',
      data: terminals.map(terminal => ({
        name: terminal.location,
        y: terminal.capacityKL,
        percentage: (terminal.capacityKL / terminals.reduce((acc, t) => acc + t.capacityKL, 0)) * 100
      }))
    }]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};