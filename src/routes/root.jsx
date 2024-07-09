import styles from "../style";
import { CTA, Footer, Navbar, Stats, Testimonials, Hero, ImageSlider, Plashka, AdvantagesSection, RequestComponent } from "../components";
import { sliders_img } from "../constants";

const Root = () => (
    <div className="bg-white w-full overflow-hidden transition-all">
        <div className={`${styles.paddingX} ${styles.flexCenter} transition-all`}>
            <div className={`${styles.boxWidth} transition-all`}>
                <Plashka />
                <Navbar />
            </div>
        </div>

        <div className={`bg-white ${styles.flexStart} transition-all`}>
                <div className={`${styles.boxWidth} transition-all`}>
                    <ImageSlider sliders_img={sliders_img}/>
                    <AdvantagesSection/>
                    <RequestComponent />
                </div>
            </div>
        </div>
)

export default Root;