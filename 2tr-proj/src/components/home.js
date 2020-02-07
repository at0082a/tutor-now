import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import StudentReg from "../components/studentreg";
import Toolbar from "./toolbar";
import "../App";

class Home extends Component {
  render() {
    return (
      <Router basename="/sign-up">
        <div className="App">
          <div className="left-side" />
          <div className="AppForm">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcherItemActive"
                className="PageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcherItemActive"
                className="PageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>
​
            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitleLinkActive"
                className="FormTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitleLinkActive"
                className="FormTitleLink"
              >
                Sign Up
              </NavLink>
            </div>
​
            <Route exact path="/" component={StudentReg} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Home;