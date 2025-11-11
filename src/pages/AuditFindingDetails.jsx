import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuditFindingsDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { reviewName, findings } = location.state || {};

    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'High': return 'bg-red-100 text-red-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'Low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Open': return 'bg-red-100 text-red-800';
            case 'In Progress': return 'bg-yellow-100 text-yellow-800';
            case 'Closed': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const handleViewManagementActions = (finding) => {
        navigate('/management-actions', { 
            state: { 
                finding,
                reviewName
            }
        });
    };

    if (!reviewName || !findings) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <Header heading="Audit Findings Detail" />
                <main className="flex-1 pt-28 pb-28 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <p className="text-gray-500">No review selected or data not found.</p>
                        <button 
                            onClick={() => navigate('/audit-findings')}
                            className="mt-4 px-4 py-2 bg-[#124E57] text-white rounded hover:bg-[#15808D] transition-colors"
                        >
                            Back to Findings
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading={`Findings - ${reviewName}`} />
            
            <main className="flex-1 pt-28 pb-28 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate('/audit-findings')}
                        className="flex items-center space-x-2 text-[#124E57] hover:text-[#15808D] mb-6 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Findings Overview</span>
                    </button>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-[#124E57] mb-6">Findings for {reviewName}</h2>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57] text-white">
                                        <th className="p-3 text-left">Finding</th>
                                        <th className="p-3 text-left">Severity</th>
                                        <th className="p-3 text-left">Area</th>
                                        <th className="p-3 text-left">Status</th>
                                        <th className="p-3 text-left">Date Reported</th>
                                        <th className="p-3 text-left">Due Date</th>
                                        <th className="p-3 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {findings.map((finding) => (
                                        <tr key={finding.id} className="border-b hover:bg-gray-50">
                                            <td className="p-3 font-medium text-gray-900 max-w-xs">
                                                <div>
                                                    <div className="font-semibold">{finding.finding}</div>
                                                    <div className="text-sm text-gray-500 mt-1">{finding.description}</div>
                                                </div>
                                            </td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSeverityColor(finding.severity)}`}>
                                                    {finding.severity}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-700">{finding.area}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(finding.status)}`}>
                                                    {finding.status}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-700">{finding.dateReported}</td>
                                            <td className="p-3 text-gray-700">{finding.dueDate}</td>
                                            <td className="p-3">
                                                <button 
                                                    onClick={() => handleViewManagementActions(finding)}
                                                    className="px-3 py-1 bg-[#124E57] text-white rounded hover:bg-[#15808D] transition-colors text-sm"
                                                >
                                                    View Management Actions
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Summary Statistics */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                <h4 className="font-semibold text-red-800 mb-2">High Severity</h4>
                                <p className="text-2xl font-bold text-red-900">
                                    {findings.filter(f => f.severity === 'High').length}
                                </p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                <h4 className="font-semibold text-yellow-800 mb-2">Medium Severity</h4>
                                <p className="text-2xl font-bold text-yellow-900">
                                    {findings.filter(f => f.severity === 'Medium').length}
                                </p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <h4 className="font-semibold text-green-800 mb-2">Low Severity</h4>
                                <p className="text-2xl font-bold text-green-900">
                                    {findings.filter(f => f.severity === 'Low').length}
                                </p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                <h4 className="font-semibold text-blue-800 mb-2">Open Findings</h4>
                                <p className="text-2xl font-bold text-blue-900">
                                    {findings.filter(f => f.status !== 'Closed').length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default AuditFindingsDetail;