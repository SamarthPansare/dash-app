import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HC_more from 'highcharts/highcharts-more';
import HC_3d from 'highcharts/highcharts-3d';
import { Terminal } from '../types/terminal';

HC_more(Highcharts);
HC_3d(Highcharts);

interface TerminalChartProps {
  terminals: Terminal[];
  selectedProduct: 'MS' | 'HSD';
}

export const TerminalChart: React.FC<TerminalChartProps> = ({
  terminals,
  selectedProduct,
}) => {
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
      text: `${selectedProduct} Supply by Mode of Transport`
    },
    xAxis: {
      categories: terminals.map(t => t.location),
      labels: {
        rotation: -45
      }
    },
    yAxis: {
      title: {
        text: 'Volume (TMT)'
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        depth: 40
      }
    },
    series: [
      {
        name: 'Road',
        data: terminals.map(t => 
          selectedProduct === 'MS' ? t.msReceived.road : t.hsdReceived.road
        )
      },
      {
        name: 'Rail',
        data: terminals.map(t => 
          selectedProduct === 'MS' ? t.msReceived.rail : t.hsdReceived.rail
        )
      },
      {
        name: 'Pipeline',
        data: terminals.map(t => 
          selectedProduct === 'MS' ? t.msReceived.pipeline : t.hsdReceived.pipeline
        )
      }
    ]
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