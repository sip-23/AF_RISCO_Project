import React, { useState } from 'react';
import { useFilter } from '../context/FilterContext';
import BAN from '../data/images';

const ReportingFooter = () => {
    const { 
        selectedPeriod, 
        setSelectedPeriod, 
        selectedPillar, 
        setSelectedPillar, 
        selectedEntity, 
        setSelectedEntity 
    } = useFilter();
    
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Reporting Period options
    const reportingPeriods = [
        { value: 'fy24q1', label: 'FY24 Q1 (Apr 2023 - end Jun 2023)' },
        { value: 'fy24q2', label: 'FY24 Q2 (Jul 2023 - end Sep 2023)' },
        { value: 'fy24q3', label: 'FY24 Q3 (Oct 2023 - end Dec 2023)' },
        { value: 'fy24q4', label: 'FY24 Q4 (Jan 2024 - end Mar 2024)' },
        { value: 'fy25q1', label: 'FY25 Q1 (Apr 2024 - end Jun 2024)' },
        { value: 'fy25q2', label: 'FY25 Q2 (Jul 2024 - end Sep 2024)' },
        { value: 'fy25q3', label: 'FY25 Q3 (Oct 2024 - end Dec 2024)' },
        { value: 'fy25q4', label: 'FY25 Q4 (Jan 2025 - end Mar 2025)' },
        { value: 'fy26q1', label: 'FY26 Q1 (Apr 2025 - end Jun 2025)' },
        { value: 'fy26q2', label: 'FY26 Q2 (Jul 2025 - end Sep 2025)' },
        { value: 'fy26q3', label: 'FY26 Q3 (Oct 2025 - end Dec 2025)' },
        { value: 'fy26q4', label: 'FY26 Q4 (Jan 2026 - end Mar 2026)' }
    ];

    // Pillar options
    const pillars = [
        { value: 'all', label: 'All Pillars' },
        { value: 'corporate', label: 'Corporate' },
        { value: 'investments', label: 'Investments' },
        { value: 'retail', label: 'Retail' },
        { value: 'growth-markets', label: 'Growth Markets' },
        { value: 'group-center', label: 'Group Center' }
    ];

    // Legal Entity options (1-20)
    const legalEntities = Array.from({ length: 20 }, (_, i) => ({
        value: `entity${i + 1}`,
        label: `Entity ${i + 1}`
    }));

    // Get display label for selected values
    const getDisplayLabel = (value, options) => {
        if (!value) return 'Select...';
        const option = options.find(opt => opt.value === value);
        return option ? option.label : 'Select...';
    };

    const handleOptionSelect = (value, type) => {
        switch (type) {
            case 'period':
                setSelectedPeriod(value);
                setActiveDropdown(null);
                break;
            case 'pillar':
                setSelectedPillar(value);
                setActiveDropdown(null);
                break;
            case 'entity':
                setSelectedEntity(value);
                setActiveDropdown(null);
                break;
            default:
                break;
        }
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full bg-white h-20 flex items-center border-t-2 border-primary p-4 z-50">
            <div className="flex items-center justify-center gap-6 w-full">
                {/* Reporting Period Dropdown */}
                <div className="dropdown-container relative">
                    <button
                        onClick={() => toggleDropdown('period')}
                        className="w-[350px] px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:border-[#124E57] hover:shadow-md transition-all duration-200 flex items-center justify-between text-left"
                    >
                        <span className="text-gray-700 font-medium">
                            {getDisplayLabel(selectedPeriod, reportingPeriods)}
                        </span>
                        <svg 
                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeDropdown === 'period' ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {activeDropdown === 'period' && (
                        <div className="absolute bottom-full left-0 mb-2 w-[350px] max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            <div className="p-2">
                                {reportingPeriods.map((period) => (
                                    <button
                                        key={period.value}
                                        onClick={() => handleOptionSelect(period.value, 'period')}
                                        className={`w-[350px] px-3 py-2 text-left rounded-md hover:bg-[#124E57] hover:text-white transition-colors duration-150 ${
                                            selectedPeriod === period.value 
                                                ? 'bg-[#124E57] text-white font-semibold' 
                                                : 'text-gray-700'
                                        }`}
                                    >
                                        {period.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Pillar Dropdown */}
                <div className="dropdown-container relative">
                    <button
                        onClick={() => toggleDropdown('pillar')}
                        className="w-48 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:border-[#124E57] hover:shadow-md transition-all duration-200 flex items-center justify-between text-left"
                    >
                        <span className="text-gray-700 font-medium">
                            {getDisplayLabel(selectedPillar, pillars)}
                        </span>
                        <svg 
                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeDropdown === 'pillar' ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {activeDropdown === 'pillar' && (
                        <div className="absolute bottom-full left-0 mb-2 w-48 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            <div className="p-2">
                                {pillars.map((pillar) => (
                                    <button
                                        key={pillar.value}
                                        onClick={() => handleOptionSelect(pillar.value, 'pillar')}
                                        className={`w-full px-3 py-2 text-left rounded-md hover:bg-[#124E57] hover:text-white transition-colors duration-150 ${
                                            selectedPillar === pillar.value 
                                                ? 'bg-[#124E57] text-white font-semibold' 
                                                : 'text-gray-700'
                                        }`}
                                    >
                                        {pillar.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Legal Entity Dropdown */}
                <div className="dropdown-container relative">
                    <button
                        onClick={() => toggleDropdown('entity')}
                        className="w-[280px] px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:border-[#124E57] hover:shadow-md transition-all duration-200 flex items-center justify-between text-left"
                    >
                        <span className="text-gray-700 font-medium">
                            {getDisplayLabel(selectedEntity, legalEntities)}
                        </span>
                        <svg 
                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeDropdown === 'entity' ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {activeDropdown === 'entity' && (
                        <div className="absolute bottom-full left-0 mb-2 w-[280px] max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            <div className="p-2">
                                {legalEntities.map((entity) => (
                                    <button
                                        key={entity.value}
                                        onClick={() => handleOptionSelect(entity.value, 'entity')}
                                        className={`w-full px-3 py-2 text-left rounded-md hover:bg-[#124E57] hover:text-white transition-colors duration-150 ${
                                            selectedEntity === entity.value 
                                                ? 'bg-[#124E57] text-white font-semibold' 
                                                : 'text-gray-700'
                                        }`}
                                    >
                                        {entity.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <img 
                className="w-[220px] h-16 ml-auto" 
                src= {BAN}
                alt="Khusela-logo" 
            />
        </footer>
    );
};

export default ReportingFooter;