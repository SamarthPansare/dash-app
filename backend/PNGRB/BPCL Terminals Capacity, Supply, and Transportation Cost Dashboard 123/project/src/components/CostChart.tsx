import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Terminal } from '../data/terminals';

interface CostChartProps {
  terminals: Terminal[];
}

export const CostChart: React.FC<CostChartProps> = ({ terminals }) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'bar',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25,
      },
    },
    title: {
      text: 'Transportation Costs by Terminal',
    },
    xAxis: {
      categories: terminals.map(t => t.location),
      labels: {
        rotation: 0,
      },
    },
    yAxis: [
      {
        title: {
          text: 'Transportation Cost (Rs Cr)',
        },
        labels: {
          format: '{value:.2f}',
        },
      },
      {
        title: {
          text: 'Unit Cost (Rs/KL)',
        },
        opposite: true,
        labels: {
          format: '{value:.2f}',
        },
      },
    ],
    tooltip: {
      shared: true,
      formatter: function() {
        const points = this.points || [];
        let tooltip = `<b>${this.x}</b><br/>`;
        points.forEach(point => {
          tooltip += `${point.series.name}: ${point.y?.toFixed(2)}<br/>`;
        });
        return tooltip;
      },
    },
    plotOptions: {
      column: {
        depth: 25,
        dataLabels: {
          enabled: true,
          format: '{y:.2f}',
        },
      },
      spline: {
        dataLabels: {
          enabled: true,
          format: '{y:.2f}',
        },
      },
    },
    series: [
      {
        name: 'Transportation Cost',
        data: terminals.map(t => t.transportationCost),
        type: 'column',
        color: '#2563eb',
      },
      {
        name: 'Unit Cost',
        data: terminals.map(t => t.unitCost),
        type: 'spline',
        yAxis: 1,
        color: '#dc2626',
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