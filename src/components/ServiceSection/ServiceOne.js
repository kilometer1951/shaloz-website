import React, { Component } from "react";
import axios from "axios";
import db from "../../json-server/db.json";

//const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneServiceSection";

class ServiceSection extends Component {
  // state = {
  //     data: {},
  //     serviceData: []
  // }
  // componentDidMount(){
  //     axios.get(`${BASE_URL}`)
  //         .then(res => {
  //             this.setState({
  //                 data: res.data,
  //                 serviceData: res.data.serviceData
  //             })
  //             // console.log(this.state.data)
  //         })
  //     .catch(err => console.log(err))
  // }
  render() {
    return (
      <section className="section service-area bg-gray overflow-hidden ptb_100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              {/* Service Text */}
              <div className="service-text pt-4 pt-lg-0">
                <h2 className="text-capitalize mb-4">
                  {db.themeOneServiceSection.heading}
                </h2>
                {/* Service List */}
                <ul className="service-list">
                  {db.themeOneServiceSection.serviceData.map((item, idx) => {
                    return (
                      <div key={`so_${idx}`}>
                        {/* Single Service */}
                        <li className="single-service media py-2">
                          <div className="service-icon pr-4">
                            <span>
                              <i className={item.iconClass} />
                            </span>
                          </div>
                          <div className="service-text media-body">
                            <p>{item.text}</p>
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
            <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-lg-block">
              {/* Service Thumb */}
              <div className="service-thumb mx-auto">
                <img src={db.themeOneServiceSection.thumbOne} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceSection;
