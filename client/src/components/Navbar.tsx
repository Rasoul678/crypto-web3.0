import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";

interface NavbarProps {}

interface NavbarItemProps {
  title: string;
  classProps?: string;
}

const navList = ["Market", "Exchange", "Tutorials", "Wallets"];

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
  const { title, classProps } = props;

  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-img-wrapper">
        <img src={logo} alt="logo" className="w-48 cursor-pointer" />
      </div>
      <ul className="nav-list">
        {navList.map((item, index) => {
          return <NavbarItem key={item + index} title={item} />;
        })}
        <li className="btn-primary">Login</li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="nav-icon"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="nav-icon"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className="nav-list-mobile">
            <li className="text-xl w-full my-2">
              <AiOutlineClose className="cursor-pointer" onClick={() => setToggleMenu(false)} />
            </li>
            {navList.map((item, index) => {
              return (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
