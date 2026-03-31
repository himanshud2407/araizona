"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { categoriesQuery, recentPostsQuery } from "../../../sanity/lib/queries";

// Image imports
import profileIcon from "../../images/icon/profile-circle.svg";

// ICONS
const Icons = {
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14.002 5H20.002" stroke="#00020F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.002 8H17.002" stroke="#00020F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21.002 11.5C21.002 16.75 16.752 21 11.502 21C6.25195 21 2.00195 16.75 2.00195 11.5C2.00195 6.25 6.25195 2 11.502 2"
        stroke="#00020F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M22.002 22L20.002 20" stroke="#00020F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const BlogSidebar: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [cats, recents] = await Promise.all([
        client.fetch(categoriesQuery),
        client.fetch(recentPostsQuery),
      ]);
      setCategories(cats);
      setRecentPosts(recents);
    };
    fetchData();
  }, []);

  return (
    <div className="col-lg-4 mt-50">
      <div className="sidebar">

        {/* SEARCH WIDGET */}
        <div className="sidebar_widget">
          <h3 className="sidebar_widget_title">Search</h3>

          <div className="form-group">
            <input className="form-control" type="search" placeholder="Search..." />

            <button type="submit" className="search_icon">
              <span>{Icons.search}</span>
            </button>
          </div>
        </div>

        {/* RELATED POSTS */}
        <div className="sidebar_widget">
          <h3 className="sidebar_widget_title">Recent posts</h3>

          <ul className="recent_post_block list-unstyled">
            {recentPosts.map((post) => (
              <li key={post._id} className="recent_post_item xb-border">
                <h3 className="post-title border-effect-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <span>
                  <img src={((profileIcon as any) as any).src || ((profileIcon as any) as any)} alt="author" /> By {post.author}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="sidebar_widget">
          <h3 className="sidebar_widget_title">Categories</h3>

          <ul className="category_list_block list-unstyled">
            {categories.map((cat) => (
              <li key={cat._id}>
                <Link href={`/blog/category/${cat.slug}`}>
                  <span><i className="far fa-arrow-right"></i> {cat.title}</span>
                  <span>({cat.postCount.toString().padStart(2, '0')})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* TAGS */}
        <div className="sidebar_widget">
          <h3 className="sidebar_widget_title">Tags</h3>

          <ul className="tags_block list-unstyled">
            {[
              "AI Solutions",
              "Data Science",
              "SaaS",
              "AI Consulting",
              "Enterprise AI",
              "AI",
              "Helpdesk",
              "24/7 Chatbot",
            ].map((tag, i) => (
              <li key={i}>
                <Link className="xb-border" href="#!">{tag}</Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default BlogSidebar;
