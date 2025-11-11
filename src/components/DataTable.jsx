import React from 'react';

const DataTable = ({ headers, data, title, className = '' }) => {
    return (
        <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
            {title && <h3 className="text-xl font-bold text-[#124E57] mb-4">{title}</h3>}
            
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#124E57] text-white">
                            {headers.map((header, index) => (
                                <th key={index} className="p-3 text-left">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-b hover:bg-gray-50">
                                {Object.values(row).map((cell, cellIndex) => (
                                    <td key={cellIndex} className="p-3">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;