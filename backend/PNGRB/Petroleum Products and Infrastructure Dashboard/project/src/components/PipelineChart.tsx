import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';
import { PipelineData } from '../types/data';

// Initialize Highcharts 3D module
Highcharts3D(Highcharts);

interface Props {
  data: PipelineData[];
}

const PipelineChart: React.FC<Props> = ({ data }) => {
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
      text: 'Pipeline Capacity and Utilization'
    },
    xAxis: {
      categories: data.map(item => item.pipeline),
      labels: {
        rotation: -15,
        style: {
          fontSize: '11px'
        }
      }
    },
    yAxis: [{
      title: {
        text: 'Capacity & Throughput (MMT)',
        margin: 20
      }
    }, {
      title: {
        text: 'Utilization (%)',
        margin: 20
      },
      opposite: true,
      max: 100
    }],
    plotOptions: {
      column: {
        depth: 40,
        grouping: false,
        groupZPadding: 10
      }
    },
    series: [
      {
        name: 'Capacity',
        data: data.map(item => item.capacity),
        color: '#dc2626'
      },
      {
        name: 'Throughput 2022',
        data: data.map(item => item.throughput2022),
        color: '#ef4444'
      },
      {
        name: 'Utilization 2022',
        type: 'spline',
        data: data.map(item => item.utilization2022),
        color: '#f87171',
        yAxis: 1
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

export default PipelineChart;