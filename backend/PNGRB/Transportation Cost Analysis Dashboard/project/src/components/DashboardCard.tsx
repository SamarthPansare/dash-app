import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import Highcharts3D from 'highcharts/highcharts-3d';

// Initialize Highcharts modules
HighchartsMore(Highcharts);
Highcharts3D(Highcharts);

interface DashboardCardProps {
  title: string;
  data: any;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, data }) => {
  const columnChartOptions = {
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
      text: `Transportation Costs by Mode - ${title}`,
      style: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: data.terminals.map((t: any) => t.location),
      labels: {
        rotation: -45,
        style: {
          fontSize: '12px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Cost (Rs Cr)',
        style: {
          fontSize: '14px'
        }
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
        name: 'Rail',
        data: data.terminals.map((t: any) => t.transportationCost.rail),
        color: '#FF9F43'
      },
      {
        name: 'Road',
        data: data.terminals.map((t: any) => t.transportationCost.road),
        color: '#28C76F'
      },
      {
        name: 'Pipeline',
        data: data.terminals.map((t: any) => t.transportationCost.pipeline),
        color: '#7367F0'
      }
    ],
    credits: {
      enabled: false
    }
  };

  const pieChartOptions = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
      }
    },
    title: {
      text: `Transport Mode Distribution - ${title}`,
      style: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
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
        {
          name: 'Rail',
          y: data.terminals.reduce((acc: number, t: any) => acc + t.transportationCost.rail, 0),
          color: '#FF9F43'
        },
        {
          name: 'Road',
          y: data.terminals.reduce((acc: number, t: any) => acc + t.transportationCost.road, 0),
          color: '#28C76F'
        },
        {
          name: 'Pipeline',
          y: data.terminals.reduce((acc: number, t: any) => acc + t.transportationCost.pipeline, 0),
          color: '#7367F0'
        }
      ]
    }],
    credits: {
      enabled: false
    }
  };

  const totalCostOptions = {
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
      text: `Total Transportation Cost by Terminal - ${title}`,
      style: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: data.terminals.map((t: any) => t.location),
      title: {
        text: 'Terminals',
        style: {
          fontSize: '14px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Total Cost (Rs Cr)',
        style: {
          fontSize: '14px'
        }
      }
    },
    plotOptions: {
      bar: {
        depth: 40,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
        }
      }
    },
    series: [{
      name: 'Total Cost',
      data: data.terminals.map((t: any) => t.totalCost),
      color: '#EA5455'
    }],
    credits: {
      enabled: false
    }
  };

  const receivedVolumeOptions = {
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
      text: `Volume Received by Product - ${title}`,
      style: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: data.terminals.map((t: any) => t.location),
      labels: {
        rotation: -45,
        style: {
          fontSize: '12px'
        }
      }
    },
    yAxis: {
      title: {
        text: 'Volume (TMT)',
        style: {
          fontSize: '14px'
        }
      }
    },
    plotOptions: {
      column: {
        depth: 40,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
        }
      }
    },
    series: [
      {
        name: 'MS',
        data: data.terminals.map((t: any) => 
          Object.values(t.msReceived).reduce((a: number, b: number) => a + b, 0)
        ),
        color: '#00CFE8'
      },
      {
        name: 'HSD',
        data: data.terminals.map((t: any) => 
          Object.values(t.hsdReceived).reduce((a: number, b: number) => a + b, 0)
        ),
        color: '#FF9F43'
      }
    ],
    credits: {
      enabled: false
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-[400px] bg-gray-50 rounded-lg p-4">
          <HighchartsReact highcharts={Highcharts} options={columnChartOptions} />
        </div>
        <div className="h-[400px] bg-gray-50 rounded-lg p-4">
          <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
        </div>
        <div className="h-[400px] bg-gray-50 rounded-lg p-4">
          <HighchartsReact highcharts={Highcharts} options={totalCostOptions} />
        </div>
        <div className="h-[400px] bg-gray-50 rounded-lg p-4">
          <HighchartsReact highcharts={Highcharts} options={receivedVolumeOptions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;