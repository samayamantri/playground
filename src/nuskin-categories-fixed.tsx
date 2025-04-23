import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface PieLabelProps {
  name: string;
  percentage: number;
}

interface DataItem {
  name: string;
  value: number;
  comments: number;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: {
      name: string;
      percentage: number;
      count: number;
      color: string;
    };
  }>;
}

interface FeedbackItem {
  rating: number;
  quote: string;
}

interface IssueItem {
  name: string;
  value: number;
  percentage: number;
  color: string;
  feedback: FeedbackItem[];
}

interface CategoryData {
  title: string;
  data: IssueItem[];
  color: string;
}

interface CategoryMap {
  [key: string]: CategoryData;
}

interface FeedbackCategory {
  name: string;
  percentage: number;
  count: number;
  color: string;
}

interface RatingIconsProps {
  rating: number;
}

const NuSkinCategoriesFixed = () => {
  const [activeTab, setActiveTab] = useState('subscription');
  
  // Colors for major categories
  const categoryColors = {
    subscription: '#FF8042', // Orange
    website: '#0088FE',      // Blue
    service: '#FFBB28',      // Yellow
    product: '#00C49F',      // Green
    account: '#FF6B8A',      // Pink
    pricing: '#8884D8',      // Purple
    mobile: '#82CA9D',       // Light Green
    international: '#A4DE6C' // Lime
  };
  
  // SUBSCRIPTION MANAGEMENT (23%)
  const subscriptionIssues = [
    { 
      name: 'Modify/Skip Difficulty', 
      value: 35, 
      percentage: 44, 
      color: categoryColors.subscription,
      feedback: [
        { rating: 1, quote: "I'm Trying to skip my subscription due to travel plans. I cannot get a confirmation that my request" },
        { rating: 2, quote: "I have challenges in managing the subscription items- skipping shipments and requesting when next I want them." },
        { rating: 3, quote: "Make the subscriptions easier to use." }
      ]
    },
    { 
      name: 'Failed Skip Requests', 
      value: 15, 
      percentage: 19, 
      color: categoryColors.subscription,
      feedback: [
        { rating: 1, quote: "I skipped a subscription but still received email says that the shipment will take place. Why?" },
        { rating: 3, quote: "Last month I selected to skip my shipment of my subscription(received email confirmation as well. Then a couple days later, I get another email saying that it shipped." },
        { rating: 1, quote: "I put it on hold and I see a charge! Why? I get tired of the mishaps!! over it!" }
      ]
    },
    { 
      name: 'Cancellation Problems', 
      value: 12, 
      percentage: 15, 
      color: categoryColors.subscription,
      feedback: [
        { rating: 1, quote: "I have been trying to cancel my subscription order. I talked to a lady yesterday and today and they both said they would send me confirmation it has been cancelled but I have not received it." },
        { rating: 2, quote: "make it easier to cancel subscriptions" },
        { rating: 1, quote: "Where do I log in to cancel my subscription? This isn't helpful." }
      ]
    },
    { 
      name: 'Missing Subscription Info', 
      value: 18, 
      percentage: 22, 
      color: categoryColors.subscription,
      feedback: [
        { rating: 1, quote: "Couldn't find my subscription under my account. Very frustrating" },
        { rating: 2, quote: "make clear on cutt off date for subscriptions so I don't get duplicates and have ti pay to get a refund" },
        { rating: 3, quote: "Sometimes trying to get to the subscription area of your website is a little frustrating to find if you don't remember how from the last time." }
      ]
    }
  ];
  
  // WEBSITE USABILITY (22%)
  const websiteIssues = [
    { 
      name: 'Site Navigation Complexity', 
      value: 30, 
      percentage: 39, 
      color: categoryColors.website,
      feedback: [
        { rating: 1, quote: "Very difficult to navigate this site- i cant find a way to change my monthly purchase or even see it." },
        { rating: 2, quote: "website could be easier to navigate cannot find my subscriptions" },
        { rating: 3, quote: "I think this website is way to convoluted and not user friendly. It always takes me a while to update any order trying to find things" }
      ]
    },
    { 
      name: 'Search Functionality', 
      value: 25, 
      percentage: 32, 
      color: categoryColors.website,
      feedback: [
        { rating: 1, quote: "When searching for products in the search bar, the often do not produce results." },
        { rating: 2, quote: "the search feature is not good" },
        { rating: 3, quote: "improve the search engine.." }
      ]
    },
    { 
      name: 'Page Loading Errors', 
      value: 10, 
      percentage: 13, 
      color: categoryColors.website,
      feedback: [
        { rating: 2, quote: "very bad. Always have problem to wait for a long time to see the webpage that I need" },
        { rating: 1, quote: "The link from my order that me to a page with a 404 error. When I click Contact us on that page, same error." },
        { rating: 1, quote: "login on has error can not login in" }
      ]
    },
    { 
      name: 'Product Findability', 
      value: 12, 
      percentage: 16, 
      color: categoryColors.website,
      feedback: [
        { rating: 2, quote: "Products are difficult to search. Looking for Epoch Deodorant with Citrisomes. Not found." },
        { rating: 3, quote: "make individual products easier to find! Each item should be listed individually and easy to find without having to hunt through and only find it in a bundle." },
        { rating: 3, quote: "I'm not a distributor so I'm not familiar with navigating your site. I find it hard to locate products that are some of your tried and true products" }
      ]
    }
  ];
  
  // CUSTOMER SERVICE (13%)
  const serviceIssues = [
    { 
      name: 'Contact Difficulty', 
      value: 18, 
      percentage: 40, 
      color: categoryColors.service,
      feedback: [
        { rating: 1, quote: "Can't get a chat going." },
        { rating: 1, quote: "I need to chat with someone and it keeps taking me back to the homepage but there's nothing to start a chat. This is frustrating" },
        { rating: 2, quote: "answer the phone and have your website respond.." }
      ]
    },
    { 
      name: 'No Response', 
      value: 12, 
      percentage: 27, 
      color: categoryColors.service,
      feedback: [
        { rating: 1, quote: "Actually provide me with information. I emailed support and got no response. I called and was told someone would get back to me by email, but I still have not received an email" },
        { rating: 2, quote: "I have been trying to get my account reactivated and have no gotten any one to call or email me back." },
        { rating: 1, quote: "Customer service was unable to assist me in a timely manner." }
      ]
    },
    { 
      name: 'Unresolved Issues', 
      value: 15, 
      percentage: 33, 
      color: categoryColors.service,
      feedback: [
        { rating: 3, quote: "I have reward points but they never show up on my account. I always have to call customer service and sit on the phone for over 30 minutes to get the promo code for my rewards." },
        { rating: 2, quote: "Website shows error in my account but nobody can find out the reason and fix it after I called repeatedly. Terrible customer service." },
        { rating: 2, quote: "I'm trying to make a very simple change and I think I followed the instructions, yet the wrong change was made. I'm going to try again, and if I fail again, I'll have to call." }
      ]
    }
  ];
  
  // PRODUCT AVAILABILITY (12%)
  const productIssues = [
    { 
      name: 'Discontinued Products', 
      value: 18, 
      percentage: 43, 
      color: categoryColors.product,
      feedback: [
        { rating: 4, quote: "Discontinued items need to be more obvious, not just show out of stock. Why does Metabotrim show out of stock. I was told It was discontinued." },
        { rating: 1, quote: "stop discontinuing products I love and use and work. Age loc rejuvenating gel mask, worked very well and was affordable." },
        { rating: 1, quote: "The 180degree night cream is the best product ever. It reverses skin tags on the neck and prevents wrinkles. Terribly disappointed that it is discontinued." }
      ]
    },
    { 
      name: 'Out of Stock Products', 
      value: 12, 
      percentage: 29, 
      color: categoryColors.product,
      feedback: [
        { rating: 1, quote: "Have the product available!" },
        { rating: 1, quote: "I have been trying to order the 180 System for two weeks and shows it is out of stock. Would like to know when it will be available." },
        { rating: 5, quote: "Could you provide more information about a product that is out of stock. Will it be not available for weeks, months, etc." }
      ]
    },
    { 
      name: 'Product Information', 
      value: 12, 
      percentage: 28, 
      color: categoryColors.product,
      feedback: [
        { rating: 2, quote: "I recently purchased a NUSKIN Facial spa for my daughter for Christmas Unfortunately the warnings are not listed before purchasing the product" },
        { rating: 4, quote: "Would like a comparison study shown on the old vs new age LOC Future Serum." },
        { rating: 3, quote: "quise tener información de un producto a través de su ficha técnica, pero viene en ingles, lo tendré que traducir" }
      ]
    }
  ];
  
  // Primary Issues Breakdown with new categories
  const feedbackCategories = [
    { name: 'Subscription Management', percentage: 23, count: 70, color: categoryColors.subscription },
    { name: 'Website Usability & Navigation', percentage: 22, count: 67, color: categoryColors.website },
    { name: 'Customer Service', percentage: 13, count: 45, color: categoryColors.service },
    { name: 'Product Availability & Info', percentage: 12, count: 42, color: categoryColors.product },
    { name: 'Pricing & Promotions', percentage: 10, count: 35, color: categoryColors.pricing },
    { name: 'Account Management', percentage: 8, count: 28, color: categoryColors.account },
    { name: 'Mobile Experience', percentage: 6, count: 21, color: categoryColors.mobile },
    { name: 'International Experience', percentage: 6, count: 21, color: categoryColors.international }
  ];
  
  // Rating icon component
  const RatingIcons = ({ rating }: RatingIconsProps) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={`text-lg ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
        >
          ★
        </span>
      );
    }
    return <div className="flex">{stars}</div>;
  };
  
  // Custom tooltip for the pie chart
  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border">
          <p className="font-semibold text-gray-800">{payload[0].name}</p>
          <p className="text-gray-600">{payload[0].value}%</p>
          <p className="text-gray-500">~{payload[0].payload.count} comments</p>
        </div>
      );
    }
    return null;
  };

  const categoryMap: CategoryMap = {
    'subscription': {
      title: 'Subscription Management',
      data: subscriptionIssues,
      color: categoryColors.subscription
    },
    'website': {
      title: 'Website Usability & Navigation',
      data: websiteIssues,
      color: categoryColors.website
    },
    'service': {
      title: 'Customer Service',
      data: serviceIssues,
      color: categoryColors.service
    },
    'product': {
      title: 'Product Availability & Information',
      data: productIssues,
      color: categoryColors.product
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">NuSkin Website Feedback - Key Issue Categories</h1>
      
      <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
        <h3 className="font-bold text-yellow-700">Comprehensive Categorization:</h3>
        <p>Based on analysis of ~330 customer comments, we've identified 8 primary issue categories with the top 4 accounting for 70% of all feedback.</p>
      </div>
      
      {/* Primary Issues Breakdown */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Primary Customer Feedback Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={feedbackCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                  nameKey="name"
                  label={({ name, percentage }: PieLabelProps) => `${name}: ${percentage}%`}
                >
                  {feedbackCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <div className="space-y-3">
              {feedbackCategories.map((category) => (
                <div key={category.name} className="flex items-center">
                  <div 
                    className="w-4 h-4 mr-2 rounded-sm" 
                    style={{ backgroundColor: category.color }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{category.name}</span>
                      <span>{category.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          width: `${category.percentage}%`,
                          backgroundColor: category.color
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Based on refined analysis of ~330 customer comments
            </p>
          </div>
        </div>
      </div>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap mb-4">
        {Object.keys(categoryMap).map(key => (
          <button
            key={key}
            className={`px-4 py-2 font-medium ${activeTab === key ? 'bg-white border-t-2 shadow' : 'bg-gray-100'}`}
            style={{ 
              borderTopColor: activeTab === key ? categoryMap[key].color : 'transparent',
              width: 'calc(25% - 4px)',
              margin: '2px'
            }}
            onClick={() => setActiveTab(key)}
          >
            {categoryMap[key].title}
          </button>
        ))}
      </div>
      
      {/* Selected Category Content */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4" style={{ color: categoryMap[activeTab].color }}>
          {categoryMap[activeTab].title}
        </h2>
        
        {/* Bar Chart */}
        <div className="h-60 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={categoryMap[activeTab].data}
              margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={120} />
              <Tooltip formatter={(value) => [`${value} mentions`, 'Frequency']} />
              <Bar dataKey="value" fill={categoryMap[activeTab].color}>
                {categoryMap[activeTab].data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={categoryMap[activeTab].color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Representative Feedback */}
        <h3 className="text-lg font-semibold mb-3">Customer Quotes by Subcategory</h3>
        <div className="space-y-6">
          {categoryMap[activeTab].data.map((issue, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div 
                className="px-4 py-2 font-medium text-white" 
                style={{ backgroundColor: issue.color }}
              >
                {issue.name} ({issue.percentage}%)
              </div>
              <div className="divide-y">
                {issue.feedback.map((item, i) => (
                  <div key={i} className="p-3 bg-white">
                    <div className="flex justify-between mb-1">
                      <RatingIcons rating={item.rating} />
                      <span className="text-sm text-gray-500">Rating: {item.rating}/5</span>
                    </div>
                    <p className="text-gray-800 italic">"{item.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h2 className="text-lg font-semibold mb-2">Key Improvement Areas</h2>
        <ul className="space-y-2 text-sm">
          <li><span className="font-semibold">Subscription System Redesign (23%):</span> Focus on simplifying subscription management, especially skip functionality</li>
          <li><span className="font-semibold">Website Navigation (22%):</span> Improve site architecture, search functionality, and product findability</li>
          <li><span className="font-semibold">Contact Accessibility (13%):</span> Make customer service options more visible and responsive</li>
          <li><span className="font-semibold">Product Availability Communication (12%):</span> Provide clearer information about discontinued vs. out-of-stock products</li>
        </ul>
      </div>
    </div>
  );
};

export default NuSkinCategoriesFixed;
