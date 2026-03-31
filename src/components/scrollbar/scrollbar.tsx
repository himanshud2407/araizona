"use client";

import React from "react";
import "./style.css";

const Scrollbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const target = document.querySelector("#scrool");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <ul className="smothscroll">
          <li>
            <a
              href="#scrool"
              aria-label="Scroll to top"
              className="scroll-to-top"
              onClick={handleScroll}
            >
              <i className="ti-arrow-up" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
