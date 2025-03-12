import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Highcharts3D from 'highcharts/highcharts-3d';
import { TerminalData, Product, TransportMode } from '../types/terminal';

// Initialize Highcharts modules
HighchartsMore(Highcharts);
Highcharts3D(Highcharts);

interface TerminalChartProps {
  data: TerminalData[];
  selectedProduct: Product;
  selectedMode: TransportMode;
}

export const TerminalChart: React.FC<TerminalChartProps> = ({
  data,
  selectedProduct,
  selectedMode
}) => {
  const chartData = data.map((terminal) => ({
    name: terminal.location,
    y: selectedProduct === 'MS' 
      ? terminal.msReceived[selectedMode]
      : terminal.hsdReceived[selectedMode]
  }));

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
      text: `${selectedProduct} Received by ${selectedMode.toUpperCase()} (TMT)`
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Volume (TMT)'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        depth: 25,
        colorByPoint: true
      }
    },
    series: [{
      type: 'column',
      name: `${selectedProduct} Volume`,
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