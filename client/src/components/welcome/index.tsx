import React, { useContext } from "react";
import EtherCard from "./EtherCard";
import Features from "./Features";
import Form from "./Form";
import { TransactionContext } from "../../context/TransactionContext";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = ({}) => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

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
          {!currentAccount && (
            <button
              type="button"
              className="welcome-button"
              onClick={connectWallet}
            >
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
          <Features />
        </div>
        <div className="right-side-welcome">
          <EtherCard />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
