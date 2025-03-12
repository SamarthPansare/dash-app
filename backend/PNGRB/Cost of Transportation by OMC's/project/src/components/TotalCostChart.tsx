import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TransportationData } from '../types/data';

interface Props {
  data: TransportationData[];
}

export const TotalCostChart: React.FC<Props> = ({ data }) => {
  const options = {
    chart: {
      type: 'bar',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: 'Total Transportation Cost by Terminal'
    },
    xAxis: {
      categories: data.map(item => item.location),
      title: {
        text: 'Terminal'
      },
      labels: {
        style: {
          fontSize: '11px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Total Cost (Rs Cr)'
      }
    },
    plotOptions: {
      bar: {
        depth: 25,
        colorByPoint: true
      }
    },
    series: [{
      name: 'Total Cost',
      data: data.map(item => item.totalCost),
      showInLegend: false
    }],
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