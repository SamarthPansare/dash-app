import React from 'react';

interface DataTableProps {
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Terminal</th>
            <th className="px-4 py-2">MS Received (TMT)</th>
            <th className="px-4 py-2">HSD Received (TMT)</th>
            <th className="px-4 py-2">Distance (KM)</th>
            <th className="px-4 py-2">Rail Rate (Rs/ton)</th>
            <th className="px-4 py-2">Rail Cost (Rs Cr)</th>
            <th className="px-4 py-2">Road Cost (Rs Cr)</th>
            <th className="px-4 py-2">Pipeline Cost (Rs Cr)</th>
            <th className="px-4 py-2">Total Cost (Rs Cr)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((terminal, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-4 py-2 font-medium">{terminal.location}</td>
              <td className="px-4 py-2">{(terminal.msReceived.road + terminal.msReceived.rail + terminal.msReceived.pipeline).toFixed(2)}</td>
              <td className="px-4 py-2">{(terminal.hsdReceived.road + terminal.hsdReceived.rail + terminal.hsdReceived.pipeline).toFixed(2)}</td>
              <td className="px-4 py-2">{terminal.distanceKM}</td>
              <td className="px-4 py-2">{terminal.railRate}</td>
              <td className="px-4 py-2">{terminal.transportationCost.rail.toFixed(2)}</td>
              <td className="px-4 py-2">{terminal.transportationCost.road.toFixed(2)}</td>
              <td className="px-4 py-2">{terminal.transportationCost.pipeline.toFixed(2)}</td>
              <td className="px-4 py-2 font-semibold">{terminal.totalCost.toFixed(2)}</td>
            </tr>
          ))}
          <tr className="bg-blue-50 font-semibold">
            <td className="px-4 py-2">Total</td>
            <td className="px-4 py-2">{data.reduce((acc, terminal) => 
              acc + terminal.msReceived.road + terminal.msReceived.rail + terminal.msReceived.pipeline, 0).toFixed(2)}</td>
            <td className="px-4 py-2">{data.reduce((acc, terminal) => 
              acc + terminal.hsdReceived.road + terminal.hsdReceived.rail + terminal.hsdReceived.pipeline, 0).toFixed(2)}</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">{data.reduce((acc, terminal) => acc + terminal.transportationCost.rail, 0).toFixed(2)}</td>
            <td className="px-4 py-2">{data.reduce((acc, terminal) => acc + terminal.transportationCost.road, 0).toFixed(2)}</td>
            <td className="px-4 py-2">{data.reduce((acc, terminal) => acc + terminal.transportationCost.pipeline, 0).toFixed(2)}</td>
            <td className="px-4 py-2">{data.reduce((acc, terminal) => acc + terminal.totalCost, 0).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;