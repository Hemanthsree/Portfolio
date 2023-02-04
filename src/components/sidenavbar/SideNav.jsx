import React from "react";
import Profile from "./Profile";
import NavBarLinks from "./NavBarLinks";
import SocialMedia from "./SocialMedia";
import Copyrights from "./Copyrights";

const SideNav = () => {
  return (
    <div className="sidenav">
      <Profile />
      <SocialMedia />
      <NavBarLinks />
      <Copyrights />
    </div>
  );
};

export default SideNav;
