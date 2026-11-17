import React from "react";
import Link from "next/link";
import img14 from "../../images/service/img14.jpg";
import img15 from "../../images/service/img15.jpg";
import img16 from "../../images/service/img16.jpg";

const GallerySection: React.FC = () => {
  const galleryImages = [img14, img15, img16];

  return (
    <div className="service-gallary ul_li_between mt-125">
      {galleryImages.map((img, index) => (
        <div className="single-item-image img-hove-effect" key={index}>
          <div className="xb-img">
            <Link href="/service-details">
              <img src={(img as any).src || (img as any)} alt="gallery" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GallerySection;
