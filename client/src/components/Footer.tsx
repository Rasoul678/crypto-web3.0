import React from "react";
import logo from "../../images/logo.png";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <div className="footer-logo-wrapper">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="footer-items-wrapper">
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
            <p className="footer-item" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">
          Come join us and hear for the unexpected miracle
        </p>
        <p className="text-white text-sm text-center font-medium mt-2">
          info@kryptomastery.com
        </p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@kryptomastery2022</p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
