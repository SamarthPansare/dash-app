import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-3d';
import { TerminalData } from '../types/terminal';

// Initialize Highcharts 3D module
if (typeof Highcharts === 'object') {
  HighchartsMore(Highcharts);
}

interface TerminalChartProps {
  data: TerminalData[];
  selectedProduct: string;
  selectedMode: string;
}

export const TerminalChart: React.FC<TerminalChartProps> = ({
  data,
  selectedProduct,
  selectedMode,
}) => {
  const getFilteredData = () => {
    return data.map((terminal) => {
      let total = 0;
      
      if (selectedMode) {
        if (selectedProduct === 'MS') {
          total = terminal.msReceived[selectedMode as keyof typeof terminal.msReceived];
        } else if (selectedProduct === 'HSD') {
          total = terminal.hsdReceived[selectedMode as keyof typeof terminal.hsdReceived];
        } else {
          total = terminal.msReceived[selectedMode as keyof typeof terminal.msReceived] +
                 terminal.hsdReceived[selectedMode as keyof typeof terminal.hsdReceived];
        }
      } else {
        const msTotal = Object.values(terminal.msReceived).reduce((a, b) => a + b, 0);
        const hsdTotal = Object.values(terminal.hsdReceived).reduce((a, b) => a + b, 0);
        
        if (selectedProduct === 'MS') {
          total = msTotal;
        } else if (selectedProduct === 'HSD') {
          total = hsdTotal;
        } else {
          total = msTotal + hsdTotal;
        }
      }
      
      return {
        name: terminal.location,
        y: total,
        color: Highcharts.getOptions().colors![data.indexOf(terminal) % (Highcharts.getOptions().colors || []).length]
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
      text: 'Terminal-wise Volume Distribution'
    },
    subtitle: {
      text: `${selectedProduct || 'All Products'} - ${selectedMode ? selectedMode.toUpperCase() : 'All Modes'}`
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '11px',
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
    tooltip: {
      headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
      pointFormat: 'Volume: <b>{point.y:.1f} TMT</b>'
    },
    plotOptions: {
      column: {
        depth: 25,
        colorByPoint: true
      }
    },
    series: [{
      name: 'Terminals',
      data: getFilteredData(),
      type: 'column'
    }]
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};