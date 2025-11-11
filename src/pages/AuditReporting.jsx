import React from 'react';
import Header from '../components/Header';
import ReportingFooter from '../components/ReportingFooter';
import Dashboard from '../components/Dashboard';

const AuditReporting = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Risk Reporting Dashboard" />
            
            <main className="flex-1 pt-28 pb-28 px-4">
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold text-[#124E57] mb-2">
                        Intenal Audit Overview
                    </h2>
                    <p className="text-gray-600">
                        Navigate through the slides using the carousel below
                    </p>
                </div>
                
                <Dashboard />
            </main>
            
            <ReportingFooter />
        </div>
    );
};

export default AuditReporting;