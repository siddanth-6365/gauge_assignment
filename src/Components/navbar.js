import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex p-4 bg-[#1C1C3A]   text-white justify-around">
      <div>
        <img src="https://ik.imagekit.io/aq3ybtarw/gauge/logo_gauge_red.png?updatedAt=1683741657958" alt="logo" />
      </div>
      <div className="flex font-semibold gap-7 cursor-pointer">
        <div>HOME</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
      <div className="cursor-pointer">Call Us</div>
    </nav>
  );
};
