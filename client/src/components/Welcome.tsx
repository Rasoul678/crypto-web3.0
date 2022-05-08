import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from ".";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = ({}) => {
  const connectToWallet = () => {};
  return (
    <div className="welcome-container">
      <div className="welcome-wrapper">
        <div className="welcome-header">
          <h1 className="welcome-title">
            Send Crypto <br /> across the world
          </h1>
          <p className="welcome-excerpt">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Crypto
          </p>
          <button
            type="button"
            className="welcome-button"
            onClick={connectToWallet}
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
          <div className="feature-wrapper">
            <div className="rounded-tl-2xl feature-common">Reliability</div>
            <div className="feature-common">Security</div>
            <div className="rounded-tr-2xl feature-common">Ethereum</div>
            <div className="rounded-bl-2xl feature-common">Web 3.0</div>
            <div className="feature-common">Low fees</div>
            <div className="rounded-br-2xl feature-common">Blockchain</div>
          </div>
        </div>
        <div className="right-side-welcome">
          <div className="right-side-wrapper">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
