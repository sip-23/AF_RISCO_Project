import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ReportingFooter from '../components/ReportingFooter';
import { exposureData } from "../data/exposureData";

const RiskExposure = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [selectedPillar, setSelectedPillar] = useState('');
    const [selectedEntity, setSelectedEntity] = useState('');
    const navigate = useNavigate();

    // Initialize filtered data
    useEffect(() => {
        setFilteredData(exposureData);
    }, []);

    // Add event listeners to footer dropdowns for filtering
    useEffect(() => {
        const handleFilterChange = () => {
            let filtered = exposureData;

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

        // Add event listeners to footer dropdowns
        const periodSelect = document.getElementById('reporting-period');
        const pillarSelect = document.getElementById('pillar');
        const entitySelect = document.getElementById('legal-entity');

        periodSelect?.addEventListener('change', handleFilterChange);
        pillarSelect?.addEventListener('change', handleFilterChange);
        entitySelect?.addEventListener('change', handleFilterChange);

        // Initial filter check
        handleFilterChange();

        return () => {
            periodSelect?.removeEventListener('change', handleFilterChange);
            pillarSelect?.removeEventListener('change', handleFilterChange);
            entitySelect?.removeEventListener('change', handleFilterChange);
        };
    }, [exposureData]);

    // Calculate totals based on filtered data
    const totals = {
        grossExposure: filteredData.reduce((sum, item) => sum + parseFloat(item.grossExposure), 0).toFixed(1),
        grossPosition: filteredData.reduce((sum, item) => sum + parseFloat(item.grossPosition), 0).toFixed(1),
        residualExposure: filteredData.reduce((sum, item) => sum + parseFloat(item.residualExposure), 0).toFixed(1),
        grossExposureVariance: filteredData.length > 0 ? calculateOverallVariance() : '+0.0%'
    };

    function calculateOverallVariance() {
        if (filteredData.length === 0) return '+0.0%';
        
        const totalGrossExposure = filteredData.reduce((sum, item) => sum + parseFloat(item.grossExposure), 0);
        const totalGrossPosition = filteredData.reduce((sum, item) => sum + parseFloat(item.grossPosition), 0);
        
        if (totalGrossPosition === 0) return '+0.0%';
        
        const variance = ((totalGrossExposure - totalGrossPosition) / totalGrossPosition) * 100;
        return variance >= 0 ? `+${variance.toFixed(1)}%` : `${variance.toFixed(1)}%`;
    }

    // Get current reporting period display
    const getCurrentReportingPeriod = () => {
        if (filteredData.length === 0) return 'No data available';
        if (selectedPeriod) {
            return filteredData[0]?.Date || 'Period not found';
        }
        return 'Multiple Periods';
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Risk Exposure Analysis" />
            
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
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-[#124E57] mb-6">Risk Exposure by Category</h2>
                        
                        {/* Active Filters Display */}
                        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#124E57]">
                                        Reporting Period: {getCurrentReportingPeriod()}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
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
                                            <span className="text-gray-600 text-sm">No filters applied - showing all data</span>
                                        )}
                                    </div>
                                </div>
                                <div className="text-sm text-gray-600">
                                    Showing {filteredData.length} of {exposureData.length} records
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57] text-white">
                                        <th className="p-3 text-left">Risk Category</th>
                                        <th className="p-3 text-left">Reporting Period</th>
                                        <th className="p-3 text-left">Pillar</th>
                                        <th className="p-3 text-left">Entity</th>
                                        <th className="p-3 text-left">Gross Exposure (Rm)</th>
                                        <th className="p-3 text-left">Gross Position (Rm)</th>
                                        <th className="p-3 text-left">Residual Exposure (Rm)</th>
                                        <th className="p-3 text-left">Gross Exposure Variance (%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-50">
                                            <td className="p-3 font-medium text-gray-900">{item.category}</td>
                                            <td className="p-3 text-gray-700">{item.reportingPeriod}</td>
                                            <td className="p-3 text-gray-700">{item.Pillar}</td>
                                            <td className="p-3 text-gray-700">{item.Entity}</td>
                                            <td className="p-3 text-gray-900 font-semibold">R {item.grossExposure}M</td>
                                            <td className="p-3 text-gray-700">R {item.grossPosition}M</td>
                                            <td className="p-3 text-gray-700">R {item.residualExposure}M</td>
                                            <td className={`p-3 font-semibold ${
                                                item.grossExposureVariance.startsWith('+') 
                                                    ? 'text-green-600' 
                                                    : 'text-red-600'
                                            }`}>
                                                {item.grossExposureVariance}
                                            </td>
                                        </tr>
                                    ))}
                                    
                                    {/* Total Row */}
                                    {filteredData.length > 0 && (
                                        <tr className="bg-gray-100 font-bold border-t-2 border-gray-300">
                                            <td className="p-3 text-gray-900">Total</td>
                                            <td className="p-3 text-gray-700">-</td>
                                            <td className="p-3 text-gray-700">-</td>
                                            <td className="p-3 text-gray-700">-</td>
                                            <td className="p-3 text-gray-900">R {totals.grossExposure}M</td>
                                            <td className="p-3 text-gray-700">R {totals.grossPosition}M</td>
                                            <td className="p-3 text-gray-700">R {totals.residualExposure}M</td>
                                            <td className={`p-3 ${
                                                totals.grossExposureVariance.startsWith('+') 
                                                    ? 'text-green-600' 
                                                    : 'text-red-600'
                                            }`}>
                                                {totals.grossExposureVariance}
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            
                            {filteredData.length === 0 && (
                                <div className="text-center py-8 text-gray-500">
                                    No risk exposure data found matching the current filters.
                                </div>
                            )}
                        </div>

                        {/* Summary Statistics */}
                        {filteredData.length > 0 && (
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <h4 className="text-sm font-semibold text-blue-800 mb-1">Total Gross Exposure</h4>
                                    <p className="text-2xl font-bold text-blue-900">R {totals.grossExposure}M</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <h4 className="text-sm font-semibold text-green-800 mb-1">Total Residual Exposure</h4>
                                    <p className="text-2xl font-bold text-green-900">R {totals.residualExposure}M</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                    <h4 className="text-sm font-semibold text-purple-800 mb-1">Net Variance</h4>
                                    <p className="text-2xl font-bold text-purple-900">{totals.grossExposureVariance}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            
            <ReportingFooter />
        </div>
    );
};

export default RiskExposure;