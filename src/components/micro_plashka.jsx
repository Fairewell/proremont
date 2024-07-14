import styles from "../style";
import { discount, robot, bg_1 } from "../assets";
import GetStarted from "./GetStarted";
import Button1 from "./button_temp";

const MicroPlashka = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} bg-cover bg-${bg_1}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} style={{ backgroundImage: `url(${bg_1})`, backgroundSize: 'cover' }}>
                <div className="flex flex-row w-full items-center justify-between">
                    <p className={`font-raleway font-medium text-black xl:text-[24px] xl:leading-[15.8px] lg:text-[20px] lg:leading-[18px] md:text-[18px] md:leading-[16px] sm:text-[16px] sm:leading-[15px] xs:text-[8px] xs:leading-[10px] max-w-[700px] mt-5 text-right align-text-bottom leading-6 pr-2 my-4`}>
                        Представляем вам лучшие проекты, разработанные нашей<br />
                        командой профессиональной с любовью и заботой о клиентах.<br />
                        Портфолио позволит вам выбрать интересующий стиль, цвет <br />
                        дерева, фактуру, дизайн и расположение элементов.<br />
                    </p>
                    <div className="flex flex-col items-center ml-16 leading-7">
                        <p className={`font-raleway font-medium text-black xl:text-[24px] xl:leading-[15.8px] max-w-[700px] mt-5 text-right xs:text-[8px] xs:leading-[10px] leading-7 pr-2 sm:text-[14px] sm:leading-4 `}>
                            Позвоните нам или оставьте заявку с сайта<br />
                            Мы перезвоним вам<br />
                        </p>
                        <span className="my-4 font-raleway font-semibold text-black text-2xl lining-nums xs:text-[21px] xs:leading-[10px] place-self-end pr-2">+7(499)246-75-32</span>
                        <Button1 title="submit" wi={true} xi={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MicroPlashka;