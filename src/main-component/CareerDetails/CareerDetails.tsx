import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import ApplyForm from "./ApplyForm";
import { JobOpening, jobs } from "@/api/career";
import Link from "next/link";

interface CareerDetailsProps {
  job?: JobOpening;
}

const arrowIcon = (
  <>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5.065" y="19.978" width="20.571" height="2.612" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
      <rect x="7.97" y="7.244" width="2.612" height="2.612" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
      <rect x="11.65" y="7.548" width="2.612" height="2.612" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
      <rect x="15.334" y="7.852" width="2.612" height="2.612" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
      <rect x="18.711" y="11.837" width="2.612" height="2.612" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
      <rect x="18.408" y="15.52" width="2.612" height="2.612" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
      <rect x="18.104" y="19.201" width="2.612" height="2.612" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
    </svg>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5.065" y="19.978" width="20.571" height="2.612" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
      <rect x="7.97" y="7.244" width="2.612" height="2.612" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
      <rect x="11.65" y="7.548" width="2.612" height="2.612" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
      <rect x="15.334" y="7.852" width="2.612" height="2.612" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
      <rect x="18.711" y="11.837" width="2.612" height="2.612" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
      <rect x="18.408" y="15.52" width="2.612" height="2.612" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
      <rect x="18.104" y="19.201" width="2.612" height="2.612" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
    </svg>
  </>
);

const CareerDetails: React.FC<CareerDetailsProps> = ({ job = jobs[0] }) => {
  const mailtoUrl = `mailto:contact@araizona.com?subject=${encodeURIComponent(
    job.title
  )} Application&body=${encodeURIComponent(
    `Hi Araizona Team,\n\nI am writing to apply for the ${job.title} position at Araizona Simplesphere Global Private Limited.\n\nPlease find attached my resume, portfolio/GitHub links, and relevant project details.\n\nFull Name:\nPhone:\nCurrent Location:\nGitHub / Portfolio:\n\nThank you!`
  )}`;

  return (
    <Fragment>
      <div className="about-page inner-page">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle={job.title} pagesub="Career details" />

            <section className="career-details pt-100 pb-120">
              <div className="container">
                <div className="mb-40">
                  <Link
                    href="/career"
                    className="d-inline-flex align-items-center gap-2"
                    style={{
                      color: "var(--color-primary, #FF3D3D)",
                      fontSize: "15px",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <span>&larr;</span> Back to All Open Positions
                  </Link>
                </div>

                <div className="cp-details-wrap">
                  {/* Job Overview */}
                  <div className="cp-manager_info">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-20">
                      <div>
                        <span
                          style={{
                            color: "var(--color-primary, #FF3D3D)",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            letterSpacing: "1.5px",
                            fontSize: "13px",
                            display: "block",
                            marginBottom: "8px",
                          }}
                        >
                          {job.company}
                        </span>
                        <h2 className="details-content-title">
                          {job.title} - ({job.type})
                        </h2>
                      </div>
                      <div className="d-flex gap-2 flex-wrap align-items-center">
                        <a
                          href={mailtoUrl}
                          className="thm-btn agency-btn mt-2"
                        >
                          <span className="text">How to apply</span>
                          <span className="arrow">
                            <span className="arrow-icon">{arrowIcon}</span>
                          </span>
                        </a>
                      </div>
                    </div>

                    <ul className="xb-details-content list-unstyled mb-35">
                      <li>
                        <span>Department :</span> {job.department}
                      </li>
                      <li>
                        <span>No. of Openings :</span> {job.openings}
                      </li>
                      <li>
                        <span>Job Type :</span> {job.type}
                      </li>
                      <li>
                        <span>Location :</span> {job.location}
                      </li>
                      <li>
                        <span>CTC / Compensation :</span> {job.salary}
                      </li>
                      <li>
                        <span>Experience Required :</span> {job.experience}
                      </li>
                      {job.deadline && (
                        <li>
                          <span>Hiring Status :</span> {job.deadline}
                        </li>
                      )}
                    </ul>

                    {/* About Role */}
                    <div className="mt-40">
                      <h3
                        className="details-title"
                        style={{ fontSize: "24px", color: "#fff", marginBottom: "15px" }}
                      >
                        About the role
                      </h3>
                      <p style={{ fontSize: "17px", lineHeight: "1.8", color: "var(--color-gray, #b2b3b7)" }}>
                        {job.aboutRole}
                      </p>
                    </div>
                  </div>

                  {/* What you'll do */}
                  {job.whatYouWillDo && job.whatYouWillDo.length > 0 && (
                    <div className="xb-details-item">
                      <h3 className="details-title mt-60">What you will do...</h3>
                      <ul className="content-list mt-25">
                        {job.whatYouWillDo.map((item, idx) => (
                          <li key={idx} style={{ marginBottom: "10px", lineHeight: "1.7" }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* What we are looking for */}
                  {job.whatWeAreLookingFor && job.whatWeAreLookingFor.length > 0 && (
                    <div className="xb-details-item">
                      <h3 className="details-title mt-60">What we are looking for...</h3>
                      <ul className="content-list mt-25">
                        {job.whatWeAreLookingFor.map((item, idx) => (
                          <li key={idx} style={{ marginBottom: "10px", lineHeight: "1.7" }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Good to have */}
                  {job.goodToHave && job.goodToHave.length > 0 && (
                    <div className="xb-details-item">
                      <h3 className="details-title mt-60">Good to have...</h3>
                      <ul className="content-list mt-25">
                        {job.goodToHave.map((item, idx) => (
                          <li key={idx} style={{ marginBottom: "10px", lineHeight: "1.7" }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* What we offer */}
                  {job.whatWeOffer && job.whatWeOffer.length > 0 && (
                    <div className="xb-details-item">
                      <h3 className="details-title mt-60">What we offer...</h3>
                      <ul className="content-list mt-25">
                        {job.whatWeOffer.map((item, idx) => (
                          <li key={idx} style={{ marginBottom: "10px", lineHeight: "1.7" }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* How to apply */}
                  <div className="xb-details-item mt-60">
                    <h3 className="details-title">How to apply</h3>
                    <p
                      className="mt-20"
                      style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--color-gray, #b2b3b7)" }}
                    >
                      {job.howToApply}
                    </p>
                    <div className="mt-30 d-flex gap-3 align-items-center flex-wrap">
                      <a
                        href={mailtoUrl}
                        className="thm-btn agency-btn"
                      >
                        <span className="text">How to apply</span>
                        <span className="arrow">
                          <span className="arrow-icon">{arrowIcon}</span>
                        </span>
                      </a>
                      <span style={{ color: "var(--color-gray, #b2b3b7)", fontSize: "14px" }}>
                        or send your CV directly to <strong style={{ color: "#fff" }}>contact@araizona.com</strong>
                      </span>
                    </div>
                  </div>

                  {/* Apply Form with Screening Questions */}
                  <ApplyForm job={job} />
                </div>
              </div>
            </section>
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default CareerDetails;
