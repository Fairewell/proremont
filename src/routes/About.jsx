import React, { useState } from 'react';
import styles from "../style";
import { Navbar, Plashka, AboutParagraph, CustomScrollbar } from "../components";

const AboutPage = () => {
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    return (
        <div className="bg-primary w-full overflow-hidden transition-all">
            <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`bg-white ${styles.boxWidth}`}>
                    <Plashka />
                    <Navbar />
                </div>
            </div>
            <div className={`bg-white ${styles.flexStart}`}>
                <div className={`${styles.boxWidth} transition-all`}>
                    <AboutParagraph/>
                    <CustomScrollbar/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
