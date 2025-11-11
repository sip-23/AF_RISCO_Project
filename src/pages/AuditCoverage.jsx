import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuditCoverage = () => {
    const navigate = useNavigate();

    // Your data
    const auditData = {0: {'Name': 'GIA - 2024 - AF Call Centre Operations Adequacy Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 4,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 1: {'Name': 'GIA - 2024 - AF Investments Portfolio Reporting (PRT)',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 2: {'Name': 'GIA - 2024 - AFIL Head of Actuarial Function (HAF)',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 3: {'Name': 'GIA - 2024 - Alexander Forbes Botswana Internal Financial Controls Review',
  '': 0,
  'AF Consulting': 7,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 4: {'Name': 'GIA - 2024 - Alexander Forbes Compliance GOI 3 Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 1,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 5: {'Name': 'GIA - 2024 - Alexander Forbes Human Resources Recruitments and Terminations Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 6},
 6: {'Name': 'GIA - 2024 - Alexander Forbes ISAE 3402 Follow-Up Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 1,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 7: {'Name': 'GIA - 2024 - Alexander Forbes Investments Ltd Trade and Rebalancing Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 1,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 8: {'Name': 'GIA - 2024 - Alexander Forbes Jersey IFC Review',
  '': 0,
  'AF Consulting': 2,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 9: {'Name': 'GIA - 2024 - Alexander Forbes Namibia Internal Financial Controls Review',
  '': 0,
  'AF Consulting': 15,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 10: {'Name': 'GIA - 2024 - Alexander Forbes Nigeria IFC Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 11: {'Name': 'GIA - 2024 - Alexander Forbes Project Finance Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 12: {'Name': 'GIA - 2024 - Annual Scorecard Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 13: {'Name': 'GIA - 2024 - BCM Review – GOI 3.2',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 14: {'Name': 'GIA - 2024 - Botswana Client Onboarding and Ongoing Monitoring Review (AML)',
  '': 0,
  'AF Consulting': 6,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 15: {'Name': 'GIA - 2024 - Client Onboarding and Ongoing Monitoring Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 3},
 16: {'Name': 'GIA - 2024 - Cyber Program Maturity Assessment',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 17: {'Name': 'GIA - 2024 - Data Analytics Maturity Readiness Assessment',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 18: {'Name': 'GIA - 2024 - Data Governance Desktop Review (Access and Integrity)',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 19: {'Name': 'GIA - 2024 - GF Wealth Control Environment Review',
  '': 0,
  'AF Consulting': 5,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 20: {'Name': 'GIA - 2024 - IT Governance Review – GOI',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 21: {'Name': 'GIA - 2024 - Khulisa Post-Implementation Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 22: {'Name': 'GIA - 2024 - Material Outsourced Arrangements',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 23: {'Name': 'GIA - 2024 - Namibia Client Onboarding and Ongoing Monitoring Review (AML)',
  '': 0,
  'AF Consulting': 6,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 24: {'Name': 'GIA - 2024 - Nigeria IFC Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 25: {'Name': 'GIA - 2024 - P2P System Analytics',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 26: {'Name': 'GIA - 2024 - Procurement Lifecycle Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 16},
 27: {'Name': 'GIA - 2024 - Project Finance Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 28: {'Name': 'GIA - 2024 - Steinhoff Settlement Payments/ Process Distribution Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 1,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 29: {'Name': 'GIA - 2025 - AF Invest Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 30: {'Name': 'GIA - 2025 - Asset and Liability Matching Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 31: {'Name': 'GIA - 2025 - Botswana Beneficiary Fund Review',
  '': 24,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 32: {'Name': 'GIA - 2025 - Own Risk and Solvency Assessment (ORSA) review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 33: {'Name': 'GIA - 2025 - Regulation 28 Compliance Reporting',
  '': 10,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 34: {'Name': 'GIA - 2025 - Treasury Management Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 35: {'Name': 'GIA - 2025 - Treating Customers Fairly Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 36: {'Name': 'GIA - 2026 - Fees Earned from Institutional Clients (Investments and Multi-National) Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 37: {'Name': 'GIA-2025-Discretionary Fund Management (DFM) Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 38: {'Name': 'GIA-2025-EBSI Control Environment Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 39: {'Name': 'GIA-2025-Heatlhcare Consulting Fees Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 40: {'Name': 'GIA-2025-High-Risk Claims Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 41: {'Name': 'GIA-2025-Institutional Client Administration Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 42: {'Name': 'GIA-2025-Investment Pricing Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 43: {'Name': 'GIA-2025-Joint Standard Readiness Assessment Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0},
 44: {'Name': 'GIA-2025-Section 14 Transfer Review',
  '': 0,
  'AF Consulting': 0,
  'AF Investments': 0,
  'Client Services & Business Optimisation': 0,
  'Enabling Services': 0,
  'Solutions & Enablement': 0}};

   const openFindingsData = {
    0: {'Review Name': 'GIA - 2024 - AF Call Centre Operations Adequacy Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 0,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0},
 1: {'Review Name': 'GIA - 2024 - Alexander Forbes Botswana Internal Financial Controls Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 3,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0},
 2: {'Review Name': 'GIA - 2024 - Alexander Forbes Compliance GOI 3 Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 0,
  'AF Investments Open Findings': 1,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0},
 3: {'Review Name': 'GIA - 2024 - Alexander Forbes Human Resources Recruitments and Terminations Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 0,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 6},
 4: {'Review Name': 'GIA - 2024 - Alexander Forbes ISAE 3402 Follow-Up Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 0,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0},
 5: {'Review Name': 'GIA - 2024 - Alexander Forbes Investments Ltd Trade and Rebalancing Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 0,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 1,
  'Solutions & Enablement Open Findings': 0},
 6: {'Review Name': 'GIA - 2024 - Alexander Forbes Jersey IFC Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 2,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0},
 7: {'Review Name': 'GIA - 2024 - Alexander Forbes Namibia Internal Financial Controls Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 12,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0},
 8: {'Review Name': 'GIA - 2024 - Botswana Client Onboarding and Ongoing Monitoring Review (AML)',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 6,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0},
 9: {'Review Name': 'GIA - 2024 - Client Onboarding and Ongoing Monitoring Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 0,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 3},
 10: {'Review Name': 'GIA - 2024 - GF Wealth Control Environment Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 5,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0},
 11: {'Review Name': 'GIA - 2024 - Namibia Client Onboarding and Ongoing Monitoring Review (AML)',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 6,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0},
 12: {'Review Name': 'GIA - 2024 - Procurement Lifecycle Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 0,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 9},
 13: {'Review Name': 'GIA - 2024 - Steinhoff Settlement Payments/ Process Distribution Review',
  'Not Allocated Open Findings': 0,
  'AF Consulting Open Findings': 0,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 1,
  'Solutions & Enablement Open Findings': 0},
 14: {'Review Name': 'GIA - 2025 - Botswana Beneficiary Fund Review',
  'Not Allocated Open Findings': 24,
  'AF Consulting Open Findings': 0,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0},
 15: {'Review Name': 'GIA - 2025 - Regulation 28 Compliance Reporting',
  'Not Allocated Open Findings': 10,
  'AF Consulting Open Findings': 0,
  'AF Investments Open Findings': 0,
  'Client Services & Business Optimisation Open Findings': 0,
  'Solutions & Enablement Open Findings': 0}};

    // Extract departments for original data (excluding 'Name' and empty string key)
    const departments = Object.keys(auditData[0]).filter(key => key !== 'Name' && key !== '');

    // Extract departments for open findings data (excluding 'Review Name')
    const openFindingsDepts = Object.keys(openFindingsData[0]).filter(key => key !== 'Review Name');

    // Calculate total hours per department for original data
    const departmentTotals = departments.map(dept => ({
        name: dept,
        total: Object.values(auditData).reduce((sum, audit) => sum + (audit[dept] || 0), 0)
    }));

    // Calculate open findings per department
    const openFindingsTotals = openFindingsDepts.map(dept => ({
        name: dept,
        total: Object.values(openFindingsData).reduce((sum, audit) => sum + (audit[dept] || 0), 0)
    }));

    // Find maximum values for scaling
    const maxHours = Math.max(...departmentTotals.map(dept => dept.total));
    const maxOpenFindings = Math.max(...openFindingsTotals.map(dept => dept.total));

    // Enhanced Bar Graph for original findings
    const EnhancedBarGraph = () => (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#124E57] mb-6">Audit Findings Distribution</h3>
            <div className="space-y-4">
                {departmentTotals.map((dept, index) => {
                    const percentage = maxHours > 0 ? (dept.total / maxHours) * 100 : 0;
                    return (
                        <div key={dept.name} className="flex items-center justify-between">
                            <div className="w-1/3">
                                <span className="text-sm font-medium text-gray-700">
                                    {dept.name}
                                </span>
                            </div>
                            <div className="w-2/3 flex items-center">
                                <div className="flex-1 bg-gray-200 rounded-full h-4">
                                    <div 
                                        className="bg-gradient-to-r from-[#124E57] to-[#15808D] h-4 rounded-full transition-all duration-700 ease-out"
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                                <span className="ml-3 text-sm font-semibold text-gray-700 min-w-12 text-right">
                                    {dept.total} Findings
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
            {maxHours === 0 && (
                <div className="text-center py-4">
                    <p className="text-gray-500">No audit Findings recorded across departments</p>
                </div>
            )}
        </div>
    );

    // Open Findings Bar Graph (in red)
    const OpenFindingsBarGraph = () => (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#DC2626] mb-6">Open Findings Distribution</h3>
            <div className="space-y-4">
                {openFindingsTotals.map((dept, index) => {
                    const percentage = maxOpenFindings > 0 ? (dept.total / maxOpenFindings) * 100 : 0;
                    return (
                        <div key={dept.name} className="flex items-center justify-between">
                            <div className="w-1/3">
                                <span className="text-sm font-medium text-gray-700">
                                    {dept.name.replace('Open Findings', '')}
                                </span>
                            </div>
                            <div className="w-2/3 flex items-center">
                                <div className="flex-1 bg-gray-200 rounded-full h-4">
                                    <div 
                                        className="bg-gradient-to-r from-[#DC2626] to-[#EF4444] h-4 rounded-full transition-all duration-700 ease-out"
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                                <span className="ml-3 text-sm font-semibold text-gray-700 min-w-12 text-right">
                                    {dept.total} Open
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
            {maxOpenFindings === 0 && (
                <div className="text-center py-4">
                    <p className="text-gray-500">No open findings recorded across departments</p>
                </div>
            )}
        </div>
    );

    // Original Audit Table
    const AuditTable = () => (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#124E57] mb-4">Detailed Audit Findings</h3>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#124E57] text-white">
                            <th className="p-3 text-left font-semibold">Audit Name</th>
                            {departments.map(dept => (
                                <th key={dept} className="p-3 text-center font-semibold">
                                    {dept}
                                </th>
                            ))}
                            <th className="p-3 text-center font-semibold">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(auditData).map((audit, index) => {
                            const auditTotal = departments.reduce((sum, dept) => sum + (audit[dept] || 0), 0);
                            return (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="p-3 font-medium text-gray-900 max-w-xs">
                                        <div className="truncate" title={audit.Name}>
                                            {audit.Name}
                                        </div>
                                    </td>
                                    {departments.map(dept => (
                                        <td key={dept} className="p-3 text-center text-gray-700">
                                            {audit[dept] || 0} 
                                        </td>
                                    ))}
                                    <td className="p-3 text-center font-semibold text-[#124E57]">
                                        {auditTotal}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="bg-gray-100 font-bold">
                            <td className="p-3 text-gray-900">Department Totals</td>
                            {departments.map(dept => (
                                <td key={dept} className="p-3 text-center text-gray-900">
                                    {departmentTotals.find(d => d.name === dept)?.total || 0}
                                </td>
                            ))}
                            <td className="p-3 text-center text-[#124E57]">
                                {departmentTotals.reduce((sum, dept) => sum + dept.total, 0)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );

    // Open Findings Table (with red styling)
    const OpenFindingsTable = () => (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-[#DC2626] mb-4">Open Audit Findings</h3>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#DC2626] text-white">
                            <th className="p-3 text-left font-semibold">Audit Name</th>
                            {openFindingsDepts.map(dept => (
                                <th key={dept} className="p-3 text-center font-semibold">
                                    {dept.replace('Open Findings', '')}
                                </th>
                            ))}
                            <th className="p-3 text-center font-semibold">Total Open</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(openFindingsData).map((audit, index) => {
                            const auditTotal = openFindingsDepts.reduce((sum, dept) => sum + (audit[dept] || 0), 0);
                            return (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="p-3 font-medium text-gray-900 max-w-xs">
                                        <div className="truncate" title={audit['Review Name']}>
                                            {audit['Review Name']}
                                        </div>
                                    </td>
                                    {openFindingsDepts.map(dept => (
                                        <td 
                                            key={dept} 
                                            className={`p-3 text-center font-semibold ${
                                                audit[dept] > 0 ? 'text-red-600 bg-red-50' : 'text-gray-700'
                                            }`}
                                        >
                                            {audit[dept] || 0} 
                                        </td>
                                    ))}
                                    <td className={`p-3 text-center font-semibold ${
                                        auditTotal > 0 ? 'text-red-600' : 'text-gray-700'
                                    }`}>
                                        {auditTotal}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="bg-gray-100 font-bold">
                            <td className="p-3 text-gray-900">Department Totals</td>
                            {openFindingsDepts.map(dept => (
                                <td 
                                    key={dept} 
                                    className={`p-3 text-center ${
                                        openFindingsTotals.find(d => d.name === dept)?.total > 0 
                                            ? 'text-red-600' 
                                            : 'text-gray-900'
                                    }`}
                                >
                                    {openFindingsTotals.find(d => d.name === dept)?.total || 0}
                                </td>
                            ))}
                            <td className="p-3 text-center text-[#DC2626]">
                                {openFindingsTotals.reduce((sum, dept) => sum + dept.total, 0)}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );

    // Summary Statistics - Updated to use open findings data for active audits
    const SummaryStats = () => {
        const totalAudits = Object.keys(auditData).length;
        const totalFindings = departmentTotals.reduce((sum, dept) => sum + dept.total, 0);
        const totalOpenFindings = openFindingsTotals.reduce((sum, dept) => sum + dept.total, 0);
        
        // Active audits are those with open findings
        const activeAudits = Object.values(openFindingsData).filter(audit => 
            openFindingsDepts.some(dept => audit[dept] > 0)
        ).length;

        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Total Audits</h4>
                    <p className="text-2xl font-bold text-blue-900">{totalAudits}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Total Findings</h4>
                    <p className="text-2xl font-bold text-green-900">{totalFindings}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">Active Audits (With Open Findings)</h4>
                    <p className="text-2xl font-bold text-red-900">{activeAudits}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header heading="Audit Coverage & Scope" />
            
            <main className="flex-1 pt-28 pb-28 px-4">
                <div className="max-w-7xl mx-auto">
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
                        {/* Summary Statistics */}
                        <SummaryStats />

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Original Findings Bar Graph */}
                            <EnhancedBarGraph />

                            {/* Open Findings Bar Graph */}
                            <OpenFindingsBarGraph />

                            {/* Original Audit Table */}
                            <div className="lg:col-span-2">
                                <AuditTable />
                            </div>

                            {/* Open Findings Table */}
                            <div className="lg:col-span-2">
                                <OpenFindingsTable />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default AuditCoverage;