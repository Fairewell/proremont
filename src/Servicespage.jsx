import React, { useState } from 'react';
import styles from "./style";
import { CTA, Footer, Navbar, Stats, Testimonials, Hero, ImageSlider, Plashka, AdvantagesSection, RequestComponent } from "./components";
import { ButtonSlider, Temp, Calculator } from "./components/services";

const ServicePage = () => {
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    return (
        <div className="bg-primary w-full overflow-hidden">
        <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`bg-white ${styles.boxWidth}`}>
                <Plashka />
                <Navbar />
            </div>
        </div>
            <div className={`bg-white ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <ButtonSlider setSelectedServiceId={setSelectedServiceId} />
                    <RequestComponent />
                </div>
            </div>
        </div>
    );
};

export default ServicePage;