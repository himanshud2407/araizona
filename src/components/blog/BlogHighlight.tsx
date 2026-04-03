import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/footer/Footer';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';

export const revalidate = 60;

const BlogHighlight = async ({ limit = 3, showTitle = true }: { limit?: number, showTitle?: boolean }) => {
  const posts = await client.fetch(postsQuery);
  const displayPosts = posts.slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <section className="blog-section pt-140 pb-120" style={{ backgroundColor: '#070b1d' }}>
      <div className="container">
        {showTitle && (
            <div className="sec-title custom-sec-title text-center mb-60">
                <span className="sub-title">Latest Intelligence</span>
                <h2 className="title" style={{ color: '#fff' }}>
                    Insights from our <br /> <span>AI Research Lab</span>
                </h2>
            </div>
        )}

        <div className="row justify-content-center">
          {displayPosts.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {posts.length > limit && (
            <div className="xb-heading-btn text-center mt-50">
                <Link href="/blog" className="thm-btn agency-btn">
                    <span className="text">Explore All Intelligence</span>
                    <span className="arrow">
                        <span className="arrow-icon">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                                <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                                <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                                <rect x="15.334" y="7.85205" width="2.61221" height="2.61221" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                                <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                                <rect x="18.4084" y="15.52" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                                <rect x="18.104" y="19.2012" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                            </svg>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                                <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                                <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                                <rect x="15.334" y="7.85205" width="2.61221" height="2.61221" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                                <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                                <rect x="18.4084" y="15.52" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                                <rect x="18.104" y="19.2012" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                            </svg>
                        </span>
                    </span>
                </Link>
            </div>
        )}
      </div>
    </section>
  );
};

export default BlogHighlight;
