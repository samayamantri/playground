import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MigrationSummary from './migration-summary';
import NuskinCategoriesFixed from './nuskin-categories-fixed';
import AiNuintelligence from './AiNuintelligence';
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
          <Route path="/" element={<Navigate to="/migration-summary" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
); 