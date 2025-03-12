import React from 'react';

const GeographicalProgress = () => {
  const topPerformingGAs = [
    { name: 'Noida', state: 'UP', completion: 99.2 },
    { name: 'Mumbai', state: 'Maharashtra', completion: 97.8 },
    { name: 'Ahmedabad', state: 'Gujarat', completion: 96.5 },
    { name: 'Bengaluru', state: 'Karnataka', completion: 95.3 },
    { name: 'Delhi', state: 'Delhi', completion: 94.9 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
        <span>Geographical Area Progress</span>
        <span className="text-sm font-normal text-gray-500">Top Performing GAs</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1579847188804-2d1f62e7dd4f?auto=format&fit=crop&w=800"
            alt="Oil and Gas Pipeline Network"
            className="w-full h-[400px] object-cover rounded-lg"
          />
          {/* Pipeline Network Markers */}
          <div className="absolute top-1/4 left-1/2 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
          <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-ping" />
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-ping" />
          {/* Pipeline Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg" />
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            Pipeline Network Coverage
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-gray-800">Top Performing Areas</h3>
          <div className="space-y-3">
            {topPerformingGAs.map((ga, index) => (
              <div key={ga.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-medium text-gray-900">{ga.name}</p>
                  <p className="text-sm text-gray-500">{ga.state}</p>
                </div>
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-gray-200 rounded-full mr-3">
                    <div 
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${ga.completion}%` }}
                    />
                  </div>
                  <span className="font-semibold text-blue-600">{ga.completion}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Key Insights</h4>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• 80% of GAs showing above-target performance</li>
              <li>• Northern region leads in PNG connections</li>
              <li>• Western region dominates industrial consumption</li>
              <li>• 15,000+ km of pipeline network operational</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographicalProgress;