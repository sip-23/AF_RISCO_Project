import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ReportingFooter from '../components/ReportingFooter';

const RiskAppetite = () => {
    const navigate = useNavigate();
    
    // Remove the local quarter state since we'll use the footer filter
    const [selectedQuarter, setSelectedQuarter] = useState('2024.12-31 (FY24(4))');

    // Mock data with all requested risk categories
    const riskAppetiteData = [
        // Business Task (existing)
        {
            id: 1,
            category: 'Business Task',
            riskAppetiteMeasure: 'Normalized return on quality (rolling tips 12 months)',
            expressionOfRisk: 'Seek',
            r: '-0.02',
            a: '0.08-0.12',
            g: '82.12',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '-', status: 'below' },
                '2023.09-30 (FY23(3))': { value: '-', status: 'below' },
                '2023.12-31 (FY23(4))': { value: '-', status: 'below' },
                '2024.03-31 (FY25(1))': { value: 'Below', status: 'below' },
                '2024.06-30 (FY24(2))': { value: 'Below', status: 'below' },
                '2024.09-30 (FY24(3))': { value: '-15.00/11', status: 'below' },
                '2024.12-31 (FY24(4))': { value: 'Below', status: 'below' }
            }
        },
        {
            id: 2,
            category: 'Business Task',
            riskAppetiteMeasure: 'Growth in net revenue (yoy)',
            expressionOfRisk: 'Seek',
            r: '-0.05',
            a: '0.05-0.09',
            g: '56.99',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '-', status: 'neutral' },
                '2023.09-30 (FY23(3))': { value: '-', status: 'neutral' },
                '2023.12-31 (FY23(4))': { value: '0.13', status: 'above' },
                '2024.03-31 (FY25(1))': { value: '0.12', status: 'above' },
                '2024.06-30 (FY24(2))': { value: '0.09', status: 'within' },
                '2024.09-30 (FY24(3))': { value: '0.11', status: 'above' },
                '2024.12-31 (FY24(4))': { value: '0.11', status: 'above' }
            }
        },

        // Financial (existing)
        {
            id: 3,
            category: 'Financial',
            riskAppetiteMeasure: 'Capital adequacy ratio',
            expressionOfRisk: 'Remain Within',
            r: '8%',
            a: '10-12%',
            g: '14%',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '13.2%', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '12.8%', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '13.5%', status: 'within' },
                '2024.03-31 (FY25(1))': { value: '12.1%', status: 'within' },
                '2024.06-30 (FY24(2))': { value: '11.9%', status: 'within' },
                '2024.09-30 (FY24(3))': { value: '11.2%', status: 'within' },
                '2024.12-31 (FY24(4))': { value: '10.8%', status: 'within' }
            }
        },

        // Market Risk
        {
            id: 4,
            category: 'Market Risk',
            riskAppetiteMeasure: 'Value at Risk (VaR) - 99% confidence',
            expressionOfRisk: 'Avoid',
            r: '>50M',
            a: '20-40M',
            g: '<10M',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '35.2M', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '28.7M', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '42.1M', status: 'within' },
                '2024.03-31 (FY25(1))': { value: '38.9M', status: 'within' },
                '2024.06-30 (FY24(2))': { value: '45.2M', status: 'above' },
                '2024.09-30 (FY24(3))': { value: '32.8M', status: 'within' },
                '2024.12-31 (FY24(4))': { value: '29.5M', status: 'within' }
            }
        },
        {
            id: 5,
            category: 'Market Risk',
            riskAppetiteMeasure: 'Trading limit utilization',
            expressionOfRisk: 'Remain Within',
            r: '>95%',
            a: '70-90%',
            g: '<60%',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '82%', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '78%', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '88%', status: 'within' },
                '2024.03-31 (FY25(1))': { value: '92%', status: 'above' },
                '2024.06-30 (FY24(2))': { value: '85%', status: 'within' },
                '2024.09-30 (FY24(3))': { value: '79%', status: 'within' },
                '2024.12-31 (FY24(4))': { value: '83%', status: 'within' }
            }
        },

        // Credit Risk
        {
            id: 6,
            category: 'Credit Risk',
            riskAppetiteMeasure: 'Non-performing loans ratio',
            expressionOfRisk: 'Avoid',
            r: '>8%',
            a: '3-6%',
            g: '<2%',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '4.2%', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '4.8%', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '5.1%', status: 'within' },
                '2024.03-31 (FY25(1))': { value: '5.6%', status: 'within' },
                '2024.06-30 (FY24(2))': { value: '6.2%', status: 'within' },
                '2024.09-30 (FY24(3))': { value: '6.8%', status: 'above' },
                '2024.12-31 (FY24(4))': { value: '6.5%', status: 'above' }
            }
        },
        {
            id: 7,
            category: 'Credit Risk',
            riskAppetiteMeasure: 'Probability of default (corporate portfolio)',
            expressionOfRisk: 'Avoid',
            r: '>5%',
            a: '1-3%',
            g: '<0.5%',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '2.1%', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '2.4%', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '2.8%', status: 'within' },
                '2024.03-31 (FY25(1))': { value: '3.1%', status: 'within' },
                '2024.06-30 (FY24(2))': { value: '3.4%', status: 'above' },
                '2024.09-30 (FY24(3))': { value: '3.2%', status: 'above' },
                '2024.12-31 (FY24(4))': { value: '2.9%', status: 'within' }
            }
        },

        // Regulatory Risk
        {
            id: 8,
            category: 'Regulatory Risk',
            riskAppetiteMeasure: 'Regulatory compliance breaches',
            expressionOfRisk: 'Avoid',
            r: '>10',
            a: '1-5',
            g: '0',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '3', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '2', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '4', status: 'within' },
                '2024.03-31 (FY25(1))': { value: '6', status: 'above' },
                '2024.06-30 (FY24(2))': { value: '3', status: 'within' },
                '2024.09-30 (FY24(3))': { value: '2', status: 'within' },
                '2024.12-31 (FY24(4))': { value: '1', status: 'within' }
            }
        },
        {
            id: 9,
            category: 'Regulatory Risk',
            riskAppetiteMeasure: 'Regulatory capital buffer',
            expressionOfRisk: 'Remain Within',
            r: '<1%',
            a: '2-4%',
            g: '>5%',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '3.2%', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '3.5%', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '3.8%', status: 'within' },
                '2024.03-31 (FY25(1))': { value: '2.9%', status: 'within' },
                '2024.06-30 (FY24(2))': { value: '2.6%', status: 'within' },
                '2024.09-30 (FY24(3))': { value: '2.3%', status: 'within' },
                '2024.12-31 (FY24(4))': { value: '2.1%', status: 'within' }
            }
        },

        // Technology & Cyber Risk
        {
            id: 10,
            category: 'Technology & Cyber Risk',
            riskAppetiteMeasure: 'Critical system availability',
            expressionOfRisk: 'Remain Within',
            r: '<95%',
            a: '99-99.5%',
            g: '>99.9%',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '99.2%', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '99.4%', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '98.8%', status: 'below' },
                '2024.03-31 (FY25(1))': { value: '99.6%', status: 'within' },
                '2024.06-30 (FY24(2))': { value: '99.3%', status: 'within' },
                '2024.09-30 (FY24(3))': { value: '99.7%', status: 'within' },
                '2024.12-31 (FY24(4))': { value: '99.5%', status: 'within' }
            }
        },
        {
            id: 11,
            category: 'Technology & Cyber Risk',
            riskAppetiteMeasure: 'Major cybersecurity incidents',
            expressionOfRisk: 'Avoid',
            r: '>5',
            a: '0-2',
            g: '0',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '1', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '0', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '2', status: 'within' },
                '2024.03-31 (FY25(1))': { value: '3', status: 'above' },
                '2024.06-30 (FY24(2))': { value: '1', status: 'within' },
                '2024.09-30 (FY24(3))': { value: '0', status: 'within' },
                '2024.12-31 (FY24(4))': { value: '1', status: 'within' }
            }
        },

        // Operational Risk
        {
            id: 12,
            category: 'Operational Risk',
            riskAppetiteMeasure: 'System downtime (hours per month)',
            expressionOfRisk: 'Avoid',
            r: '>24',
            a: '4-8',
            g: '<2',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '6.2', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '5.8', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '3.1', status: 'within' },
                '2024.03-31 (FY25(1))': { value: '2.4', status: 'within' },
                '2024.06-30 (FY24(2))': { value: '9.1', status: 'above' },
                '2024.09-30 (FY24(3))': { value: '7.8', status: 'within' },
                '2024.12-31 (FY24(4))': { value: '6.5', status: 'within' }
            }
        },
        {
            id: 13,
            category: 'Operational Risk',
            riskAppetiteMeasure: 'Internal fraud losses (annual)',
            expressionOfRisk: 'Avoid',
            r: '>5M',
            a: '0.5-2M',
            g: '0',
            quarters: {
                '2023.06-30 (FY23(2))': { value: '0.8M', status: 'within' },
                '2023.09-30 (FY23(3))': { value: '1.2M', status: 'within' },
                '2023.12-31 (FY23(4))': { value: '0.9M', status: 'within' },
                '2024.03-31 (FY25(1))': { value: '1.5M', status: 'within' },
                '2024.06-30 (FY24(2))': { value: '2.8M', status: 'above' },
                '2024.09-30 (FY24(3))': { value: '1.8M', status: 'within' },
                '2024.12-31 (FY24(4))': { value: '1.2M', status: 'within' }
            }
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'above': return 'bg-green-100 text-green-800 border-green-300';
            case 'within': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'below': return 'bg-red-100 text-red-800 border-red-300';
            default: return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'above': return '🟢';
            case 'within': return '🟡';
            case 'below': return '🔴';
            default: return '⚪';
        }
    };

    const getExpressionColor = (expression) => {
        switch (expression) {
            case 'Seek': return 'bg-blue-100 text-blue-800';
            case 'Remain Within': return 'bg-green-100 text-green-800';
            case 'Avoid': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    // Summary Statistics
    const summaryStats = {
        totalMeasures: riskAppetiteData.length,
        withinAppetite: riskAppetiteData.filter(item => 
            item.quarters[selectedQuarter]?.status === 'within'
        ).length,
        aboveAppetite: riskAppetiteData.filter(item => 
            item.quarters[selectedQuarter]?.status === 'above'
        ).length,
        belowAppetite: riskAppetiteData.filter(item => 
            item.quarters[selectedQuarter]?.status === 'below'
        ).length
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Risk Appetite Dashboard" />
            <main className="flex-1 pt-28 pb-28 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Back Button */}
                    <button 
                        onClick={() => navigate('/riskContents')}
                        className="flex items-center space-x-2 text-[#124E57] hover:text-[#15808D] mb-6 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Risk Contents</span>
                    </button>

                    <div className="space-y-6">
                        {/* Header Section */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h1 className="text-3xl font-bold text-[#124E57] mb-2">Risk Appetite Dashboard</h1>
                            <p className="text-gray-600">Monitor and track risk appetite measures across different categories and time periods</p>
                        </div>

                        {/* Summary Statistics */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                <h4 className="font-semibold text-gray-700 mb-2">Total Measures</h4>
                                <p className="text-2xl font-bold text-[#124E57]">{summaryStats.totalMeasures}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                                <h4 className="font-semibold text-green-800 mb-2">Within Appetite</h4>
                                <p className="text-2xl font-bold text-green-900">{summaryStats.withinAppetite}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-yellow-200 shadow-sm">
                                <h4 className="font-semibold text-yellow-800 mb-2">Above Target</h4>
                                <p className="text-2xl font-bold text-yellow-900">{summaryStats.aboveAppetite}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                                <h4 className="font-semibold text-red-800 mb-2">Below Target</h4>
                                <p className="text-2xl font-bold text-red-900">{summaryStats.belowAppetite}</p>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                            <h4 className="font-semibold text-gray-700 mb-3">Status Legend</h4>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">🟢</span>
                                    <div>
                                        <div className="font-medium text-green-800">Above Target</div>
                                        <div className="text-sm text-gray-600">Performance exceeds appetite range</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">🟡</span>
                                    <div>
                                        <div className="font-medium text-yellow-800">Within Appetite</div>
                                        <div className="text-sm text-gray-600">Within acceptable risk appetite range</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">🔴</span>
                                    <div>
                                        <div className="font-medium text-red-800">Below Target</div>
                                        <div className="text-sm text-gray-600">Below minimum appetite threshold</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">⚪</span>
                                    <div>
                                        <div className="font-medium text-gray-800">No Data</div>
                                        <div className="text-sm text-gray-600">Data not available for period</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Expression Legend */}
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                            <h4 className="font-semibold text-gray-700 mb-3">Risk Expression Legend</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-semibold">Seek</span>
                                    <div className="text-sm text-gray-600">Actively pursue opportunities</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-semibold">Remain Within</span>
                                    <div className="text-sm text-gray-600">Stay within defined boundaries</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-semibold">Avoid</span>
                                    <div className="text-sm text-gray-600">Minimize or eliminate exposure</div>
                                </div>
                            </div>
                        </div>

                        {/* Risk Appetite Table */}
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-4 border-b border-gray-200">
                                <h3 className="text-xl font-bold text-[#124E57]">
                                    Risk Appetite Measures - {selectedQuarter}
                                </h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-[#124E57] text-white">
                                            <th className="p-3 text-left font-semibold">Category</th>
                                            <th className="p-3 text-left font-semibold">Risk Appetite Measure</th>
                                            <th className="p-3 text-left font-semibold">Expression of Risk</th>
                                            <th className="p-3 text-center font-semibold bg-red-200 text-red-800">R</th>
                                            <th className="p-3 text-center font-semibold bg-yellow-200 text-yellow-800">A</th>
                                            <th className="p-3 text-center font-semibold bg-green-200 text-green-800">G</th>
                                            <th className="p-3 text-center font-semibold">Current Value</th>
                                            <th className="p-3 text-center font-semibold">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {riskAppetiteData.map((item) => {
                                            const currentQuarter = item.quarters[selectedQuarter];
                                            return (
                                                <tr key={item.id} className="border-b hover:bg-gray-50">
                                                    <td className="p-3 font-medium text-gray-900">
                                                        {item.category}
                                                    </td>
                                                    <td className="p-3 text-gray-700 max-w-xs">
                                                        <div className="truncate" title={item.riskAppetiteMeasure}>
                                                            {item.riskAppetiteMeasure}
                                                        </div>
                                                    </td>
                                                    <td className="p-3">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getExpressionColor(item.expressionOfRisk)}`}>
                                                            {item.expressionOfRisk}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 text-center text-gray-700 font-mono bg-red-50">
                                                        {item.r}
                                                    </td>
                                                    <td className="p-3 text-center text-gray-700 font-mono bg-yellow-50">
                                                        {item.a}
                                                    </td>
                                                    <td className="p-3 text-center text-gray-700 font-mono bg-green-50">
                                                        {item.g}
                                                    </td>
                                                    <td className="p-3 text-center font-semibold text-gray-900">
                                                        {currentQuarter?.value || 'N/A'}
                                                    </td>
                                                    <td className="p-3 text-center">
                                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(currentQuarter?.status)}`}>
                                                            {getStatusIcon(currentQuarter?.status)} {currentQuarter?.status?.toUpperCase() || 'N/A'}
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ReportingFooter />
        </div>
    );
};

export default RiskAppetite;