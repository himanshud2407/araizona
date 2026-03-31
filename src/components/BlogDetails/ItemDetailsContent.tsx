import React from "react";
import Link from "next/link";

import iconCalendar from "../../images/icon/calendar-icon.svg";
import iconUserGradient from "../../images/icon/user-gradient-icon.svg";
import iconComment from "../../images/icon/comment-icon.svg";
import iconEye from "../../images/icon/eye-icon.svg";
import iconLink from "../../images/icon/link-icon.svg";
import iconBookmark from "../../images/icon/bookmark-icon.svg";

import { formatDate } from "@/lib/sanity";
import { urlForImage } from "@/../sanity/lib/image";

interface ItemDetailsContentProps {
  post: any;
}

const ItemDetailsContent = ({ post }: ItemDetailsContentProps) => {
  return (
    <div className="item_details_content pb-80">
      <ul className="post_meta ul_li list-unstyled mb-25">
        <li>
          <Link href={`/blog/category/${post.categories?.[0]?.slug}`}>
            <span className="meta_label1">#{post.categories?.[0]?.title.toLowerCase()}</span>
          </Link>
        </li>

        <li>
          <Link href="#">
            <span className="meta_icon">
              <img src={((iconCalendar as any) as any).src || ((iconCalendar as any) as any)} alt="Calendar" />
            </span>
            <span className="meta_label">Last Update: {formatDate(post.publishedAt)}</span>
          </Link>
        </li>
      </ul>

      <h2 className="details-content-title mb-15">
        {post.title}
      </h2>

      <p className="mb-35">
        {post.excerpt}
      </p>

      {/* AUTHOR / META INFO */}
      <div className="post-meta-wrap">
        <div className="row mt-none-15">
          {/* LEFT SIDE */}
          <div className="col-md-6 mt-15">
            <ul className="post_meta list-unstyled ul_li">
              <li>
                <Link href="#">
                  <span className="meta_icon">
                    <img src={((iconUserGradient as any) as any).src || ((iconUserGradient as any) as any)} alt="User" />
                  </span>
                  <span className="meta_label">by {post.author?.name}</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <span className="meta_icon">
                    <img src={((iconComment as any) as any).src || ((iconComment as any) as any)} alt="Comments" />
                  </span>
                  <span className="meta_label">0 Comments</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <span className="meta_icon">
                    <img src={((iconEye as any) as any).src || ((iconEye as any) as any)} alt="Views" />
                  </span>
                  <span className="meta_label">1k Views</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6 mt-15">
            <ul className="post_meta list-unstyled ul_li justify-content-md-end">
              <li>
                <Link href="#">
                  <span className="meta_icon">
                    <img src={((iconLink as any) as any).src || ((iconLink as any) as any)} alt="Copy Link" />
                  </span>
                  <span className="meta_label">Copy Link</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <span className="meta_icon">
                    <img src={((iconBookmark as any) as any).src || ((iconBookmark as any) as any)} alt="Bookmark" />
                  </span>
                  <span className="meta_label">Bookmark</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsContent;
