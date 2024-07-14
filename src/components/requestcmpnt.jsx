
import React, { useState, useEffect } from 'react';
import { advantages } from '../constants';
import { steps1, steps2, steps3, steps4, steps5 } from '../assets';

const RequestComponent = () => {

    // Инициализация состояния с начальными значениями размера окна
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Обработчик изменения размера окна
    const handleResize = () => {
        // Обновление состояния с новыми размерами окна
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    const i = 5;

    // Подписка на событие изменения размера окна
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Очистка подписки
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={`request-section bg-white p-4 md:p-20 max-w-full w-full`}>
            <div className={`mx-2 request-list grid grid-flow-row xs:grid-cols-2 grid-cols-3 gap-4 justify-center rounded-xl p-6 bg-gray-50 my-8`}
                style={{ maxWidth: '100%', }}>
                <img
                    src={steps1}
                    alt="menu"
                    className={`w-[${window.innerWidth / i}] h-auto object-contain`}
                />
                <img
                    src={steps2}
                    alt="menu"
                    className={`w-[${window.innerWidth / i}] h-auto object-contain`}
                />
                <img
                    src={steps3}
                    alt="menu"
                    className={`w-[${window.innerWidth / i}] h-auto object-contain`}
                />
                <img
                    src={steps4}
                    alt="menu"
                    className={`w-[${window.innerWidth / i}] h-auto object-contain`}
                />
                <img
                    src={steps5}
                    alt="menu"
                    className={`w-[${window.innerWidth / i}] h-auto object-contain`}

                />
            </div>
            <div class={`my-12 relative bg-black w-[${window.innerHeight - 50}] h-2 rounded-lg shadow`}>
            </div>
        </section>
    );
};

export default RequestComponent;