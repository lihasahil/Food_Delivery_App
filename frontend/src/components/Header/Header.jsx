import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Craving your favorite meal? We deliver it fast and fresh!</h2>
        <p>
          Enjoy a wide variety of local dishes delivered to your doorstep with
          just a few clicks—convenience at its best!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
