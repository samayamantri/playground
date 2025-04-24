import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis, ComposedChart, Area } from 'recharts';

const NuSkinLatamDashboard = () => {
  // Key metrics summary
  const keyMetricsData = [
    { name: 'Total Sales', value: '$9.7M', change: '+18.56%', trend: 'positive' },
    { name: 'Total Orders', value: '51,145', change: '+11.69%', trend: 'positive' },
    { name: 'Total Units', value: '2,250,435', change: '-23.36%', trend: 'negative' },
    { name: 'Average Order Value', value: '$189.2', change: '+6.16%', trend: 'positive' },
    { name: 'Active Users', value: '361K', change: '+12.59%', trend: 'positive' },
    { name: 'New Affiliates', value: '3,789', change: '+11.67%', trend: 'positive' }
  ];
  
  // Country breakdown
  const countryData = [
    { name: 'Argentina', value: 5371305 },
    { name: 'Mexico', value: 2788060 },
    { name: 'Colombia', value: 624686 },
    { name: 'Other', value: 916949 }
  ];
  
  // Product performance
  const productPerformanceData = [
    { name: 'Collagen Products', value: 35, sales: 4.2, units: 869000 },
    { name: 'ageLOC LumiSpa', value: 22, sales: 2.1, units: 502000 },
    { name: 'Subscription Bundles', value: 18, sales: 1.7, units: 321000 },
    { name: 'Facial Care', value: 15, sales: 1.4, units: 275000 },
    { name: 'Other Products', value: 10, sales: 0.9, units: 283435 }
  ];
  
  // Correlation data
  const conversionVsAOVData = [
    { month: 'Mar 02', conversion: 25.8, aov: 180.5 },
    { month: 'Mar 09', conversion: 29.2, aov: 183.7 },
    { month: 'Mar 16', conversion: 25.3, aov: 184.9 },
    { month: 'Mar 23', conversion: 33.2, aov: 187.6 },
    { month: 'Mar 30', conversion: 32.5, aov: 189.2 }
  ];
  
  const affiliateVsSalesData = [
    { month: 'Mar 02', affiliates: 3432, sales: 8.5 },
    { month: 'Mar 09', affiliates: 3512, sales: 8.7 },
    { month: 'Mar 16', affiliates: 3625, sales: 9.1 },
    { month: 'Mar 23', affiliates: 3702, sales: 9.4 },
    { month: 'Mar 30', affiliates: 3789, sales: 9.7 }
  ];
  
  const userActivityVsOrdersData = [
    { month: 'Mar 02', users: 320, orders: 45 },
    { month: 'Mar 09', users: 334, orders: 47 },
    { month: 'Mar 16', users: 345, orders: 48 },
    { month: 'Mar 23', users: 352, orders: 49 },
    { month: 'Mar 30', users: 361, orders: 51 }
  ];
  
  // Performance comparison
  const metricComparisonData = [
    { metric: 'Sales Growth', value: 18.56 },
    { metric: 'User Growth', value: 12.59 },
    { metric: 'AOV Growth', value: 6.16 },
    { metric: 'Affiliate Growth', value: 11.67 },
    { metric: 'Cart Conversion Growth', value: 6.95 },
    { metric: 'Subscription Sales Growth', value: -19.71 },
    { metric: 'Units Growth', value: -23.36 }
  ];
  
  // Key correlations scatter plot data
  const correlationsData = [
    { x: 11.67, y: 18.56, z: 10, name: 'Affiliate Growth vs Sales Growth' },
    { x: 12.59, y: 11.69, z: 8, name: 'User Growth vs Order Growth' },
    { x: 6.95, y: 18.56, z: 7, name: 'Conversion Growth vs Sales Growth' },
    { x: -19.71, y: -23.36, z: 9, name: 'Subscription Sales vs Units' },
    { x: 6.16, y: 12.59, z: 6, name: 'AOV Growth vs User Growth' }
  ];
  
  // User behavior funnel
  const funnelData = [
    { stage: 'Home page view', value: 94.88 },
    { stage: 'Login', value: 76.33 },
    { stage: 'Product page view', value: 22.61 },
    { stage: 'View cart', value: 14.30 },
    { stage: 'Add to cart', value: 13.76 },
    { stage: 'Begin checkout', value: 11.55 },
    { stage: 'Purchase', value: 6.70 }
  ];
  
  // Top products by search interest
  const searchInterestData = [
    { name: 'Kit Collagen Esencial', value: 6463 },
    { name: 'Kit Collagen Optimo', value: 4313 },
    { name: 'Collagen', value: 3714 },
    { name: 'Colageno', value: 3521 },
    { name: 'LUmispa', value: 3386 }
  ];
  
  // Color scheme
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  // Custom tooltip for the correlation scatter chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p>X: {payload[0].value}%</p>
          <p>Y: {payload[1].value}%</p>
          <p>Correlation Strength: {payload[2].value}/10</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col w-full gap-8 p-6 bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Nu Skin LATAM E-Commerce Performance</h1>
        <p className="text-gray-600">Comprehensive Analysis | Data as of April 24, 2025</p>
      </div>
      
      {/* Key Metrics Overview */}
      <div className="grid grid-cols-3 gap-4">
        {keyMetricsData.map((metric, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">{metric.name}</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">{metric.value}</span>
              <span className={`text-xl font-medium ${metric.trend === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Geographic Distribution */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Sales by Country</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={countryData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {countryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${(value/1000000).toFixed(2)}M`, 'Sales']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Product Category Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={productPerformanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {productPerformanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Key Performance Metrics */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Key Performance Metrics (% Change)</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={metricComparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, 'Growth Rate']} />
              <Bar 
                dataKey="value" 
                name="% Change" 
                fill={(data) => data.value >= 0 ? '#3498db' : '#e74c3c'} 
                radius={[4, 4, 0, 0]}
              >
                {metricComparisonData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.value >= 0 ? '#3498db' : '#e74c3c'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Key Correlations */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Key Metric Correlations</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="X Growth %" 
                domain={[-25, 20]} 
                label={{ value: 'X Metric Growth %', position: 'bottom' }}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="Y Growth %" 
                domain={[-25, 20]} 
                label={{ value: 'Y Metric Growth %', angle: -90, position: 'left' }}
              />
              <ZAxis type="number" dataKey="z" range={[60, 200]} />
              <Tooltip content={<CustomTooltip />} />
              <Scatter name="Correlations" data={correlationsData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {correlationsData.map((correlation, index) => (
            <div key={index} className="text-xs p-2 bg-gray-100 rounded">
              <span className="font-semibold">{correlation.name}</span>
              <span className="block">Correlation: {correlation.z}/10</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* User Conversion Funnel */}
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
              <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Correlation Charts Grid */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-lg font-bold text-gray-800">Cart Conversion vs AOV</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={conversionVsAOVData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="conversion" name="Conversion %" stroke="#8884d8" />
                <Line yAxisId="right" type="monotone" dataKey="aov" name="Avg Order Value ($)" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-lg font-bold text-gray-800">Affiliates vs Sales</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={affiliateVsSalesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="affiliates" barSize={20} fill="#8884d8" name="Active Affiliates" />
                <Line yAxisId="right" type="monotone" dataKey="sales" stroke="#82ca9d" name="Sales ($M)" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-lg font-bold text-gray-800">Users vs Orders</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={userActivityVsOrdersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="users" fill="#8884d8" stroke="#8884d8" name="Active Users (K)" />
                <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#82ca9d" name="Orders (K)" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Search Interest */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Top Products by Search Interest</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={searchInterestData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" name="Search Count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Key Insights */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Key Insights & Recommendations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <h3 className="font-semibold text-blue-700">1. Collagen Products Drive Growth</h3>
            <p className="text-sm text-blue-600">Collagen products dominate search interest and sales in LATAM. The high correlation between collagen search terms and sales suggests product line expansion opportunities.</p>
          </div>
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <h3 className="font-semibold text-green-700">2. Affiliate Channel Effectiveness</h3>
            <p className="text-sm text-green-600">11.67% growth in affiliates correlates strongly with 18.56% sales growth. Each new affiliate drives approximately $2,560 in monthly sales, indicating high ROI for affiliate program investments.</p>
          </div>
          <div className="p-3 bg-purple-50 rounded border border-purple-200">
            <h3 className="font-semibold text-purple-700">3. Cart Conversion Focus Needed</h3>
            <p className="text-sm text-purple-600">Despite 94.88% home page views, only 13.76% add to cart and 6.70% complete purchase. Optimizing the product page to cart flow could significantly impact total sales.</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
            <h3 className="font-semibold text-yellow-700">4. Argentina Market Dominance</h3>
            <p className="text-sm text-yellow-600">Argentina contributes 55% of LATAM sales despite economic challenges. Targeted strategies needed for Mexico and Colombia to balance regional performance.</p>
          </div>
          <div className="p-3 bg-red-50 rounded border border-red-200">
            <h3 className="font-semibold text-red-700">5. Subscription Model Challenges</h3>
            <p className="text-sm text-red-600">19.71% decline in subscription sales amid overall growth indicates customer retention issues. Focus needed on subscription value proposition and experience.</p>
          </div>
          <div className="p-3 bg-indigo-50 rounded border border-indigo-200">
            <h3 className="font-semibold text-indigo-700">6. AOV Growth Opportunity</h3>
            <p className="text-sm text-indigo-600">6.16% AOV growth indicates successful upselling, but units decline of 23.36% suggests opportunity for order frequency optimization through targeted promotions.</p>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        Data Source: Nu Skin Global E-Commerce Power BI Dashboard | April 24, 2025
      </div>
    </div>
  );
};

export default NuSkinLatamDashboard;
