import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks, extLinks } from "../constants";

import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar bg-white p-20">
      <img src={logo} alt="jsxgames" className="w-[240px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 justify-between pl-20 pr-20">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`transition-all hover:text-[19px] font-raleway font-semibold cursor-pointer text-[16px] hover:text-[#FF4000] hover:font-bold ${active === nav.title ? "text-yellow" : "text-black"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            {nav.isSTR ? <Link to={`/${nav.id}`}>{nav.title}</Link> : <a href={`#${nav.id}`}>{nav.title}</a>}
          </li>
        ))}
      </ul>

      {/* Вывод ссылок на социальные сети */}
      <div className="xs:hidden flex items-center">
        {extLinks.map((extLink) => (
          <a key={extLink.id} href={extLink.link} className="ml-4">
            <extLink.icon size={24} />
          </a>
        ))}
      </div>

      {/* Мобильное меню */}
      <div className="sm:hidden flex flex-1 justify-end items-center z-50">
        {/* Кнопка меню */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Боковое меню */}
        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-[#d9d9d9] absolute top-32 right-0 mx-4 my-16 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-raleway font-medium cursor-pointer text-[16px] hover:text-[#FF4000] ${active === nav.title ? "text-[#FF4000]" : "text-dimBlack"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                {nav.isSTR ? <Link to={`/${nav.id}`}>{nav.title}</Link> : <a href={`#${nav.id}`}>{nav.title}</a>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;