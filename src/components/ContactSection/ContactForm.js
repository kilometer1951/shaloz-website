import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.myForm = React.createRef();
  }

  state = {
    email: "",
    message: "",
    sentSuc: false,
  };

  changHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitHangler = async (event) => {
    event.preventDefault();
    // console.log(this.state)
    // this.myForm.current.reset()
    if (this.state.message !== "" && this.state.email !== "") {
      this.setState({
        sentSuc: true,
      });
      fetch("http://10.0.0.159:5002/api/send_message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          message: this.state.message,
        }),
      });
      // console.log(this.state.name);
      this.setState({
        email: "",
        message: "",
      });
      setTimeout(() => {
        this.setState({
          email: "",
          message: "",
          sentSuc: false,
        });
      }, 2000);
    }

    // console.log(this.state)
  };

  render() {
    return (
      <div className="contact-box text-center">
        <form
          ref={this.myForm}
          onSubmit={this.submitHangler}
          className="contact-form"
          noValidate="novalidate"
        >
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  required="required"
                  onChange={this.changHandler}
                  value={this.state.email}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  required="required"
                  onChange={this.changHandler}
                  value={this.state.message}
                />
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-lg btn-block mt-3">
                <span className="text-white pr-3">
                  <i className="fas fa-paper-plane" />
                </span>
                Send Message
              </button>
            </div>
          </div>
        </form>
        {this.state.sentSuc && (
          <p className="text-black my-4">Thanks for sending us a message!</p>
        )}
      </div>
    );
  }
}

export default ContactForm;
