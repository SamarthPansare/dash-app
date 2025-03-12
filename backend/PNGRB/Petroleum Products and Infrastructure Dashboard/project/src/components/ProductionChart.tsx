import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';
import { ProductionData } from '../types/data';

// Initialize Highcharts 3D module
Highcharts3D(Highcharts);

interface Props {
  data: ProductionData[];
}

const ProductionChart: React.FC<Props> = ({ data }) => {
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
      text: 'Production of Petroleum Products (Year-wise)'
    },
    xAxis: {
      categories: data.map(item => item.product),
      labels: {
        rotation: -15,
        style: {
          fontSize: '11px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Production (TMT)',
        margin: 20
      }
    },
    plotOptions: {
      column: {
        depth: 40,
        grouping: false,
        groupZPadding: 10
      }
    },
    series: [
      {
        name: '2022-23',
        data: data.map(item => item['year2022-23']),
        color: '#2563eb'
      },
      {
        name: '2021-22',
        data: data.map(item => item['year2021-22']),
        color: '#3b82f6'
      },
      {
        name: '2020-21',
        data: data.map(item => item['year2020-21']),
        color: '#60a5fa'
      }
    ],
    credits: {
      enabled: false
    }
  };

  return (
    <div className="w-full h-[400px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ProductionChart;