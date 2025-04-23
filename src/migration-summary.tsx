import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const MigrationSummary = () => {
  // Migration data
  const migrationData = [
    { name: 'Solace to EventBridge', count: 24 },
    { name: 'Kong to AWS Gateway', count: 34 },
  ];

  // Domain data from data.xlsx
  const domainData = [
    { name: 'account', type: 'Publish and Consume' },
    { name: 'person', type: 'Publish and Consume' },
    { name: 'order', type: 'Publish and Consume' },
    { name: 'product', type: 'Publish' },
    { name: 'pricing', type: 'Publish' },
    { name: 'inventory', type: 'Publish' },
    { name: 'storeCredit', type: 'Publish' },
    { name: 'subscription', type: 'Consume' },
    { name: 'productBundle', type: 'Consume' }
  ];

  // Status data
  const statusData = [
    { name: 'In Production', count: 58 },
    { name: 'Pending', count: 0 }
  ];

  // Teams involved
  const teams = [
    'Technology', 
    'SAP', 
    'Data', 
    'Quality',
    'Cloud', 
    'Enterprise Architecture',
    'Digital'
  ];

  // Cost savings
  const costSavings = "~$500,000";

  // Colors
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];
  
  // Domain type counts
  const domainTypeCounts = {
    'Publish and Consume': domainData.filter(d => d.type === 'Publish and Consume').length,
    'Publish': domainData.filter(d => d.type === 'Publish').length,
    'Consume': domainData.filter(d => d.type === 'Consume').length
  };
  
  const domainTypeData = Object.entries(domainTypeCounts).map(([name, value]) => ({ name, value }));

  // Data Domains
  const dataDomainsChart = [
    { name: 'Domains In Migration', value: 9 },
    { name: 'Event Types', value: 3 },
    { name: 'SAP Streams', value: 11 }
  ];

  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-r from-blue-50 to-indigo-50" style={{ aspectRatio: '16/9' }}>
      {/* Header */}
      <div className="w-full text-center py-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl font-bold">NextGen Platform Modernization</h1>
        <h2 className="text-2xl mt-2">Solace to EventBridge & Kong to AWS Gateway</h2>
      </div>
      
      {/* Key Highlights Banner */}
      <div className="w-full bg-yellow-400 text-blue-900 px-4 py-2 flex items-center justify-center">
        <div className="flex space-x-8 font-semibold text-lg">
          <div className="flex items-center"><span className="inline-block w-3 h-3 bg-blue-700 rounded-full mr-2"></span> 58 Entities Migrated</div>
          <div className="flex items-center"><span className="inline-block w-3 h-3 bg-green-600 rounded-full mr-2"></span> ~$500K Annual Savings</div>
          <div className="flex items-center"><span className="inline-block w-3 h-3 bg-purple-700 rounded-full mr-2"></span> 7 Teams Coordinated</div>
          <div className="flex items-center"><span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2"></span> 100% In Production</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 p-5 w-full flex-grow">
        {/* Left Column - Migration Scope */}
        <div className="col-span-7 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-3">
            <h3 className="text-xl font-bold">Migration Scope</h3>
          </div>
          <div className="p-4">
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={migrationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3182CE" name="Entities Migrated" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Total Entities</p>
                <p className="text-3xl font-bold text-blue-800">{migrationData.reduce((sum, item) => sum + item.count, 0)}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Annual Savings</p>
                <p className="text-3xl font-bold text-green-700">{costSavings}</p>
              </div>
            </div>
            
            {/* Key Accomplishments */}
            <div className="mt-3">
              <h4 className="font-bold text-blue-800 mb-2">Key Accomplishments:</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 p-2 rounded flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-sm">Seamless Integration</span>
                </div>
                <div className="bg-blue-50 p-2 rounded flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-sm">Reduced Latency</span>
                </div>
                <div className="bg-blue-50 p-2 rounded flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-sm">Enhanced Security</span>
                </div>
                <div className="bg-blue-50 p-2 rounded flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span className="text-sm">Modernized Stack</span>
                </div>
              </div>
            </div>
            
            {/* Additional Metrics and Highlights */}
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div className="bg-purple-50 p-3 rounded-lg text-center">
                <p className="text-sm">In Production</p>
                <p className="text-xl font-bold text-purple-800">58 Entities</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <p className="text-sm">Implementation</p>
                <p className="text-xl font-bold text-green-700">4 Months</p>
              </div>
            </div>
            
            <div className="mt-3 bg-gray-50 p-3 rounded">
              <h4 className="font-bold text-gray-700">Key Project Highlights:</h4>
              <ul className="text-sm text-gray-600 pl-4 mt-1">
                <li>• Eliminated legacy middleware costs</li>
                <li>• Improved system reliability</li>
                <li>• Standardized event handling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Data & Collaboration */}
        <div className="col-span-5 flex flex-col gap-6">
          {/* Domain Data */}
          <div className="bg-white rounded-xl shadow-lg flex-grow overflow-hidden">
            <div className="bg-indigo-600 text-white p-3">
              <h3 className="text-xl font-bold">Data Integration</h3>
            </div>
            <div className="flex flex-col h-full">
            <div className="p-3 flex-grow">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={dataDomainsChart}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="value"
                    label={({name, value}) => `${name}: ${value}`}
                  >
                    {dataDomainsChart.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
              <div className="p-3 bg-indigo-50">
                
              </div>
            </div>
          </div>
          
          {/* Team Collaboration */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-purple-600 text-white p-3">
              <h3 className="text-xl font-bold">Cross-Team Collaboration</h3>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-3 gap-2">
                {teams.map((team, index) => (
                  <div key={team} className="bg-purple-50 p-2 rounded-lg text-center border-l-4" style={{ borderColor: COLORS[index % COLORS.length] }}>
                    <p className="font-medium text-gray-800 text-sm">{team}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationSummary;
