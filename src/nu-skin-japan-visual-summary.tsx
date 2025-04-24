import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';

const NuSkinDashboard = () => {
  // Data for the metrics comparison chart
  const salesVsUsersData = [
    { name: 'Sales', value: -60.45, color: '#e74c3c' },
    { name: 'Orders', value: -60.16, color: '#e74c3c' },
    { name: 'Units', value: -58.34, color: '#e74c3c' },
    { name: 'Active Users', value: 9.70, color: '#2ecc71' },
    { name: 'Returning Users', value: 6.12, color: '#2ecc71' },
    { name: 'Total Users', value: 3.56, color: '#2ecc71' },
  ];
  
  // Data for the affiliate metrics chart
  const affiliateData = [
    { name: 'New Affiliates', value: 1.03, color: '#3498db' },
    { name: 'Offers Created', value: 7.56, color: '#3498db' },
    { name: 'Stela Downloads', value: 0.93, color: '#3498db' },
    { name: 'Offers Shared', value: 2.89, color: '#3498db' },
  ];
  
  // Data for the subscription vs one-time sales chart
  const subscriptionData = [
    { name: 'Overall Sales', value: -60.45 },
    { name: 'Subscription Sales', value: -19.71 },
  ];
  
  // Data for the user behavior concerns
  const userBehaviorData = [
    { name: 'Cart Abandonment', value: 85.42, change: "+0.39%" },
    { name: 'Bounce Rate', value: 17.06, change: "+8.84%" },
    { name: 'Cart Conversion', value: 14.58, change: "-1.81%" },
  ];
  
  // Data for breakdown of sales by product type
  const salesByProductType = [
    { name: 'Normal', value: 27.43 },
    { name: 'Bundle', value: 72.57 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F'];
  
  // Time trend data
  const trendData = [
    { month: 'Jan', sales: 4.2, users: 410 },
    { month: 'Feb', sales: 3.8, users: 425 },
    { month: 'Mar', sales: 2.9, users: 438 },
    { month: 'Apr', sales: 2.4, users: 441 },
  ];
  
  // Conversion funnel data
  const funnelData = [
    { stage: 'Home Page View', value: 89.32 },
    { stage: 'Login', value: 79.92 },
    { stage: 'Product Page View', value: 35.59 },
    { stage: 'View Cart', value: 23.64 },
    { stage: 'Add to Cart', value: 12.90 },
    { stage: 'Begin Checkout', value: 8.26 },
  ];

  return (
    <div className="flex flex-col w-full gap-8 p-6 bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Nu Skin Japan E-Commerce Performance</h1>
        <p className="text-gray-600">Visual Summary | Data as of April 24, 2025</p>
      </div>
      
      {/* Key Metrics Overview Card */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Sales</h3>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold">$6.4M</span>
            <span className="text-xl font-medium text-red-500">-60.45%</span>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Active Users</h3>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold">441K</span>
            <span className="text-xl font-medium text-green-500">+9.70%</span>
          </div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Affiliates</h3>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-bold">686</span>
            <span className="text-xl font-medium text-green-500">+1.03%</span>
          </div>
        </div>
      </div>
      
      {/* Main Insight 1: Sales vs Users Disconnect */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Key Insight 1: Sales vs User Metrics Disconnect</h2>
        <p className="mb-4 text-gray-600">Despite growing user numbers, sales metrics show significant decline</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={salesVsUsersData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Percent Change (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => [`${value.toFixed(2)}%`, 'Change']} />
              <Bar dataKey="value" name="% Change">
                {salesVsUsersData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Main Insight 2: Affiliate Program Strength */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Key Insight 2: Affiliate Program Strength</h2>
        <p className="mb-4 text-gray-600">The affiliate program shows positive growth across all metrics despite overall sales challenges</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={affiliateData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Percent Change (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => [`${value.toFixed(2)}%`, 'Change']} />
              <Bar dataKey="value" name="% Change" fill="#3498db" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Main Insight 3: Subscription vs Overall Sales */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Key Insight 3: Subscription Model Resilience</h2>
        <p className="mb-4 text-gray-600">Subscription sales are declining less severely than overall sales</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={subscriptionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Percent Change (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => [`${value.toFixed(2)}%`, 'Change']} />
              <Bar dataKey="value" fill="#9b59b6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Main Insight 4: User Behavior Concerns */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Key Insight 4: User Behavior Concerns</h2>
        <p className="mb-4 text-gray-600">High cart abandonment and bounce rates indicate conversion issues</p>
        <div className="grid grid-cols-3 gap-6 h-36">
          {userBehaviorData.map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
              <h3 className="text-gray-700">{item.name}</h3>
              <div className="text-2xl font-bold">{item.value}%</div>
              <div className={`text-sm ${item.change.startsWith('+') ? 'text-red-500' : 'text-green-500'}`}>
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Insight 5: Product Performance */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Sales by Product Type</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesByProductType}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {salesByProductType.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value.toFixed(2)}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold text-gray-800">User Conversion Funnel</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={funnelData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="stage" type="category" width={120} />
                <Tooltip formatter={(value) => [`${value}%`, 'Conversion Rate']} />
                <Bar dataKey="value" fill="#f39c12" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Trend Analysis */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Sales vs Users Trend</h2>
        <p className="mb-4 text-gray-600">Inverse relationship between sales decline and user growth</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="sales" name="Sales ($ Millions)" stroke="#8884d8" />
              <Line yAxisId="right" type="monotone" dataKey="users" name="Active Users (K)" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Strategic Recommendations */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Strategic Recommendations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <h3 className="font-semibold text-blue-700">1. Focus on Conversion Optimization</h3>
            <p className="text-sm text-blue-600">Address the 85.42% cart abandonment rate through UX improvements and checkout optimization</p>
          </div>
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <h3 className="font-semibold text-green-700">2. Leverage Affiliate Strength</h3>
            <p className="text-sm text-green-600">Expand the affiliate program which shows growth despite overall sales decline</p>
          </div>
          <div className="p-3 bg-purple-50 rounded border border-purple-200">
            <h3 className="font-semibold text-purple-700">3. Emphasize Subscription Model</h3>
            <p className="text-sm text-purple-600">Focus on the more resilient subscription business with 19.71% vs 60.45% decline</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
            <h3 className="font-semibold text-yellow-700">4. Product Portfolio Review</h3>
            <p className="text-sm text-yellow-600">Analyze why top products are underperforming with a 57.69% sales decline</p>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        Data Source: Nu Skin Global E-Commerce Power BI Dashboard | April 24, 2025
      </div>
    </div>
  );
};

export default NuSkinDashboard;
