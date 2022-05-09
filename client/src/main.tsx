import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import TransactionProvider from "./context/TransactionContext";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </React.StrictMode>
);
