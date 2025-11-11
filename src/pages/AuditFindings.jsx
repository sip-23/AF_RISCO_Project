import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ReportingFooter from '../components/ReportingFooter';

const AuditFindings = () => {
    const navigate = useNavigate();

    // Mock data for demonstration - in a real app, this would come from an API
    const findingsData = {
        'GIA - 2024 - Steinhoff Settlement Payments/ Process Distribution Review': [
            {
                id: 1,
                finding: 'Inadequate access controls in financial system',
                severity: 'High',
                area: 'IT Controls',
                audit: 'GIA - 2024 - Steinhoff Settlement Payments/ Process Distribution Review',
                status: 'Open',
                dateReported: '2024-01-10',
                dueDate: '2024-02-10',
                description: 'Detailed description of the finding...',
                recommendation: 'Recommended actions to address the finding...',
                managementActions: [
                    {
                        id: 1,
                        action: 'Implement role-based access controls',
                        responsible: 'IT Department',
                        dueDate: '2024-02-10',
                        status: 'In Progress',
                        progress: 50
                    }
                ]
            }
        ],
        'GIA - 2024 - Alexander Forbes Investments Ltd Trade and Rebalancing Review': [
            {
                id: 2,
                finding: 'Segregation of duties violation in procurement',
                severity: 'Medium',
                area: 'Financial Controls',
                audit: 'GIA - 2024 - Alexander Forbes Investments Ltd Trade and Rebalancing Review',
                status: 'In Progress',
                dateReported: '2024-01-05',
                dueDate: '2024-02-05',
                description: 'Detailed description of the finding...',
                recommendation: 'Recommended actions to address the finding...',
                managementActions: []
            }
        ],
        'GIA - 2024 - Alexander Forbes ISAE 3402 Follow-Up Review': [
            {
                id: 3,
                finding: 'Documentation gaps in compliance procedures',
                severity: 'Low',
                area: 'Compliance',
                audit: 'GIA - 2024 - Alexander Forbes ISAE 3402 Follow-Up Review',
                status: 'Closed',
                dateReported: '2023-12-15',
                dueDate: '2024-01-15',
                description: 'Detailed description of the finding...',
                recommendation: 'Recommended actions to address the finding...',
                managementActions: []
            }
        ]
    };

    // New findings summary data with ratings
    // New findings summary data with ratings
    const findingsSummaryData = {
        0: {'name': 'GIA - 2024 - Steinhoff Settlement Payments/ Process Distribution Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 1,
  'Minor (Low Risk)': 0,
  'Significant (Medium/High Risk)': 0,
  'Total': 1},
 1: {'name': 'GIA - 2024 - Alexander Forbes Investments Ltd Trade and Rebalancing Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 1,
  'Minor (Low Risk)': 0,
  'Significant (Medium/High Risk)': 0,
  'Total': 1},
 2: {'name': 'GIA - 2024 - Alexander Forbes ISAE 3402 Follow-Up Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 1,
  'Minor (Low Risk)': 0,
  'Significant (Medium/High Risk)': 0,
  'Total': 1},
 3: {'name': 'GIA - 2024 - Alexander Forbes Jersey IFC Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 1,
  'Minor (Low Risk)': 0,
  'Significant (Medium/High Risk)': 1,
  'Total': 2},
 4: {'name': 'GIA - 2024 - AF Call Centre Operations Adequacy Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 1,
  'Minor (Low Risk)': 1,
  'Significant (Medium/High Risk)': 2,
  'Total': 4},
 5: {'name': 'GIA - 2024 - Alexander Forbes Compliance GOI 3 Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 0,
  'Minor (Low Risk)': 0,
  'Significant (Medium/High Risk)': 1,
  'Total': 1},
 6: {'name': 'GIA - 2024 - Alexander Forbes Human Resources Recruitments and Terminations Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 3,
  'Minor (Low Risk)': 0,
  'Significant (Medium/High Risk)': 3,
  'Total': 6},
 7: {'name': 'GIA - 2024 - Procurement Lifecycle Review',
  'Critical (High Risk)': 1,
  'Less Significant (Low/Medium Risk)': 6,
  'Minor (Low Risk)': 3,
  'Significant (Medium/High Risk)': 6,
  'Total': 16},
 8: {'name': 'GIA - 2024 - Alexander Forbes Botswana Internal Financial Controls Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 3,
  'Minor (Low Risk)': 1,
  'Significant (Medium/High Risk)': 3,
  'Total': 7},
 9: {'name': 'GIA - 2024 - Alexander Forbes Namibia Internal Financial Controls Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 8,
  'Minor (Low Risk)': 0,
  'Significant (Medium/High Risk)': 7,
  'Total': 15},
 10: {'name': 'GIA - 2024 - GF Wealth Control Environment Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 1,
  'Minor (Low Risk)': 1,
  'Significant (Medium/High Risk)': 3,
  'Total': 5},
 11: {'name': 'GIA - 2024 - Client Onboarding and Ongoing Monitoring Review',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 1,
  'Minor (Low Risk)': 0,
  'Significant (Medium/High Risk)': 2,
  'Total': 3},
 12: {'name': 'GIA - 2024 - Botswana Client Onboarding and Ongoing Monitoring Review (AML)',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 4,
  'Minor (Low Risk)': 0,
  'Significant (Medium/High Risk)': 2,
  'Total': 6},
 13: {'name': 'GIA - 2024 - Namibia Client Onboarding and Ongoing Monitoring Review (AML)',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 6,
  'Minor (Low Risk)': 0,
  'Significant (Medium/High Risk)': 0,
  'Total': 6},
 14: {'name': 'GIA - 2025 - Regulation 28 Compliance Reporting',
  'Critical (High Risk)': 0,
  'Less Significant (Low/Medium Risk)': 0,
  'Minor (Low Risk)': 2,
  'Significant (Medium/High Risk)': 8,
  'Total': 10},
 15: {'name': 'GIA - 2025 - Botswana Beneficiary Fund Review',
  'Critical (High Risk)': 11,
  'Less Significant (Low/Medium Risk)': 0,
  'Minor (Low Risk)': 4,
  'Significant (Medium/High Risk)': 9,
  'Total': 24}};

    // Extract rating categories (excluding 'name' and 'Total')
    const ratingCategories = Object.keys(findingsSummaryData[0]).filter(key => key !== 'name' && key !== 'Total');

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

    // Function to get color for rating categories
    const getRatingColor = (rating, value) => {
        if (value === 0) return 'bg-gray-50 text-gray-500';
        
        switch (rating) {
            case 'Critical (High Risk)':
                return 'bg-red-100 text-red-800 border-l-4 border-red-500';
            case 'Significant (Medium/High Risk)':
                return 'bg-orange-100 text-orange-800 border-l-4 border-orange-500';
            case 'Less Significant (Low/Medium Risk)':
                return 'bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500';
            case 'Minor (Low Risk)':
                return 'bg-green-100 text-green-800 border-l-4 border-green-500';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Calculate totals for each rating category
    const ratingTotals = ratingCategories.map(category => ({
        name: category,
        total: Object.values(findingsSummaryData).reduce((sum, audit) => sum + (audit[category] || 0), 0)
    }));

    // Get color for each segment
    const getSegmentColor = (category) => {
        switch (category) {
            case 'Critical (High Risk)': return 'bg-red-500';
            case 'Significant (Medium/High Risk)': return 'bg-orange-500';
            case 'Less Significant (Low/Medium Risk)': return 'bg-yellow-500';
            case 'Minor (Low Risk)': return 'bg-green-500';
            default: return 'bg-gray-400';
        }
    };

    // Get border color for each segment
    const getSegmentBorderColor = (category) => {
        switch (category) {
            case 'Critical (High Risk)': return 'border-red-700';
            case 'Significant (Medium/High Risk)': return 'border-orange-700';
            case 'Less Significant (Low/Medium Risk)': return 'border-yellow-700';
            case 'Minor (Low Risk)': return 'border-green-700';
            default: return 'border-gray-600';
        }
    };

    // Handle row click to navigate to detailed findings
    const handleReviewClick = (reviewName) => {
        navigate('/audit-findings-detail', { 
            state: { 
                reviewName,
                findings: findingsData[reviewName] || []
            }
        });
    };

    // Stacked Column Chart Component for Overall
    const StackedColumnChart = () => {
        const totalFindings = ratingTotals.reduce((sum, rating) => sum + rating.total, 0);
        const maxHeight = 200;
        
        return (
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#124E57] mb-6">Overall Findings by Risk Category</h3>
                
                {/* Chart Container */}
                <div className="flex flex-col items-center">
                    {/* Chart Bar */}
                    <div className="relative w-8 h-64 bg-gray-100 rounded-lg border border-gray-300 overflow-hidden mb-4">
                        {ratingTotals.map((rating, index) => {
                            if (rating.total === 0) return null;
                            
                            const percentage = (rating.total / totalFindings) * 100;
                            const height = (percentage / 100) * maxHeight;
                            const previousSegmentsHeight = ratingTotals
                                .slice(0, index)
                                .reduce((sum, r) => sum + (r.total / totalFindings) * maxHeight, 0);
                            
                            return (
                                <div
                                    key={rating.name}
                                    className={`absolute left-0 right-0 ${getSegmentColor(rating.name)} ${getSegmentBorderColor(rating.name)} border-b`}
                                    style={{
                                        bottom: `${previousSegmentsHeight}px`,
                                        height: `${height}px`,
                                        transition: 'all 0.5s ease-in-out'
                                    }}
                                    title={`${rating.name}: ${rating.total} findings (${percentage.toFixed(1)}%)`}
                                >
                                    {/* Segment Label */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white text-xs font-bold drop-shadow-md">
                                            {rating.total}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                        
                        {/* No Data Message */}
                        {totalFindings === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-gray-500 text-sm">No Findings</span>
                            </div>
                        )}
                    </div>
                    
                    {/* Total Label */}
                    <div className="text-center mb-6">
                        <div className="text-2xl font-bold text-[#124E57]">{totalFindings}</div>
                        <div className="text-sm text-gray-600">Total Findings</div>
                    </div>
                </div>
            </div>
        );
    };

    const ReviewColumnBarPlot = () => {
        const maxTotal = Math.max(...Object.values(findingsSummaryData).map(audit => audit.Total));
        const maxWidth = 400; // Maximum width in pixels for the bars

        return (
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#124E57] mb-6">Findings by Review</h3>
                
                <div className="space-y-4">
                    {Object.values(findingsSummaryData).map((audit, index) => {
                        const auditTotal = audit.Total;
                        const percentage = maxTotal > 0 ? (auditTotal / maxTotal) * 100 : 0;
                        const barWidth = (percentage / 100) * maxWidth;

                        return (
                            <div key={index} className="flex items-center space-x-4">
                                {/* Audit Name - Horizontal */}
                                <div className="w-48 flex-shrink-0">
                                    <div className="text-sm font-semibold text-[#124E57] mb-1">
                                        {auditTotal} Findings
                                    </div>
                                    <div 
                                        className="text-xs text-gray-600 truncate"
                                        title={audit.name}
                                    >
                                        {audit.name}
                                    </div>
                                </div>

                                {/* Horizontal Stacked Bar */}
                                <div className="flex-1">
                                    <div className="relative h-8 bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
                                        {ratingCategories.map((category, catIndex) => {
                                            const categoryValue = audit[category];
                                            if (categoryValue === 0) return null;

                                            const categoryPercentage = (categoryValue / auditTotal) * 100;
                                            const segmentWidth = (categoryPercentage / 100) * barWidth;
                                            
                                            const previousSegmentsWidth = ratingCategories
                                                .slice(0, catIndex)
                                                .reduce((sum, cat) => {
                                                    const catValue = audit[cat];
                                                    const catPercentage = (catValue / auditTotal) * 100;
                                                    return sum + (catPercentage / 100) * barWidth;
                                                }, 0);

                                            return (
                                                <div
                                                    key={category}
                                                    className={`absolute top-0 bottom-0 ${getSegmentColor(category)} ${getSegmentBorderColor(category)} border-r`}
                                                    style={{
                                                        left: `${previousSegmentsWidth}px`,
                                                        width: `${segmentWidth}px`,
                                                        transition: 'all 0.5s ease-in-out'
                                                    }}
                                                    title={`${category}: ${categoryValue} findings`}
                                                >
                                                    {/* Segment Label */}
                                                    {segmentWidth > 40 && (
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <span className="text-white text-xs font-bold drop-shadow-md">
                                                                {categoryValue}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                        
                                        {/* Total Label inside bar if space permits */}
                                        {barWidth > 60 && (
                                            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-end pr-2">
                                                <span className="text-white text-sm font-bold drop-shadow-md">
                                                    {auditTotal}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Category Breakdown */}
                                <div className="w-32 flex-shrink-0">
                                    <div className="grid grid-cols-2 gap-1">
                                        {ratingCategories.map((category) => {
                                            const value = audit[category];
                                            if (value === 0) return null;
                                            return (
                                                <div key={category} className="flex items-center space-x-1">
                                                    <div className={`w-2 h-2 rounded ${getSegmentColor(category)}`}></div>
                                                    <span className="text-xs text-gray-600">
                                                        {value}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Legend */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-700 mb-3 text-center">Risk Categories</h4>
                    <div className="grid grid-cols-4 gap-2">
                        {ratingCategories.map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                                <div className={`w-3 h-3 rounded ${getSegmentColor(category)}`}></div>
                                <span className="text-xs text-gray-600 truncate">
                                    {category.split(' ')[0]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    // Findings Summary Table Component with clickable rows
    const FindingsSummaryTable = () => (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#124E57] mb-4">Findings Risk Rating Summary</h3>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#124E57] text-white">
                            <th className="p-3 text-left font-semibold">Audit Name</th>
                            {ratingCategories.map(category => (
                                <th key={category} className="p-3 text-center font-semibold">
                                    {category}
                                </th>
                            ))}
                            <th className="p-3 text-center font-semibold">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(findingsSummaryData).map((audit, index) => (
                            <tr 
                                key={index} 
                                className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
                                onClick={() => handleReviewClick(audit.name)}
                            >
                                <td className="p-3 font-medium text-gray-900 max-w-xs">
                                    <div className="truncate" title={audit.name}>
                                        {audit.name}
                                    </div>
                                </td>
                                {ratingCategories.map(category => (
                                    <td 
                                        key={category} 
                                        className={`p-3 text-center font-semibold ${getRatingColor(category, audit[category])}`}
                                    >
                                        {audit[category] || 0}
                                    </td>
                                ))}
                                <td className="p-3 text-center font-semibold text-[#124E57] bg-blue-50">
                                    {audit.Total}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-gray-100 font-bold">
                            <td className="p-3 text-gray-900">Category Totals</td>
                            {ratingCategories.map(category => (
                                <td 
                                    key={category} 
                                    className={`p-3 text-center ${getRatingColor(category, ratingTotals.find(r => r.name === category)?.total)}`}
                                >
                                    {ratingTotals.find(r => r.name === category)?.total || 0}
                                </td>
                            ))}
                            <td className="p-3 text-center text-[#124E57] bg-blue-100">
                                {ratingTotals.reduce((sum, rating) => sum + rating.total, 0)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );

    // Risk Rating Legend Component
    const RiskRatingLegend = () => (
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-semibold text-gray-700 mb-3">Risk Rating Legend</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-sm font-medium text-gray-700">Critical (High Risk)</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-sm font-medium text-gray-700">Significant (Medium/High Risk)</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-sm font-medium text-gray-700">Less Significant (Low/Medium Risk)</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm font-medium text-gray-700">Minor (Low Risk)</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Audit Findings" />
            
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

                    <div className="space-y-6">

                        {/* Charts and Visualizations Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                            {/* Overall Stacked Column Chart */}
                            <div className="lg:col-span-1">
                                <StackedColumnChart />
                            </div>

                            {/* Review Column Bar Plot */}
                            <div className="lg:col-span-4">
                                <ReviewColumnBarPlot />
                            </div>
                        </div>

                        {/* Risk Rating Legend and Summary Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2">
                                <RiskRatingLegend />
                            </div>
                            
                            {/* Additional Summary Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <h4 className="font-semibold text-blue-800 mb-2">Total Audits</h4>
                                    <p className="text-2xl font-bold text-blue-900">{Object.keys(findingsSummaryData).length}</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <h4 className="font-semibold text-green-800 mb-2">Total Findings</h4>
                                    <p className="text-2xl font-bold text-green-900">
                                        {ratingTotals.reduce((sum, rating) => sum + rating.total, 0)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Findings Summary Table */}
                        <FindingsSummaryTable />
                    </div>
                </div>
            </main>
            
            <ReportingFooter />
        </div>
    );
};

export default AuditFindings;