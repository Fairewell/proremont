
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
            <h2 className="font-merriweather text-center font-bold mb-4 text-lg md:text-xl">Почему стоит выбрать нас?</h2>
            <div className={`advantages-list grid grid-flow-row auto-cols-max gap-4 md:justify-center `}>
                {groupedAdvantages.map((group, index) => (
                    <div key={index} className="grouped-advantages flex flex-row md:flex-row justify-between xs:gap-4 md:gap-32">
                        {group.map((advantage) => (
                            <div
                                key={advantage.id}
                                className={`flex flex-row md:flex-row max-w-full md:max-w-xs font-merriweather advantage-item items-center ${activeAdvantage === advantage.id ? 'active' : ''}`}
                                onClick={() => setActiveAdvantage(advantage.id)}
                            >
                                <img
                                    src={advantage.path}
                                    alt={advantage.text}
                                    className="max-h-4 md:max-h-12 px-4 fill-red-500"
                                    onError={() => handleImageError(slide.id)}
                                />
                                <p
                                    className="text-sm md:text-base"
                                    style={window.innerWidth <= 560 ? { maxWidth: '120px', fontSize: '0.675rem', lineHeight: '1.25rem' } : { fontSize: '1rem', lineHeight: '1.25rem' }}
                                >
                                    {advantage.text}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AdvantagesSection;