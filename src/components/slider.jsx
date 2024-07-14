import React from 'react';
import Slider from "react-slick";
import { arrowback, arrownext } from "../assets";

const ImageSlider = ({ sliders_img }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <img src={arrownext} alt="Next" className="w-[28px] h-[28px] object-contain" />,
        prevArrow: <img src={arrowback} alt="Prev" className="w-[28px] h-[28px] object-contain" />,
        customPaging: i => (
            <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-white' : 'bg-gray-300'}`}></div>
        ),
    };

    return (
        <div className="relative w-full">
            <Slider {...settings}>
                {sliders_img.map((slide, index) => (
                    <div key={slide.id}
                    className='h-56 px-16 xs:px-2'>
                        <img
                            src={slide.path}
                            alt={slide.alt}
                            className="block w-full h-56 object-cover rounded-xl"
                            onError={() => console.log('Image ' + slide.id + ' not found')}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
