import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TerminalData } from '../types/terminal';

interface CostChartProps {
  data: TerminalData[];
}

export const CostChart: React.FC<CostChartProps> = ({ data }) => {
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
      text: 'Transportation Costs by Terminal'
    },
    xAxis: {
      categories: data.map(terminal => terminal.location),
      labels: {
        rotation: -45,
        style: {
          fontSize: '11px',
          fontFamily: 'Verdana, sans-serif'
        }
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
    tooltip: {
      shared: true,
      useHTML: true,
      headerFormat: '<small>{point.key}</small><table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
        '<td style="text-align: right"><b>{point.y:.2f}</b></td></tr>',
      footerFormat: '</table>'
    },
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      name: 'Transportation Cost',
      data: data.map(terminal => terminal.transportationCost),
      type: 'column',
      color: '#2E93fA'
    }, {
      name: 'Unit Cost',
      data: data.map(terminal => terminal.unitCost),
      type: 'spline',
      yAxis: 1,
      color: '#FF4560',
      marker: {
        lineWidth: 2,
        lineColor: '#FF4560',
        fillColor: 'white'
      }
    }]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};