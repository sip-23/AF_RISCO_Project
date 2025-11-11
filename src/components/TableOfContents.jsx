import React from 'react';
import { Link } from 'react-router-dom';

const TableOfContents = ({ items }) => {

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#124E57] text-white p-4">
                <h3 className="text-xl font-bold">Table of Contents</h3>
            </div>
            <div className="divide-y divide-gray-200">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-[#124E57] text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </div>
                            <span className="text-gray-800 font-medium group-hover:text-[#124E57] transition-colors">
                                {item.title}
                            </span>
                        </div>
                        <div className="text-gray-400 group-hover:text-[#124E57] transition-colors">
                            →
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TableOfContents;