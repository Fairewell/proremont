import React, { useState } from 'react';
import { projects } from '../constants';
import Projects from './Card';
import { arrowback, arrownext } from "../assets";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectSlider = () => {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 650,
            settings: {
                initialSlide: 2,
                slidesToShow: 1
            }
        }]
    };

    const buttonsPerContainer = 2; // Number of buttons in each container
    const totalContainers = Math.ceil(projects.length / buttonsPerContainer);

    const handleMoveLeft = () => {
        setSelectedButtonIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : totalContainers - 1));
    };

    const handleMoveRight = () => {
        setSelectedButtonIndex(prevIndex => (prevIndex < totalContainers - 1 ? prevIndex + 1 : 0));
    };

    return (
        <Slider {...settings}>
            {Array.from({ length: totalContainers }).map((_, index) => (
                <div key={index} className="flex flex-cols space-x-4 mx-8">
                    {projects.slice(index * buttonsPerContainer, (index + 1) * buttonsPerContainer).map((proj) => (
                        <Projects key={proj.id} id={proj.id} />
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
                        />
                    </button>
                </div>
            ))}
        </Slider>
    );
};

export default ProjectSlider;