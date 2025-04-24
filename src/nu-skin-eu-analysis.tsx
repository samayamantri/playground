import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart, Area } from 'recharts';

const NuSkinEuropeanAnalysis = () => {
  // Key regional comparison data
  const regionalComparisonData = [
    { metric: 'Total Sales Growth (%)', northAmerica: 4.92, europe: 11.16, japan: -60.45, latam: 18.56 },
    { metric: 'Active Users Growth (%)', northAmerica: 26.68, europe: 2.89, japan: 9.70, latam: 12.59 },
    { metric: 'Affiliate Growth (%)', northAmerica: 46.06, europe: -6.89, japan: 1.03, latam: 11.67 },
    { metric: 'Cart Conversion Rate (%)', northAmerica: 24.15, europe: 14.89, japan: 14.58, latam: 30.29 },
    { metric: 'Average Order Value ($)', northAmerica: 140.3, europe: 170.6, japan: 146.8, latam: 189.2 },
    { metric: 'Total Units Growth (%)', northAmerica: -10.78, europe: 4.58, japan: -58.34, latam: -23.36 }
  ];
  
  // European region key metrics
  const euKeyMetrics = [
    { name: 'Total Sales', value: '$14.2M', change: '+11.16%', trend: 'positive' },
    { name: 'Total Orders', value: '83,247', change: '+3.82%', trend: 'positive' },
    { name: 'Total Units', value: '247,434', change: '+4.58%', trend: 'positive' },
    { name: 'Average Order Value', value: '$170.6', change: '+7.07%', trend: 'positive' },
    { name: 'Active Users', value: '574K', change: '+2.89%', trend: 'positive' },
    { name: 'New Affiliates', value: '2,377', change: '-6.89%', trend: 'negative' }
  ];
  
  // European country breakdown
  const countryData = [
    { name: 'Germany', value: 2414148 },
    { name: 'France', value: 2161778 },
    { name: 'Austria', value: 1574405 },
    { name: 'UK', value: 1100000 },
    { name: 'Spain', value: 950000 },
    { name: 'Others', value: 6000077 }
  ];
  
  // Top product categories by sales
  const topProductsData = [
    { name: 'AP 24 Whitening Toothpaste', value: 9570, sales: 204062 },
    { name: 'Collagen+ ADR (BE/DE/FR)', value: 9317, sales: 828006 },
    { name: 'Collagen+ ADR (GB/ES/CZ)', value: 7297, sales: 742730 },
    { name: 'ageLOC LumiSpa', value: 6739, sales: 306049 },
    { name: 'ageLOC TF Peptide Retinol', value: 5006, sales: 433835 }
  ];
  
  // User journey funnel
  const userJourneyData = [
    { stage: 'Home page view', value: 94.14 },
    { stage: 'Login', value: 78.51 },
    { stage: 'Product page view', value: 16.31 },
    { stage: 'Add to cart', value: 10.06 },
    { stage: 'View cart', value: 9.99 },
    { stage: 'Begin checkout', value: 6.80 },
    { stage: 'Purchase', value: 4.36 }
  ];
  
  // Regional subscription metrics comparison
  const subscriptionComparisonData = [
    { metric: 'Subscription Sales Change (%)', northAmerica: -19.71, europe: -19.71, japan: -19.71, latam: -19.71 },
    { metric: 'Subscription Orders Change (%)', northAmerica: -21.03, europe: -21.03, japan: -21.03, latam: -21.03 },
    { metric: 'Avg Value per Subscription ($)', northAmerica: 149.8, europe: 149.8, japan: 149.8, latam: 149.8 },
    { metric: 'Subscribers Change (%)', northAmerica: -20.85, europe: -20.85, japan: -20.85, latam: -20.85 }
  ];
  
  // Monthly trend data
  const monthlyTrendData = [
    { month: 'Mar 02', sales: 13.1, aov: 164.2, conversion: 14.52 },
    { month: 'Mar 09', sales: 13.6, aov: 166.8, conversion: 15.73 },
    { month: 'Mar 16', sales: 13.8, aov: 168.1, conversion: 14.13 },
    { month: 'Mar 23', sales: 14.0, aov: 169.4, conversion: 16.09 },
    { month: 'Mar 30', sales: 14.2, aov: 170.6, conversion: 14.42 }
  ];
  
  // First-time vs returning user metrics
  const firstTimeUserData = [
    { name: 'First-Time Sales', value: '$2.5M', change: '+22.84%' },
    { name: 'First-Time Units', value: '30K', change: '+14.43%' },
    { name: 'Returning User Sales', value: '$11.7M', change: '+9.12%' },
    { name: 'Returning Units', value: '217K', change: '+3.36%' }
  ];
  
  // Color scheme
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
  
  // Regional strength/weakness data
  const strengthsWeaknessesData = [
    { category: 'EU Strengths', points: [
      "Strong AOV at $170.60 (higher than NA and Japan)",
      "Positive growth across all sales metrics",
      "Strong collagen and oral care categories",
      "Balanced country distribution reducing risk",
      "High login completion rate (78.51%)"
    ]},
    { category: 'EU Weaknesses', points: [
      "Declining affiliate program (-6.89%)",
      "Low cart conversion rate (14.89%)",
      "High bounce rate (34.98%)",
      "Subscription business declining (-19.71%)",
      "Product page to cart conversion gap"
    ]},
    { category: 'EU Opportunities', points: [
      "Affiliate program revitalization",
      "Expand toothpaste line (AP 24 success)",
      "Optimize product page conversion",
      "Cross-sell collagen with other categories",
      "Reduce dependency on one-time purchases"
    ]},
    { category: 'EU Threats', points: [
      "Continued subscription business decline",
      "Increasing cart abandonment rate",
      "Potential market saturation in core products",
      "Regional economic uncertainties",
      "Conversion rate decline (-1.06%)"
    ]}
  ];

  return (
    <div className="flex flex-col w-full gap-8 p-6 bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Nu Skin European Region Performance Analysis</h1>
        <p className="text-gray-600">Comparative Regional Analysis | Data as of April 24, 2025</p>
      </div>
      
      {/* Key Metrics Overview */}
      <div className="grid grid-cols-3 gap-4">
        {euKeyMetrics.map((metric, index) => (
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
      
      {/* Regional Comparison */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Regional Performance Comparison</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={regionalComparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barSize={20}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" angle={-45} textAnchor="end" height={120} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="northAmerica" name="North America" fill="#0088FE" />
              <Bar dataKey="europe" name="Europe" fill="#00C49F" />
              <Bar dataKey="japan" name="Japan" fill="#FFBB28" />
              <Bar dataKey="latam" name="LATAM" fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
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
          <h2 className="mb-4 text-xl font-bold text-gray-800">Top Products by Search Volume</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={topProductsData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Search Count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Monthly Trends */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Monthly Performance Trends</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <YAxis yAxisId="far-right" orientation="right" stroke="#ffc658" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="sales" name="Sales ($M)" stroke="#8884d8" />
              <Line yAxisId="right" type="monotone" dataKey="aov" name="Avg Order Value ($)" stroke="#82ca9d" />
              <Line yAxisId="far-right" type="monotone" dataKey="conversion" name="Conversion Rate (%)" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* User Journey Funnel */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">User Conversion Funnel</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={userJourneyData}
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
      
      {/* Subscription Metrics Comparison */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Subscription Metrics - Regional Comparison</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={subscriptionComparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barSize={20}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="northAmerica" name="North America" fill="#0088FE" />
              <Bar dataKey="europe" name="Europe" fill="#00C49F" />
              <Bar dataKey="japan" name="Japan" fill="#FFBB28" />
              <Bar dataKey="latam" name="LATAM" fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* First-Time vs Returning Users */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">First-Time vs. Returning User Performance</h2>
        <div className="grid grid-cols-2 gap-4">
          {firstTimeUserData.map((metric, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">{metric.name}</h3>
              <div className="flex items-end justify-between mt-2">
                <span className="text-xl font-bold">{metric.value}</span>
                <span className={`text-lg font-medium ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Regional SWOT Analysis */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">European Region SWOT Analysis</h2>
        <div className="grid grid-cols-2 gap-4">
          {strengthsWeaknessesData.map((section, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              index === 0 ? 'bg-green-50 border border-green-200' : 
              index === 1 ? 'bg-red-50 border border-red-200' : 
              index === 2 ? 'bg-blue-50 border border-blue-200' : 
              'bg-yellow-50 border border-yellow-200'
            }`}>
              <h3 className={`font-bold mb-2 ${
                index === 0 ? 'text-green-700' : 
                index === 1 ? 'text-red-700' : 
                index === 2 ? 'text-blue-700' : 
                'text-yellow-700'
              }`}>{section.category}</h3>
              <ul className="list-disc pl-4">
                {section.points.map((point, i) => (
                  <li key={i} className={`text-sm ${
                    index === 0 ? 'text-green-600' : 
                    index === 1 ? 'text-red-600' : 
                    index === 2 ? 'text-blue-600' : 
                    'text-yellow-600'
                  }`}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Key Strategic Recommendations */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Strategic Recommendations for European Region</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-purple-50 rounded border border-purple-200">
            <h3 className="font-semibold text-purple-700">1. Affiliate Program Revitalization</h3>
            <p className="text-sm text-purple-600">Reverse the 6.89% decline in affiliates by implementing tiered incentives and specialized training programs tailored to European market nuances.</p>
          </div>
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <h3 className="font-semibold text-green-700">2. Expand AP 24 Toothpaste Line</h3>
            <p className="text-sm text-green-600">Leverage the remarkable success of AP 24 Whitening Toothpaste (top search product) by developing complementary oral care products specifically for European preferences.</p>
          </div>
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <h3 className="font-semibold text-blue-700">3. Optimize Product Page Conversion</h3>
            <p className="text-sm text-blue-600">Address the significant drop from 78.51% login rate to 16.31% product page view by implementing personalized product recommendations and simplified navigation.</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
            <h3 className="font-semibold text-yellow-700">4. Subscription Model Enhancement</h3>
            <p className="text-sm text-yellow-600">Counter the 19.71% subscription sales decline by introducing flexible frequency options and subscription-exclusive benefits that appeal to European consumers.</p>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        Data Source: Nu Skin Global E-Commerce Power BI Dashboard | April 24, 2025
      </div>
    </div>
  );
};

export default NuSkinEuropeanAnalysis;
