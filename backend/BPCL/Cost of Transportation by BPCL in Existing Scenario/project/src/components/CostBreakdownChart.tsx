import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TransportationData } from '../types/data';

interface Props {
  data: TransportationData[];
}

export const CostBreakdownChart: React.FC<Props> = ({ data }) => {
  const totalCosts = data.reduce(
    (acc, item) => {
      acc.pipeline += item.transportationCost.pipeline;
      acc.rail += item.transportationCost.rail;
      acc.road += item.transportationCost.road;
      return acc;
    },
    { pipeline: 0, rail: 0, road: 0 }
  );

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
      text: 'Transportation Cost Breakdown by Mode'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%'
        }
      }
    },
    series: [{
      name: 'Share',
      data: [
        ['Pipeline', totalCosts.pipeline],
        ['Rail', totalCosts.rail],
        ['Road', totalCosts.road]
      ]
    }]
  };

  return (
    <div className="w-full h-[400px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};