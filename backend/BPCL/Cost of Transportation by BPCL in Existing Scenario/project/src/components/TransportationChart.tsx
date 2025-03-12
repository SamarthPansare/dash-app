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
      text: 'Transportation Costs by Mode and Terminal'
    },
    xAxis: {
      categories: data.map(item => item.location),
      labels: {
        rotation: -45,
        style: {
          fontSize: '11px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Cost (Rs Cr)'
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
    series: [
      {
        name: 'Pipeline',
        data: data.map(item => item.transportationCost.pipeline),
        color: '#4CAF50'
      },
      {
        name: 'Rail',
        data: data.map(item => item.transportationCost.rail),
        color: '#2196F3'
      },
      {
        name: 'Road',
        data: data.map(item => item.transportationCost.road),
        color: '#FFC107'
      }
    ],
    credits: {
      enabled: false
    },
    legend: {
      backgroundColor: '#FFFFFF',
      shadow: true
    }
  };

  return (
    <div className="w-full h-[500px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};