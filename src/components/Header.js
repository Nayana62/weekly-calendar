import React from "react";
import "./Header.css";
import vector from "../icons/Vector.png";
import planning from "../icons/Planning.png";
import documentation from "../icons/Documentation.png";
import housekeeping from "../icons/Housekeeping.png";
import searchIcon from "../icons/Search.png";
import bellIcon from "../icons/Bell-icon.png";
import avatar from "../icons/Ivan.png";

function Header() {
  return (
    <div className="header">
      <div className="section header-section1">
        <div>
          <p>Educator</p>
          <span>Arthshala</span>
        </div>
        <img className="vector" src={vector} alt="" />
      </div>
      <div className="section header-section2">
        <div>
          <img src={planning} alt="" />
          <p>Planning</p>
        </div>
        <div>
          <img src={documentation} alt="" />
          <p>Documentation</p>
        </div>
        <div>
          <img src={housekeeping} alt="" />
          <p>House Keeping</p>
        </div>
      </div>
      <div className="section header-section3">
        <img className="img1" src={searchIcon} alt="" />
        <img className="img1" src={bellIcon} alt="" />
        <img className="img2" src={avatar} alt="" />
        <img className="img3" src={vector} alt="" />
      </div>
    </div>
  );
}

export default Header;
