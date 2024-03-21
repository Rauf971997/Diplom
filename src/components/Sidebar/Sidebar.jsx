import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.webp"
import {links} from "../../data/links"
import { HiOutlineMenu } from "react-icons/hi";
import "./Sidebar.css";

const NavLinks = ({handleClick}) => {
  return (
    <div className="nav-links">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="nav-link"
          onClick={() =>handleClick && handleClick()}
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
      <img src={logo} alt="logo" className="w-full h-20 object-contain" />
      <NavLinks />
    </div>

{/* Mobile menu */}
  <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" 
          onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2"
          onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
{/* Mobile menu end */}

   <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <NavLinks handleClick={() => setMobileMenuOpen(false)} />
    </div>
    </>
  );
};

export default Sidebar;
