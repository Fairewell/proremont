import React, { useState } from 'react';
import { calc_arrays as calcArrays } from '../../constants/calculators_arrays';
import { services } from '../../constants';

const Calculator = ({ selectedServiceId = 1 }) => {
    const [inputValue, setInputValue] = useState(''); // добавьте это состояние
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const serviceData = calcArrays.find(service => service.id === selectedServiceId);

    if (selectedServiceId && serviceData && typeof serviceData.title === 'string') {
        const handleOptionChange = (optionIndex) => {
            const newSelectedOptions = [...selectedOptions];
            newSelectedOptions[currentStep] = serviceData.steps[currentStep].prices[optionIndex].price;
            setSelectedOptions(newSelectedOptions);
        };

        const handleNextStep = () => {
            setCurrentStep(currentStep + 1);
        };

        const calculateTotal = () => {
            return selectedOptions.reduce((total, optionPrice) => total + optionPrice, 0);
        };

        const handleButtonClick = (title) => {
            console.log("btn clk. title: " + title);
            console.log('title is str');
            var newtitle = inputValue + " " + title;
            setInputValue(newtitle); // обновите значение input при клике на кнопку}
        };

        if (currentStep < serviceData.steps.length) {
            const step = serviceData.steps[currentStep];
            if (inputValue === '') {
                console.log('WARN:37 stroke');
                setInputValue(step.default_);
            }
            return (
                <div className='transition-all container mx-auto p-4'>
                    <p className='flex container mx-auto justify-between'>
                        <h2 className='font-raleway text-gray-500 text-l font-semibold my-2'>{serviceData.title}</h2>
                        <h2 className='font-raleway justify-end text-gray-500 text-l font-semibold my-2'>шаг {currentStep + 1} из {serviceData.steps.length}</h2>
                    </p>
                    <span className='font-raleway text-black text-2xl font-bold mb-4'>{step.title}</span>
                    <div className='mb-4'>
                        {step.isSwitch ? (console.log("haha")) : (
                            <input type="text" id="default-input" className="font-raleway font-semibold bg-[#D9D9D9] text-black text-x rounded-2xl focus: w-full p-4 my-4" defaultValue={inputValue} required />
                        )}
                        <p className='font-raleway my-2'>{step.desk}</p>
                        {step.isSwitch ? (
                            <div className='flex flex-col'>
                                {step.titles.map((option, optionIndex) => (
                                    <div class="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem] py-2">
                                        <input id={optionIndex}
                                            type="checkbox"
                                            value=""
                                            class="relative float-left -ms-[1.4rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] cursor-none 
                                    appearance-none rounded-[0.25rem] border-[0.125rem] bg-[#d9d9d9] border-solid border-[#d9d9d9] outline-none 
                                    before:pointer-events-none before:absolute before:h-[0.875rem] 
                                    before:w-[0.875rem] before:scale-0 before:rounded-full 
                                    before:bg-[#d9d9d9] before:opacity-100 before:shadow-checkbox 
                                    before:shadow-transparent before:content-[''] 
                                    checked:border-[#ff4000] checked:bg-[#ff4000] checked:before:opacity-[0.16] 
                                    indeterminate:border-primary 
                                    indeterminate:bg-[#ff4000] indeterminate:after:absolute indeterminate:after:ms-[0.2rem] 
                                    indeterminate:after:mt-[6px] indeterminate:after:w-[0.5rem] 
                                    indeterminate:after:border-[0.05rem] indeterminate:after:border-solid 
                                    indeterminate:after:border-[#ff4000] hover:cursor-pointer hover:before:opacity-[0.04] h
                                    over:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] 
                                    focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 
                                    focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute 
                                    focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] 
                                    focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 
                                    checked:focus:before:shadow-checkbox 
                                    checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                                    checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] 
                                    checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] 
                                    indeterminate:focus:after:w-[0.5rem] indeterminate:focus:after:rounded-none 
                                    indeterminate:focus:after:border-[0.125rem] indeterminate:focus:after:border-b-0 
                                    indeterminate:focus:after:border-e-0 indeterminate:focus:after:border-s-0 rtl:float-right 
                                    "
                                        />
                                        <label
                                            className="font-raleway font-medium inline-block ps-[0.15rem] hover:cursor-pointer mx-2"
                                            onClick={() => handleOptionChange(optionIndex)}
                                            for={optionIndex} >
                                            {option.title}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='flex flex-wrap'>
                                {step.titles.map((option, optionIndex) => (
                                    <button
                                        key={option.id}
                                        className={`bg-[#D9D9D9] px-4 p-1 m-1 border rounded-3xl 
                                            ${selectedOptions[currentStep] === step.prices[optionIndex].price
                                                ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                                        onClick={() => handleButtonClick(option.title)}
                                    >
                                        {option.title}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div className='flex container my-16 justify-between '>
                            <button
                                className='justify-between px-8 py-2.5 text-center inline-flex items-center m-1 rounded-2xl bg-black text-white font-raleway font-medium'
                                onClick={handleNextStep}
                            >
                                Назад
                            </button>
                            <button
                                className='justify-between px-8 py-2.5 text-center inline-flex items-center m-1 rounded-2xl bg-black text-white font-raleway font-medium'
                                onClick={handleNextStep}
                            >
                                Продолжить
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='container mx-auto p-4'>
                    <h2 className='text-2xl font-bold mb-4'>{serviceData.title}</h2>
                    <div className='text-right'>
                        <p className='text-lg font-semibold'>Итого: {calculateTotal()} ₽</p>
                    </div>
                </div>
            );
        }
    } else {
        return <div className='transition-all transition-duration: 400ms; m-8 text-2xl color-orange font-raleway font-semibold flex flex-row justify-center text-center'>Извините, но калькулятор не работает с данными видами работ!<br />Спасибо за понимание!</div>;
    }
};

export default Calculator;