import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Highcharts3D from 'highcharts/highcharts-3d';
import HighchartsExporting from 'highcharts/modules/exporting';

// Initialize the required Highcharts modules
Highcharts3D(Highcharts);
HighchartsExporting(Highcharts);

interface Chart3DProps {
  options: Highcharts.Options;
}

const Chart3D: React.FC<Chart3DProps> = ({ options }) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        ...options,
        chart: {
          ...options.chart,
          backgroundColor: 'transparent',
          style: {
            fontFamily: 'inherit'
          }
        },
        title: {
          ...options.title,
          style: {
            color: '#fff'
          }
        },
        legend: {
          ...options.legend,
          itemStyle: {
            color: '#9CA3AF'
          },
          itemHoverStyle: {
            color: '#fff'
          }
        }
      }}
    />
  );
};

export default Chart3D;