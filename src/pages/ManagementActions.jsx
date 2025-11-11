import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ReportingFooter from '../components/ReportingFooter';

const ManagementActions = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { finding, reviewName } = location.state || {};

    const getStatusColor = (status) => {
        switch (status) {
            case 'Open': return 'bg-red-100 text-red-800';
            case 'In Progress': return 'bg-yellow-100 text-yellow-800';
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'Closed': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getProgressColor = (progress) => {
        if (progress >= 80) return 'bg-green-500';
        if (progress >= 50) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    if (!finding || !reviewName) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <Header heading="Management Actions" />
                <main className="flex-1 pt-28 pb-28 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-gray-500">No finding selected or data not found.</p>
                        <button 
                            onClick={() => navigate('/audit-findings')}
                            className="mt-4 px-4 py-2 bg-[#124E57] text-white rounded hover:bg-[#15808D] transition-colors"
                        >
                            Back to Findings
                        </button>
                    </div>
                </main>
                <ReportingFooter />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Management Actions" />
            
            <main className="flex-1 pt-28 pb-28 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate('/audit-findings-detail', { state: { reviewName, findings: [finding] } })}
                        className="flex items-center space-x-2 text-[#124E57] hover:text-[#15808D] mb-6 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Finding Details</span>
                    </button>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-[#124E57] mb-2">Management Actions</h2>
                            <p className="text-gray-600">Review: {reviewName}</p>
                            <p className="text-gray-600">Finding: {finding.finding}</p>
                        </div>

                        {/* Finding Details */}
                        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Finding Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p><strong>Description:</strong> {finding.description}</p>
                                    <p><strong>Recommendation:</strong> {finding.recommendation}</p>
                                </div>
                                <div>
                                    <p><strong>Severity:</strong> 
                                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(finding.severity)}`}>
                                            {finding.severity}
                                        </span>
                                    </p>
                                    <p><strong>Status:</strong> 
                                        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(finding.status)}`}>
                                            {finding.status}
                                        </span>
                                    </p>
                                    <p><strong>Due Date:</strong> {finding.dueDate}</p>
                                </div>
                            </div>
                        </div>

                        {/* Management Actions Table */}
                        <h3 className="text-xl font-bold text-[#124E57] mb-4">Management Actions</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57] text-white">
                                        <th className="p-3 text-left">Action</th>
                                        <th className="p-3 text-left">Responsible</th>
                                        <th className="p-3 text-left">Due Date</th>
                                        <th className="p-3 text-left">Status</th>
                                        <th className="p-3 text-left">Progress</th>
                                        <th className="p-3 text-left">Last Updated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {finding.managementActions && finding.managementActions.length > 0 ? (
                                        finding.managementActions.map((action) => (
                                            <tr key={action.id} className="border-b hover:bg-gray-50">
                                                <td className="p-3 font-medium text-gray-900">{action.action}</td>
                                                <td className="p-3 text-gray-700">{action.responsible}</td>
                                                <td className="p-3 text-gray-700">{action.dueDate}</td>
                                                <td className="p-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(action.status)}`}>
                                                        {action.status}
                                                    </span>
                                                </td>
                                                <td className="p-3">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-24 bg-gray-200 rounded-full h-2">
                                                            <div 
                                                                className={`h-2 rounded-full ${getProgressColor(action.progress)}`}
                                                                style={{ width: `${action.progress}%` }}
                                                            ></div>
                                                        </div>
                                                        <span className="text-sm text-gray-700">{action.progress}%</span>
                                                    </div>
                                                </td>
                                                <td className="p-3 text-gray-700">{action.lastUpdated || 'N/A'}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="p-3 text-center text-gray-500">
                                                No management actions defined for this finding.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            
            <ReportingFooter />
        </div>
    );
};

export default ManagementActions;