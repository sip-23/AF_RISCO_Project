// src/pages/AuditDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ReportingFooter from '../components/ReportingFooter';

const AuditDashboard = () => {
    const navigate = useNavigate();

    const auditStats = [
        { title: 'Total Audits', value: '24', color: 'bg-blue-500' },
        { title: 'In Progress', value: '8', color: 'bg-yellow-500' },
        { title: 'Completed', value: '12', color: 'bg-green-500' },
        { title: 'High Risk Findings', value: '5', color: 'bg-red-500' }
    ];

    const recentActivities = [
        { id: 1, activity: 'IT Infrastructure Audit', status: 'Completed', date: '2024-01-15' },
        { id: 2, activity: 'Financial Controls Review', status: 'In Progress', date: '2024-01-10' },
        { id: 3, activity: 'Compliance Audit', status: 'Planned', date: '2024-01-20' }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Audit Committee Dashboard" />
            
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

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {auditStats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mb-4`}>
                                    <span className="text-white font-bold text-lg">{stat.value}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{stat.title}</h3>
                                <p className="text-gray-600 text-sm">Current status</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Recent Activities */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-[#124E57] mb-4">Recent Audit Activities</h3>
                            <div className="space-y-4">
                                {recentActivities.map(activity => (
                                    <div key={activity.id} className="flex justify-between items-center p-3 border rounded-lg">
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{activity.activity}</h4>
                                            <p className="text-sm text-gray-600">{activity.date}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            activity.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                            activity.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-blue-100 text-blue-800'
                                        }`}>
                                            {activity.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-[#124E57] mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button 
                                    onClick={() => navigate('/audit-plan')}
                                    className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <h4 className="font-semibold text-gray-800">View Audit Plan</h4>
                                    <p className="text-sm text-gray-600">Current year audit schedule</p>
                                </button>
                                <button 
                                    onClick={() => navigate('/audit-findings')}
                                    className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <h4 className="font-semibold text-gray-800">Audit Findings</h4>
                                    <p className="text-sm text-gray-600">Review recent findings</p>
                                </button>
                                <button 
                                    onClick={() => navigate('/management-response')}
                                    className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <h4 className="font-semibold text-gray-800">Management Responses</h4>
                                    <p className="text-sm text-gray-600">Track management actions</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <ReportingFooter />
        </div>
    );
};

export default AuditDashboard;