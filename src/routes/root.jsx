import styles from "../style";
import { CTA, Footer, Navbar, Stats, Testimonials, Hero, ImageSlider, Plashka, AdvantagesSection, RequestComponent } from "../components";
import { sliders_img } from "../constants";

const Root = () => (
    <div className="bg-white w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Plashka />
                <Navbar />
            </div>
        </div>

        <div className={`bg-white ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <ImageSlider sliders_img={sliders_img}/>
                    <AdvantagesSection/>
                    <RequestComponent />
                </div>
            </div>
        </div>
)

export default Root;