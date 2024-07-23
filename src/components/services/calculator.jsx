import React, { useState } from 'react';
import { calc_arrays as calcArrays } from '../../constants/calculators_arrays';
import { services } from '../../constants';
import Datepicker from "react-tailwindcss-datepicker";
import formatDate from './FUNC_formater';
import formatNumbers from './FUNC_numberformater';
import TableComponent from './Table';
import InputMask from 'react-input-mask';
import Button1 from '../button_temp';

const Calculator = ({ selectedServiceId = 1 }) => {
    // Состояние для хранения значения ввода
    const [inputValue, setInputValue] = useState('');

    // Состояние для хранения выбранных опций на каждом шаге
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Состояние для отслеживания текущего шага
    const [currentStep, setCurrentStep] = useState(0);

    // Состояние для управления активностью компонента
    const [active, setActive] = useState(true);

    // Состояние для хранения имени пользователя
    const [name, setName] = useState('');

    // Состояние для хранения номера телефона пользователя
    const [phone, setPhone] = useState('');

    // Обработчик изменения имени
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    // Обработчик изменения номера телефона
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const styles = { 
        step_content_: { 
            maxHeight: 0, 
            overflow: 'hidden', 
            transition: 'max-height 0.3s ease', 
        }, 
        step_content_open: { 
            transition: 'max-height 0.3s ease', 
            maxHeight: '1000px', // Set the maximum height according to your content 
        }, 
    }; 

    /*
        USERCHOICES::
            ARRAY: for i in n
                    i:
                        selectedOption.title,
                        selectedOption.price
    */

    // Состояние для хранения выбранных пользователем опций
    const [userChoices, setUserChoices] = useState([]);

    // Состояние для хранения начальной даты
    const [startDate, setStartDate] = useState('');

    /*
        DATAPICKER::
                value - dataformat
    */

    // Состояние для хранения значений датапикера
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    // Обработчик клика для изменения активности компонента
    const handleActiveClick = () => {
        active ? setActive(false) : setActive(true);
    };

    // Обработчик изменения значения датапикера
    const handleValueChange = (newValue) => {
        setValue(newValue);
    }

    // Функция для архивирования текущего состояния
    const ArchivateState = () => {
        const archived_name = name;
        const archived_phone = phone;
        const archived_title = inputValue;
        const archived_choices = userChoices;
        return { archived_name, archived_phone, archived_title, archived_choices };
    }

    // Функция для вычисления общей стоимости
    const calculateTotal = () => {
        return userChoices.reduce((total, choice) => total + choice.price, 0);
    };

    // Обработчик клика по кнопке отправки
    const handleSubmitButton = () => {
        const { archived_name, archived_phone, archived_title, archived_choices } = ArchivateState();
        const request = {
            fio: archived_name,
            nomer_telefona: archived_phone,
            email: "example@example.com", // Замените на реальный email
            type: 0,
            date: formatDate(value.startDate),
            zayavka_status: 0,
            comment: "Выбранная дата окончания: " + formatDate(value.endDate),
            calculator: [
                {
                    title: archived_title,
                    all_price: formatNumbers(calculateTotal()), // Замените на реальную цену
                    selected_products: archived_choices.map(choice => ({
                        title: choice.title,
                        price: choice.price
                    }))
                }
            ]
        };
    
        fetch('..../netlify/functions/submit-request', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
          })
          .then(response => response.json())
          .then(request => {
            console.log('Success:', request);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          
    };
    

    // Получение данных сервиса по выбранному ID
    const serviceData = calcArrays.find(service => service.id === selectedServiceId);

    /* ЕСЛИ ВЫБРАННЫЙ ID СЕРВИСА СУЩЕСТВУЕТ И ДАННЫЕ СЕРВИСА СОДЕРЖАТ ЗАГОЛОВОК */
    if (selectedServiceId && serviceData && typeof serviceData.title === 'string') {
        // Обработчик изменения опции
        const handleOptionChange = (optionIndex) => {
            const newSelectedOptions = [...selectedOptions];
            newSelectedOptions[currentStep] = serviceData.steps[currentStep].prices[optionIndex].price;
            setSelectedOptions(newSelectedOptions);
        };

        // Обработчик перехода к следующему шагу
        const handleNextStep = () => {
            setSelectedOptions([]); // Reset selectedOptions when moving to the next step
            setCurrentStep(currentStep + 1);
        };

        // Обработчик возврата к предыдущему шагу
        const handlePreviousStep = () => {
            setCurrentStep(currentStep - 1);
        };


        // Обработчик клика по кнопке опции
        const handleButtonClick = (title, price) => {
            setUserChoices([...userChoices, { title, price }]);
        };

        // Обработчик клика по кнопке заголовка
        const handleTitleButtonClick = (name) => {
            var newtitle = inputValue + " " + name;
            setInputValue(newtitle);
        }

        // Обработчик изменения значения ввода
        const handleInputChange = (e) => {
            setInputValue(e.target.value);
        };

        /* ЕСЛИ ТЕКУЩИЙ ШАГ НЕ КОНЕЦ ДЛИННЫ ТО: */
        if (currentStep < serviceData.steps.length + 1) {
            const step = serviceData.steps[currentStep];
            if (inputValue === '') {
                setInputValue(step.default_);
            }

            return (
                <div className='transition-all container mx-auto p-4'>
                    <p className='flex container mx-auto justify-between'>
                        <h2 className='font-raleway text-gray-500 text-l font-semibold my-2'>{serviceData.title}</h2>
                        <h2 className='font-raleway justify-end text-gray-500 text-l font-semibold my-2'>шаг {currentStep + 1} из {serviceData.steps.length + 1}</h2>
                    </p>
                    
                    {/* ЕСЛИ ТЕКУЩИЙ ШАГ ЯВЛЯЕТСЯ ПОСЛЕДНИМ ШАГОМ */}
                    {currentStep === serviceData.steps.length && (
                        <div>
                            <span className='font-raleway text-black text-2xl font-bold mb-4'>DATAPICKER</span>
                            <div className='mb-4'>
                                <p className='font-raleway my-2'>SELECT START DATE AND END DATE</p>
                                <Datepicker
                                    value={value}
                                    onChange={handleValueChange}
                                />
                            </div>
                        </div>
                    )}

                    {/* ЕСЛИ ТЕКУЩИЙ ШАГ НЕ ЯВЛЯЕТСЯ ПОСЛЕДНИМ ШАГОМ */}
                    {currentStep !== serviceData.steps.length && (
                        <div>
                            <span className='font-raleway text-black text-2xl font-bold mb-4'>{step.title}</span>
                            <div className='mb-4'>
                                {step.isSwitch ? (console.log("haha")) : (
                                    <input type="text" 
                                    id="default-input" 
                                    className="font-raleway font-semibold bg-[#D9D9D9] text-black text-x rounded-2xl focus: w-full p-4 my-4" 
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    required
                                    />
                                )}
                                <p className='font-raleway my-2'>{step.desk}</p>
                                {step.isSwitch ? (
                                    <div className='flex flex-col'>
                                        {step.titles.map((option, optionIndex) => (
                                            <div key={optionIndex} className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem] py-2 hover:text-[#FF4000] transition-all hover:max-h-full">
                                                <input 
                                                    key={currentStep}
                                                    id={optionIndex}
                                                    type="checkbox"
                                                    onClick={() => handleButtonClick(option.title, option.price)}
                                                    value=""
                                                    className="relative float-left -ms-[1.4rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] cursor-none appearance-none rounded-[0.25rem] border-[0.125rem] bg-[#d9d9d9] border-solid border-[#d9d9d9] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-[#d9d9d9] before:opacity-100 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-[#ff4000] checked:bg-[#ff4000] checked:before:opacity-[0.16] indeterminate:border-primary indeterminate:bg-[#ff4000] indeterminate:after:absolute indeterminate:after:ms-[0.2rem] indeterminate:after:mt-[6px] indeterminate:after:w-[0.5rem] indeterminate:after:border-[0.05rem] indeterminate:after:border-solid indeterminate:after:border-[#ff4000] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] indeterminate:focus:after:w-[0.5rem] indeterminate:focus:after:rounded-none indeterminate:focus:after:border-[0.125rem] indeterminate:focus:after:border-b-0 indeterminate:focus:after:border-e-0 indeterminate:focus:after:border-s-0 rtl:float-right"
                                                />
                                                <label
                                                    className="font-raleway font-medium inline-block ps-[0.15rem] hover:cursor-pointer mx-2"
                                                    htmlFor={optionIndex}
                                                >
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
                                                    ${selectedOptions[currentStep] === step.prices[optionIndex].price ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                                                onClick={() => handleTitleButtonClick(option.title)}
                                            >
                                                {option.title}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className='flex container my-16 justify-between '>
                        <button
                            className='justify-between px-8 py-2.5 text-center inline-flex items-center m-1 rounded-2xl bg-black text-white font-raleway font-medium'
                            onClick={handlePreviousStep}
                        >
                            Назад
                        </button>
                        <button
                            className='justify-between px-8 py-2.5 text-center inline-flex items-center m-1 rounded-2xl bg-black text-white font-raleway font-medium'
                            onClick={handleNextStep}
                        >
                            Продолжить
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>
            );
        } else {
            /* ЕСЛИ ТЕКУЩИЙ ШАГ КОНЕЦ ДЛИННЫ ТО: */
            return (
                <div className='rounded-xl p-6 bg-gray-50 my-8'>
                    <div className="flex flex-wrap">
                            <span className="xs:text-[21px] text-[36px] font-raleway font-bold transition-all transition-duration-400ms flex flex-row transition duration-300 ease-in-out">
                                {inputValue}
                            </span>
                            <button
                                type="button"
                                className="transition-all hover:text-4xl lining-nums text-[#FF4400] text-3xl z-30 flex h-full mx-4 cursor-pointer focus:outline-none"
                                onClick={() => handleActiveClick()}
                            >
                                {active === true ? '-' : '+'}
                            </button>
                        </div>
                    <div className={`step-content_${active === true ? 'open' : ''}`}
                     style={active === true ? styles.step_content_open : styles.step_content_}>
                        <p className='text-base font-medium font-raleway lining-nums mx-2 my-2'>Дата начала: {formatDate(value.startDate)}</p>
                        <p className='text-base font-medium font-raleway lining-nums mx-2 my-2'>Дата окончания: {formatDate(value.endDate)}</p>
                        <p className='text-base font-medium font-raleway lining-nums mx-2 my-2'>Выбранные опции:</p>
                        <TableComponent userChoices={userChoices}/>
                        <p className='text-lg font-semibold font-raleway lining-nums mx-12 my-4 text-right'>Итого: {formatNumbers(calculateTotal())}</p>
                        <form className='flex flex-wrap'>
                            <input type="text" id="name" className="font-raleway font-semibold bg-[#D9D9D9] text-black 
                            text-x rounded-2xl focus: xs:text-sm w-full sm:p-4 xs:p-2 sm:my-4 xs:my-2" 
                            placeholder={'Введите ФИО...'} value={name} onChange={handleNameChange} required />
                            <InputMask mask="+7 999 999 99 99" maskChar={null} value={phone} onChange={handlePhoneChange}>
                                {() => (
                                    <input
                                        type="tel"
                                        name="floating_phone"
                                        id="floating_phone" 
                                        className="font-raleway lining-nums font-semibold bg-[#D9D9D9] text-black xs:text-sm rounded-2xl focus: w-full sm:p-4 xs:p-2 sm:my-4 xs:my-2" 
                                        placeholder={'Введите Номер телефона..'} 
                                        required 
                                    />
                                )}
                            </InputMask>
                            <Button1 title="submit" x={4} y={2} onClick={handleSubmitButton} />
                        </form>
                    </div>
                </div>
            );
        }
    } else {
        /* ЕСЛИ ВЫБРАННЫЙ ID СЕРВИСА НЕ СУЩЕСТВУЕТ ИЛИ ДАННЫЕ СЕРВИСА НЕ СОДЕРЖАТ ЗАГОЛОВОК */
        return <div className='transition-all transition-duration: 400ms; m-8 text-2xl color-orange font-raleway font-semibold flex flex-row justify-center text-center'>Извините, но калькулятор не работает с данными видами работ!<br />Спасибо за понимание!</div>;
    }
};

export default Calculator;
