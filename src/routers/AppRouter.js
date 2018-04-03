import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/Layout";
import About from "../components/About";

const routes = [
  {
    path: "/",
    component: Layout,
    exact: true
  },
  {
    path: "/about",
    component: About,
    exact: true
  },
  {
    path: "/small",
    exact: true,
    render: () => <div>small function</div>
  },
  {
    path: "/about/me",
    exact: true,
    render: () => <div>about nested url</div>
  }
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
