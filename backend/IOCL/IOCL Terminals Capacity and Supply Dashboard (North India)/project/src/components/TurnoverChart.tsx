import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Terminal } from '../data/terminals';

interface TurnoverChartProps {
  terminals: Terminal[];
}

export const TurnoverChart: React.FC<TurnoverChartProps> = ({ terminals }) => {
  const options: Highcharts.Options = {
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
        skew3d: true,
        style: {
          fontSize: '16px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Turnover Ratio'
      }
    },
    plotOptions: {
      column: {
        depth: 25,
        colorByPoint: true
      }
    },
    series: [{
      type: 'column',
      name: 'Annual Turnover',
      data: terminals.map(terminal => ({
        name: terminal.location,
        y: terminal.annualCapacityTurnover,
        color: terminal.annualCapacityTurnover > 10 ? '#2ecc71' : 
               terminal.annualCapacityTurnover > 8 ? '#f1c40f' : '#e74c3c'
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