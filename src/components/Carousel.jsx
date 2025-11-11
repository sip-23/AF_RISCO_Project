import React, { useState } from 'react';

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = React.Children.toArray(children);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto p-6">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-lg">
                {/* Carousel Track */}
                <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div 
                            key={index} 
                            className="w-full flex-shrink-0"
                        >
                            {slide}
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button 
                    onClick={prevSlide}
                    className="absolute -left-1 top-1/2 transform -translate-y-1/2 bg-[#124E57]/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#124E57] transition-colors z-10"
                >
                    ‹
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute -right-1 top-1/2 transform -translate-y-1/2 bg-[#124E57]/80 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#124E57] transition-colors z-10"
                >
                    ›
                </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentIndex 
                                ? 'bg-[#124E57]' 
                                : 'bg-gray-300 hover:bg-[#15808D]'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;