import React, { Component } from "react";
import Header from "../HeaderSection/Header";
import FeatureSection from "../Features/FeatureOne";
import Subscribe from "../SubscribeSection/Subscribe";

const initData = {
  heading: "We are coming soon!",
  content:
    "The world's most imaginative marketplace. Shaloz is an online marketplace, where people come together to sell and buy products and services. We have millions of one-of-a-kind products and services, so you can find whatever you need. Your one stop marketplace for everything products and services. Looking for a home decor or are you looking for home supplies? Shaloz has it all. No monthly subscription",
  btnText: "Notify",
};

class ComingSoon extends Component {
  state = {
    initData: [],
  };
  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }
  render() {
    return (
      <div className="homepage-3 inner inner-pages">
        <div className="main">
          <Header imageData={"/img/logo_2.png"} />
          <section
            id="home"
            className="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
            <div className="container h-100">
              <div className="row align-items-center justify-content-center h-100">
                <div className="col-12 col-md-7">
                  <div className="welcome-intro text-center">
                    <h1 className="text-white">
                      {this.state.initData.heading}
                    </h1>
                    <p className="text-white my-4">
                      {this.state.initData.content}
                    </p>
                    <div className="countdown-times mb-4">
                      <div
                        className="countdown d-flex justify-content-center"
                        data-date="2020-12-01"
                      />
                    </div>
                    {/* Subscribe Form */}
                    <div className="subscribe-form d-flex align-items-center mx-auto">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="info@yourmail.com"
                      />
                      <button type="submit" className="btn btn-bordered">
                        {this.state.initData.btnText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FeatureSection />
          <Subscribe />
        </div>
      </div>
    );
  }
}

export default ComingSoon;
