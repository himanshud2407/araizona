import React from "react";
import bgImage from "../../images/bg/bootcamp-bg.png";
import Link from "next/link";

interface PageTitleProps {
  pageTitle: string;
  pagesub?: string;
}


const PageTitle: React.FC<PageTitleProps> = ({ pageTitle, pagesub }) => {
  return (
    <section
      className="breadcrumb bg_img"
      style={{
        backgroundImage: `url(${(bgImage as any).src || bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="breadcrumb__content">
          <ul className="breadcrumb__list clearfix list-unstyled">
            <li className="breadcrumb-item">
               <Link href="/home">Home</Link>
            </li>
             {pagesub && <li className="breadcrumb-item">{pagesub}</li>}
          </ul>
          {pageTitle && <h2 className="breadcrumb__title">{pageTitle}</h2>}
        </div>
      </div>
    </section>
  );
};

export default PageTitle;