import React, { Component } from "react";

const initData = {
  heading: "Subscribe to get updates",
  text: "",
  submitText: "Subscribe",
};

class Subscribe extends Component {
  state = {
    initData: {},
    inputValue: "",
    subscribeSuc: false,
    error: false,
  };
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  handleSubscribe = async (e) => {
    e.preventDefault();
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
  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }
  render() {
    return (
      <section className="section subscribe-area ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7">
              <div className="subscribe-content text-center">
                <h2>{this.state.initData.heading}</h2>
                <p className="my-4">{this.state.initData.text}</p>
                {/* Subscribe Form */}
                <form className="subscribe-form">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                      value={this.state.inputValue}
                      onChange={(e) =>
                        this.setState({
                          inputValue: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-block"
                    onClick={this.handleSubscribe}>
                    {this.state.initData.submitText}
                  </button>
                </form>
                {this.state.error && (
                  <p className="text-black my-4">Your email is not valid</p>
                )}
                {this.state.subscribeSuc && (
                  <p className="text-black my-4">
                    Thanks for subscribing. When Shaloz goes live, you will be
                    notified.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Subscribe;
