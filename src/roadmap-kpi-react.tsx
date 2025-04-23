import React from 'react';

const AIRoadmapWithKPIs = () => {
  return (
    <div className="flex flex-col w-full bg-gray-50 p-6 rounded-lg shadow-sm">
      {/* Title Section */}
      <div className="text-center mb-14">
        <h1 className="text-2xl font-bold mb-3">AI Implementation Roadmap with KPIs</h1>
        <h2 className="text-lg text-gray-700">Dual-Track Strategy: ChatGPT Enterprise and Nu Skin Beauty and Wellness Agentic AI Plaform</h2>
      </div>
      
      {/* Timeline with Milestones */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <div className="text-right w-24 font-bold text-gray-700">Timeline</div>
          <div className="flex-1 flex justify-between">
            <div className="text-center">
              <div className="bg-green-500 w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="text-sm font-semibold">1-3 Months</div>
              <div className="text-xs text-gray-600">Platform Setup</div>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="text-sm font-semibold">4-6 Months</div>
              <div className="text-xs text-gray-600">Data Integration</div>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="text-sm font-semibold">7-12 Months</div>
              <div className="text-xs text-gray-600">Full Employee Adoption</div>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="text-sm font-semibold">13-18 Months</div>
              <div className="text-xs text-gray-600">Agentic AI Prototype</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold">5</span>
              </div>
              <div className="text-sm font-semibold">19-24 Months</div>
              <div className="text-xs text-gray-600">Full Platform Launch</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-24"></div>
          <div className="flex-1 h-2 bg-gray-300 rounded-full my-4 relative">
            <div className="absolute top-0 left-0 w-1 h-4 bg-gray-700 -translate-y-1"></div>
            <div className="absolute top-0 left-1/4 w-1 h-4 bg-gray-700 -translate-y-1"></div>
            <div className="absolute top-0 left-1/2 w-1 h-4 bg-gray-700 -translate-y-1"></div>
            <div className="absolute top-0 left-3/4 w-1 h-4 bg-gray-700 -translate-y-1"></div>
            <div className="absolute top-0 right-0 w-1 h-4 bg-gray-700 -translate-y-1"></div>
          </div>
        </div>
      </div>
      
      {/* Track 1: ChatGPT Enterprise */}
      <div className="mb-6">
        <div className="flex mb-3">
          <div className="w-24 text-right pr-4">
            <div className="font-bold text-gray-700">Track 1:</div>
            <div className="text-xs text-gray-600">ChatGPT</div>
            <div className="text-xs text-gray-600">Enterprise</div>
          </div>
          <div className="flex-1 flex space-x-1">
            <div className="flex-1 bg-blue-500 bg-opacity-80 p-3 rounded-lg text-white flex flex-col justify-center">
              <h3 className="font-bold text-sm text-center">Setup & Basic</h3>
              <h3 className="font-bold text-sm text-center mb-1">Integration</h3>
              <p className="text-xs text-center">Security & contracts</p>
            </div>
            <div className="flex-1 bg-blue-500 bg-opacity-80 p-3 rounded-lg text-white flex flex-col justify-center">
              <h3 className="font-bold text-sm text-center mb-1">Data Integration</h3>
              <p className="text-xs text-center">Connecting data sources</p>
            </div>
            <div className="flex-1 bg-blue-500 bg-opacity-90 p-3 rounded-lg text-white flex flex-col justify-center">
              <h3 className="font-bold text-sm text-center mb-1">Employee Enablement</h3>
              <p className="text-xs text-center">Training & adoption</p>
            </div>
            <div className="flex-1 bg-blue-500 p-3 rounded-lg text-white flex flex-col justify-center">
              <h3 className="font-bold text-sm text-center">Advanced</h3>
              <h3 className="font-bold text-sm text-center mb-1">Employee Usage</h3>
              <p className="text-xs text-center">Complex workflows</p>
            </div>
            <div className="flex-1 bg-blue-500 bg-opacity-80 p-3 rounded-lg text-white flex flex-col justify-center">
              <h3 className="font-bold text-sm text-center mb-1">Tool Integration</h3>
              <p className="text-xs text-center">Business systems</p>
            </div>
            <div className="flex-1 bg-blue-500 bg-opacity-70 p-3 rounded-lg text-white border border-dashed border-gray-600 flex flex-col justify-center">
              <h3 className="font-bold text-sm text-center mb-1">Transition</h3>
              <p className="text-xs text-center">To Nu Skin Beauty and Welness Agentic AI platform</p>
            </div>
          </div>
        </div>
        
        {/* Track 1 KPIs */}
        <div className="flex mb-6">
          <div className="w-24"></div>
          <div className="flex-1 flex space-x-1">
            <div className="flex-1 bg-white border border-blue-300 p-2 rounded-lg">
              <h4 className="font-bold text-xs text-blue-700 mb-1 text-center">Setup KPIs</h4>
              <ul className="text-xs space-y-1 pl-1">
                <li>• Contract: &lt;2wks</li>
                <li>• Security: 100%</li>
                <li>• Data policy: Complete</li>
              </ul>
            </div>
            <div className="flex-1 bg-white border border-blue-300 p-2 rounded-lg">
              <h4 className="font-bold text-xs text-blue-700 mb-1 text-center">Data KPIs</h4>
              <ul className="text-xs space-y-1 pl-1">
                <li>• Integration: 95%+</li>
                <li>• Error rate: &lt;2%</li>
                <li>• Accuracy: 90%+</li>
              </ul>
            </div>
            <div className="flex-1 bg-white border border-blue-300 p-2 rounded-lg">
              <h4 className="font-bold text-xs text-blue-700 mb-1 text-center">Adoption KPIs</h4>
              <ul className="text-xs space-y-1 pl-1">
                <li>• User adoption: 80%</li>
                <li>• Time saved: 2hrs/wk</li>
                <li>• Use cases: 3+/dept</li>
              </ul>
            </div>
            <div className="flex-1 bg-white border border-blue-300 p-2 rounded-lg">
              <h4 className="font-bold text-xs text-blue-700 mb-1 text-center">Advanced KPIs</h4>
              <ul className="text-xs space-y-1 pl-1">
                <li>• Adv. use cases: 10+/dept</li>
                <li>• Complex tasks: -40%</li>
                <li>• Templates: 70%+</li>
              </ul>
            </div>
            <div className="flex-1 bg-white border border-blue-300 p-2 rounded-lg">
              <h4 className="font-bold text-xs text-blue-700 mb-1 text-center">Integration KPIs</h4>
              <ul className="text-xs space-y-1 pl-1">
                <li>• Tools integrated: 90%+</li>
                <li>• Process time: -50%</li>
                <li>• API reliability: 99.5%+</li>
              </ul>
            </div>
            <div className="flex-1 bg-white border border-blue-300 p-2 rounded-lg">
              <h4 className="font-bold text-xs text-blue-700 mb-1 text-center">Transition KPIs</h4>
              <ul className="text-xs space-y-1 pl-1">
                <li>• Stability: 99.9%+</li>
                <li>• Migration: 95%+</li>
                <li>• Satisfaction: 8+/10</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
     
      
      {/* Track 2: Custom Agentic AI */}
      <div className="mb-6">
        <div className="flex mb-3">
          <div className="w-24 text-right pr-4">
            <div className="font-bold text-gray-700">Track 2:</div>
            <div className="text-xs text-gray-600">Nu Skin</div>
            <div className="text-xs text-gray-600">Agentic AI Beauty and Wellness Platform</div>
          </div>
          <div className="flex-1 flex space-x-1">
            <div className="w-1/3 bg-red-500 bg-opacity-80 p-3 rounded-lg text-white flex flex-col justify-center">
              <h3 className="font-bold text-sm text-center mb-1">Research & Planning</h3>
              <p className="text-xs text-center">Requirements & architecture</p>
            </div>
            <div className="w-1/4 bg-red-500 bg-opacity-80 p-3 rounded-lg text-white flex flex-col justify-center">
              <h3 className="font-bold text-sm text-center mb-1">Modal Context Framework</h3>
              <p className="text-xs text-center">Core platform development</p>
            </div>
            <div className="w-1/4 bg-red-500 bg-opacity-90 p-3 rounded-lg text-white flex flex-col justify-center">
              <h3 className="font-bold text-sm text-center mb-1">Persona Engine</h3>
              <p className="text-xs text-center">Role-specific AI behavior</p>
            </div>
            <div className="w-1/4 bg-red-500 p-3 rounded-lg text-white flex flex-col justify-center">
              <h3 className="font-bold text-sm text-center mb-1">Micro CRM & Platform Launch</h3>
              <p className="text-xs text-center">Affiliate network enablement</p>
            </div>
          </div>
        </div>
        
        {/* Track 2 KPIs */}
        <div className="flex mb-10">
          <div className="w-24"></div>
          <div className="flex-1 flex space-x-1">
            <div className="w-1/3 bg-white border border-red-300 p-2 rounded-lg">
              <h4 className="font-bold text-xs text-red-700 mb-1 text-center">Planning KPIs</h4>
              <ul className="text-xs space-y-1 pl-1">
                <li>• Requirements: 100%</li>
                <li>• Architecture: 100%</li>
                <li>• Risk assessment: Complete</li>
              </ul>
            </div>
            <div className="w-1/4 bg-white border border-red-300 p-2 rounded-lg">
              <h4 className="font-bold text-xs text-red-700 mb-1 text-center">Framework KPIs</h4>
              <ul className="text-xs space-y-1 pl-1">
                <li>• Dev milestones: 90%+ on schedule</li>
                <li>• Test coverage: 95%+</li>
                <li>• Context handling: 80%+</li>
              </ul>
            </div>
            <div className="w-1/4 bg-white border border-red-300 p-2 rounded-lg">
              <h4 className="font-bold text-xs text-red-700 mb-1 text-center">Persona KPIs</h4>
              <ul className="text-xs space-y-1 pl-1">
                <li>• Templates: 10+ base</li>
                <li>• Consistency: 85%+</li>
                <li>• Context switching: 90%+</li>
              </ul>
            </div>
            <div className="w-1/4 bg-white border border-red-300 p-2 rounded-lg">
              <h4 className="font-bold text-xs text-red-700 mb-1 text-center">Launch KPIs</h4>
              <ul className="text-xs space-y-1 pl-1">
                <li>• Affiliate time: +5hrs/wk</li>
                <li>• Adoption: 70%+ in first month</li>
                <li>• ROI: Positive in 12 months</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Departmental KPI Focus */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-3 ml-24">Departmental KPI Focus</h2>
        <div className="flex space-x-3 mb-6">
          <div className="flex-1 bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-2 text-blue-800 text-sm text-center">IT & Engineering</h3>
            <div className="mb-2">
              <h4 className="font-bold text-xs">Early KPIs (Track 1)</h4>
              <ul className="text-xs ml-2">
                <li>• System uptime: 99.5%+</li>
                <li>• API connection: 98%+</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs">Later KPIs (Track 2)</h4>
              <ul className="text-xs ml-2">
                <li>• Test coverage: 95%+</li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1 bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold mb-2 text-green-800 text-sm text-center">Marketing & Creative</h3>
            <div className="mb-2">
              <h4 className="font-bold text-xs">Early KPIs (Track 1)</h4>
              <ul className="text-xs ml-2">
                <li>• Content production: +30%</li>
                <li>• Campaign variants: 5+</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs">Later KPIs (Track 2)</h4>
              <ul className="text-xs ml-2">
                <li>• Persona effectiveness: 85%+</li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
            <h3 className="font-bold mb-2 text-yellow-800 text-sm text-center">Business Strategy</h3>
            <div className="mb-2">
              <h4 className="font-bold text-xs">Early KPIs (Track 1)</h4>
              <ul className="text-xs ml-2">
                <li>• Analysis time: -40%</li>
                <li>• Strategic docs: 3+ quarterly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs">Later KPIs (Track 2)</h4>
              <ul className="text-xs ml-2">
                <li>• Revenue impact: +10%</li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1 bg-purple-50 p-3 rounded-lg border border-purple-200">
            <h3 className="font-bold mb-2 text-purple-800 text-sm text-center">Legal & Compliance</h3>
            <div className="mb-2">
              <h4 className="font-bold text-xs">Early KPIs (Track 1)</h4>
              <ul className="text-xs ml-2">
                <li>• Contract review: +35%</li>
                <li>• Policy simplification: 100%</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs">Later KPIs (Track 2)</h4>
              <ul className="text-xs ml-2">
                <li>• Compliance automation: 80%+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overall Business Impact */}
      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
        <h2 className="text-lg font-bold mb-3 text-center">Overall Business Impact KPIs</h2>
        <div className="flex space-x-3">
          <div className="flex-1 bg-blue-50 p-3 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-2 text-blue-800 text-center text-sm">Short-Term Impact (Year 1)</h3>
            <ul className="text-xs">
              <li className="mb-1">• Employee productivity: +20-30%</li>
              <li>• Time savings: 2+ hours/week/employee</li>
            </ul>
          </div>
          
          <div className="flex-1 bg-green-50 p-3 rounded-lg border border-green-200">
            <h3 className="font-bold mb-2 text-green-800 text-center text-sm">Mid-Term Impact (Year 2)</h3>
            <ul className="text-xs">
              <li className="mb-1">• Process automation: 50%+ of eligible tasks</li>
              <li>• Decision making speed: +40%</li>
            </ul>
          </div>
          
          <div className="flex-1 bg-red-50 p-3 rounded-lg border border-red-200">
            <h3 className="font-bold mb-2 text-red-800 text-center text-sm">Long-Term Impact (Year 3+)</h3>
            <ul className="text-xs">
              <li className="mb-1">• Affiliate revenue increase: 20%+</li>
              <li>• Platform ROI: 300%+ within 3 years</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRoadmapWithKPIs;