import { useState } from "react";
import { NavLink} from "react-router-dom";
import { RiCloseLine} from "react-icons/ri";
import logo from "../assets/logo.png"
import links from "../data/links"

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
      <img src={logo} alt="logo" className="w-full h-20 object-contain" />

    </div>
  );
};

export default Sidebar;
