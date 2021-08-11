import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import AccountPage from "./Pages/AccountPage";
import ProfilePage from "./Pages/ProfilePage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/account" component={AccountPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
