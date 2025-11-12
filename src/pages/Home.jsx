import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { LOGO, NAME } from '../data/images';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Group Governance Dashboard " />
            
            <main className="flex-1 pt-32 pb-28 px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-[#124E57] mb-6">
                        Welcome to Alexforbes Khusela
                    </h2>
                    <img 
                        className="w-20 h-20 mx-auto mb-2" 
                        src = {LOGO}
                        alt="Khusela-logo" 
                    />
                    <img 
                        className="w-[220px] h-16 mx-auto mb-4" 
                        src= {NAME} 
                        alt="Khusela-logo" 
                    />
                    <p className="text-lg text-gray-700 mb-8">
                        A comprehensive reporting platform for Enterprise Governance and Combined Assurance
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        <Link 
                            to="/riskContents" 
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary"
                        >
                            <h3 className="text-xl font-semibold text-[#124E57] mb-3">
                                Risk Reporting
                            </h3>
                            <p className="text-gray-600">
                                Access comprehensive risk reports and analytics with interactive dashboards
                            </p>
                        </Link>

                        <Link 
                            to="/auditContents" 
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary"
                        >
                            <h3 className="text-xl font-semibold text-[#124E57] mb-3">
                                Internal Audit Reporting
                            </h3>
                            <p className="text-gray-600">
                                Access comprehensive risk reports and analytics with interactive dashboards
                            </p>
                        </Link>
                        
                        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-500 mb-3">
                                Compliance Reporting
                            </h3>
                            <p className="text-gray-600">
                                Enterprise compliance monitoring (Coming Soon)
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-500 mb-3">
                                Internal (Financial) Control Reporting
                            </h3>
                            <p className="text-gray-600">
                                Enterprise Internal Control Reporoting (Coming Soon)
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-500 mb-3">
                                Combined Assurance Framework
                            </h3>
                            <p className="text-gray-600">
                                Enterprise Assurance through the four lines of defence
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-500 mb-3">
                                Governance Framework
                            </h3>
                            <p className="text-gray-600">
                                Enterprise governance, policies Management and more (Coming soon)
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default Home;