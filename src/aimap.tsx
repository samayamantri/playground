import React from 'react';

interface RoadmapItemProps {
  title: string;
  subtitle: string;
  focus: string;
  implementation: string[];
  objective: string;
}

const AITransformationRoadmap: React.FC = () => {
  // Define the pillars of the transformation
  const pillars: RoadmapItemProps[] = [
    {
      title: "Data Platform and APIs for Agentic AI",
      subtitle: "Operational Foundation",
      focus: "Quality Data Consolidation",
      implementation: [
        "API Ecosystem",
        "Data Ingestion Pipelines",
        "Trusted Data Sources",
        "Agent Orchestration"
      ],
      objective: "Establish AI-ready infrastructure"
    },
    {
      title: "OPEN AI Enterprise",
      subtitle: "Business, Employees & Innovation",
      focus: "Enterprise Innovation",
      implementation: [
        "Business Process AI",
        "Employee AI Assistants",
        "Innovation Frameworks",
        "AI Labs & Incubation"
      ],
      objective: "Drive organization-wide AI adoption"
    },
    {
      title: "Nu Intelligence & Model/LLM",
      subtitle: "Deployment to Affiliates/Customers",
      focus: "Customer Intelligence",
      implementation: [
        "Affiliate LLM Integration",
        "Customer-facing AI",
        "Intelligent Products",
        "AI-Powered Analytics"
      ],
      objective: "Transform customer experiences"
    }
  ];

  // Define the outcomes
  const outcomes = [
    {
      title: "Data-Driven",
      description: "Infrastructure ready for AI agents"
    },
    {
      title: "AI-Enabled",
      description: "Organization-wide AI adoption"
    },
    {
      title: "Intelligence-Led",
      description: "Customer-focused AI value"
    }
  ];

  return (
    <div className="ai-transformation-roadmap">
      <h1>AI First Transformation Roadmap</h1>
      
      <div className="goal">
        <h2>AI FIRST TRANSFORMATION</h2>
        <p>ENTERPRISE DESTINATION</p>
      </div>
      
      <div className="pillars">
        {pillars.map((pillar, index) => (
          <div key={index} className="pillar">
            <h3>PILLAR {index + 1}</h3>
            <div className="pillar-content">
              <div className="pillar-header">
                <h4>{pillar.title}</h4>
                <p>{pillar.subtitle}</p>
              </div>
              <div className="pillar-focus">
                <p>{pillar.focus}</p>
              </div>
              <div className="pillar-implementation">
                <h5>Implementation</h5>
                <ul>
                  {pillar.implementation.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="objective">{pillar.objective}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="outcomes">
        <h3>AI First Enterprise - Outcomes</h3>
        <div className="outcomes-content">
          {outcomes.map((outcome, index) => (
            <div key={index} className="outcome">
              <h4>{outcome.title}</h4>
              <p>{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="tagline">
        FROM OPERATIONAL FOUNDATION TO AI FIRST ENTERPRISE
      </div>
    </div>
  );
};

export default AITransformationRoadmap;