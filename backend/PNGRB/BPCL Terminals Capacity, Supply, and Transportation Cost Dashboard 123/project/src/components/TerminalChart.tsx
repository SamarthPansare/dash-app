import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HC_more from 'highcharts/highcharts-more';
import HC_3d from 'highcharts/highcharts-3d';
import { Terminal } from '../data/terminals';

HC_more(Highcharts);
HC_3d(Highcharts);

interface TerminalChartProps {
  terminals: Terminal[];
  selectedProduct: string;
  selectedMode: string;
}

export const TerminalChart: React.FC<TerminalChartProps> = ({
  terminals,
  selectedProduct,
  selectedMode,
}) => {
  const getChartData = () => {
    if (selectedProduct === 'MS') {
      return [
        {
          name: 'Road',
          data: terminals.map(t => t.msReceived.road),
        },
        {
          name: 'Rail',
          data: terminals.map(t => t.msReceived.rail),
        },
        {
          name: 'Pipeline',
          data: terminals.map(t => t.msReceived.pipeline),
        },
      ];
    } else if (selectedProduct === 'HSD') {
      return [
        {
          name: 'Road',
          data: terminals.map(t => t.hsdReceived.road),
        },
        {
          name: 'Rail',
          data: terminals.map(t => t.hsdReceived.rail),
        },
        {
          name: 'Pipeline',
          data: terminals.map(t => t.hsdReceived.pipeline),
        },
      ];
    } else {
      return terminals.map((terminal) => {
        const msTotal = terminal.msReceived.road + terminal.msReceived.rail + terminal.msReceived.pipeline;
        const hsdTotal = terminal.hsdReceived.road + terminal.hsdReceived.rail + terminal.hsdReceived.pipeline;
        return {
          name: terminal.location,
          data: [msTotal, hsdTotal],
        };
      });
    }
  };

  const getTitle = () => {
    if (selectedProduct) {
      return `${selectedProduct} Supply by Mode of Transport`;
    }
    return 'Terminal-wise Supply Volume (MS vs HSD)';
  };

  const getXAxisCategories = () => {
    if (selectedProduct) {
      return terminals.map(t => t.location);
    }
    return ['MS', 'HSD'];
  };

  const options: Highcharts.Options = {
    chart: {
      type: selectedProduct ? 'column' : 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25,
      },
    },
    title: {
      text: getTitle(),
    },
    xAxis: {
      categories: getXAxisCategories(),
      labels: {
        rotation: -45,
      },
    },
    yAxis: {
      title: {
        text: 'Volume (TMT)',
      },
      stackLabels: {
        enabled: true,
      },
    },
    plotOptions: {
      column: {
        stacking: selectedProduct ? 'normal' : undefined,
        depth: 25,
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: getChartData(),
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};