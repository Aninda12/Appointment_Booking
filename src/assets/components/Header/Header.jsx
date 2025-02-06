// import React from "react"; 

// const Header = () => {
//   return <div>Header</div>;
// };

// export default Header;

import { useEffect, useRef } from "react";
import logo from "../../images/apps1.svg";
import { Navlink, Link } from "react-router-dom"

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>

          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.path}
                      className={navClass => navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover: text-primaryColor"
                      }

                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>


          <div className="flex items-centre gap-4">
            <div>
              <link to="/">
              <figure>
                <img src="" alt=""/> 
              </figure>
              </link>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

