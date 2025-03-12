import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';
import { RefineryData } from '../types/data';

// Initialize Highcharts 3D module
Highcharts3D(Highcharts);

interface Props {
  data: RefineryData[];
}

const RefineryChart: React.FC<Props> = ({ data }) => {
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
      text: 'Refinery-wise Production'
    },
    xAxis: {
      categories: data.map(item => item.refinery),
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
        color: '#059669'
      },
      {
        name: '2021-22',
        data: data.map(item => item['year2021-22']),
        color: '#10b981'
      },
      {
        name: '2020-21',
        data: data.map(item => item['year2020-21']),
        color: '#34d399'
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

export default RefineryChart;