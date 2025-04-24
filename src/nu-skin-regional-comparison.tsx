import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const NuSkinRegionalComparison = () => {
  // Regional comparison data
  const regionalComparisonData = [
    { metric: 'Total Sales ($M)', northAmerica: 18.1, japan: 6.4, naDiff: "+182.8%" },
    { metric: 'Total Orders (K)', northAmerica: 128.7, japan: 43.9, naDiff: "+193.2%" },
    { metric: 'Total Units (K)', northAmerica: 3625.3, japan: 246.1, naDiff: "+1372.7%" },
    { metric: 'Avg Order Value ($)', northAmerica: 140.3, japan: 146.8, naDiff: "-4.4%" },
    { metric: 'Cart Conversion (%)', northAmerica: 24.15, japan: 14.58, naDiff: "+65.6%" },
    { metric: 'Cart Abandonment (%)', northAmerica: 75.85, japan: 85.42, naDiff: "-11.2%" }
  ];
  
  // Growth trends comparison
  const growthComparisonData = [
    { metric: 'Total Sales', northAmerica: 4.92, japan: -60.45 },
    { metric: 'Total Orders', northAmerica: 18.22, japan: -60.16 },
    { metric: 'Total Units', northAmerica: -10.78, japan: -58.34 },
    { metric: 'Active Users', northAmerica: 26.68, japan: 9.70 },
    { metric: 'New Affiliates', northAmerica: 46.06, japan: 1.03 },
    { metric: 'Subscription Sales', northAmerica: -19.71, japan: -19.71 }
  ];
  
  // Subscription metrics comparison
  const subscriptionComparisonData = [
    { metric: 'Total Subscription Sales ($M)', northAmerica: 35.3, japan: 35.3 },
    { metric: 'Subscription Orders (K)', northAmerica: 235.9, japan: 235.9 },
    { metric: 'Avg Items per Subscription', northAmerica: 4, japan: 4 },
    { metric: 'Avg Value per Subscription ($)', northAmerica: 149.8, japan: 149.8 },
    { metric: 'Total Subscribers (K)', northAmerica: 196.9, japan: 196.9 }
  ];
  
  // User metrics comparison
  const userMetricsComparisonData = [
    { metric: 'Monthly Active Users (K)', northAmerica: 508, japan: 441 },
    { metric: 'Monthly Returning Users (K)', northAmerica: 382, japan: 437 },
    { metric: 'Total Users (K)', northAmerica: 392, japan: 370 },
    { metric: 'Bounce Rate (%)', northAmerica: 29.71, japan: 17.06 }
  ];
  
  // Affiliate metrics comparison
  const affiliateComparisonData = [
    { metric: 'New Affiliates (K)', northAmerica: 3.536, japan: 0.686 },
    { metric: 'Total Offers Created (K)', northAmerica: 35.972, japan: 3.646 },
    { metric: 'Stela Downloads (K)', northAmerica: 6.457, japan: 2.959 },
    { metric: 'Total Offers Shared (K)', northAmerica: 84.507, japan: 7.610 }
  ];
  
  // Product metrics comparison
  const productComparisonData = [
    { metric: 'Total Product Sales ($M)', northAmerica: 17.7, japan: 6.4 },
    { metric: 'Average Items per Order', northAmerica: 28, japan: 6 },
    { metric: 'Top 10 Unit Contribution (K)', northAmerica: 3000, japan: 80 },
    { metric: 'Top 10 Sales Generated ($M)', northAmerica: 4.3, japan: 1.9 }
  ];

  // Radar chart data
  const radarChartData = [
    { subject: 'Sales Growth', northAmerica: 4.92, japan: -60.45, fullMark: 100 },
    { subject: 'User Growth', northAmerica: 26.68, japan: 9.70, fullMark: 100 },
    { subject: 'Affiliate Growth', northAmerica: 46.06, japan: 1.03, fullMark: 100 },
    { subject: 'Cart Conversion', northAmerica: 24.15, japan: 14.58, fullMark: 100 },
    { subject: 'AOV', northAmerica: 140.3, japan: 146.8, fullMark: 150 },
    { subject: 'Subscription Value', northAmerica: 149.8, japan: 149.8, fullMark: 150 }
  ];
  
  // User funnel comparison
  const funnelComparisonNA = [
    { stage: 'Login', value: 63.83 },
    { stage: 'Home Page View', value: 55.10 },
    { stage: 'View Cart', value: 17.64 },
    { stage: 'Product Page View', value: 16.97 },
    { stage: 'Add to Cart', value: 15.47 },
    { stage: 'Begin Checkout', value: 4.95 },
    { stage: 'Purchase', value: 2.73 }
  ];
  
  const funnelComparisonJP = [
    { stage: 'Home Page View', value: 89.32 },
    { stage: 'Login', value: 79.92 },
    { stage: 'Product Page View', value: 35.59 },
    { stage: 'View Cart', value: 23.64 },
    { stage: 'Add to Cart', value: 12.90 },
    { stage: 'Begin Checkout', value: 8.26 },
    { stage: 'Purchase', value: 2.73 }
  ];
  
  // SWOT Analysis based on regional comparison
  const swotAnalysis = [
    { 
      category: "Strengths (North America)", 
      points: [
        "Strong sales growth (+4.92%) vs Japan decline",
        "Higher cart conversion rate (24.15%)",
        "Exceptional affiliate program growth (+46.06%)",
        "Robust user growth (+26.68%)"
      ] 
    },
    { 
      category: "Weaknesses (North America)", 
      points: [
        "Higher bounce rate (29.71% vs 17.06%)",
        "Lower average order value ($140.3 vs $146.8)",
        "Declining units sold (-10.78%)",
        "Subscription sales declining (-19.71%)"
      ] 
    },
    { 
      category: "Opportunities", 
      points: [
        "Apply NA affiliate strategy to boost Japan program",
        "Share conversion optimization techniques from NA to JP",
        "Leverage product bundling success in both regions",
        "Cross-promote top performing products between regions"
      ] 
    },
    { 
      category: "Threats", 
      points: [
        "Continued decline in Japan market affecting global metrics",
        "Increasing cart abandonment in both regions",
        "Declining subscription metrics across both markets",
        "Product performance trends showing weakness in both regions"
      ] 
    }
  ];

  return (
    <div className="flex flex-col w-full gap-8 p-6 bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Nu Skin Regional Performance: North America vs Japan</h1>
        <p className="text-gray-600">Comparative Analysis | Data as of April 24, 2025</p>
      </div>
      
      {/* Regional Performance Comparison */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Key Metrics Comparison</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={regionalComparisonData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="metric" type="category" width={150} />
              <Tooltip />
              <Legend />
              <Bar dataKey="northAmerica" name="North America" fill="#3498db" />
              <Bar dataKey="japan" name="Japan" fill="#e74c3c" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Growth Rate Comparison */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Growth Rate Comparison (%)</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={growthComparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="northAmerica" name="North America" fill="#3498db" />
              <Bar dataKey="japan" name="Japan" fill="#e74c3c" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Radar Chart - Overall Performance */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Overall Performance Radar</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="North America" dataKey="northAmerica" stroke="#3498db" fill="#3498db" fillOpacity={0.6} />
              <Radar name="Japan" dataKey="japan" stroke="#e74c3c" fill="#e74c3c" fillOpacity={0.6} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* User Funnel Comparison */}
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold text-gray-800">North America User Funnel</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={funnelComparisonNA}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="stage" type="category" width={120} />
                <Tooltip formatter={(value) => [`${value}%`, 'Conversion Rate']} />
                <Bar dataKey="value" name="Conversion %" fill="#3498db" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Japan User Funnel</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={funnelComparisonJP}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="stage" type="category" width={120} />
                <Tooltip formatter={(value) => [`${value}%`, 'Conversion Rate']} />
                <Bar dataKey="value" name="Conversion %" fill="#e74c3c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Affiliate Performance Comparison */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Affiliate Program Comparison</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={affiliateComparisonData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="metric" type="category" width={170} />
              <Tooltip />
              <Legend />
              <Bar dataKey="northAmerica" name="North America" fill="#3498db" />
              <Bar dataKey="japan" name="Japan" fill="#e74c3c" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* SWOT Analysis */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">SWOT Analysis</h2>
        <div className="grid grid-cols-2 gap-4">
          {swotAnalysis.map((section, index) => (
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
      
      {/* Key Recommendations */}
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Regional Strategy Recommendations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-purple-50 rounded border border-purple-200">
            <h3 className="font-semibold text-purple-700">1. Knowledge Transfer Program</h3>
            <p className="text-sm text-purple-600">Establish a formal knowledge transfer program between North America and Japan teams to share best practices in affiliate management and conversion optimization.</p>
          </div>
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <h3 className="font-semibold text-green-700">2. Japan Market Recovery Plan</h3>
            <p className="text-sm text-green-600">Develop a targeted recovery strategy for Japan, focusing on reversing the severe sales decline through improved conversion rates and affiliate programs.</p>
          </div>
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <h3 className="font-semibold text-blue-700">3. Unified Subscription Strategy</h3>
            <p className="text-sm text-blue-600">Create a global subscription retention strategy to address declining subscription metrics across both regions while maintaining the strong average value per subscription.</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
            <h3 className="font-semibold text-yellow-700">4. Regional Product Optimization</h3>
            <p className="text-sm text-yellow-600">Analyze regional product performance differences and optimize product mix based on regional preferences, with cross-regional promotion of proven top performers.</p>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        Data Source: Nu Skin Global E-Commerce Power BI Dashboard | April 24, 2025
      </div>
    </div>
  );
};

export default NuSkinRegionalComparison;
