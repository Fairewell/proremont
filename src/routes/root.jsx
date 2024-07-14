import styles from "../style";
<<<<<<< HEAD
import { CTA, Footer, Navbar, Stats, Testimonials, Hero, ImageSlider, Plashka, AdvantagesSection, RequestComponent, 
    AboutParagraph, CustomScrollbar, ProjectSlider } from "../components";
=======
import { CTA, Footer, Navbar, Stats, Testimonials, Hero, ImageSlider, Plashka, AdvantagesSection, RequestComponent, ProjectSlider, MicroPlashka } from "../components";
>>>>>>> 709128051da1599220bf666ed3f4e9d57d0b040a
import { sliders_img } from "../constants";

const Root = () => (
    <div className="bg-white w-full overflow-hidden transition-all">
        <div className={`${styles.paddingX} ${styles.flexCenter} transition-all`}>
            <div className={`${styles.boxWidth} transition-all`}>
                <Plashka />
                <Navbar />
                <CustomScrollbar/>
            </div>
        </div>

        <div className={`bg-white ${styles.flexStart} transition-all`}>
<<<<<<< HEAD
                <div className={`${styles.boxWidth} transition-all`}>
                    <ImageSlider sliders_img={sliders_img}/>
                    <AdvantagesSection/>
                    <RequestComponent />
                    <ProjectSlider />
                    <CustomScrollbar/>
                </div>
            </div>
        </div>
    
=======
            <div className={`${styles.boxWidth} transition-all`}>
                <ImageSlider sliders_img={sliders_img} />
                <MicroPlashka />
                <AdvantagesSection />
                <RequestComponent />
                <ProjectSlider />
            </div>
        </div>
    </div>
>>>>>>> 709128051da1599220bf666ed3f4e9d57d0b040a
)

export default Root;