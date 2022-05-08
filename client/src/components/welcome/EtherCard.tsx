import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";

interface EtherCardProps {}

const EtherCard: React.FC<EtherCardProps> = ({}) => {
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
          <p className="text-white font-light text-sm">Address</p>
          <p className="text-white font-smibold text-lg mt-1">Ethereum</p>
        </div>
      </div>
    </div>
  );
};

export default EtherCard;
