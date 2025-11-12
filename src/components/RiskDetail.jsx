import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';

const RiskDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { risk } = location.state || {};

    if (!risk) {
        return (
            <div className="min-h-screen bg-background">
                <Header heading="Risk Details" />
                <div className="flex-1 pt-28 pb-28 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-lg text-gray-600 mb-4">Risk not found or no data available</p>
                        <button 
                            onClick={() => navigate('/risk-profile')}
                            className="px-4 py-2 bg-[#124E57] text-white rounded hover:bg-[#15808D]"
                        >
                            Back to Risk Profile
                        </button>
                    </div>
                </div>
            </div>
        );
    }

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

    const getRAGColor = (rag) => {
        switch (rag) {
            case 'R': return 'bg-red-100 text-red-800 border-red-300';
            case 'A': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'G': return 'bg-green-100 text-green-800 border-green-300';
            default: return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    // New functions for the enhanced risk appetite table
    const getExpressionColor = (expression) => {
        switch (expression) {
            case 'Seek': return 'bg-blue-100 text-blue-800';
            case 'Remain Within': return 'bg-green-100 text-green-800';
            case 'Avoid': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'above': return 'bg-green-100 text-green-800 border-green-300';
            case 'within': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'below': return 'bg-red-100 text-red-800 border-red-300';
            default: return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'above': return '🟢';
            case 'within': return '🟡';
            case 'below': return '🔴';
            default: return '⚪';
        }
    };

    // Transform risk appetite data to match the desired format
    const transformRiskAppetiteData = () => {
        return Object.entries(risk.RiskAppetite).map(([key, measure], index) => ({
            id: index + 1,
            category: risk.Pillar || 'General',
            riskAppetiteMeasure: measure.explaination || 'Risk Appetite Measure',
            expressionOfRisk: measure.expressionRisk || 'Remain Within',
            r: measure.rag === 'R' ? 'Threshold' : '-',
            a: measure.rag === 'A' ? 'Acceptable Range' : '-',
            g: measure.rag === 'G' ? 'Target' : '-',
            currentValue: 'N/A', // You can add actual current values if available
            status: getStatusFromRAG(measure.rag)
        }));
    };

    const getStatusFromRAG = (rag) => {
        switch (rag) {
            case 'R': return 'below';
            case 'A': return 'within';
            case 'G': return 'above';
            default: return 'neutral';
        }
    };

    const riskAppetiteData = transformRiskAppetiteData();
    const riskLevel = getRiskLevel(risk.RiskAssessment.Likelyhood, risk.RiskAssessment.grossExposure);
    const riskColor = getRiskLevelColor(riskLevel);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Risk Details" />
            
            <main className="flex-1 pt-28 pb-28 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate('/risk-profile')}
                        className="flex items-center space-x-2 text-[#124E57] hover:text-[#15808D] mb-6 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Risk Profile</span>
                    </button>

                    {/* Basic Risk Information */}
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-[#124E57] mb-2">{risk.riskTitle}</h1>
                                <p className="text-gray-600 text-lg">{risk.diskDescr}</p>
                            </div>
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${riskColor}`}>
                                {riskLevel} Risk
                            </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-gray-700">Business Objective</h4>
                                    <p className="text-gray-600">{risk.businessObj}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Strategic Initiative</h4>
                                    <p className="text-gray-600">{risk.StrategicInit}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-gray-700">Risk Owner</h4>
                                    <p className="text-gray-600">{risk.owner}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Reporting Period</h4>
                                    <p className="text-gray-600">{risk.reportingPeriod}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-gray-700">Pillar</h4>
                                    <p className="text-gray-600">{risk.Pillar}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700">Entity</h4>
                                    <p className="text-gray-600">{risk.Entity}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Risk Assessment Table */}
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold text-[#124E57] mb-4">Risk Assessment</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57]">
                                        <th className="p-3 text-left font-semibold text-white border-b">Assessment Area</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium text-gray-700">Financial Impact</td>
                                        <td className="p-3 text-gray-600">{risk.RiskAssessment.financial}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium text-gray-700">Regulatory Impact</td>
                                        <td className="p-3 text-gray-600">{risk.RiskAssessment.regulatory}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium text-gray-700">Reputational Impact</td>
                                        <td className="p-3 text-gray-600">{risk.RiskAssessment.reputational}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium text-gray-700">Likelihood</td>
                                        <td className="p-3 text-gray-600">{risk.RiskAssessment.Likelyhood}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium text-gray-700">Velocity</td>
                                        <td className="p-3 text-gray-600">{risk.RiskAssessment.velocity}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium text-gray-700">Gross Exposure</td>
                                        <td className="p-3 text-gray-600">R {risk.RiskAssessment.grossExposure}M</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium text-gray-700">Gross Position</td>
                                        <td className="p-3 text-gray-600">R {risk.RiskAssessment.grossPosition}M</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium text-gray-700">Residual Exposure</td>
                                        <td className="p-3 text-gray-600">R {risk.RiskAssessment.residualExposure}M</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Enhanced Risk Appetite Table */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-6">
                        <div className="p-4 border-b border-gray-200">
                            <h3 className="text-xl font-bold text-[#124E57]">
                                Risk Appetite Measures
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57] text-white">
                                        <th className="p-3 text-left font-semibold">Category</th>
                                        <th className="p-3 text-left font-semibold">Risk Appetite Measure</th>
                                        <th className="p-3 text-left font-semibold">Expression of Risk</th>
                                        <th className="p-3 text-center font-semibold bg-red-200 text-red-800">R</th>
                                        <th className="p-3 text-center font-semibold bg-yellow-200 text-yellow-800">A</th>
                                        <th className="p-3 text-center font-semibold bg-green-200 text-green-800">G</th>
                                        <th className="p-3 text-center font-semibold">Current Value</th>
                                        <th className="p-3 text-center font-semibold">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {riskAppetiteData.map((item) => (
                                        <tr key={item.id} className="border-b hover:bg-gray-50">
                                            <td className="p-3 font-medium text-gray-900">
                                                {item.category}
                                            </td>
                                            <td className="p-3 text-gray-700 max-w-xs">
                                                <div className="truncate" title={item.riskAppetiteMeasure}>
                                                    {item.riskAppetiteMeasure}
                                                </div>
                                            </td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getExpressionColor(item.expressionOfRisk)}`}>
                                                    {item.expressionOfRisk}
                                                </span>
                                            </td>
                                            <td className="p-3 text-center text-gray-700 font-mono bg-red-50">
                                                {item.r}
                                            </td>
                                            <td className="p-3 text-center text-gray-700 font-mono bg-yellow-50">
                                                {item.a}
                                            </td>
                                            <td className="p-3 text-center text-gray-700 font-mono bg-green-50">
                                                {item.g}
                                            </td>
                                            <td className="p-3 text-center font-semibold text-gray-900">
                                                {item.currentValue}
                                            </td>
                                            <td className="p-3 text-center">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(item.status)}`}>
                                                    {getStatusIcon(item.status)} {item.status?.toUpperCase() || 'N/A'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Legend for Risk Appetite Table */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
                        <h4 className="font-semibold text-gray-700 mb-3">Risk Appetite Legend</h4>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🟢</span>
                                <div>
                                    <div className="font-medium text-green-800">Above Target</div>
                                    <div className="text-sm text-gray-600">Performance exceeds appetite range</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🟡</span>
                                <div>
                                    <div className="font-medium text-yellow-800">Within Appetite</div>
                                    <div className="text-sm text-gray-600">Within acceptable risk appetite range</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🔴</span>
                                <div>
                                    <div className="font-medium text-red-800">Below Target</div>
                                    <div className="text-sm text-gray-600">Below minimum appetite threshold</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">⚪</span>
                                <div>
                                    <div className="font-medium text-gray-800">No Data</div>
                                    <div className="text-sm text-gray-600">Data not available for period</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Early Warning Signals Table */}
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold text-[#124E57] mb-4">Early Warning Signals</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57]">
                                        <th className="p-3 text-left font-semibold text-white border-b">Key Risk Indicator</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">RAG</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Comments</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Future Trend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(risk.earlyWaringSignals).map(([key, signal]) => (
                                        <tr key={key} className="border-b">
                                            <td className="p-3 text-gray-600">{signal.keyRiskIndicator}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getRAGColor(signal.rag)}`}>
                                                    {signal.rag}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-600">{signal.comments}</td>
                                            <td className="p-3 text-gray-600">{signal.futuretrend}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Key Risk Response Activities */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-[#124E57] mb-4">Key Risk Response Activities</h3>
                        
                        {/* Potential Root Causes */}
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-700 mb-3">Potential Root Causes</h4>
                            <div className="space-y-2">
                                {Object.entries(risk.keyRiskResponseActivity)
                                    .filter(([key]) => key.startsWith('Potentialrootcause'))
                                    .map(([key, cause]) => (
                                        <div key={key} className="flex items-start space-x-2">
                                            <span className="text-gray-500 mt-1">•</span>
                                            <p className="text-gray-600">{cause}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Control Activities Table */}
                        <h4 className="text-lg font-semibold text-gray-700 mb-3">Control Activities</h4>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57]">
                                        <th className="p-3 text-left font-semibold text-white border-b">Description</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Nature of Control</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Control Owner</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">RAG</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Corrective Actions</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(risk.keyRiskResponseActivity.ControlActivity).map(([key, activity]) => (
                                        <tr key={key} className="border-b">
                                            <td className="p-3 text-gray-600">{activity.descripControlActivity}</td>
                                            <td className="p-3 text-gray-600">{activity.natureofControl}</td>
                                            <td className="p-3 text-gray-600">{activity.ControlOwner}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getRAGColor(activity.rag)}`}>
                                                    {activity.rag}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-600">{activity.correctiveActions}</td>
                                            <td className="p-3 text-gray-600">{activity.dueDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RiskDetail;