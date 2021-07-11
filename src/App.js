import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/GlobalStyle";

import Routes from "./routes";

const App = () => {
  return (
    <>
      <Routes />
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
