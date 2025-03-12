import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-3d';
import { TransportationData, TransportMode, Product } from '../types/data';

// Initialize Highcharts 3D module
HighchartsMore(Highcharts);

interface Props {
  data: TransportationData[];
  selectedTerminal?: string;
  selectedProduct?: Product;
  selectedMode?: TransportMode;
}

export const TransportationChart: React.FC<Props> = ({
  data,
  selectedTerminal,
  selectedProduct,
  selectedMode
}) => {
  const filteredData = data.filter(item => 
    (!selectedTerminal || item.location === selectedTerminal)
  );

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
      text: 'Transportation Costs by Mode and Product'
    },
    xAxis: {
      categories: filteredData.map(item => item.location),
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
        depth: 25,
        stacking: 'normal'
      }
    },
    series: [
      {
        name: 'MS - Road',
        data: filteredData.map(item => item.transportationCost.road),
        color: '#FF9F43'
      },
      {
        name: 'MS - Rail',
        data: filteredData.map(item => item.transportationCost.rail),
        color: '#28C76F'
      },
      {
        name: 'MS - Pipeline',
        data: filteredData.map(item => item.transportationCost.pipeline),
        color: '#00CFE8'
      },
      {
        name: 'HSD - Road',
        data: filteredData.map(item => item.transportationCost.road * 1.2),
        color: '#FF5C5C'
      },
      {
        name: 'HSD - Rail',
        data: filteredData.map(item => item.transportationCost.rail * 1.2),
        color: '#7367F0'
      },
      {
        name: 'HSD - Pipeline',
        data: filteredData.map(item => item.transportationCost.pipeline * 1.2),
        color: '#EA5455'
      }
    ],
    credits: {
      enabled: false
    },
    legend: {
      itemStyle: {
        fontSize: '11px'
      }
    }
  };

  return (
    <div className="w-full h-[400px]">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};