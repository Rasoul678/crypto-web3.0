import React from "react";

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <div className="feature-wrapper">
      <div className="rounded-tl-2xl feature-common">Reliability</div>
      <div className="feature-common">Security</div>
      <div className="rounded-tr-2xl feature-common">Ethereum</div>
      <div className="rounded-bl-2xl feature-common">Web 3.0</div>
      <div className="feature-common">Low fees</div>
      <div className="rounded-br-2xl feature-common">Blockchain</div>
    </div>
  );
};

export default Features;
