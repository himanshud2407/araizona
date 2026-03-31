import React from "react";
// ICONS
import ItemDetailsContent from "./ItemDetailsContent";
import CommentsArea from "./CommentsArea";
import CommentForm from "./CommentForm";
import NewsletterBox from "./NewsletterBox";
import BlogSidebar from "../BlogSidebar/BlogSidebar";

// IMAGE IMPORTS
import blog08 from "../../images/blog/img08.jpg";
import blog09 from "../../images/blog/img09.jpg";
import blog10 from "../../images/blog/img10.jpg";
import blog11 from "../../images/blog/img11.jpg";

import avatar1 from "../../images/avatar/author-img.png";
import RelatedBlog from "./RelatedBlog";
import Link from "next/link";



import { PortableText } from "../PortableText";
import { urlForImage } from "@/../sanity/lib/image";
import { formatDate } from "@/lib/sanity";

interface BlogDetailsSectionProps {
  post: any;
}

const BlogDetailsSection = ({ post }: BlogDetailsSectionProps) => {
  return (
    <section className="blog_details_section pt-70">
      <div className="container">

        {/* MAIN IMAGE */}
        <div className="single-item-image mb-70">
          <img src={(urlForImage(post.mainImage)?.url() as any) || ""} alt={post.title} />
        </div>

        {/* HEADER META */}
        <ItemDetailsContent post={post} />

        <div className="row mt-none-30 g-0 align-items-start">
          <div className="col-lg-8 mt-30">
            <div className="blog_details_content">
              {/* AUDIO BUTTON (Optional: keep if desired, but here we just render body) */}

              <PortableText value={post.body} />

              {/* AUTHOR BLOCK */}
              <div className="post-block-wrap mb-50 mt-50">
                <div className="postabmin_block xb-border ul_li">
                  <div className="admin_image">
                    <img src={urlForImage(post.author?.image)?.url() || ""} alt={post.author?.name} />
                  </div>
                  <div className="admin_content">
                    <h4 className="admin_name">{post.author?.name}</h4>
                    <span className="admin_designation">{post.author?.role}</span>
                    <PortableText value={post.author?.bio} />

                    <ul className="social_icons_blocks list-unstyled ul_li">
                      <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                      <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TAGS + SOCIAL */}
              <div className="row mt-none-30">
                <div className="col-md-6 mt-30">
                  <ul className="tags_block list-unstyled">
                    {post.categories?.map((cat: any) => (
                      <li key={cat.slug}><Link className="xb-border" href={`/blog/category/${cat.slug}`}>{cat.title}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6 mt-30">
                  <ul className="social_icons_block list-unstyled ul_li justify-content-md-end">
                    <li><Link className="xb-border" href="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link className="xb-border" href="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link className="xb-border" href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                    <li><Link className="xb-border" href="#"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link className="xb-border" href="#"><i className="fas fa-share-alt"></i></Link></li>
                  </ul>
                </div>
              </div>

              {/* COMMENTS AREA */}
              <CommentsArea />

              {/* COMMENT FORM */}
              <CommentForm />

              {/* SUBSCRIBE BOX */}
              <NewsletterBox />
            </div>
          </div>
          <BlogSidebar />
        </div>

        <RelatedBlog />

      </div>
    </section>
  );
};

export default BlogDetailsSection;
