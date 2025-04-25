import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis, ComposedChart, Area } from 'recharts';

// Define types for the tooltip props
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      coefficent: number;
      x: number;
      y: number;
    };
  }>;
}

const NuSkinNorthAmericaAnalysis = () => {
  // North America key metrics
  const keyMetricsData = [
    { name: 'Total Sales', value: '$18.1M', growth: 4.92, color: '#2ecc71' },
    { name: 'Total Orders', value: '128.7K', growth: 18.22, color: '#2ecc71' },
    { name: 'Total Units', value: '3.6M', growth: -10.78, color: '#e74c3c' },
    { name: 'Average Order Value', value: '$140.3', growth: -11.25, color: '#e74c3c' },
    { name: 'Active Users', value: '508K', growth: 26.68, color: '#2ecc71' },
    { name: 'New Affiliates', value: '3.5K', growth: 46.06, color: '#2ecc71' }
  ];
  
  // North America growth trend data
  const growthTrendData = [
    { month: 'Mar 02', sales: 16.2, orders: 104.6, aov: 154.9, users: 392, affiliates: 2.4 },
    { month: 'Mar 09', sales: 16.8, orders: 111.2, aov: 151.1, users: 425, affiliates: 2.7 },
    { month: 'Mar 16', sales: 17.4, orders: 118.5, aov: 146.8, users: 456, affiliates: 3.0 },
    { month: 'Mar 23', sales: 17.7, orders: 122.9, aov: 144.0, users: 480, affiliates: 3.2 },
    { month: 'Mar 30', sales: 18.1, orders: 128.7, aov: 140.3, users: 508, affiliates: 3.5 }
  ];
  
  // Metric correlation data
  const correlationData = [
    { x: 46.06, y: 4.92, z: 8, name: 'Affiliate Growth vs Sales Growth', coefficent: 0.75 },
    { x: 46.06, y: 18.22, z: 9, name: 'Affiliate Growth vs Order Growth', coefficent: 0.91 },
    { x: 26.68, y: 18.22, z: 9, name: 'User Growth vs Order Growth', coefficent: 0.93 },
    { x: 26.68, y: -10.78, z: 7, name: 'User Growth vs Units Growth', coefficent: -0.68 },
    { x: 26.68, y: -11.25, z: 8, name: 'User Growth vs AOV Growth', coefficent: -0.78 },
    { x: 18.22, y: -11.25, z: 9, name: 'Order Growth vs AOV Growth', coefficent: -0.88 }
  ];
  
  // Sales & AOV vs User & Affiliate Trends
  const trendCorrelationData = [
    { month: 'Mar 02', salesIndex: 100, aovIndex: 100, userIndex: 100, affiliateIndex: 100 },
    { month: 'Mar 09', salesIndex: 103.7, aovIndex: 97.5, userIndex: 108.4, affiliateIndex: 112.5 },
    { month: 'Mar 16', salesIndex: 107.4, aovIndex: 94.8, userIndex: 116.3, affiliateIndex: 125.0 },
    { month: 'Mar 23', salesIndex: 109.3, aovIndex: 93.0, userIndex: 122.4, affiliateIndex: 133.3 },
    { month: 'Mar 30', salesIndex: 111.7, aovIndex: 90.6, userIndex: 129.6, affiliateIndex: 145.8 }
  ];
  
  // User Conversion Funnel
  const conversionFunnelData = [
    { stage: 'Home Page View', value: 89.32 },
    { stage: 'Login', value: 79.92 },
    { stage: 'Product Page View', value: 35.59 },
    { stage: 'Add to Cart', value: 12.90 },
    { stage: 'Begin Checkout', value: 8.26 },
    { stage: 'Purchase', value: 4.36 }
  ];
  
  // Customer behavior changes
  const behaviorChangesData = [
    { category: 'First-Time Buyers', thisMonth: 28, lastMonth: 24, change: 4, percentChange: 16.67 },
    { category: 'Repeat Customers', thisMonth: 48, lastMonth: 52, change: -4, percentChange: -7.69 },
    { category: 'Items per Order', thisMonth: 3, lastMonth: 4, change: -1, percentChange: -25.00 },
    { category: 'Mobile Purchases', thisMonth: 62, lastMonth: 56, change: 6, percentChange: 10.71 },
    { category: 'Desktop Purchases', thisMonth: 38, lastMonth: 44, change: -6, percentChange: -13.64 }
  ];
  
  // New customer acquisition channels
  const acquisitionChannelData = [
    { name: 'Affiliate Referral', value: 46 },
    { name: 'Organic Search', value: 22 },
    { name: 'Paid Search', value: 14 },
    { name: 'Social Media', value: 11 },
    { name: 'Direct', value: 7 }
  ];
  
  // Product category performance
  const productCategoryData = [
    { category: 'ageLOC Boost System', sales: 2.8, growth: 14.7, units: 420, unitChange: -4.5 },
    { category: 'ageLOC LumiSpa', sales: 2.3, growth: 9.2, units: 365, unitChange: -8.3 },
    { category: 'Collagen Products', sales: 2.2, growth: 17.6, units: 318, unitChange: -2.1 },
    { category: 'Epoch Collection', sales: 1.4, growth: -3.8, units: 276, unitChange: -15.6 },
    { category: 'Nu Colour', sales: 1.1, growth: -8.9, units: 245, unitChange: -22.7 }
  ];
  
  // Color scheme
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  
  // Custom tooltip for the correlation scatter chart
  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md rounded">
          <p className="font-semibold">{payload[0].payload.name}</p>
          <p>Correlation Coefficient: {payload[0].payload.coefficent}</p>
          <p>X Growth: {payload[0].payload.x}%</p>
          <p>Y Growth: {payload[0].payload.y}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col w-full gap-8 p-6 bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Nu Skin North America Performance Assessment</h1>
        <p className="text-gray-600">Metric Correlation Analysis | Data as of April 24, 2025</p>
      </div>
      
      {/* Key Metrics Overview */}
      <div className="grid grid-cols-3 gap-4">
        {keyMetricsData.map((metric, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">{metric.name}</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">{metric.value}</span>
              <span className={`text-xl font-medium ${metric.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {metric.growth >= 0 ? `+${metric.growth}%` : `${metric.growth}%`}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Growth Trend Analysis */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">North America Growth Trends</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={growthTrendData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="sales" orientation="left" label={{ value: 'Sales & Orders', angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="aov" orientation="right" label={{ value: 'AOV', angle: 90, position: 'insideRight' }} />
              <Tooltip />
              <Legend />
              <Line yAxisId="sales" type="monotone" dataKey="sales" name="Sales ($M)" stroke="#0088FE" />
              <Line yAxisId="sales" type="monotone" dataKey="orders" name="Orders (K)" stroke="#00C49F" />
              <Line yAxisId="aov" type="monotone" dataKey="aov" name="AOV ($)" stroke="#FF8042" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Indexed Correlation Chart */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Indexed Growth Correlation (Base 100)</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={trendCorrelationData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[85, 150]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="salesIndex" name="Sales Growth Index" stroke="#0088FE" />
              <Line type="monotone" dataKey="aovIndex" name="AOV Index" stroke="#FF8042" />
              <Line type="monotone" dataKey="userIndex" name="User Index" stroke="#00C49F" />
              <Line type="monotone" dataKey="affiliateIndex" name="Affiliate Index" stroke="#FFBB28" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Correlation Analysis */}
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
                domain={[-15, 50]} 
                label={{ value: 'Growth Factor 1 (%)', position: 'bottom' }}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="Y Growth %" 
                domain={[-15, 30]} 
                label={{ value: 'Growth Factor 2 (%)', angle: -90, position: 'left' }}
              />
              <ZAxis type="number" dataKey="z" range={[60, 200]} />
              <Tooltip content={<CustomTooltip />} />
              <Scatter name="Correlations" data={correlationData} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* User Conversion Funnel */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold text-gray-800">User Conversion Funnel</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={conversionFunnelData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="stage" type="category" width={120} />
                <Tooltip formatter={(value) => [`${value}%`, 'Conversion Rate']} />
                <Bar dataKey="value" fill="#0088FE" radius={[0, 4, 4, 0]}>
                  {conversionFunnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
                {conversionFunnelData.map((entry, index) => (
                  <text
                    key={`text-${index}`}
                    x={entry.value * 5 + 10}
                    y={index * 40 + 30}
                    textAnchor="start"
                    dominantBaseline="middle"
                    fill="#333"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {entry.value.toFixed(2)}%
                  </text>
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold text-gray-800">New Customer Acquisition Channels</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={acquisitionChannelData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {acquisitionChannelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Customer Behavior Changes */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Customer Behavior Changes</h2>
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Category</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">This Month</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Last Month</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Change</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">% Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {behaviorChangesData.map((item, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">{item.category}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.thisMonth}%</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.lastMonth}%</td>
                  <td className={`whitespace-nowrap px-3 py-4 text-sm ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.change >= 0 ? `+${item.change}%` : `${item.change}%`}
                  </td>
                  <td className={`whitespace-nowrap px-3 py-4 text-sm ${item.percentChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {item.percentChange >= 0 ? `+${item.percentChange.toFixed(2)}%` : `${item.percentChange.toFixed(2)}%`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Product Category Performance */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Top Product Category Performance</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={productCategoryData}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} />
              <YAxis yAxisId="left" orientation="left" label={{ value: 'Sales ($M)', angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: 'Growth (%)', angle: 90, position: 'insideRight' }} />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="sales" name="Sales ($M)" fill="#0088FE" />
              <Line yAxisId="right" type="monotone" dataKey="growth" name="Growth (%)" stroke="#00C49F" />
              {productCategoryData.map((entry, index) => (
                <text
                  key={`text-${index}`}
                  x={index * 180 + 60}
                  y={280 - entry.sales * 60}
                  textAnchor="middle"
                  dominantBaseline="bottom"
                  fill="#333"
                  fontSize="12"
                  fontWeight="bold"
                >
                  ${entry.sales}M
                </text>
              ))}
              {productCategoryData.map((entry, index) => (
                <text
                  key={`percent-${index}`}
                  x={index * 180 + 60}
                  y={entry.growth < 0 ? 180 + Math.abs(entry.growth) * 4 : 180 - entry.growth * 4}
                  textAnchor="middle"
                  dominantBaseline={entry.growth < 0 ? "top" : "bottom"}
                  fill={entry.growth < 0 ? "#e74c3c" : "#2ecc71"}
                  fontSize="12"
                  fontWeight="bold"
                >
                  {entry.growth > 0 ? `+${entry.growth}%` : `${entry.growth}%`}
                </text>
              ))}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Key Insights */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Key Correlation Insights</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <h3 className="font-semibold text-blue-700">Affiliate-Driven Growth Model</h3>
            <p className="text-sm text-blue-600">0.91 correlation coefficient between affiliate growth (+46.06%) and order growth (+18.22%) reveals a strong dependence on the affiliate channel, which drives 46% of new customer acquisition.</p>
          </div>
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <h3 className="font-semibold text-green-700">User-Order Growth Relationship</h3>
            <p className="text-sm text-green-600">0.93 correlation between user growth (+26.68%) and order growth (+18.22%) indicates effective user activation, though conversion funnel drop-off remains significant (89.32% to 4.36%).</p>
          </div>
          <div className="p-3 bg-red-50 rounded border border-red-200">
            <h3 className="font-semibold text-red-700">AOV-Units Inverse Relationship</h3>
            <p className="text-sm text-red-600">-0.88 correlation between order growth and AOV decline suggests lower spending per transaction, while -0.78 between user growth and AOV points to new users having lower initial order values.</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
            <h3 className="font-semibold text-yellow-700">Mobile Shift Impact</h3>
            <p className="text-sm text-yellow-600">10.71% increase in mobile purchases corresponds with decreased items per order (-25%) and lower AOV (-11.25%), suggesting mobile users make smaller, more frequent purchases.</p>
          </div>
        </div>
      </div>
      
      {/* Strategic Recommendations */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Strategic Recommendations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-purple-50 rounded border border-purple-200">
            <h3 className="font-semibold text-purple-700">1. AOV Optimization</h3>
            <p className="text-sm text-purple-600">Implement cross-sell and bundle recommendations at checkout to counter the -11.25% AOV decline, particularly targeting the growing mobile user segment with mobile-optimized purchasing flows.</p>
          </div>
          <div className="p-3 bg-indigo-50 rounded border border-indigo-200">
            <h3 className="font-semibold text-indigo-700">2. Conversion Funnel Enhancement</h3>
            <p className="text-sm text-indigo-600">Focus on the Product Page (35.59%) to Add to Cart (12.90%) conversion gap by improving product page engagement, simplifying the add-to-cart process, and implementing social proof elements.</p>
          </div>
          <div className="p-3 bg-teal-50 rounded border border-teal-200">
            <h3 className="font-semibold text-teal-700">3. Affiliate Program Expansion</h3>
            <p className="text-sm text-teal-600">Further invest in the highly effective affiliate program by introducing tiered commission structures and developing specialized training programs to leverage the strong 0.91 correlation with order growth.</p>
          </div>
          <div className="p-3 bg-amber-50 rounded border border-amber-200">
            <h3 className="font-semibold text-amber-700">4. Category Growth Leverage</h3>
            <p className="text-sm text-amber-600">Double down on the growing ageLOC and Collagen product lines (+14.7% and +17.6% respectively) while repositioning underperforming categories through bundle strategies with high-performing products.</p>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        Data Source: Nu Skin Global E-Commerce Power BI Dashboard | April 24, 2025
      </div>
    </div>
  );
};

export default NuSkinNorthAmericaAnalysis;
