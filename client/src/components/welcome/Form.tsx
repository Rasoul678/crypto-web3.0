import React, { useState } from "react";
import Input from "./Input";
import Loader from "./Loader";

interface FormProps {}

const Form: React.FC<FormProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const handleSubmit = () => {};

  return (
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
  );
};

export default Form;
