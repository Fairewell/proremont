import styles from "../style";
import { useState } from "react";
import { CTA, Footer, Navbar, Plashka, CustomScrollbar } from "../components";
import InputMask from 'react-input-mask';
import { map } from "../assets";

const Feedback = () => {
    const buttons = [
        {
            id: 1,
            title: "klient",
            text: "Клиент",
            bg: "black",
            text_color: "white",
            hover_bg: "orange",
            hover_text: "black",
            isHovered: false,
        },
        {
            id: 2,
            title: "sotrudnik",
            text: "Сотрудничество",
            bg: "black",
            text_color: "white",
            hover_bg: "orange",
            hover_text: "black",
            isHovered: false,
        },
        {
            id: 3,
            title: "zayvka",
            text: "Оформить заявку",
            bg: "black",
            text_color: "white",
            hover_bg: "orange",
            hover_text: "black",
            isHovered: false,
        }
    ];

    const [zczx, setZczx] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [secondname, setSecondname] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleFirstnameChange = (e) => setFirstname(e.target.value);
    const handleSecondnameChange = (e) => setSecondname(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);

    const handleClick = (title) => {
        if (title === "sotrudnik") {
            setZczx(true); // Показываем новые поля ввода
        } else {
            setZczx(false); // Скрываем новые поля ввода, если нажата другая кнопка
        }
        console.log(`Button ${title} clicked`);
    };

    const handleMouseEnter = (index) => {
        buttons[index].isHovered = true;
        setButtons([...buttons]);
    };

    const handleMouseLeave = (index) => {
        buttons[index].isHovered = false;
        setButtons([...buttons]);
    };

    const className = `xs:py-1 xs:px-1.5 py-2 px-2 hover:transition-all sm:w-3/12 font-raleway xs:text-xs text-base xs:mx-1 xs:my-1 rounded-l`;

    return (
        <div className="bg-white w-full overflow-hidden transition-all">
            <div className={`${styles.paddingX} ${styles.flexCenter} transition-all`}>
                <div className={`${styles.boxWidth} transition-all`}>
                    <Plashka />
                    <Navbar />
                    <CustomScrollbar />
                </div>
            </div>
            <div className={`bg-white ${styles.flexStart} transition-all`}>
                <div className={`${styles.boxWidth} flex flex-col transition-all items-center my-8`}>
                    <p className="text-2xl font-raleway font-bold align-center my-8 transition-all mt-1 text-sm hover:text-3xl font-merriweather text-black">ОБРАТНАЯ СВЯЗЬ</p>
                    <p className='items-center text-lg font-raleway font-semibold transition-all mt-1 text-sm hover:text-2xl  font-merriweather text-black'>Задайте нам любой вопрос, напишите или сделайте заказ.</p>
                    <p className='items-center text-lg font-raleway font-semibold transition-all mt-1 text-sm hover:text-2xl  font-merriweather text-black'>Наши менеджеры ответят вам в ближайшее время.</p>
                    <div className="flex flex-col w-1/2">
                        <div className={`flex flex-row h-full`}>
                            {buttons.slice(0, 2).map((button, index) => (
                                <button
                                    key={button.id}
                                    type='button'
                                    id={button.id}
                                    className={className}
                                    style={{
                                        backgroundColor: button.isHovered ? button.hover_bg : button.bg,
                                        color: button.isHovered ? button.hover_text : button.text_color,
                                        borderRadius: '15px',
                                        transition: 'background-color 0.3s, color 0.3s',
                                        width: '40%',
                                        height: '50px',
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: '100px', // Установите минимальную ширину, чтобы кнопки не меняли размер
                                    }}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    onClick={() => handleClick(button.title)}
                                >
                                    {button.text}
                                </button>

                            ))}
                        </div>
                        <form className='flex flex-wrap'>
                            <input type="text" className="font-raleway font-semibold bg-[#D9D9D9] text-black 
                                    text-x rounded-2xl focus: xs:text-sm w-full sm:p-4 xs:p-2 sm:my-4 xs:my-2"
                                placeholder={'Введите Фамилию'} value={firstname} onChange={handleFirstnameChange} required />
                            <input type="text" id="firstname" className="font-raleway font-semibold bg-[#D9D9D9] text-black 
                                text-x rounded-2xl focus: xs:text-sm w-full sm:p-4 xs:p-2 sm:my-4 xs:my-2"
                                placeholder={'Введите Имя'} value={name} onChange={handleNameChange} required />
                            <input type="text" id="secondname" className="font-raleway font-semibold bg-[#D9D9D9] text-black 
                                text-x rounded-2xl focus: xs:text-sm w-full sm:p-4 xs:p-2 sm:my-4 xs:my-2"
                                placeholder={'Введите Отчество'} value={secondname} onChange={handleSecondnameChange} required />
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
                            {zczx && ( // Условный рендеринг новых полей ввода
                                <input type="text" className="font-raleway font-semibold bg-[#D9D9D9] text-black 
                                    text-x rounded-2xl focus: xs:text-sm w-full sm:p-4 xs:p-2 sm:my-4 xs:my-2"
                                    placeholder={'Введите Дополнительную информацию'} required />
                            )}
                            <button
                                key={buttons[2].id}
                                type='button'
                                id={buttons[2].id}
                                className={className}
                                style={{
                                    backgroundColor: buttons[2].isHovered ? buttons[2].hover_bg : buttons[2].bg,
                                    color: buttons[2].isHovered ? buttons[2].hover_text : buttons[2].text_color,
                                    borderRadius: '15px',
                                    transition: 'background-color 0.3s, color 0.3s',
                                    width: '100%',
                                    height: '50px'
                                }}
                                onClick={() => handleClick(buttons[2].title)}
                            >
                                {buttons[2].text}
                            </button>
                        </form>
                    </div>
                    <div className={`${styles.boxWidth} flex flex-col transition-all items-center my-8`}>
                        <p className="text-2xl font-raleway font-bold align-center my-8">НАШИ КОНТАКТЫ</p>
                        <p className='text-lg font-raleway font-semibold'>г. Улан-Удэ</p>
                        <p className='text-lg font-raleway font-semibold'>ул. Борсоева 7а</p>
                        <p className='text-lg font-raleway font-semibold lining-nums'>+7 992 103-32-32</p>
                    </div>
                    <img src={map} />
                </div>
            </div>
        </div>
    );
}

export default Feedback;