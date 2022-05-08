import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from ".";
import Input from "./Input";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const connectToWallet = () => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const handleSubmit = () => {};
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
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#FFF" />
                </div>
                <BsInfoCircle fontSize={17} color="#FFF" />
              </div>
              <div>
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-smibold text-lg mt-1">Ethereum</p>
              </div>
            </div>
          </div>
          <div className="form-container">
            <Input
              placeholder="Address To"
              type="text"
              name="addressTo"
              onChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              type="number"
              name="amount"
              onChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              type="text"
              name="keyword"
              onChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              type="text"
              name="message"
              onChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="form-submit-btn"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
