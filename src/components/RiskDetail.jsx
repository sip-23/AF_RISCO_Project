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

                    {/* Risk Appetite Table */}
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold text-[#124E57] mb-4">Risk Appetite</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57]">
                                        {/* <th className="p-3 text-left font-semibold text-white border-b">Measure</th> */}
                                        <th className="p-3 text-left font-semibold text-white border-b">Expression</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Type</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Explanation</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">RAG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(risk.RiskAppetite).map(([key, measure]) => (
                                        <tr key={key} className="border-b">
                                            {/* <td className="p-3 font-medium text-gray-700">Measure {measure.raid}</td> */}
                                            <td className="p-3 text-gray-600">{measure.expressionRisk}</td>
                                            <td className="p-3 text-gray-600">{measure.type}</td>
                                            <td className="p-3 text-gray-600">{measure.explaination}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getRAGColor(measure.rag)}`}>
                                                    {measure.rag}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Early Warning Signals Table */}
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h3 className="text-xl font-bold text-[#124E57] mb-4">Early Warning Signals</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57]">
                                        {/* <th className="p-3 text-left font-semibold text-white border-b">Signal ID</th> */}
                                        <th className="p-3 text-left font-semibold text-white border-b">Key Risk Indicator</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">RAG</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Comments</th>
                                        <th className="p-3 text-left font-semibold text-white border-b">Future Trend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(risk.earlyWaringSignals).map(([key, signal]) => (
                                        <tr key={key} className="border-b">
                                            {/* <td className="p-3 font-medium text-gray-700">{signal.ewsid}</td> */}
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
                                        {/* <th className="p-3 text-left font-semibold text-white border-b">Activity</th> */}
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
                                            {/* <td className="p-3 font-medium text-gray-700">Activity {activity.cid}</td> */}
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