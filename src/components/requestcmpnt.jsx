
import React, { useState, useEffect } from 'react';
import { advantages } from '../constants';
import { steps1, steps2, steps3, steps4, steps5 } from '../assets';
import InputMask from 'react-input-mask';
import Button1 from './button_temp';

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

    const i = 7;

    // Подписка на событие изменения размера окна
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Очистка подписки
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={`request-section bg-white p-4 md:p-20 max-w-full w-full`}>
            <div className={`mx-2 request-list grid grid-flow-row xs:grid-cols-2 sm:grid-cols-3 grid-cols-3 gap-4 justify-center rounded-xl p-6 bg-gray-50 my-8`}
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
                <div className='flex flex-wrap'>
                <input type="text" id="name" className="font-raleway font-semibold bg-[#D9D9D9] text-black text-x rounded-2xl focus: xs:text-sm w-full sm:p-4 xs:p-2 sm:my-4 xs:my-2" placeholder={'Введите ФИО...'} required />
                <InputMask mask="+7 999 999 99 99" maskChar={null}>
                    {() => <input type="tel" name="floating_phone" id="floating_phone" className="font-raleway lining-nums font-semibold bg-[#D9D9D9] text-black xs:text-sm rounded-2xl focus: w-full sm:p-4 xs:p-2 sm:my-4 xs:my-2" placeholder={'Введите Номер телефона..'} required />}
                </InputMask>
                <Button1 title="submit" x={4} y={2} />
                </div>
            </div>
        </section>
    );
};

export default RequestComponent;