import React, { Component } from "react";
import "./index.scss";
import menu from './../../assets/icon/menu.svg'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    
  }

  onMenuIconClick = (e) => {
    console.log(e)
    e.stopPropagation()
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }

  stopProp = e => {
    e.stopPropagation()
  }

  render() {
    return (
      <header className="header">
        <div className="header-container">
          <a className="home-link" href="/">
            一只球球球
          </a>
          <div className="right-list">
            <img src={menu} alt="嘻嘻" onClick={this.onMenuIconClick} className="menu-icon"></img>
            <ul onClick={this.onMenuIconClick} className={`right-list-main ${this.state.showMenu ? 'active' : ''}`}>
              <li className="list-item" onClick={this.stopProp}>
                <a href="/" className="item-link">
                  Home
                </a>
              </li>

              <li className="list-item">
                <a href="/about/" className="item-link">
                  About
                </a>
              </li>
            </ul>
          </div>
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
