import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { TerminalData } from '../types/terminal';

interface PieChartProps {
  data: TerminalData[];
}

export const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartData = data.map((terminal) => ({
    name: terminal.location,
    y: terminal.totalVolumeKL
  }));

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
      text: 'Terminal Share in Total Volume'
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
      name: 'Share',
      data: chartData
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