// StarsIcons.js

import React from 'react';

const StarsIcons = ({ stars, totalStars }) => {
    const filledStarIcon = '★'; // Заполненная звезда
    const emptyStarIcon = '☆'; // Пустая звезда

    return (
        <div className="flex">
            {Array.from({ length: totalStars }).map((_, index) => (
                <span key={index} className="text-xl">
                    {index < stars ? filledStarIcon : emptyStarIcon}
                </span>
            ))}
        </div>
    );
};

export default StarsIcons;
