
import React, { useState } from 'react';
import { arrowback, arrownext } from "../assets";

const ImageSlider = ({ sliders_img }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState('');
    const [errorImages, setErrorImages] = useState({});
    const handleImageError = (id) => {
        console.log('Image ' + id + ' not found');
        setErrorImages({ ...errorImages, [id]: true });
    };

    const nextSlide = () => {
        setCurrent(current === sliders_img.length - 1 ? 0 : current + 1);
        setDirection('next');
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? sliders_img.length - 1 : current - 1);
        setDirection('prev');
    };
    return (
        <div className="relative w-full">
            <div className="relative overflow-hidden rounded-lg h-56 md:h-96">
                {sliders_img.map((slide, index) => {
                    let slideClasses = 'absolute inset-0 transition-opacity duration-500';
                    let animationClass = '';
                    if (index === current) {
                        slideClasses += ' opacity-100';
                        animationClass = direction === 'next' ? 'slide-in' : 'slide-out';
                    } else {
                        slideClasses += ' opacity-0';
                    }
                    return (
                        <div key={slide.id} className={`${slideClasses} ${animationClass}`}>
                            <img
                                src={slide.path}
                                alt={slide.alt}
                                className="block w-full h-full object-cover"
                                onError={() => handleImageError(slide.id)}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                {sliders_img.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-gray-300'}`}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrent(index)}
                    ></button>
                ))}
            </div>
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                onClick={prevSlide}
            >
                <img
                    src={arrowback}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => prevSlide()}
                />
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                onClick={nextSlide}
            >
                <img
                    src={arrownext}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => nextSlide()}
                />
            </button>
        </div>
    );
};
export default ImageSlider;