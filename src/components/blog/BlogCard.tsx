"use client";
import React from 'react';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';

const BlogCard = ({ post }: { post: any }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-5">
      <div 
        className="blog-card" 
        style={{
          background: '#0A0E27',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.4s var(--easing)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.borderColor = 'var(--color-primary)';
          e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 61, 61, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div className="blog-image" style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
          {post.mainImage ? (
            <img
              src={urlForImage(post.mainImage).url()}
              alt={post.title}
              style={{ objectFit: 'cover', width: '100%', height: '100%', transition: 'transform 0.5s var(--easing)' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#1a1f3c' }}></div>
          )}
        </div>
        <div className="blog-content p-4" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="meta mb-3" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.5px' }}>
            <span className="date">{new Date(post.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            {post.categories && post.categories.length > 0 && (
              <span className="category ms-3" style={{ color: 'var(--color-primary)', backgroundColor: 'rgba(255, 61, 61, 0.1)', padding: '4px 10px', borderRadius: '50px' }}>
                {post.categories[0].title}
              </span>
            )}
          </div>
          <h3 className="title mb-3" style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.4, color: '#fff' }}>
            <Link href={`/blog/${post.currentSlug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {post.title}
            </Link>
          </h3>
          <p className="excerpt mb-4" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.6 }}>
            {post.excerpt}
          </p>
          <div className="mt-auto pt-3 border-top border-secondary d-flex justify-content-between align-items-center" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
            <Link 
              href={`/blog/${post.currentSlug}`} 
              style={{ 
                color: 'var(--color-primary)', 
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Learn More <i className="ti-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
