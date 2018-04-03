import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import AppRouter from "./routers/AppRouter"
import "./scss/style.scss";

ReactDOM.render(<AppRouter/>, document.getElementById("root"));
