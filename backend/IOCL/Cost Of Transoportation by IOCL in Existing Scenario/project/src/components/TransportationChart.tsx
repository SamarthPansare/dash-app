import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';
import { TransportationData } from '../types/data';

// Initialize Highcharts 3D module
Highcharts3D(Highcharts);

interface Props {
  data: TransportationData[];
}

export const TransportationChart: React.FC<Props> = ({ data }) => {
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
      text: 'Transportation Costs by Terminal and Mode'
    },
    xAxis: {
      categories: data.map(item => item.location),
      labels: {
        rotation: -45,
        style: {
          fontSize: '12px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Cost (Rs Cr)',
        margin: 20
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        depth: 40,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
        }
      }
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },
    series: [
      {
        name: 'Pipeline',
        data: data.map(item => item.transportationCost.pipeline),
        color: '#2563eb'
      },
      {
        name: 'Rail',
        data: data.map(item => item.transportationCost.rail),
        color: '#16a34a'
      },
      {
        name: 'Road',
        data: data.map(item => item.transportationCost.road),
        color: '#dc2626'
      }
    ]
  };

  return (
    <div className="w-full h-[500px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};