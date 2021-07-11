import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Supplier from "./pages/Supplier";
import Error404 from "./pages/Error404";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Supplier} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
