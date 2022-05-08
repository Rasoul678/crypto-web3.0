import React from "react";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = ({}) => {
  return <div className="loader-container"><div  className="loader-circle"/></div>;
};

export default Loader;
