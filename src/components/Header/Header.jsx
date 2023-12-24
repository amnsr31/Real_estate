import React, { useState } from "react"; // Don't forget to import useState
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" }; // Use ternary operator
    }
    return {};
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./Srivastava_homes.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            {" "}
            {/* Add the missing curly braces */}
            <a href="">Residencies</a>
            <a href="">Our Values</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)} // Correct the spelling of "onClick"
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
