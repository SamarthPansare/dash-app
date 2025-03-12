import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface CostBreakdownChartProps {
  data: any[];
}

const CostBreakdownChart: React.FC<CostBreakdownChartProps> = ({ data }) => {
  const totalRail = data.reduce((acc, terminal) => acc + terminal.transportationCost.rail, 0);
  const totalRoad = data.reduce((acc, terminal) => acc + terminal.transportationCost.road, 0);
  const totalPipeline = data.reduce((acc, terminal) => acc + terminal.transportationCost.pipeline, 0);

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
      text: 'Transportation Cost Distribution'
    },
    subtitle: {
      text: 'Total Cost Distribution by Mode'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%<br>Rs {point.y:.2f} Cr'
        }
      }
    },
    series: [{
      name: 'Share',
      data: [
        {
          name: 'Rail',
          y: totalRail,
          color: '#4299E1'
        },
        {
          name: 'Road',
          y: totalRoad,
          color: '#48BB78'
        },
        {
          name: 'Pipeline',
          y: totalPipeline,
          color: '#F6AD55'
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

export default CostBreakdownChart;