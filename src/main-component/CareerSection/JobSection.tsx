"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { jobs } from "@/api/career";

// Images
import jobBg from "../../images/bg/job-bg.png";
import diamondIcon from "../../images/icon/diamond-icon02.gif";
import locIcon from "../../images/icon/location-icon02.svg";
import clockIcon from "../../images/icon/clock-icon.svg";

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

const filters = [
  { label: "View all", value: "*" },
  { label: "Technical", value: "cat1" },
  { label: "Business", value: "cat2" },
  { label: "Marketing", value: "cat3" },
  { label: "Leadership", value: "cat4" },
];

const JobSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Filtering + animation
  useEffect(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return;

      const categories = el.dataset.category?.split(" ") ?? [];
      const show = activeFilter === "*" || categories.includes(activeFilter);

      // Animate show/hide with GSAP
      if (show) {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          pointerEvents: "auto",
        });
      } else {
        gsap.to(el, {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          pointerEvents: "none",
        });
      }
    });
  }, [activeFilter]);

  return (
    <section
      id="open-positions"
      className="job_section pt-90 pb-150 bg_img"
      style={{ backgroundImage: `url(${(jobBg as any).src || jobBg})` }}
    >
      <div className="container">
        {/* TITLE */}
        <div className="sec-title sec-title-center fea-sec-title text-center mb-40">
          <span className="sub-title">Open Positions</span>
          <h2 className="title">
            Be part of{" "}
            <span>
              <img src={(diamondIcon as any).src || (diamondIcon as any)} alt="icon" />
            </span>{" "}
            the team
          </h2>
        </div>

        {/* FILTER BUTTONS */}
        <div className="text-center">
          <div className="career-menu ul_li">
            {filters.map((btn, i) => (
              <button
                key={i}
                className={activeFilter === btn.value ? "active" : ""}
                onClick={() => setActiveFilter(btn.value)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* JOB GRID */}
        <div className="career-nav-wrapper grid mt-40">
          {jobs.map((job, i) => (
            <div
              key={job.id}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="xb-career-item grid-item xb-border"
              data-category={job.category.join(" ")}
              style={{ opacity: 1 }}
            >
              <div className="xb-item--content">
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-primary, #FF3D3D)",
                    marginBottom: "6px",
                  }}
                >
                  {job.department}
                </span>
                <h2 className="xb-item--title">
                  <Link href={`/career/${job.slug}`}>{job.title}</Link>
                </h2>

                <ul className="xb-item--holder ul_li list-unstyled">
                  <li>
                    <img src={(locIcon as any).src || (locIcon as any)} alt="location" /> {job.location}
                  </li>
                  <li>
                    <img src={(clockIcon as any).src || (clockIcon as any)} alt="clock" /> {job.type}
                  </li>
                  <li style={{ color: "#fff", opacity: 0.85 }}>
                    Exp: {job.experience}
                  </li>
                </ul>
              </div>

              {/* BUTTON */}
              <div className="team-btn">
                <Link className="thm-btn agency-btn" href={`/career/${job.slug}`}>
                  <span className="text">view job</span>
                  <span className="arrow">
                    <span className="arrow-icon">{arrowIcon}</span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobSection;
