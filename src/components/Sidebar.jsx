import { useState } from "react";
import { NavLink} from "react-router-dom";
import { RiCloseLine} from "react-icons/ri";
import logo from "../assets/logo.png"
import links from "../data/links"

const NavLinks = () =>{
<div className="mt-10">
   {links.map((item)=>{
    <NavLink />
   })}
</div>
}

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
      <img src={logo} alt="logo" className="w-full h-20 object-contain" />
      <NavLinks />
    </div>
  );
};

export default Sidebar;
