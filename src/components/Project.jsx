
import React, { useState } from 'react';
import ProjectSlider from './project_slider';

const Project1 = () => {

    const checkWindowSize = () => {
        if (window.innerWidth <= 1024) {
            console.log('MOBILE WIDTH DETECTED: Window width: ' + window.innerWidth);
        } else {
            console.log('PC WIDTH DETECTED: Window width: ' + window.innerWidth);
        }
    };

    return (
        <section id='features' className={`projects-section bg-white p-4 md:p-20 max-w-full w-full`}>
            <h1 className="font-merriweather text-center font-bold mb-4 text-lg md:text-xl">Наши Проекты</h1>
            <div className={`projects-list grid grid-flow-row auto-cols-max gap-4 justify-center`}>
                        <ProjectSlider/>
            </div>
        </section>
    );
};

export default Project1;