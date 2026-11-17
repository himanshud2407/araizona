"use client";
import React, { useState } from "react";
import processImg from "../../images/career/process-img.png";

const HiringProcess: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      number: "01",
      title: "_Send your CV & Screening",
      content:
        "Submit your application, updated resume, and answers to our screening questions directly through our career portal or via email to contact@araizona.com.",
    },
    {
      number: "02",
      title: "_Initial Screening",
      content:
        "Our engineering and talent team reviews your technical background, code repositories, past projects, and readiness for fast-paced client delivery.",
    },
    {
      number: "03",
      title: "_Technical Assessment",
      content:
        "A practical, real-world coding evaluation or system design challenge focused on clean architecture, API handling, and reliable problem-solving.",
    },
    {
      number: "04",
      title: "_Team & Culture Interview",
      content:
        "Meet with our founders and senior engineers to discuss real product challenges, project workflows, team expectations, and mutual fit.",
    },
    {
      number: "05",
      title: "_Offer & Welcome to Araizona!",
      content:
        "Receive a competitive offer letter with clear growth milestones, comprehensive benefits, and immediate hands-on onboarding onto live client projects.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="hiring-process pt-140 pb-150">
      <div className="container">
        <div className="row mt-none-50 align-items-center">
          {/* LEFT SIDE - TEXT & ACCORDION */}
          <div className="col-lg-6 mt-50">
            <div className="sec-title sec-title-center mb-35">
              <span className="sub-title mb-20">Hiring Process</span>
              <h2 className="title title-line_height">Our hiring process</h2>
            </div>

            <div className="xb-faq career-faq">
              <ul className="accordion_box clearfix list-unstyled">
                {steps.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion block ${
                      activeIndex === index ? "active-block" : ""
                    }`}
                  >
                    <div
                      className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="number">{item.number}</span> {item.title}
                      <span className="arrow">
                        <span></span>
                      </span>
                    </div>

                    <div
                      className={`acc_body ${
                        activeIndex === index ? "current" : ""
                      }`}
                      style={{
                        display: activeIndex === index ? "block" : "none",
                      }}
                    >
                      <div className="content">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="col-lg-6 mt-50">
            <div className="process-img">
              <img
                src={(processImg as any).src || (processImg as any)}
                alt="Araizona hiring process"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
