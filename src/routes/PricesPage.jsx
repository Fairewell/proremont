import React, { useState } from 'react';
import styles from "../style";
import { Navbar, Plashka, AboutParagraph, CustomScrollbar, PricesTable } from "../components";
import { prices_info } from '../constants/prices_info';
/**
 * prices_info = [
 *  {
 *  id: //num of id,
 *  list: //name of excel list,
 *  data: {...} // data from excel list
 * },
 * {...}, ...
 * ]
 */
const PricesPage = () => {
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
                    <div className='flex flex-col relative overflow-x-auto'>
                        {prices_info.map((item) => (
                            <div key={item.id} className={`${item.id} flex flex-col mx-2 my-4 px-2 rounded-lg shadow-sm`}>
                                <h3 className='font-raleway font-bold self-center'>{item.list}</h3>
                                <PricesTable data={item.data} />
                            </div>
                        ))}
                    </div>
                    <CustomScrollbar />
                </div>
            </div>
        </div>
    );
};

export default PricesPage;
