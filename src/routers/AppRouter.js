import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/Layout";

const routes = [
  {
    path: "/",
    component: Layout,
    exact: true
  },
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
              render={route.render}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
