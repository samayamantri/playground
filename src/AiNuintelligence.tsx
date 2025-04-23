import React from 'react';

const AiNuintelligence: React.FC = () => {
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
        <div className="w-1/3 text-center">
          <h3 className="text-lg font-bold text-blue-500">PILLAR 1</h3>
        </div>
        <div className="w-1/3 text-center">
          <h3 className="text-lg font-bold text-blue-500">PILLAR 2</h3>
        </div>
        <div className="w-1/3 text-center">
          <h3 className="text-lg font-bold text-blue-500">PILLAR 3</h3>
        </div>
      </div>

      {/* Main flow with steps */}
      <div className="relative w-full mb-6">
        {/* Main horizontal line */}
        <div className="absolute top-7 left-0 right-0 h-2 bg-blue-100"></div>
        
        {/* Steps with circles */}
        <div className="flex justify-between items-center">
          {/* Pillar 1 */}
          <div className="flex flex-col items-center w-1/3 relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-300 to-blue-200 flex items-center justify-center z-10">
              <span className="text-2xl font-bold text-blue-500">1</span>
            </div>
            <div className="absolute top-7 right-0 w-1/2 h-2 bg-blue-100"></div>
          </div>
          
          {/* Pillar 2 */}
          <div className="flex flex-col items-center w-1/3 relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-500 to-blue-400 flex items-center justify-center z-10">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <div className="absolute top-7 left-0 w-1/2 h-2 bg-blue-100"></div>
            <div className="absolute top-7 right-0 w-1/2 h-2 bg-blue-100"></div>
          </div>
          
          {/* Pillar 3 */}
          <div className="flex flex-col items-center w-1/3 relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blue-700 to-blue-500 flex items-center justify-center z-10">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <div className="absolute top-7 left-0 w-1/2 h-2 bg-blue-100"></div>
          </div>
        </div>
      </div>
      
      {/* Pillar details */}
      <div className="flex justify-between w-full gap-4">
        {/* Pillar 1 Details */}
        <div className="w-1/3">
          <div className="border-2 border-blue-100 rounded-lg overflow-hidden mb-4">
            <div className="bg-gradient-to-b from-blue-300 to-blue-200 p-2">
              <h4 className="text-blue-600 font-bold text-center">Data Platform and APIs</h4>
              <h4 className="text-blue-600 font-bold text-center">for Agentic AI</h4>
            </div>
            <div className="p-2">
              <p className="text-sm text-blue-500 text-center font-semibold">Operational Foundation</p>
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
                <p className="text-xs text-center">API Ecosystem</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-center">Data Ingestion Pipelines</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-center">Trusted Data Sources</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-center">Agent Orchestration</p>
              </div>
              <div className="bg-blue-50 rounded p-1">
                <p className="text-xs text-blue-500 text-center">Establish AI-ready infrastructure</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pillar 2 Details */}
        <div className="w-1/3">
          <div className="border-2 border-blue-300 rounded-lg overflow-hidden mb-4">
            <div className="bg-gradient-to-b from-blue-500 to-blue-400 p-2">
              <h4 className="text-white font-bold text-center">OPEN AI Enterprise</h4>
              <h4 className="text-white font-bold text-center">Business, Employees & Innovation</h4>
            </div>
            <div className="p-2">
              <p className="text-sm text-blue-500 text-center font-semibold">Internal Transformation</p>
              <div className="bg-blue-200 rounded p-2 mt-2">
                <p className="text-xs text-blue-500 text-center">Enterprise</p>
                <p className="text-xs text-blue-500 text-center">Innovation</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-blue-300 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-b from-blue-500 to-blue-400 p-1">
              <h4 className="text-white font-semibold text-center text-sm">Implementation</h4>
            </div>
            <div className="p-2 space-y-1">
              <div className="bg-blue-200 rounded p-1">
                <p className="text-xs text-center">Business Process AI</p>
              </div>
              <div className="bg-blue-200 rounded p-1">
                <p className="text-xs text-center">Employee AI Assistants</p>
              </div>
              <div className="bg-blue-200 rounded p-1">
                <p className="text-xs text-center">Innovation Frameworks</p>
              </div>
              <div className="bg-blue-200 rounded p-1">
                <p className="text-xs text-center">AI Labs & Incubation</p>
              </div>
              <div className="bg-blue-200 rounded p-1">
                <p className="text-xs text-blue-500 text-center">Drive organization-wide AI adoption</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pillar 3 Details */}
        <div className="w-1/3">
          <div className="border-2 border-blue-400 rounded-lg overflow-hidden mb-4">
            <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-2">
              <h4 className="text-white font-bold text-center">Nu Intelligence & Model/LLM</h4>
              <h4 className="text-white font-bold text-center">Deployment to Affiliates/Customers</h4>
            </div>
            <div className="p-2">
              <p className="text-sm text-blue-500 text-center font-semibold">External Deployment</p>
              <div className="bg-blue-300 rounded p-2 mt-2">
                <p className="text-xs text-blue-500 text-center">Customer</p>
                <p className="text-xs text-blue-500 text-center">Intelligence</p>
              </div>
            </div>
          </div>
          
          <div className="border-2 border-blue-400 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-1">
              <h4 className="text-white font-semibold text-center text-sm">Implementation</h4>
            </div>
            <div className="p-2 space-y-1">
              <div className="bg-blue-300 rounded p-1">
                <p className="text-xs text-center">Affiliate LLM Integration</p>
              </div>
              <div className="bg-blue-300 rounded p-1">
                <p className="text-xs text-center">Customer-facing AI</p>
              </div>
              <div className="bg-blue-300 rounded p-1">
                <p className="text-xs text-center">Intelligent Products</p>
              </div>
              <div className="bg-blue-300 rounded p-1">
                <p className="text-xs text-center">AI-Powered Analytics</p>
              </div>
              <div className="bg-blue-300 rounded p-1">
                <p className="text-xs text-blue-500 text-center">Transform customer experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Box */}
      <div className="w-2/3 mt-8">
        <div className="border-2 border-blue-900 rounded-lg overflow-hidden">
          <div className="bg-blue-900 p-2">
            <h4 className="text-white font-bold text-center">AI First Enterprise - Outcomes</h4>
          </div>
          <div className="p-3 bg-blue-50">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white rounded p-2 text-center">
                <p className="text-sm font-bold text-blue-900">Data-Driven</p>
                <p className="text-xs text-blue-700">Infrastructure ready for AI agents</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <p className="text-sm font-bold text-blue-900">AI-Enabled</p>
                <p className="text-xs text-blue-700">Organization-wide AI adoption</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <p className="text-sm font-bold text-blue-900">Intelligence-Led</p>
                <p className="text-xs text-blue-700">Customer-focused AI value</p>
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

export default AiNuintelligence;