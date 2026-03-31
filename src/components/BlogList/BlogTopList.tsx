"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// IMAGES
import blog1 from "../../images/blog/img04.jpg";
import blog2 from "../../images/blog/img4.2.jpg";
import blog3 from "../../images/blog/img4.3.jpg";
import blog4 from "../../images/blog/img4.4.jpg";

import shapeLeft from "../../images/shape/prev-shape.png";
import shapeRight from "../../images/shape/next-shape.png";

import { urlForImage } from "@/../sanity/lib/image";

const BlogSlider = ({ posts }: { posts: any[] }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="blog pt-70">
      <div className="container">
        <div className="blog-slider pos-rel">

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={posts.length > 1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".blog-swiper-btn.swiper-button-next",
              prevEl: ".blog-swiper-btn.swiper-button-prev",
            }}
            className="swiper-container"
          >
            {posts.map((post, index) => (
              <SwiperSlide key={post._id || index}>
                <div className="blog-slide-item">
                  <div className="xb-item--img">
                    <img src={urlForImage(post.mainImage)?.url() || ""} alt={post.title} />
                  </div>

                  <div className="xb-item--holder">
                    <Link href={`/blog/${post.slug}`} className="xb-item--tag xb-border">
                      #{post.categories?.[0]?.title.toLowerCase() || "news"}
                    </Link>

                    <h2 className="xb-item--title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="xb-item--content">{post.excerpt}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PAGINATION */}
          <div className="swiper-pagination"></div>

          {/* NAV BUTTONS */}
          <div className="blog-item_button">
            <div className="blog-swiper-btn swiper-button-prev">
              <img src={(shapeLeft as any).src || shapeLeft} alt="" />
              <i className="fa-regular fa-angles-left"></i>
            </div>

            <div className="blog-swiper-btn swiper-button-next">
              <img src={(shapeRight as any).src || shapeRight} alt="" />
              <i className="fa-regular fa-angles-right"></i>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
