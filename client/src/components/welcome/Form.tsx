import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import Input from "./Input";
import Loader from "./Loader";

interface FormProps {}

const Form: React.FC<FormProps> = ({}) => {
  const { setFormData, formData, sendTransaction, isLoading } =
    useContext(TransactionContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData?.((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { addressTo, amount, keyword, message } = formData!;
    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction?.();
  };

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
