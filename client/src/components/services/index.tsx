import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import ServiceCard from "./ServiceCard";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <div className="services-container">
      <div className="services-wrapper">
        <div className="services-description-wrapper">
          <h1 className="services-header">
            Services that we
            <br />
            continue to improve
          </h1>
          <p className="services-description">
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>

        <div className="services-card-wrapper">
          <ServiceCard
            color="bg-[#2952E3]"
            title="Security gurantee"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="Best exchange rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Fastest transactions"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
