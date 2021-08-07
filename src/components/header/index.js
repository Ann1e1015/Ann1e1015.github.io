import React, { Component } from "react";
import "./index.sass";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <a className="home-link" href="/">
            一只球球球
          </a>
          <ul className="right-list">
            <li className="list-item">
              <a href="/" className="item-link">
                Home
              </a>
            </li>

            <li className="list-item">
              <a href="/archive/" className="item-link">
                Archive
              </a>
            </li>
          </ul>
          <div className="header-content">
            <ul className="content-list">
              <li className="content-title">
                Home
              </li>

              <li className="content-description">
                Archive
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
