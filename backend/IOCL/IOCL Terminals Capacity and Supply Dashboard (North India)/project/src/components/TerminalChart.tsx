import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import Highcharts3D from 'highcharts/highcharts-3d';
import { Terminal } from '../data/terminals';

// Initialize Highcharts modules
HighchartsMore(Highcharts);
Highcharts3D(Highcharts);

interface TerminalChartProps {
  terminals: Terminal[];
  selectedProduct: string;
  selectedMode: string;
}

export const TerminalChart: React.FC<TerminalChartProps> = ({
  terminals,
  selectedProduct,
  selectedMode
}) => {
  const getChartData = () => {
    return terminals.map((terminal) => {
      const msTotal = Object.values(terminal.msReceived).reduce((a, b) => a + b, 0);
      const hsdTotal = Object.values(terminal.hsdReceived).reduce((a, b) => a + b, 0);
      
      if (selectedProduct === 'MS') {
        return {
          name: terminal.location,
          y: selectedMode ? terminal.msReceived[selectedMode as keyof typeof terminal.msReceived] : msTotal
        };
      } else if (selectedProduct === 'HSD') {
        return {
          name: terminal.location,
          y: selectedMode ? terminal.hsdReceived[selectedMode as keyof typeof terminal.hsdReceived] : hsdTotal
        };
      }
      
      return {
        name: terminal.location,
        y: selectedMode ? 
          (terminal.msReceived[selectedMode as keyof typeof terminal.msReceived] + 
           terminal.hsdReceived[selectedMode as keyof typeof terminal.hsdReceived]) :
          (msTotal + hsdTotal)
      };
    });
  };

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
      text: 'Terminal-wise Supply Data'
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
        text: 'Volume (TMT)',
        margin: 20
      }
    },
    tooltip: {
      headerFormat: '<b>{point.key}</b><br/>',
      pointFormat: '{series.name}: {point.y:.1f} TMT'
    },
    plotOptions: {
      column: {
        depth: 25,
        colorByPoint: true
      }
    },
    series: [{
      type: 'column',
      name: selectedProduct || 'Total Volume',
      data: getChartData()
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