import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';

// Initialize Highcharts 3D module
Highcharts3D(Highcharts);

interface TransportationChartProps {
  data: any[];
  selectedTerminal: string;
  selectedProduct: string;
}

const TransportationChart: React.FC<TransportationChartProps> = ({
  data,
  selectedTerminal,
  selectedProduct,
}) => {
  const terminal = data.find(t => t.location === selectedTerminal);
  const received = selectedProduct === 'MS' ? terminal?.msReceived : terminal?.hsdReceived;
  
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
      text: `${selectedProduct} Transportation by Mode - ${selectedTerminal}`
    },
    xAxis: {
      categories: ['Rail', 'Road', 'Pipeline'],
      labels: {
        skew3d: true,
        style: {
          fontSize: '16px'
        }
      }
    },
    yAxis: [{
      title: {
        text: 'Quantity (TMT)',
        margin: 20
      }
    }, {
      title: {
        text: 'Cost (Rs Cr)',
        margin: 20
      },
      opposite: true
    }],
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      name: 'Quantity (TMT)',
      data: [received?.rail || 0, received?.road || 0, received?.pipeline || 0],
      color: '#4299E1'
    }, {
      name: 'Cost (Rs Cr)',
      data: [
        terminal?.transportationCost.rail || 0,
        terminal?.transportationCost.road || 0,
        terminal?.transportationCost.pipeline || 0
      ],
      yAxis: 1,
      color: '#48BB78'
    }]
  };

  return (
    <div className="w-full h-[400px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default TransportationChart;