// src/context/FilterContext.js
import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};

export const FilterProvider = ({ children }) => {
    const [selectedPeriod, setSelectedPeriod] = useState('');
    const [selectedPillar, setSelectedPillar] = useState('');
    const [selectedEntity, setSelectedEntity] = useState('');

    const value = {
        selectedPeriod,
        setSelectedPeriod,
        selectedPillar,
        setSelectedPillar,
        selectedEntity,
        setSelectedEntity
    };

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    );
};