import React from 'react';

const AIRoadmap: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full p-4 bg-white">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">AI First Transformation Roadmap</h1>
      
      {/* Goal box at top center */}
      <div className="w-3/5 bg-blue-900 text-white rounded-lg mb-8 p-3 text-center">
        <h2 className="text-xl font-bold">AI FIRST TRANSFORMATION</h2>
        <p className="text-sm font-semibold">ENTERPRISE DESTINATION</p>
      </div>
      
      {/* Step labels */}
      <div className="flex justify-between w-full mb-2">
        <div className="w-1/5 text-center">
          <h3 className="text-lg font-bold text-blue-500">STEP 1</h3>
        </div>
        <div className="w-1/5 text-center">
          <h3 className="text-lg font-bold text-blue-500">STEP 2</h3>
        </div>
        <div className="w-1/5 text-center">
          <h3 className="text-lg font-bold text-blue-500">STEP 3</h3>
        </div>
        <div className="w-1/5 text-center">
          <h3 className="text-lg font-bold text-blue-500">STEP 4</h3>
        </div>
        <div className="w-1/5 text-center">
          <h3 className="text-lg font-bold text-blue-900">GOAL</h3>
        </div>
      </div>

      {/* Main flow with steps */}
      <div className="relative w-full mb-6">
        {/* Main horizontal line */}
        <div className="absolute top-7 left-0 right-0 h-2 bg-blue-100"></div>
        
        {/* Steps with circles */}
        <div className="flex justify-between items-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-1/5 relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-300 to-blue-200 flex items-center justify-center z-10">
              <span className="text-2xl font-bold text-blue-500">1</span>
            </div>
            <div className="absolute top-7 right-0 w-1/2 h-2 bg-blue-100"></div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center w-1/5 relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-400 to-blue-300 flex items-center justify-center z-10">
              <span className="text-2xl font-bold text-blue-500">2</span>
            </div>
            <div className="absolute top-7 left-0 w-1/2 h-2 bg-blue-100"></div>
            <div className="absolute top-7 right-0 w-1/2 h-2 bg-blue-100"></div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center w-1/5 relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-500 to-blue-400 flex items-center justify-center z-10">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <div className="absolute top-7 left-0 w-1/2 h-2 bg-blue-100"></div>
            <div className="absolute top-7 right-0 w-1/2 h-2 bg-blue-100"></div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center w-1/5 relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-700 to-blue-500 flex items-center justify-center z-10">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <div className="absolute top-7 left-0 w-1/2 h-2 bg-blue-100"></div>
            <div className="absolute top-7 right-0 w-1/2 h-2 bg-blue-100"></div>
          </div>
          
          {/* Goal */}
          <div className="flex flex-col items-center w-1/5 relative">
            <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center z-10">
              <span className="text-2xl font-bold text-white">✓</span>
            </div>
            <div className="absolute top-7 left-0 w-1/2 h-2 bg-blue-100"></div>
          </div>
        </div>
      </div>
      
      {/* Step details */}
      <div className="flex justify-between w-full gap-4">
        {/* Step 1 Details */}
        <div className="w-1/5">
          <div className="border-2 border-blue-100 rounded-lg overflow-hidden mb-4">
            <div className="bg-gradient-to-b from-blue-300 to-blue-200 p-2">
              <h4 className="text-blue-600 font-bold text-center">Data Platform</h4>
            </div>
            <div className="p-2">
              <p className="text-sm text-blue-500 text-center font-semibold">Operational</p>
              <div className="bg-blue-50 rounded p-2 mt-2">
                <p className="text-xs text-blue-500 text-center">Quality Data</p>
                <p className="text-xs text-blue-500 text-center">Consolidation</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-blue-100 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-b from-blue-300 to-blue-200 p-1">
              <h4 className="text-blue-600 font-semibold text-center text-sm">Implementation</h4>
            </div>
            <div className="p-2 space-y-1">
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-center">Personal AI Assistants</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-center">KPI Dashboards</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-center">Trusted Data Sources</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-center">Data Ingestion</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-blue-500 text-center">Establish data-driven ops</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 2 Details */}
        <div className="w-1/5">
          <div className="border-2 border-blue-200 rounded-lg overflow-hidden mb-4">
            <div className="bg-gradient-to-b from-blue-400 to-blue-300 p-2">
              <h4 className="text-blue-600 font-bold text-center">Customer Data</h4>
            </div>
            <div className="p-2">
              <p className="text-sm text-blue-500 text-center font-semibold">Transactional</p>
              <div className="bg-blue-100 rounded p-2 mt-2">
                <p className="text-xs text-blue-500 text-center">Customer</p>
                <p className="text-xs text-blue-500 text-center">Intelligence</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-blue-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-b from-blue-400 to-blue-300 p-1">
              <h4 className="text-blue-600 font-semibold text-center text-sm">Implementation</h4>
            </div>
            <div className="p-2 space-y-1">
              <div className="bg-blue-100 rounded p-1">
                <p className="text-xs text-center">Prism AI Assistant</p>
              </div>
              <div className="bg-blue-100 rounded p-1">
                <p className="text-xs text-center">Journey Orchestration</p>
              </div>
              <div className="bg-blue-100 rounded p-1">
                <p className="text-xs text-center">Omni-Channel Exp.</p>
              </div>
              <div className="bg-blue-100 rounded p-1">
                <p className="text-xs text-center">Predictive Analytics</p>
              </div>
              <div className="bg-blue-100 rounded p-1">
                <p className="text-xs text-blue-500 text-center">Enhance customer insights</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 3 Details */}
        <div className="w-1/5">
          <div className="border-2 border-blue-300 rounded-lg overflow-hidden mb-4">
            <div className="bg-gradient-to-b from-blue-500 to-blue-400 p-2">
              <h4 className="text-white font-bold text-center">Partnerships</h4>
            </div>
            <div className="p-2">
              <p className="text-sm text-blue-500 text-center font-semibold">Transformational</p>
              <div className="bg-blue-200 rounded p-2 mt-2">
                <p className="text-xs text-blue-500 text-center">Strategic</p>
                <p className="text-xs text-blue-500 text-center">Alliances</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-blue-300 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-b from-blue-500 to-blue-400 p-1">
              <h4 className="text-white font-semibold text-center text-sm">Implementation</h4>
            </div>
            <div className="p-2 space-y-1">
              <div className="bg-blue-200 rounded p-1">
                <p className="text-xs text-center">AWS & Cloud</p>
              </div>
              <div className="bg-blue-200 rounded p-1">
                <p className="text-xs text-center">Tech Integrations</p>
              </div>
              <div className="bg-blue-200 rounded p-1">
                <p className="text-xs text-center">Implementation</p>
              </div>
              <div className="bg-blue-200 rounded p-1">
                <p className="text-xs text-center">Hardware Accel.</p>
              </div>
              <div className="bg-blue-200 rounded p-1">
                <p className="text-xs text-blue-500 text-center">Accelerate with partners</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 4 Details */}
        <div className="w-1/5">
          <div className="border-2 border-blue-400 rounded-lg overflow-hidden mb-4">
            <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-2">
              <h4 className="text-white font-bold text-center">AI Factory</h4>
            </div>
            <div className="p-2">
              <p className="text-sm text-blue-500 text-center font-semibold">Transformational</p>
              <div className="bg-blue-300 rounded p-2 mt-2">
                <p className="text-xs text-blue-500 text-center">Enterprise</p>
                <p className="text-xs text-blue-500 text-center">Innovation</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-blue-400 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-1">
              <h4 className="text-white font-semibold text-center text-sm">Implementation</h4>
            </div>
            <div className="p-2 space-y-1">
              <div className="bg-blue-300 rounded p-1">
                <p className="text-xs text-center">Cross-Functional AI</p>
              </div>
              <div className="bg-blue-300 rounded p-1">
                <p className="text-xs text-center">Solution Factory</p>
              </div>
              <div className="bg-blue-300 rounded p-1">
                <p className="text-xs text-center">Test-Learn-Refine</p>
              </div>
              <div className="bg-blue-300 rounded p-1">
                <p className="text-xs text-center">Rapid Scaling</p>
              </div>
              <div className="bg-blue-300 rounded p-1">
                <p className="text-xs text-blue-500 text-center">Enable enterprise innovation</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Goal Details */}
        <div className="w-1/5">
          <div className="border-2 border-blue-900 rounded-lg overflow-hidden mb-4">
            <div className="bg-blue-900 p-2">
              <h4 className="text-white font-bold text-center">AI First Enterprise</h4>
            </div>
            <div className="p-2">
              <div className="bg-blue-50 rounded p-4 mt-2">
                <p className="text-sm text-blue-900 text-center font-bold">Intelligent</p>
                <p className="text-sm text-blue-900 text-center font-bold">Data-Driven</p>
                <p className="text-sm text-blue-900 text-center font-bold">Organization</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-blue-900 rounded-lg overflow-hidden">
            <div className="bg-blue-900 p-1">
              <h4 className="text-white font-semibold text-center text-sm">Outcomes</h4>
            </div>
            <div className="p-2 space-y-1">
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-blue-900 text-center">Data-Driven Culture</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-blue-900 text-center">Customer Centricity</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-blue-900 text-center">Ecosystem Growth</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-blue-900 text-center">Enterprise Agility</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-blue-900 font-bold text-center">AI First Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Tagline */}
      <div className="w-full bg-blue-900 text-white font-bold text-center rounded-lg p-2 mt-8">
        FROM OPERATIONAL FOUNDATION TO AI FIRST ENTERPRISE
      </div>
    </div>
  );
};

export default AIRoadmap;