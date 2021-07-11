import React from "react";
import { Link } from "react-router-dom";
import { Error } from "../../styles/pages/Error404";

const Error404 = () => {
  return (
    <>
      <Error>
        <h1 className="title">404 Page Not Found</h1>
        <Link to="/"> Voltar </Link>
      </Error>
    </>
  );
};

export default Error404;
