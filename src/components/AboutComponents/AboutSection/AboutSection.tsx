import React from "react";

// ==== Import Images ====
import img05 from "../../../images/about/img05.jpg";
import img06 from "../../../images/about/img06.jpg";
import img07 from "../../../images/about/img07.jpg";
import img08 from "../../../images/about/img08.jpg";

import videoPoster from "../../../images/about/video-img.png";

import gif1 from "../../../images/icon/original-66948a0d81d.gif";
import gif2 from "../../../images/icon/0deec720000b2066289b.gif";
import gif3 from "../../../images/icon/b10c3e43e836d32554bf.gif";

import featureIcon1 from "../../../images/icon/feature-icon01.svg";
import featureIcon2 from "../../../images/icon/feature-icon02.svg";
import featureIcon3 from "../../../images/icon/feature-icon03.svg";

import aboutBg from "../../../images/bg/about-bg02.png";
import Link from "next/link";

const AboutSection: React.FC = () => {
  return (
    <section className="about pos-rel pb-140">

      <div className="container">
        {/* ===== Top Scrolling Images ===== */}
        <div className="about-top-image ul_li_between align-items-start">

          {/* Column 1 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {[img05, img05, img05, img05].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={(img as any).src || img} alt="about" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {[img06, img06, img06, img06].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={(img as any).src || img} alt="about" />
                </Link>
              ))}
            </div>
          </div>

          {/* Video */}
          <div className="xb-video">
            <video
              loop
              muted
              playsInline
              autoPlay
              poster={(videoPoster as any).src || videoPoster}
            >
              <source src="https://www.pexels.com/download/video/18069701/" />
            </video>
          </div>

          {/* Column 3 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {[img07, img07, img07, img07].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={(img as any).src || img} alt="about" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 */}
          <div className="img-hove-effect">
            <div className="xb-img">
              {[img08, img08, img08, img08].map((img, i) => (
                <Link key={i} href="/about">
                  <img src={(img as any).src || img} alt="about" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Title Section ===== */}
        <div className="sec-title sec-title-center about-sec-title about-sec-title-two mt-45">
          <span className="sub-title mb-10">About Araizona SimpleSphere</span>

          <h2 className="title">
            Building Systems
            <span><img src={(gif1 as any).src || gif1} alt="gif" /></span>
            That Simplify
            <span><img src={(gif2 as any).src || gif2} alt="gif" /></span>
            the Future
            <span><img src={(gif3 as any).src || gif3} alt="gif" /></span>
          </h2>

          <p className="content">
            Araizona SimpleSphere Global Pvt. Ltd. is an AI-first technology
            company based in Pune, India — building intelligent business
            operating systems for organizations, institutes, and enterprises.
          </p>
        </div>

        {/* ===== Feature Boxes ===== */}
        <div className="row mt-40">
          {/* 1 */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={(featureIcon1 as any).src || featureIcon1} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">The SimpleSphere Platform</h2>
                  <p className="xb-item--content">
                    A unified AI operating system designed to handle complex
                    organizational workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={((featureIcon2 as any) as any).src || ((featureIcon2 as any) as any)} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">AI-Powered OS</h2>
                  <p className="xb-item--content">
                    Built-in automation that scales with your organization without
                    fragmented tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={((featureIcon3 as any) as any).src || ((featureIcon3 as any) as any)} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Future-Ready Scale</h2>
                  <p className="xb-item--content">
                    Engineered in India for global deployment across education,
                    health, and enterprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="about-bg">
        <img src={(aboutBg as any).src || aboutBg} alt="background" />
      </div>
    </section>
  );
};

export default AboutSection;
