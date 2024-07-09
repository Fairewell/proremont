import { stats } from "../constants";
import styles from "../style";
import Button1 from "./button_temp";

const Plashka = () => (
  <section className="flex flex-col bg-white">
    <div className="flex justify-center py-6">
      <p className="font-raleway font-medium xs:text-[1vw] ys:text[0.375vw] text-[2.5vw] xs:leading-[3.625vw] leading-[2.5vw] uppercase">
        Приглашаем к сотрудничеству бригады и мастеров своего дела
      </p>
      <div className={`flex mx-16`}>
        <Button1 title="submit" x={4} y={2} />
      </div>
    </div>

  </section>
);

export default Plashka;
