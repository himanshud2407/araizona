import React from 'react';
import { client } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import PageTitle from '@/components/pagetitle/PageTitle';
import Header from '@/components/Header/Header';
import Footer from '@/components/footer/Footer';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery);

  return (
    <div className="blog-page-wrapper ai-agency">
      <Header />
      <PageTitle pageTitle="Our Insights" pagesub="News & Intelligence" />
      
      <section className="blog-section pt-140 pb-120" style={{ backgroundColor: '#070b1d' }}>
        <div className="container">
          <div className="sec-title custom-sec-title text-center mb-60">
            <span className="sub-title">Ai Knowledge Base</span>
            <h2 className="title" style={{ color: '#fff' }}>
              Building the Future of <br /> <span>Artificial Intelligence</span>
            </h2>
          </div>

          <div className="row">
            {posts.length > 0 ? posts.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            )) : (
              <div className="col-12 text-center py-5">
                <h3 style={{ fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>Insights coming soon.</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)' }}>Our AI specialists are currently drafting new research.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
