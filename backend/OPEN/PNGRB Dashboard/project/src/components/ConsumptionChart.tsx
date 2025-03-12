import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';

Highcharts3D(Highcharts);

const ConsumptionChart = () => {
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
      text: 'Gas Consumption by Sector',
      style: { fontSize: '16px', fontWeight: 'bold' }
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
      name: 'Consumption',
      data: [
        {
          name: 'CNG',
          y: 450,
          color: '#2563eb'
        },
        {
          name: 'Industrial',
          y: 482,
          color: '#16a34a'
        },
        {
          name: 'Commercial',
          y: 300,
          color: '#9333ea'
        }
      ]
    }],
    credits: {
      enabled: false
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="h-[300px]">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Total Consumption: 1,232 MMSCM (Mar-24)</p>
        <p>CAGR: 9.47%</p>
      </div>
    </div>
  );
};

export default ConsumptionChart;