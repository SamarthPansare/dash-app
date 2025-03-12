import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TransportationData } from '../types/data';

interface Props {
  data: TransportationData[];
}

export const CostBreakdownChart: React.FC<Props> = ({ data }) => {
  const totalCosts = {
    pipeline: data.reduce((acc, item) => acc + item.transportationCost.pipeline, 0),
    rail: data.reduce((acc, item) => acc + item.transportationCost.rail, 0),
    road: data.reduce((acc, item) => acc + item.transportationCost.road, 0)
  };

  const options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: 'Transportation Cost Distribution by Mode'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%<br>₹{point.y:.2f} Cr'
        }
      }
    },
    series: [{
      name: 'Share',
      data: [
        {
          name: 'Pipeline',
          y: totalCosts.pipeline,
          color: '#2563eb'
        },
        {
          name: 'Rail',
          y: totalCosts.rail,
          color: '#16a34a'
        },
        {
          name: 'Road',
          y: totalCosts.road,
          color: '#dc2626'
        }
      ]
    }]
  };

  return (
    <div className="w-full h-[400px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};