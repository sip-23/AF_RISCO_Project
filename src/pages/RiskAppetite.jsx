import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RiskAppetite = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Risk Appetite Dashboard" />
            <main className="flex-1 pt-28 pb-28 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate('/riskContents')}
                        className="flex items-center space-x-2 text-[#124E57] hover:text-[#15808D] mb-6 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back </span>
                    </button>
                    <h2 className="text-2xl font-bold text-[#124E57] mb-4">Risk Appetite Dashboard</h2>
                    <p className="text-gray-600">Risk appetite dashboard content coming soon...</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RiskAppetite;