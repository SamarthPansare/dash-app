import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TerminalData } from '../types/terminal';

interface TurnoverChartProps {
  data: TerminalData[];
}

export const TurnoverChart: React.FC<TurnoverChartProps> = ({ data }) => {
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
        text: 'Annual Capacity Turnover'
      },
      labels: {
        format: '{value}x'
      }
    }, {
      title: {
        text: 'Capacity (KL)'
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
      name: 'Turnover',
      data: data.map(terminal => terminal.annualCapacityTurnover),
      type: 'column',
      color: '#00E396'
    }, {
      name: 'Capacity',
      data: data.map(terminal => terminal.capacityKL),
      type: 'spline',
      yAxis: 1,
      color: '#008FFB',
      marker: {
        lineWidth: 2,
        lineColor: '#008FFB',
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