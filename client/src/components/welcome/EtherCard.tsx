import React, { useContext } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import { TransactionContext } from "../../context/TransactionContext";

interface EtherCardProps {}

const EtherCard: React.FC<EtherCardProps> = ({}) => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="card-container">
      <div className="flex justify-between flex-col w-full h-full">
        <div className="flex justify-between items-start">
          <div className="ether-icon-wrapper">
            <SiEthereum fontSize={21} color="#FFF" />
          </div>
          <BsInfoCircle fontSize={17} color="#FFF" />
        </div>
        <div>
          <p className="text-white font-light text-sm">{currentAccount}</p>
          <p className="text-white font-smibold text-lg mt-1">Ethereum</p>
        </div>
      </div>
    </div>
  );
};

export default EtherCard;
