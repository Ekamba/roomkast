import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [t, i18n] = useTranslation("common");
  const [stateMenu, setStateMenu] = useState({
    activeMenu: null,
    englishObject: [{ id: 1, name: "EN" }],
    danishObject: [{ id: 2, name: "DK" }],
  });

  const toggleNavbar = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", toggleNavbar);

  const toggleEnglishMenuActive = (index) => {
    setStateMenu({
      ...stateMenu,
      activeMenu: stateMenu.englishObject[index],
    });
  };
  const toggleDanishMenuActive = (index) => {
    setStateMenu({
      ...stateMenu,
      activeMenu: stateMenu.danishObject[index],
    });
  };

  const toggleEnglishStyleActiveMenu = (index) => {
    if (stateMenu.englishObject[index] === stateMenu.activeMenu) {
      return "english_btn button_active";
    }
    if (stateMenu.danishObject[index] === stateMenu.activeMenu) {
      return "danish_btn";
    } else {
      return "english_btn button_active";
    }
  };
  const toggleDanishStyleActiveMenu = (index) => {
    if (stateMenu.danishObject[index] === stateMenu.activeMenu) {
      return "danish_btn button_active";
    } else {
      return "danish_btn";
    }
  };

  return (
    <nav className={navbar ? "navbar sticky" : "navbar menu"}>
      <div className="max-width">
        <Link to="#">
          <img className="appLogo" src="/images/Rk_logo_red.png" alt="logo" />
        </Link>
        <div className="left-menu">
          <NavLink to="/" activeClassName="active" className="menu-items">
            {t("Tenants.title", { framework: "React" })}
          </NavLink>
          <NavLink
            to="/landLords"
            activeClassName="active"
            className="menu-items"
          >
            {t("Landlords.title", { framework: "React" })}
          </NavLink>
        </div>
        <div className="languages">
          {stateMenu.englishObject.map((menu, index) => (
            <div
              key={index}
              className={toggleEnglishStyleActiveMenu(index)}
              onClick={() => {
                toggleEnglishMenuActive(index);
              }}
            >
              <button onClick={() => i18n.changeLanguage("en")}>
                {menu.name}
              </button>
            </div>
          ))}
          {stateMenu.danishObject.map((menu, index) => (
            <div
              key={index}
              className={toggleDanishStyleActiveMenu(index)}
              onClick={() => {
                toggleDanishMenuActive(index);
              }}
            >
              <button onClick={() => i18n.changeLanguage("dk")}>
                {menu.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
