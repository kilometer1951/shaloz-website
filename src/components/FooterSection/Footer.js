import React, { Component } from "react";
import axios from "axios";
import db from "../../json-server/db.json";

//const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneFooterSection";

class FooterSection extends Component {
  // state = {
  //     data: {},
  //     iconList: [],
  //     footerList_1: [],
  //     footerList_2: [],
  //     footerList_3: []
  // }
  // componentDidMount(){
  //     axios.get(`${BASE_URL}`)
  //         .then(res => {
  //             this.setState({
  //                 data: res.data,
  //                 iconList: res.data.iconList,
  //                 footerList_1: res.data.footerList_1,
  //                 footerList_2: res.data.footerList_2,
  //                 footerList_3: res.data.footerList_3
  //             })
  //             // console.log(this.state.data)
  //         })
  //     .catch(err => console.log(err))
  // }
  render() {
    return (
      <div>
        <div className="height-emulator d-none d-lg-block" />
        <footer className="footer-area footer-fixed">
          {/* Footer Top */}
          <div className="footer-top ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Logo */}
                    <a className="navbar-brand" href="/#">
                      <img
                        className="logo"
                        src={db.themeOneFooterSection.image}
                        alt=""
                        style={{ width: 100 }}
                      />
                    </a>
                    <p className="mt-2 mb-3">{db.themeOneFooterSection.text}</p>
                    {/* Social Icons */}
                    <div className="social-icons d-flex">
                      {db.themeOneFooterSection.iconList.map((item, idx) => {
                        return (
                          <a
                            key={`fi_${idx}`}
                            className={item.link}
                            href={item.url}
                            target="_blank"
                          >
                            <i className={item.iconClass} />
                            <i className={item.iconClass} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title mb-2">
                      {db.themeOneFooterSection.linkText_1}
                    </h3>
                    <ul>
                      {db.themeOneFooterSection.footerList_1.map(
                        (item, idx) => {
                          return (
                            <li key={`flo_${idx}`} className="py-2">
                              <a href={item.url} className="scroll">
                                {item.text}
                              </a>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title mb-2">
                      {db.themeOneFooterSection.linkText_2}
                    </h3>
                    <ul>
                      {db.themeOneFooterSection.footerList_2.map(
                        (item, idx) => {
                          return (
                            <li key={`flt_${idx}`} className="py-2">
                              <a href={item.url} className="scroll">
                                {item.text}
                              </a>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title mb-2">
                      {db.themeOneFooterSection.linkText_3}
                    </h3>
                    {/* Store Buttons */}
                    <div className="button-group store-buttons store-black d-flex flex-wrap">
                      {db.themeOneFooterSection.footerList_3.map(
                        (item, idx) => {
                          return (
                            <a key={`flth_${idx}`} href="/#">
                              <img src={item.image} alt="" />
                            </a>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Copyright Area */}
                  <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                    {/* Copyright Left */}
                    <div className="copyright-left">
                      © Copyrights 2020 Shaloz All rights reserved.
                    </div>
                    {/* Copyright Right */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterSection;
