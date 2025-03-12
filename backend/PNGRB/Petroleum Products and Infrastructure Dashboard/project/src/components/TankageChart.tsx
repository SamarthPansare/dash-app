import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';
import { TankageData } from '../types/data';

// Initialize Highcharts 3D module
Highcharts3D(Highcharts);

interface Props {
  data: TankageData[];
}

const TankageChart: React.FC<Props> = ({ data }) => {
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
      text: 'Tankage Capacity by Location'
    },
    xAxis: {
      categories: data.map(item => item.location),
      labels: {
        rotation: -15,
        style: {
          fontSize: '11px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Capacity',
        margin: 20
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        depth: 40,
        groupZPadding: 10
      }
    },
    series: [
      {
        name: 'HPCL',
        data: data.map(item => item.HPCL),
        color: '#7c3aed'
      },
      {
        name: 'BPCL',
        data: data.map(item => item.BPCL),
        color: '#8b5cf6'
      },
      {
        name: 'IOCL',
        data: data.map(item => item.IOCL),
        color: '#a78bfa'
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

export default TankageChart;