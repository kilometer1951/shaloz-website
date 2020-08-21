import React, { Component } from "react";
import Header from "../HeaderSection/Header";
import FeatureSection from "../Features/FeatureOne";
import Subscribe from "../SubscribeSection/Subscribe";

const initData = {
  heading: "We are coming soon!",
  content:
    "The world's most imaginative marketplace. Shaloz is an online marketplace, where people come together to sell and buy products and services. We have millions of one-of-a-kind products and services, so you can find whatever you need. Your one stop marketplace for everything products and services. Looking for a professional home decorator or are you looking for home supplies? Shaloz has it all. No monthly subscription",
  btnText: "Notify",
};

class ComingSoon extends Component {
  state = {
    initData: [],
    inputValue: "",
    subscribeSuc: false,
    error: false,
  };
  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleSubscribe = async () => {
    if (this.state.inputValue !== "") {
      if (this.validateEmail(this.state.inputValue)) {
        this.setState({
          inputValue: "",
          subscribeSuc: true,
        });

        setTimeout(() => {
          this.setState({
            inputValue: "",
            subscribeSuc: false,
          });
        }, 2000);
        await fetch("https://quiet-sierra-10781.herokuapp.com/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputValue: this.state.inputValue,
          }),
        });
      } else {
        this.setState({
          error: true,
        });
        setTimeout(() => {
          this.setState({
            error: false,
          });
        }, 2000);
      }
    }
  };
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
                        value={this.state.inputValue}
                        onChange={(e) =>
                          this.setState({
                            inputValue: e.target.value,
                          })
                        }
                      />
                      <button
                        type="submit"
                        className="btn btn-bordered"
                        onClick={this.handleSubscribe}>
                        {this.state.initData.btnText}
                      </button>
                    </div>
                    {this.state.error && (
                      <p className="text-white my-4">Your email is not valid</p>
                    )}
                    {this.state.subscribeSuc && (
                      <p className="text-white my-4">
                        Thanks for subscribing. When Shaloz goes live, you will
                        be notified.
                      </p>
                    )}
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
