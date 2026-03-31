"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import logo from "../../images/logo/araizon-horizontal.png";
import MegaMenu1 from "./MegaMenu1";
import MegaMenuServices from "./MegaMenu2";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Scroll up → show sticky smoothly
      if (currentScroll < lastScrollY.current && currentScroll > 100) {
        setIsSticky(true);
        setTimeout(() => setIsVisible(true), 10); // delay for smooth entrance
      }
      // Scroll down → hide sticky instantly
      else if (currentScroll > lastScrollY.current) {
        setIsVisible(false);
        setTimeout(() => setIsSticky(false), 100); // small delay for hide
      }

      // Reset if near top
      if (currentScroll <= 100) {
        setIsSticky(false);
        setIsVisible(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <header
      id="xb-header-area"
      className="header-area header-style--one header-transparent is-sticky"
    >
      <div
        className={`xb-header xb-sticky-stt ${isSticky ? "xb-header-area-sticky" : ""
          } ${isVisible ? "xb-header-fixed" : "xb-header-hidden"}`}
      >
        <div className="container mxw-1650">
          <div className="header__wrap ul_li_between">
            {/* Logo */}
            <div className="xb-header-logo">
              <Link href="/" className="logo1" onClick={handleClick}>
                <img src={logo.src} alt="Araizona Logo" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="main-menu__wrap navbar navbar-expand-lg p-0">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="menu-item-has-children active">
                    <Link href="/" onClick={handleClick}>
                      <span>Home</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/" onClick={handleClick}>
                          <span>Ai Agency</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ai-marketing" onClick={handleClick}>
                          <span>Ai Marketing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ai-chatbot" onClick={handleClick}>
                          <span>Ai Chatbot</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/about" onClick={handleClick}>
                      <span>About Us</span>
                    </Link>
                  </li>

                  {/* MegaMenu */}
                  <li className="menu-item-has-children megamenu">
                    <Link href="#" onClick={handleClick}>
                      <span>Pages</span>
                    </Link>
                    <MegaMenu1 />
                  </li>

                  <li className="menu-item-has-children megamenu">
                    <Link href="#" onClick={handleClick}>
                      <span>Products</span>
                    </Link>
                    <MegaMenuServices />
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="/blog" onClick={handleClick}>
                      <span>Blog</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link href="/blog" onClick={handleClick}>
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details" onClick={handleClick}>
                          <span>Blog Details</span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/contact" onClick={handleClick}>
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Button */}
            <div className="header-btn" style={{ display: "flex", alignContent: "center", gap: "15px" }}>
              <Link href="https://team.simplesphere.in/" target="_blank" rel="noopener noreferrer" className="thm-btn" onClick={handleClick}>
                Employee Login
              </Link>
              <Link href="/contact" className="thm-btn" onClick={handleClick}>
                Get a Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="header-bar-mobile side-menu d-lg-none">
              <button
                className="xb-nav-mobile"
                onClick={() => setMobileActive(!mobileActive)}
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="xb-header-wrap">
            <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>
              <div className="xb-header-menu-scroll">
                <div
                  className="xb-menu-close xb-hide-xl xb-close"
                  onClick={() => setMobileActive(false)}
                ></div>

                <div className="xb-logo-mobile xb-hide-xl">
                  <Link href="/" rel="home">
                    <img src={((logo as any) as any).src || ((logo as any) as any)} alt="Logo" />
                  </Link>
                </div>

                <div className="xb-header-mobile-search xb-hide-xl">
                  <form role="search" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Search..."
                      name="s"
                      className="search-field"
                    />
                    <button className="search-submit" type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>

                <nav className="xb-header-nav">
                  <MobileMenu />
                </nav>
              </div>
            </div>
            <div className="xb-header-menu-backdrop"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
