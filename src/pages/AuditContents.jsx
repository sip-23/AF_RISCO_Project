import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TableOfContents from '../components/TableOfContents';

const AuditContents = () => {
    const navigate = useNavigate();
    
    const auditItems = [
        { title: 'Audit Committee Dashboard', path: '/audit-dashboard' },
        { title: 'Internal Audit Plan', path: '/audit-plan' },
        { title: 'Audit Findings & Recommendations', path: '/audit-findings' },
        { title: 'Follow-up Actions', path: '/audit-followup' },
        { title: 'Audit Coverage & Scope', path: '/audit-coverage' },
        { title: 'Management Response Tracking', path: '/management-response' }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Internal Audit Reporting" />
            
            <main className="flex-1 pt-28 pb-28 px-4">
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center space-x-2 text-[#124E57] hover:text-[#15808D] mb-6 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                </button>
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#124E57] mb-2">
                        Internal Audit Overview
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Access comprehensive internal audit reports, findings, and management response tracking.
                    </p>
                </div>
                
                <TableOfContents items={auditItems} />
            </main>
            
            <Footer />
        </div>
    );
};

export default AuditContents;