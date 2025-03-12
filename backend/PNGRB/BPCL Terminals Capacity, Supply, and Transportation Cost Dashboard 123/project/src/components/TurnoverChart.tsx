import React from 'react';
import Highcharts from 'highcharts/highstock';
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
        viewDistance: 25,
      },
    },
    title: {
      text: 'Terminal Capacity & Annual Turnover',
    },
    xAxis: {
      categories: terminals.map(t => t.location),
      labels: {
        rotation: -45,
      },
    },
    yAxis: [
      {
        title: {
          text: 'Capacity (KL)',
        },
        labels: {
          format: '{value:,.0f}',
        },
      },
      {
        title: {
          text: 'Annual Turnover',
        },
        opposite: true,
        labels: {
          format: '{value:.1f}x',
        },
      },
    ],
    tooltip: {
      shared: true,
    },
    plotOptions: {
      column: {
        depth: 25,
        dataLabels: {
          enabled: true,
          format: '{y:,.0f}',
        },
      },
      spline: {
        dataLabels: {
          enabled: true,
          format: '{y:.1f}x',
        },
      },
    },
    series: [
      {
        name: 'Capacity',
        data: terminals.map(t => t.capacityKL),
        type: 'column',
        color: '#059669',
      },
      {
        name: 'Annual Turnover',
        data: terminals.map(t => t.annualCapacityTurnover),
        type: 'spline',
        yAxis: 1,
        color: '#7c3aed',
        marker: {
          enabled: true,
        },
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};