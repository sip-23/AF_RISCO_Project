import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TableOfContents from '../components/TableOfContents';

const RiskContents = () => {
    const navigate = useNavigate();

    const riskItems = [
        { title: 'Executive Summary', path: '/reporting' },
        { title: 'Risk Profile', path: '/risk-profile' },
        { title: 'Risk Exposure/Position - Basis for Computation', path: '/risk-exposure' },
        { title: 'Risk Category Analysis', path: '/risk-category-analysis' },
        { title: 'Risk Appetite Dashboard', path: '/risk-appetite' },
        { title: 'Emerging Risks', path: '/emerging-risks' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Risk Reporting Dashboard" />
            
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
                        Risk Management Overview
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Navigate through the table of contents to access detailed risk information, analytics, and comprehensive reporting dashboards.
                    </p>
                </div>
                
                <TableOfContents items={riskItems} />
            </main>
            
            <Footer />
        </div>
    );
};

export default RiskContents;