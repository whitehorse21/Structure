import React, { useState } from "react";
import { ArrowForward, Menu } from "@material-ui/icons";

import { Styles } from './style/navStyle'
import SmallButton from "../components/smallButton";

const Nav = () => {
  const [show, setShow] = useState(false)

  return (
    <Styles>
      <div className="nav">
        <div className="banner">
          <div>Get no-fee trading for life when you sign up today</div>
          <ArrowForward className="icon" />
        </div>
        <div className="header">
          <div className="logo">
            <img alt="logo" src="/image/logo.png" />
            <div className="logo-text">structure</div>
          </div>
          <div className="menu">
            <div className="item sm-hide">All Assets</div>
            <div className="item xs-hide">Stocks</div>
            <div className="item xs-hide">Crypto</div>
            <div className="item xs-hide">Trade</div>
          </div>
          <div className="action">
            <div className="sign-up sm-hide">Sign up</div>
            <div className="xs-hide">
              <SmallButton text="Get the app" />
            </div>
            <Menu className="icon menu-icon" onClick={() => setShow(!show)} />
          </div>
        </div>
        {show && (
          <div className="mobile-header">
            <div className="mobile-menu">
              <div className="item">All Assets</div>
              <div className="item">Stocks</div>
              <div className="item">Crypto</div>
              <div className="item">Trade</div>
              <div className="item">Sign up</div>
            </div>
            <div className="mobile-action">
              <SmallButton text="Get the app" />
            </div>
          </div>
        )}
      </div>
    </Styles>
  );
}
export default Nav
