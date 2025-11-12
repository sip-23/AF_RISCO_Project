import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ReportingFooter from '../components/ReportingFooter';
import { ProfileData } from '../data/profileData';

const RiskProfile = () => {
    const [filteredData, setFilteredData] = useState(ProfileData);
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [selectedPillar, setSelectedPillar] = useState('');
    const [selectedEntity, setSelectedEntity] = useState('');
    const navigate = useNavigate();

    // Filter data based on footer selections
    useEffect(() => {
        let filtered = ProfileData;

        const periodSelect = document.getElementById('reporting-period');
        const pillarSelect = document.getElementById('pillar');
        const entitySelect = document.getElementById('legal-entity');

        const currentPeriod = periodSelect?.value || '';
        const currentPillar = pillarSelect?.value || '';
        const currentEntity = entitySelect?.value || '';

        setSelectedPeriod(currentPeriod);
        setSelectedPillar(currentPillar);
        setSelectedEntity(currentEntity);

        // Apply filters
        if (currentPeriod) {
            filtered = filtered.filter(item => {
                const periodMap = {
                    'fy26q1': 'FY26 Q1',
                    'fy26q2': 'FY26 Q2', 
                    'fy26q3': 'FY26 Q3',
                    'fy26q4': 'FY26 Q4'
                };
                return item.reportingPeriod === periodMap[currentPeriod];
            });
        }

        if (currentPillar && currentPillar !== 'all') {
            filtered = filtered.filter(item => 
                item.Pillar.toLowerCase().replace(' ', '-') === currentPillar
            );
        }

        if (currentEntity) {
            filtered = filtered.filter(item => 
                item.Entity.toLowerCase().replace(' ', '') === currentEntity
            );
        }

        setFilteredData(filtered);
    }, []);

    // Add event listeners to footer dropdowns
    useEffect(() => {
        const handleFilterChange = () => {
            let filtered = ProfileData;

            const periodSelect = document.getElementById('reporting-period');
            const pillarSelect = document.getElementById('pillar');
            const entitySelect = document.getElementById('legal-entity');

            const currentPeriod = periodSelect?.value || '';
            const currentPillar = pillarSelect?.value || '';
            const currentEntity = entitySelect?.value || '';

            setSelectedPeriod(currentPeriod);
            setSelectedPillar(currentPillar);
            setSelectedEntity(currentEntity);

            // Apply filters
            if (currentPeriod) {
                filtered = filtered.filter(item => {
                    const periodMap = {
                        'fy26q1': 'FY26 Q1',
                        'fy26q2': 'FY26 Q2', 
                        'fy26q3': 'FY26 Q3',
                        'fy26q4': 'FY26 Q4',
                        'fy25q1': 'FY25 Q1',
                        'fy25q2': 'FY25 Q2',
                        'fy25q3': 'FY25 Q3',
                        'fy25q4': 'FY25 Q4',
                        'fy24q1': 'FY24 Q1',
                        'fy24q2': 'FY24 Q2',
                        'fy24q3': 'FY24 Q3',
                        'fy24q4': 'FY24 Q4'
                    };
                    return item.reportingPeriod === periodMap[currentPeriod];
                });
            }

            if (currentPillar && currentPillar !== 'all') {
                filtered = filtered.filter(item => 
                    item.Pillar.toLowerCase().replace(' ', '-') === currentPillar
                );
            }

            if (currentEntity) {
                filtered = filtered.filter(item => 
                    item.Entity.toLowerCase().replace(' ', '') === currentEntity
                );
            }

            setFilteredData(filtered);
        };

        const periodSelect = document.getElementById('reporting-period');
        const pillarSelect = document.getElementById('pillar');
        const entitySelect = document.getElementById('legal-entity');

        periodSelect?.addEventListener('change', handleFilterChange);
        pillarSelect?.addEventListener('change', handleFilterChange);
        entitySelect?.addEventListener('change', handleFilterChange);

        return () => {
            periodSelect?.removeEventListener('change', handleFilterChange);
            pillarSelect?.removeEventListener('change', handleFilterChange);
            entitySelect?.removeEventListener('change', handleFilterChange);
        };
    }, []);

    // Calculate totals
    const totals = {
        grossExposure: filteredData.reduce((sum, item) => sum + parseFloat(item.RiskAssessment.grossExposure), 0).toFixed(1),
        grossPosition: filteredData.reduce((sum, item) => sum + parseFloat(item.RiskAssessment.grossPosition), 0).toFixed(1),
        residualExposure: filteredData.reduce((sum, item) => sum + parseFloat(item.RiskAssessment.residualExposure), 0).toFixed(1),
    };

    const getRiskLevel = (likelihood, exposure) => {
        const likelihoodNum = parseInt(likelihood);
        const exposureNum = parseFloat(exposure);
        
        if (likelihoodNum > 60 && exposureNum > 100) return 'High';
        if (likelihoodNum > 40 && exposureNum > 50) return 'Medium';
        return 'Low';
    };

    const getRiskLevelColor = (riskLevel) => {
        switch (riskLevel) {
            case 'High': return 'bg-red-100 text-red-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'Low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const handleRiskClick = (risk) => {
        navigate(`/risk/${risk.id}`, { state: { risk } });
    };

    const handleRowClick = (risk, event) => {
        if (!event.target.closest('button') && !event.target.closest('a')) {
            handleRiskClick(risk);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Risk Profile" />
            
            <main className="flex-1 pt-28 pb-28 px-4">
                <div className="max-w-7xl mx-auto">
                    <button 
                        onClick={() => navigate('/riskContents')}
                        className="flex items-center space-x-2 text-[#124E57] hover:text-[#15808D] mb-6 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back</span>
                    </button>
                    
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h2 className="text-2xl font-bold text-[#124E57] mb-4">Risk Profile Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h3 className="font-semibold text-[#124E57]">Total Risks</h3>
                                <p className="text-3xl font-bold text-gray-800">{filteredData.length}</p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                <h3 className="font-semibold text-[#124E57]">High Risks</h3>
                                <p className="text-3xl font-bold text-red-600">
                                    {filteredData.filter(item => getRiskLevel(item.RiskAssessment.Likelyhood, item.RiskAssessment.grossExposure) === 'High').length}
                                </p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                <h3 className="font-semibold text-[#124E57]">Medium Risks</h3>
                                <p className="text-3xl font-bold text-yellow-600">
                                    {filteredData.filter(item => getRiskLevel(item.RiskAssessment.Likelyhood, item.RiskAssessment.grossExposure) === 'Medium').length}
                                </p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <h3 className="font-semibold text-[#124E57]">Low Risks</h3>
                                <p className="text-3xl font-bold text-green-600">
                                    {filteredData.filter(item => getRiskLevel(item.RiskAssessment.Likelyhood, item.RiskAssessment.grossExposure) === 'Low').length}
                                </p>
                            </div>
                        </div>

                        {/* Active Filters Display */}
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-[#124E57] mb-2">Active Filters:</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedPeriod && (
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                                        Period: {selectedPeriod}
                                    </span>
                                )}
                                {selectedPillar && (
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                                        Pillar: {selectedPillar}
                                    </span>
                                )}
                                {selectedEntity && (
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                                        Entity: {selectedEntity}
                                    </span>
                                )}
                                {!selectedPeriod && !selectedPillar && !selectedEntity && (
                                    <span className="text-gray-600 text-sm">No filters applied - showing all risks</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Risk Profile Table */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-[#124E57] mb-6">Risk Profile Details</h2>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57] text-white">
                                        <th className="p-3 text-left">Risk Description</th>
                                        <th className="p-3 text-left">Reporting Period</th>
                                        <th className="p-3 text-left">Likelihood</th>
                                        <th className="p-3 text-left">Gross Exposure (Rm)</th>
                                        <th className="p-3 text-left">Gross Position (Rm)</th>
                                        <th className="p-3 text-left">Residual Exposure (Rm)</th>
                                        <th className="p-3 text-left">Risk Level</th>
                                        <th className="p-3 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item, index) => {
                                        const riskLevel = getRiskLevel(item.RiskAssessment.Likelyhood, item.RiskAssessment.grossExposure);
                                        const riskColor = getRiskLevelColor(riskLevel);
                                        
                                        return (
                                            <tr 
                                                key={item.id + '-' + index} 
                                                className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
                                                onClick={(e) => handleRowClick(item, e)}
                                            >
                                                <td className="p-3 font-medium text-gray-900">
                                                    <div className="flex items-center">
                                                        <span className="hover:text-blue-600 transition-colors">
                                                            {item.diskDescr}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="p-3 text-gray-700">{item.reportingPeriod}</td>
                                                <td className="p-3 text-gray-900 font-semibold">{item.RiskAssessment.Likelyhood}</td>
                                                <td className="p-3 text-gray-900">R {item.RiskAssessment.grossExposure}M</td>
                                                <td className="p-3 text-gray-700">R {item.RiskAssessment.grossPosition}M</td>
                                                <td className="p-3 text-gray-700">R {item.RiskAssessment.residualExposure}M</td>
                                                <td className="p-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${riskColor}`}>
                                                        {riskLevel}
                                                    </span>
                                                </td>
                                                <td className="p-3">
                                                    <button
                                                        onClick={() => handleRiskClick(item)}
                                                        className="px-3 py-1 bg-[#124E57] text-white rounded hover:bg-[#15808D] transition-colors text-sm"
                                                    >
                                                        View Details
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    
                                    {filteredData.length > 0 && (
                                        <tr className="bg-gray-100 font-bold border-t-2 border-gray-300">
                                            <td className="p-3 text-gray-900">Total</td>
                                            <td className="p-3 text-gray-700">-</td>
                                            <td className="p-3 text-gray-700">-</td>
                                            <td className="p-3 text-gray-900">R {totals.grossExposure}M</td>
                                            <td className="p-3 text-gray-700">R {totals.grossPosition}M</td>
                                            <td className="p-3 text-gray-700">R {totals.residualExposure}M</td>
                                            <td className="p-3 text-gray-700">-</td>
                                            <td className="p-3 text-gray-700">-</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            
                            {filteredData.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    No risks found matching the current filters.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            
            <ReportingFooter />
        </div>
    );
};

export default RiskProfile;