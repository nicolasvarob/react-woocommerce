import React, { Component } from "react";
import Navbar from "./Navbar";

import "./Header.css";

export default class Header extends Component {
  state = {
    fixed: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll);
  }

  _handleScroll = e => {
    const Yposition = window.pageYOffset;
    if (this.state.fixed === false && Yposition > 100)
      this.setState({ fixed: true });
    if (this.state.fixed === true && Yposition < 100)
      this.setState({ fixed: false });
    else return;
  };

  render() {
    let isFixed;
    if (this.state.fixed === true) {
      isFixed = "is-fixed";
    } else isFixed = "";

    return (
      <header className={isFixed}>
        <Navbar />
      </header>
    );
  }
}
