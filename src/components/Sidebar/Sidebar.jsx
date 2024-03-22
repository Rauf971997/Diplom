import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.webp";
import { links } from "../../data/links";
import { HiOutlineMenu } from "react-icons/hi";
import "./Sidebar.css";

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
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="sidebar-desktop ">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <span class="logo-text">MeloMagic</span>
        </div>
        <NavLinks />
      </div>

      {/* Mobile menu */}
      <div className="burger">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="close-line"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="open-line"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      {/* Mobile menu end */}

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <span class="logo-text">MeloMagic</span>
        </div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
