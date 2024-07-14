import React, { useState } from 'react';
import { btns } from '../constants';

const Button1 = ({ id, title, x = 5, y = 3.5, fontSize = 2, onClick, wi, xi }) => {
  const button = btns.find(btn => (btn.id === id) || (btn.title === title));
  const [buttonStyles, setButtonStyles] = xi ? useState({
    backgroundColor: button.bg,
    color: button.text_color,
    borderRadius: '15px',
    transition: 'background-color 0.3s, color 0.3s',
    width: wi ? '' : '100%', // Set the desired width here
    height: wi ? '50px' : ''
  }) : useState({
    backgroundColor: button.bg,
    color: button.text_color,
    borderRadius: '15px',
    transition: 'background-color 0.3s, color 0.3s',
    width: wi ? '30%' : '100%', // Set the desired width here
    height: wi ? '50px' : ''
  });

  const handleMouseEnter = () => {
    setButtonStyles({
      ...buttonStyles,
      backgroundColor: button.hover_bg,
      color: button.hover_text,
    });
  };

  const handleMouseLeave = () => {
    setButtonStyles({
      ...buttonStyles,
      backgroundColor: button.bg,
      color: button.text_color,
    });
  };

  const handleClick = (title) => {
    if (onClick) {
      onClick(title);
    }
  };

  const className = wi
<<<<<<< HEAD
    ? `xs:py-1 xs:px-1.5 py-${y} px-${x} hover:text-lg hover:transition-all xs:hover:text-sm sm:w-3/12 font-raleway xs:text-xs text-base xs:mx-1 xs:my-1 rounded-l data-twe-ripple-init
=======
    ? `xs:py-1 xs:px-1.5 py-${y} px-${x} ${xi ? 'w-full' : 'w-full'} font-raleway xs:text-xs text-base xs:mx-1 xs:my-1 rounded-l data-twe-ripple-init
>>>>>>> 709128051da1599220bf666ed3f4e9d57d0b040a
  data-twe-ripple-color="light"`
    : `py-${y} px-${x} font-raleway hover:transition-all font-medium text-${fontSize}vw leading-[2.625vw] data-twe-ripple-init
  data-twe-ripple-color="light"`;

  return (
    <button
      type='button'
      className={className}
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {button.text}
    </button>
  );
};

export default Button1;
