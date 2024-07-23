import React, { useState } from 'react';
import Button1 from "../button_temp";
import { btns, services } from '../../constants';
import { arrowback, arrownext } from "../../assets";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Temp from './temp';
import Calculator from './calculator';
//32
const ButtonSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    var selectedService = 1;
    const buttonsPerContainer = 6; // Number of buttons in each container
    const totalContainers = Math.ceil(btns.length / buttonsPerContainer);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
    const [selectedServiceId, setSelectedServiceId] = useState(0); // Initial selected service ID

    const handleButtonClick = (title) => {
        selectedService = services.find((service) => service.name === title);
        if (selectedService) {
            setSelectedServiceId(selectedService.id);
        }
    };

    const handleMoveLeft = () => {
        setSelectedButtonIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalContainers - 1));
    };

    const handleMoveRight = () => {
        setSelectedButtonIndex((prevIndex) => (prevIndex < totalContainers - 1 ? prevIndex + 1 : 0));
    };

    return (
        <>
            <Slider {...settings}>
                {Array.from({ length: totalContainers }).map((_, index) => (
                    <div key={index} className="flex space-x-1 sm:space-x-4 xs:space-x-2 m-2 xs:m-8">
                        {btns.slice(index * buttonsPerContainer, (index + 1) * buttonsPerContainer).map((button) => (
                            <Button1
                                key={button.id}
                                id={button.id}
                                wi={true}
                                onClick={() => handleButtonClick(button.title)}
                            >
                                {button.text}
                            </Button1>
                        ))}
                        <button
                            type="button"
                            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
                            onClick={handleMoveRight}
                        >
                            <img
                                src={arrownext}
                                alt="menu"
                                className="w-[28px] h-[28px] object-contain"
                                onClick={handleMoveRight}
                            />
                        </button>
                    </div>
                ))}
            </Slider>
            <Temp selectedServiceId={selectedServiceId} />
            <Calculator selectedServiceId={selectedServiceId} />
        </>
    );
};

export default ButtonSlider;