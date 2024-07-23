import React, { useState } from 'react';
import styles from "../style";
import { CTA, Footer, Navbar, Stats, Testimonials, Hero, ImageSlider, Plashka, AdvantagesSection, RequestComponent, CustomScrollbar } from "../components";
import { ButtonSlider, Temp, Calculator } from "../components/services";

const ServicePage = () => {
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    return (
        <div className="bg-primary w-full overflow-hidden transition-all">
            <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`bg-white ${styles.boxWidth}`}>
                    <Plashka />
                    <Navbar />
                    <CustomScrollbar/>
                </div>
            </div>
            <div className={`bg-white ${styles.flexStart}`}>
                <div className={`${styles.boxWidth} transition-all`}>
                    <ButtonSlider setSelectedServiceId={setSelectedServiceId} />
                    <RequestComponent />
                    <CustomScrollbar/>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
