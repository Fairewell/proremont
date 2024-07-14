import React, { useEffect, useState } from 'react';
import { services_info } from '../../constants/services_info';
import ImageSlider from '../slider';

const Temp = ({ selectedServiceId = 1 }) => {
    const [selectedPunct, setSelectedPunct] = useState('punckt1');
    const [selectedTitle, setSelectedTitle] = useState('title1');

    useEffect(() => {
        console.log('ID has changed:', selectedServiceId);
        // Perform actions when ID changes
    }, [selectedServiceId]);

    const service = services_info.find(service => service.id === selectedServiceId);

    if (!service) {
        return <div className='transition-all transition-duration: 400ms; m-8 text-2xl color-orange font-raleway font-semibold flex flex-row justify-center text-center'>Извините, данный вид работ временно на переработке<br/>Спасибо за понимание!</div>;
    }

    const handleTitleClick = (title) => {
        setSelectedTitle(title);
        console.log(title);
    };

    const handlePuncktClick = (punckt) => {
        setSelectedPunct(punckt);
        console.log(punckt);
    };

    return (
        <div className="transition-all transition-duration: 400ms; p-4 flex flex-col">
            <div>
                <ul className="transition-all transition-duration: 400ms;list-none flex flex-row ml-6 transition duration-300 ease-in-out justify-center">
                    {Object.keys(service.titles).map((title, index) => (
                        <li key={index} onClick={() => handleTitleClick(title)} className={`transition-all hover:text-2xl text-xl font-merriweather m-6 cursor-pointer hover:text-[#FF4000] ${selectedTitle === title ? `text-[#FF4000] font-bold` : "black"}`}>{service.titles[title]} </li>
                    ))}
                    {console.log(service.titles)}
                </ul>
            </div>
            <div>
                <div className="transition-all transition-duration: 400ms;mt-2 transition duration-300 ease-in-out">
                    <ul className="flex flex-row list-none ml-6 justify-center">
                        {Object.keys(service.punckts[selectedTitle]).map((punckt, index) => (
                            <li className={`font-raleway font-semibold m-6 cursor-pointer ${selectedPunct === punckt ? `text-[#FF4000] font-bold` : "black"} transition-all hover:text-xl hover:text-[#FF4000]`} onClick={() => handlePuncktClick(punckt)} key={index}>{service.punckts[selectedTitle][punckt]}</li>
                        ))}
                    </ul>
                    <div className='transition-all transition-duration: 400ms;greet-and-desk flex flex-row justify-center transition duration-300 ease-in-out'>
                        <p className='font-merriweather m-6 transition duration-300 ease-in-out'>{service.greetings[selectedTitle][selectedPunct]}</p>
                        <p className='font-merriweather m-6 transition duration-300 ease-in-out'>{service.desckriptions[selectedTitle][selectedPunct]}</p>
                    </div>
                </div>
            </div>
            {console.log(service.photos[selectedTitle][selectedPunct].sliders_img)}
            <ImageSlider sliders_img={service.photos[selectedTitle][selectedPunct].sliders_img} />
        </div>
    );
};

export default Temp;
//<ImageSlider sliders_img={service.photos[selectedTitle][selectedPunct]} />