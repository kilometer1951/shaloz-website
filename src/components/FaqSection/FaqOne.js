import React, { Component } from "react";
import axios from "axios";
import db from "../../json-server/db.json";

// const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server/themeOneFaqSection";

class FaqSection extends Component {
  // state = {
  //     data: {},
  //     faqData: [],
  //     faqDataTwo: []
  // }
  // componentDidMount(){
  //     axios.get(`${BASE_URL}`)
  //         .then(res => {
  //             this.setState({
  //                 data: res.data,
  //                 faqData: res.data.faqData,
  //                 faqDataTwo: res.data.faqDataTwo
  //             })
  //             // console.log(this.state.data)
  //         })
  //     .catch(err => console.log(err))
  // }
  render() {
    return (
      <section className="section faq-area style-two ptb_100" id="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7">
              {/* Section Heading */}
              <div className="section-heading text-center">
                <h2 className="text-capitalize">
                  {db.themeOneFaqSection.heading}
                </h2>
                <p className="d-block d-sm-none mt-4">
                  {db.themeOneFaqSection.headingTexttwo}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              {/* FAQ Content */}
              <div className="faq-content">
                {/* sApp Accordion */}
                <div className="accordion" id="sApp-accordion">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-6">
                      {/* Single Card */}
                      {db.themeOneFaqSection.faqData.map((item, idx) => {
                        return (
                          <div key={`fo_${idx}`} className="card border-0">
                            {/* Card Header */}
                            <div className="card-header bg-inherit border-0 p-0">
                              <h2 className="mb-0">
                                <button className="btn px-0 py-2" type="button">
                                  {item.title}
                                </button>
                              </h2>
                            </div>
                            {/* Card Body */}
                            <div className="card-body px-0 py-3">
                              {item.content}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Single Card */}
                      {db.themeOneFaqSection.faqDataTwo.map((item, idx) => {
                        return (
                          <div key={`ft_${idx}`} className="card border-0">
                            {/* Card Header */}
                            <div className="card-header bg-inherit border-0 p-0">
                              <h2 className="mb-0">
                                <button className="btn px-0 py-2" type="button">
                                  {item.title}
                                </button>
                              </h2>
                            </div>
                            {/* Card Body */}
                            <div className="card-body px-0 py-3">
                              {item.content}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <p className="text-body text-center pt-4 fw-5">
                      {db.themeOneFaqSection.faqText}{" "}
                      <a className="scroll" href="/#contact">
                        {db.themeOneFaqSection.faqTextLink}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqSection;
