import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Terminal } from '../types/terminal';

interface CostChartProps {
  terminals: Terminal[];
}

export const CostChart: React.FC<CostChartProps> = ({ terminals }) => {
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
      text: 'Transportation and Unit Costs by Terminal'
    },
    xAxis: {
      categories: terminals.map(t => t.location),
      labels: {
        rotation: -45
      }
    },
    yAxis: [{
      title: {
        text: 'Transportation Cost (Rs Cr)'
      }
    }, {
      title: {
        text: 'Unit Cost (Rs/KL)'
      },
      opposite: true
    }],
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      name: 'Transportation Cost',
      data: terminals.map(t => t.transportationCost)
    }, {
      name: 'Unit Cost',
      data: terminals.map(t => t.unitCost),
      yAxis: 1
    }]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};