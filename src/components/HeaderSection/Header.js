import React, { Component, useState } from "react";

class Header extends Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
        <div className="container position-relative">
          <a className="navbar-brand" href="/">
            <img
              className="navbar-brand-regular"
              src={this.props.imageData}
              alt="brand-logo"
              style={{ width: 200 }}
            />
            <img
              className="navbar-brand-sticky"
              src="/img/logo_1.png"
              alt="sticky brand-logo"
              style={{ width: 150 }}
            />
          </a>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="navbarToggler"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-inner">
            {/*  Mobile Menu Toggler */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="navbarToggler"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <nav>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link scroll" href="#home">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link scroll" href="#download">
                    Download
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#sell">
                    Sell
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#">
                    Privacy Policy
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link scroll" href="#features">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
