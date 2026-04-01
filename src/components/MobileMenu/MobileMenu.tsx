"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Collapse from "@mui/material/Collapse";
import "./style.css";

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: MenuItem[];
}

const menus: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    submenu: [
      { id: 11, title: "AI Agency", link: "/" },
      { id: 12, title: "AI Marketing", link: "/ai-marketing" },
      { id: 13, title: "AI Chatbot", link: "/ai-chatbot" },
    ],
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Products",
    link: "/products",
    submenu: [
      { id: 31, title: "Products", link: "/products" },
      { id: 32, title: "Product Details", link: "/service-details" },
      { id: 33, title: "Career", link: "/career" },
      { id: 34, title: "Career Details", link: "/career-details" },
      { id: 35, title: "Our Products", link: "/project" },
      { id: 36, title: "Product Details", link: "/project-details" },
      { id: 37, title: "Team", link: "/team" },
    ],
  },

  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];

const MobileMenu: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ul className="responsivemenu">
      {menus.map((menu) => (
        <li key={menu.id}>
          {menu.submenu ? (
            <Fragment>
              <p onClick={() => handleToggle(menu.id)}>
                {menu.title}
                <i
                  className={`fa ${openId === menu.id ? "fa-angle-up" : "fa-angle-down"
                    }`}
                ></i>
              </p>
              <Collapse in={openId === menu.id} timeout="auto" unmountOnExit>
                <ul>
                  {menu.submenu.map((submenu) => (
                    <li key={submenu.id}>
                      <Link onClick={handleClick} href={submenu.link}>
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Collapse>
            </Fragment>
          ) : (
            <Link onClick={handleClick} href={menu.link}>
              {menu.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
