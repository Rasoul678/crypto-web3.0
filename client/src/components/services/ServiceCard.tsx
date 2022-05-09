import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
  icon: ReactNode;
  color: string;
  title: string;
  subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const { icon, color, subtitle, title } = props;
  return (
    <div className="services-card-container">
      <div className={`card-icon-wrappr ${color}`}>{icon}</div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
