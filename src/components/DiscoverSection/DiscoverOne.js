import React, { Component } from "react";
import axios from "axios";
import db from "../../json-server/db.json";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/sapp/themeOneDiscoverSection";

class DiscoverSection extends Component {
  // state = {
  //     data: {},
  //     discoverData: [],
  //     discoverIcon: []
  // }
  // componentDidMount(){
  //     axios.get(`${BASE_URL}`)
  //         .then(res => {
  //             this.setState({
  //                 data: res.data,
  //                 discoverData: res.data.discoverData,
  //                 discoverIcon: res.data.discoverIcon
  //             })
  //             // console.log(this.state.data)
  //         })
  //     .catch(err => console.log(err))
  // }
  render() {
    return (
      <section
        className="section discover-area overflow-hidden ptb_100"
        id="sell"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              {/* Discover Thumb */}
              <div className="service-thumb discover-thumb mx-auto pt-5 pt-lg-0">
                <img
                  src={db.themeOneDiscoverSection.thumbOne}
                  alt=""
                  style={{ width: 400 }}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              {/* Discover Text */}
              <div className="discover-text pt-4 pt-lg-0">
                <h2 className="pb-4 pb-sm-0">
                  {db.themeOneDiscoverSection.heading}
                </h2>
                <p className="d-none d-sm-block pt-3 pb-4">
                  {db.themeOneDiscoverSection.headingText}
                </p>
                {/* Check List */}
                <ul className="check-list">
                  {db.themeOneDiscoverSection.discoverData.map((item, idx) => {
                    return (
                      <div key={`do_${idx}`}>
                        <li className="py-2">
                          {/* List Box */}
                          <div className="list-box media">
                            <span className="icon align-self-center">
                              <i className={item.iconClass} />
                            </span>
                            <span className="media-body pl-2">{item.text}</span>
                          </div>
                        </li>
                      </div>
                    );
                  })}
                </ul>
                <div className="button-group store-buttons d-flex">
                  <a href="/#">
                    <img src="/img/google-play-black.png" alt="" />
                  </a>
                  <a href="/#">
                    <img src="/img/app-store-black.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DiscoverSection;
