import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MigrationSummary from './migration-summary';
import NuskinCategoriesFixed from './nuskin-categories-fixed';
import AiNuintelligence from './AiNuintelligence';
import NuSkinEuAnalysis from './nu-skin-eu-analysis';
import NuSkinLatamAnalysis from './nu-skin-latam-analysis';
import NuSkinRegionalComparison from './nu-skin-regional-comparison';
import NuSkinJapanVisualSummary from './nu-skin-japan-visual-summary';
import RoadmapKPI from './roadmap-kpi-react';
import NuSkinNorthAmericaAnalysis from './nu-skin-north-america-analysis';
import Layout from './components/Layout';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/migration-summary" element={<MigrationSummary />} />
          <Route path="/nuskin-categories-fixed" element={<NuskinCategoriesFixed />} />
          <Route path="/ai-nuintelligence" element={<AiNuintelligence />} />
          <Route path="/nu-skin-eu-analysis" element={<NuSkinEuAnalysis />} />
          <Route path="/nu-skin-latam-analysis" element={<NuSkinLatamAnalysis />} />
          <Route path="/nu-skin-regional-comparison" element={<NuSkinRegionalComparison />} />
          <Route path="/nu-skin-japan-visual-summary" element={<NuSkinJapanVisualSummary />} />
          <Route path="/roadmap-kpi-react" element={<RoadmapKPI />} />
          <Route path="/nu-skin-north-america-analysis" element={<NuSkinNorthAmericaAnalysis />} />
          <Route path="/" element={<Navigate to="/migration-summary" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
); 