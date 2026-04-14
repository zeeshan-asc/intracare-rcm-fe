import { Navigate, Route, Routes } from 'react-router-dom';
import { CashIntelligencePage } from './pages/CashIntelligencePage';
import { HomePlaceholderPage } from './pages/HomePlaceholderPage';
import { RevenueOpportunityPage } from './pages/RevenueOpportunityPage';
import { OperationalIntelligencePage } from './pages/OperationalIntelligencePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePlaceholderPage />} />
      <Route path="/cash-intelligence" element={<CashIntelligencePage />} />
      <Route path="/revenue-opportunity" element={<RevenueOpportunityPage />} />
      <Route path="/operational-intelligence" element={<OperationalIntelligencePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
