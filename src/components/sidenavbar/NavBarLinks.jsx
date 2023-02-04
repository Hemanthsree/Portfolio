import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import PsychologyIcon from '@mui/icons-material/Psychology';
import { NavLink } from "react-router-dom";

const NavBarLinks = () => {
  return (
    <div className="links">
      <div className="cflex">
        <HomeIcon />&nbsp;<NavLink to="/"><h4>Home</h4></NavLink>
      </div>
      <div className="cflex">
        <AccountCircleIcon />&nbsp; <h4 className="nav"><NavLink to="/About">About</NavLink></h4>
      </div>
      <div className="cflex">
        <DescriptionIcon />&nbsp; <NavLink to="/Resume"><h4>Resume</h4></NavLink>
      </div>
      <div className="cflex">
        <PsychologyIcon />&nbsp; <NavLink to="/Skills"><h4>Skills</h4></NavLink>
      </div>
      <div className="cflex">
        <RecentActorsIcon />&nbsp; <NavLink to="/Contact"><h4>contact</h4></NavLink>
      </div>
      
    </div>
  );
};

export default NavBarLinks;
