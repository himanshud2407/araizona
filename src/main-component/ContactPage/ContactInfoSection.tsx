import React from "react";

// --- contact images ---
import img01 from "../../images/contact/img01.png";
import img02 from "../../images/contact/img02.png";
import img03 from "../../images/contact/img03.png";

// --- arrow icons ---
import arrowWhite from "../../images/icon/rotate-arrow-white02.svg";
import arrowBlack from "../../images/icon/rotate-arrow-black03.svg";
import Link from "next/link";

// ---- contact items data ----
const contactData = [
  {
    location: "Pune, Maharashtra, India",
    phone: "+91 93220 51181 / +91 93595 58110",
    email: "contact@araizona.com",
    img: img01,
  },
  {
    location: "S. No 80/3, Near Pune-Mumbai Bypass Highway",
    phone: "+91 93220 51181",
    email: "contact@araizona.com",
    img: img02,
  },
  {
    location: "Thathawade, Pune – 411033",
    phone: "+91 93595 58110",
    email: "contact@araizona.com",
    img: img03,
  },
];

const ContactInfoSection: React.FC = () => {
  return (
    <section className="contact pb-150">
      <div className="container">
        <div className="row mt-none-30">
          {contactData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mt-30" key={index}>
              <div className="xb-contact-items img-hove-effect xb-border">
                <div className="xb-item--inner">

                  {/* Multiple hover images */}
                  <div className="xb-img">
                    <Link href="/contact"><img src={(item.img as any).src || item.img} alt="location" /></Link>
                    <Link href="/contact"><img src={(item.img as any).src || item.img} alt="location" /></Link>
                    <Link href="/contact"><img src={(item.img as any).src || item.img} alt="location" /></Link>
                    <Link href="/contact"><img src={(item.img as any).src || item.img} alt="location" /></Link>
                  </div>

                  {/* Content */}
                  <div className="xb-item--holder">
                    <p className="xb-item--location">{item.location}</p>
                    <span className="xb-item--contact_info">{item.phone}</span>
                    <span className="xb-item--contact_info">{item.email}</span>

                    <Link href="/contact" className="thm-btn form-btn mt-45">
                      VIEW LOCATION
                      <span className="xb-icon">
                        <img src={(arrowWhite as any).src || (arrowWhite as any)} alt="icon" />
                        <img src={(arrowBlack as any).src || (arrowBlack as any)} alt="icon" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
