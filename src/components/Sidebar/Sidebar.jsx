import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { links } from "../../data/links";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Sidebar.css";

import { Link } from "react-router-dom";

const NavLinks = ({ handleClick }) => {
  return (
    <div className="nav-links">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="nav-link"
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="icon" />
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);
  
  return (
    <>
      <div className="sidebar-desktop ">
        <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
          </Link >
          <span className="logo-text">MeloMagic</span>
        </div>
        <NavLinks />
      </div>

      {/* Mobile menu */}
      <div className="burger">
        {mobileMenuOpen ? (
          <AiOutlineClose
            className="close-line"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <AiOutlineMenu
            className="open-line"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      {/* Mobile menu end */}

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <span className="logo-text">MeloMagic</span>
        </div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
