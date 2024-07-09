import { stats } from "../constants";
import styles from "../style";
import Button1 from "./button_temp";

const Plashka = () => (
  <section className="flex flex-col bg-white">
    <div className="flex justify-center py-6 items-center">
      <span className="font-raleway font-medium xs:text-xs ys:text-2xl uppercase">
        Приглашаем к сотрудничеству бригады и мастеров своего дела
      </span>
      <div className={`flex mx-16`}>
        <Button1 title="submit" x={4} y={2} />
      </div>
    </div>

  </section>
);

export default Plashka;
