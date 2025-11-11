import React from 'react';
import Carousel from './Carousel';

const Dashboard = () => {
    const reportCards = [
        {
            title: "Executive Summary",
            content: "To maximise/optimise the value of the organisation's human capital by attracting, developing, and retaining talented individuals, fostering a positive and inclusive work environment, and aligning human capital strategies with overall business goals to drive sustainable growth and competitive advantage."
        },
        {
            title: "Risk Catagory Exposure and Positions",
            content: "To maximise/optimise the value of the organisation's human capital by attracting, developing, and retaining talented individuals, fostering a positive and inclusive work environment, and aligning human capital strategies with overall business goals to drive sustainable growth and competitive advantage."
        },
    ];

    return (
        <div className="w-full py-3">
            <Carousel>
                {reportCards.map((card, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-3 mx-4 h-[450px] flex flex-col">
                        <h3 className="bg-[#124E57] text-white p-3 text-lg font-semibold rounded-t-lg">
                            {card.title}
                        </h3>
                        <p className="text-gray-700 p-4 text-sm leading-relaxed flex-1">
                            {card.content}
                        </p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Dashboard;