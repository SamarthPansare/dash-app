import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Terminal } from '../types/terminal';

interface TurnoverChartProps {
  terminals: Terminal[];
}

export const TurnoverChart: React.FC<TurnoverChartProps> = ({ terminals }) => {
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
      text: 'Annual Capacity Turnover by Terminal'
    },
    xAxis: {
      categories: terminals.map(t => t.location),
      labels: {
        rotation: -45
      }
    },
    yAxis: {
      title: {
        text: 'Annual Capacity Turnover'
      }
    },
    plotOptions: {
      column: {
        depth: 25,
        colorByPoint: true
      }
    },
    series: [{
      name: 'Turnover',
      data: terminals.map(t => t.annualCapacityTurnover)
    }]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};