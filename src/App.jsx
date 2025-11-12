import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FilterProvider } from './context/FilterContext';
import Home from './pages/Home';
import RiskContents from './pages/RiskContents';
import AuditContents from './pages/AuditContents';
import Reporting from './pages/RiskReporting';
import AuditReporting from './pages/AuditReporting';
import RiskProfile from './pages/RiskProfile';
import RiskExposure from './pages/RiskExposure';
import RiskCategoryAnalysis from './pages/RiskCategoryAnalysis';
import RiskAppetite from './pages/RiskAppetite';
import EmergingRisks from './pages/EmergingRisks';
import RiskDetail from './components/RiskDetail';
import AuditDashboard from './pages/AuditDashboard';
import AuditPlan from './pages/AuditPlan';
import AuditFindings from './pages/AuditFindings';
import AuditFollowup from './pages/AuditFollowup';
import AuditCoverage from './pages/AuditCoverage';
import ManagementResponse from './pages/ManagementResponse';
import AuditFindingsDetail from './pages/AuditFindingDetails';
import ManagementActions from './pages/ManagementActions';

function App() {
    return (
        <FilterProvider>
            <Router>
            <div className="App font-plus-jakarta">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/riskContents" element={<RiskContents />} />
                    <Route path="/reporting" element={<Reporting />} />
                    <Route path="/auditContents" element={<AuditContents />} />
                    <Route path="/auditreporting" element={<AuditReporting />} />
                    
                    {/* Risk Sub-pages */}
                    <Route path="/risk-profile" element={<RiskProfile />} />
                    <Route path="/risk-exposure" element={<RiskExposure />} />
                    <Route path="/risk-category-analysis" element={<RiskCategoryAnalysis />} />
                    <Route path="/risk-appetite" element={<RiskAppetite />} />
                    <Route path="/emerging-risks" element={<EmergingRisks />} />

                    {/* Add the Risk Detail route */}
                    <Route path="/risk/:id" element={<RiskDetail />} />

                    {/* Audit Sub-pages */}
                    <Route path="/audit-dashboard" element={<AuditDashboard />} />
                    <Route path="/audit-plan" element={<AuditPlan />} />
                    <Route path="/audit-findings" element={<AuditFindings />} />
                    <Route path="/audit-followup" element={<AuditFollowup />} />
                    <Route path="/audit-coverage" element={<AuditCoverage />} />
                    <Route path="/management-response" element={<ManagementResponse />} />
                    <Route path="/audit-findings-detail" element={<AuditFindingsDetail />} />
                    <Route path="/management-actions" element={<ManagementActions />} />
                    
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
        </FilterProvider>
        
    );
}

export default App;