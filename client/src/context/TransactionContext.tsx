import { createContext, ReactNode, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

interface FormData {
  addressTo: string;
  amount: string;
  keyword: string;
  message: string;
}

interface ProviderValueProps {
  currentAccount?: string;
  connectWallet?: () => void;
  setFormData?: React.Dispatch<React.SetStateAction<FormData>>;
  formData?: FormData;
  sendTransaction?: () => void;
}

export const TransactionContext = createContext<ProviderValueProps>({});

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

interface TransactionProviderProps {
  children?: ReactNode;
}

const TransactionProvider: React.FC<TransactionProviderProps> = (props) => {
  const { children } = props;
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  const catchError = (error: unknown) => {
    console.log(error);
    throw new Error("No ethereum object!");
  };

  const checkMetamask = () => {
    if (!ethereum) return alert("Please install Metamask!");
  };

  const setupIfWalletIsConnected = async () => {
    try {
      checkMetamask();

      const accounts = await ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        // getAllTransactions();
      } else {
        console.log("No accounts found!");
      }
    } catch (error) {
      catchError(error);
    }
  };

  const connectWallet = async () => {
    try {
      checkMetamask();

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      catchError(error);
    }
  };

  const sendTransaction = async () => {
    try {
      checkMetamask();

      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();

      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // 21000 Gwei (sub-unit of ethereum)
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);

      await transactionHash.wait();

      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();

      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      catchError(error);
    }
  };

  useEffect(() => {
    setupIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        connectWallet,
        setFormData,
        formData,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
