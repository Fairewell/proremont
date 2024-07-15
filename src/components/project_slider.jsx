import React, { useState } from 'react';
import { projects } from '../constants';
import Projects from './Card';
import { arrowback, arrownext } from "../assets";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectSlider = () => {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <img src={arrownext} alt="Next" className="w-[28px] h-[28px] object-contain" />,
        prevArrow: <img src={arrowback} alt="Prev" className="w-[28px] h-[28px] object-contain" />,
        responsive: [{ 
            breakpoint: 1024, 
            settings: { 
                slidesToShow: 2 
            } 
        }, { 
            breakpoint: 650, 
            settings: { 
                initialSlide: 1, 
                slidesToShow: 1 
            } 
        }] 
    };  

    return (
        <section id='features' className='bg-white p-4 md:p-20 max-w-full w-full'>
        <h1 className='flex justify-center text-center xs:text-xl xs:hover:text-2xl sm:hover:text-4xl sm:text-3xl font-merriweather m-6 transition-all duration-300 ease-in-out md-16'>Посмотрите какие проекты 
        мы сделали</h1>
        <div className='my-16'>
            <Slider {...settings}>
                <div className={`space-x-4`}>
                    {projects.slice(0, 2).map((proj) => (
                        <Projects key={proj.id} id={proj.id} />
                    ))}
                </div>
                <div className={`space-x-4`}>
                    {projects.slice(2).map((proj) => (
                        <Projects key={proj.id} id={proj.id} />
                    ))}
                </div>
            </Slider>
        </div>
    </section>
    );
};

export default ProjectSlider;