// src/pages/AuditPlan.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuditPlan = () => {
    const navigate = useNavigate();

    const auditPlanData = [
        {
            id: 1,
            area: 'IT Infrastructure',
            priority: 'High',
            scheduledDate: '2024-02-01',
            status: 'Planned',
            auditor: 'John Smith',
            estimatedDays: 10
        },
        {
            id: 2,
            area: 'Financial Controls',
            priority: 'High',
            scheduledDate: '2024-02-15',
            status: 'In Progress',
            auditor: 'Sarah Johnson',
            estimatedDays: 15
        },
        {
            id: 3,
            area: 'HR Compliance',
            priority: 'Medium',
            scheduledDate: '2024-03-01',
            status: 'Planned',
            auditor: 'Mike Davis',
            estimatedDays: 8
        },
        {
            id: 4,
            area: 'Supply Chain',
            priority: 'Medium',
            scheduledDate: '2024-03-20',
            status: 'Planned',
            auditor: 'Lisa Wang',
            estimatedDays: 12
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'In Progress': return 'bg-yellow-100 text-yellow-800';
            case 'Planned': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High': return 'bg-red-100 text-red-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'Low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Internal Audit Plan" />
            
            <main className="flex-1 pt-28 pb-28 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate('/auditContents')}
                        className="flex items-center space-x-2 text-[#124E57] hover:text-[#15808D] mb-6 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Audit Contents</span>
                    </button>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-[#124E57] mb-6">FY2024 Audit Plan</h2>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#124E57] text-white">
                                        <th className="p-3 text-left">Audit Area</th>
                                        <th className="p-3 text-left">Priority</th>
                                        <th className="p-3 text-left">Scheduled Date</th>
                                        <th className="p-3 text-left">Status</th>
                                        <th className="p-3 text-left">Lead Auditor</th>
                                        <th className="p-3 text-left">Est. Days</th>
                                        <th className="p-3 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {auditPlanData.map((audit) => (
                                        <tr key={audit.id} className="border-b hover:bg-gray-50">
                                            <td className="p-3 font-medium text-gray-900">{audit.area}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(audit.priority)}`}>
                                                    {audit.priority}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-700">{audit.scheduledDate}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(audit.status)}`}>
                                                    {audit.status}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-700">{audit.auditor}</td>
                                            <td className="p-3 text-gray-700">{audit.estimatedDays}</td>
                                            <td className="p-3">
                                                <button className="px-3 py-1 bg-[#124E57] text-white rounded hover:bg-[#15808D] transition-colors text-sm">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Summary Section */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                <h4 className="font-semibold text-blue-800 mb-2">Total Planned Audits</h4>
                                <p className="text-2xl font-bold text-blue-900">4</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                <h4 className="font-semibold text-yellow-800 mb-2">In Progress</h4>
                                <p className="text-2xl font-bold text-yellow-900">1</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <h4 className="font-semibold text-green-800 mb-2">Completed</h4>
                                <p className="text-2xl font-bold text-green-900">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default AuditPlan;