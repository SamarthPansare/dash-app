import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { TransportationData } from '../types/data';

interface Props {
  data: TransportationData[];
}

export const CostBreakdownChart: React.FC<Props> = ({ data }) => {
  const totalCosts = {
    road: data.reduce((acc, item) => acc + item.transportationCost.road, 0),
    rail: data.reduce((acc, item) => acc + item.transportationCost.rail, 0),
    pipeline: data.reduce((acc, item) => acc + item.transportationCost.pipeline, 0)
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
      text: 'Transportation Cost Breakdown by Mode'
    },
    plotOptions: {
      pie: {
        depth: 35,
        allowPointSelect: true,
        cursor: 'pointer'
      }
    },
    series: [{
      name: 'Cost Share',
      data: [
        ['Road', totalCosts.road],
        ['Rail', totalCosts.rail],
        ['Pipeline', totalCosts.pipeline]
      ]
    }]
  };

  return (
    <div className="w-full h-[400px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};