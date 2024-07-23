import React, { useState } from 'react';
import { advantages } from '../constants';
import { advantages_bg } from '../assets';

const AdvantagesSection = () => {
    const checkwindowsize = () => {
        if (window.innerWidth <= 1024) {
            console.log('MOBILE WIDTH DETECTED: Windows width: ' + window.innerWidth);
        }
        console.log('PC WIDTH DETECTED: Windows width: ' + window.innerWidth);
    };
    const [activeAdvantage, setActiveAdvantage] = useState(advantages[0].id);
    const groupedAdvantages = [];

    for (let i = 0; i < advantages.length; i += 2) {
        groupedAdvantages.push(advantages.slice(i, i + 2));
    }

    return (
        <section className={`advantages-section bg-white bg-${advantages_bg} p-4 md:p-20 max-w-full w-full`}
            style={{ backgroundImage: `url(${advantages_bg})`, backgroundSize: 'cover' }}>
            <h1 className='flex justify-center text-center xs:text-xl xs:hover:text-2xl sm:hover:text-4xl sm:text-3xl font-merriweather m-6 transition-all duration-300 ease-in-out md-16'>Почему стоит выбрать нас?</h1>
            <div className={`advantages-list xs:grid-cols-1 grid-flow-row auto-cols-max gap-4 md:justify-center rounded-xl py-6 bg-gray-50 my-8`}>
                {groupedAdvantages.map((group, index) => (
                    <div key={index} className="grouped-advantages flex flex xs:my-5 xs:flex-col md:flex-row justify-between xs:gap-2 md:gap-24 md:px-12">
                        {group.map((advantage) => (
                            <div
                                key={advantage.id}
                                className={`mx-5 flex flex-row xs:flex-col md:flex-row max-w-full md:max-w-xs font-merriweather advantage-item items-center ${activeAdvantage === advantage.id ? 'active' : ''}`}
                                onClick={() => setActiveAdvantage(advantage.id)}
                            >
                                <div className="flex items-start gap-4">
                                    <img
                                        src={advantage.path}
                                        alt={advantage.text}
                                        className="h-auto min-w-[75px] pr-4 fill-red-500"
                                        onError={() => handleImageError(slide.id)}
                                    />
                                    <div>
                                        <p className="transition-all mt-1 text-sm hover:text-base  font-merriweather text-black">
                                            {advantage.text}    
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AdvantagesSection;
