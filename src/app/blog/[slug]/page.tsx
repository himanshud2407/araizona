import React from 'react';
import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { postQuery } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Header from '@/components/Header/Header';
import Footer from '@/components/footer/Footer';
import PageTitle from '@/components/pagetitle/PageTitle';
import Link from 'next/link';

export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });
  
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlForImage(post.mainImage).url()] : [],
      type: 'article',
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  };
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return (
      <div className="text-center py-5 ai-agency" style={{ backgroundColor: '#0A0E27', minHeight: '100vh', color: '#fff' }}>
        <Header />
        <div style={{ padding: '150px 0' }}>
           <h2 className="mb-4">Intelligence report not found.</h2>
           <Link href="/blog" className="thm-btn agency-btn">
             <span className="text">Return to Intelligence</span>
           </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const components = {
    types: {
      image: ({ value }: any) => {
        return (
          <div className="my-5" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img 
              src={urlForImage(value).url()} 
              alt={value.alt || ' '} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
        )
      }
    },
    block: {
      h1: ({children}: any) => <h1 style={{ fontWeight: 800, marginTop: '2em', marginBottom: '1em', color: '#fff' }}>{children}</h1>,
      h2: ({children}: any) => <h2 style={{ fontWeight: 700, marginTop: '1.8em', marginBottom: '0.8em', color: '#fff' }}>{children}</h2>,
      h3: ({children}: any) => <h3 style={{ fontWeight: 700, marginTop: '1.5em', marginBottom: '0.6em', color: '#fff' }}>{children}</h3>,
      normal: ({children}: any) => <p style={{ fontSize: '18px', lineHeight: 1.8, marginBottom: '1.5em', color: 'rgba(255,255,255,0.7)' }}>{children}</p>,
      blockquote: ({children}: any) => (
        <blockquote style={{ borderLeft: '4px solid var(--color-primary)', padding: '30px', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.03)', borderRadius: '0 20px 20px 0', margin: '40px 0' }}>
          {children}
        </blockquote>
      ),
    },
    list: {
        bullet: ({children}: any) => <ul style={{ marginBottom: '1.5em', paddingLeft: '20px', color: 'rgba(255,255,255,0.7)' }}>{children}</ul>,
        number: ({children}: any) => <ol style={{ marginBottom: '1.5em', paddingLeft: '20px', color: 'rgba(255,255,255,0.7)' }}>{children}</ol>,
    },
    listItem: {
        bullet: ({children}: any) => <li style={{ marginBottom: '10px' }}>{children}</li>,
        number: ({children}: any) => <li style={{ marginBottom: '10px' }}>{children}</li>,
    }
  }

  return (
    <div className="blog-single-page-wrapper ai-agency" style={{ backgroundColor: '#070b1d' }}>
      <Header />
      <PageTitle pageTitle={post.title} pagesub="Report" />
      
      <section className="blog-details-section pt-100 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="blog-details-inner">
                <div className="post-header mb-60 text-center">
                  {post.categories && post.categories.length > 0 && (
                    <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '2px', fontSize: '13px', display: 'block', marginBottom: '20px' }}>
                      {post.categories[0].title}
                    </span>
                  )}
                  <h1 className="title" style={{ fontSize: '56px', fontWeight: 800, lineHeight: 1.1, color: '#fff', marginBottom: '30px' }}>
                    {post.title}
                  </h1>
                  <div className="meta d-flex justify-content-center align-items-center" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', fontWeight: 500, gap: '25px' }}>
                    <span className="date d-flex align-items-center gap-2">
                       <i className="ti-calendar"></i> {new Date(post.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    {post.author && (
                      <span className="author d-flex align-items-center gap-2">
                        <i className="ti-user"></i> By {post.author.name}
                      </span>
                    )}
                  </div>
                </div>

                {post.mainImage && (
                  <div className="main-image mb-80" style={{ borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 100px rgba(0,0,0,0.4)' }}>
                    <img 
                      src={urlForImage(post.mainImage).url()} 
                      alt={post.title} 
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                )}
                
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="post-content">
                            <PortableText value={post.body} components={components} />
                        </div>

                        {post.author && (
                        <div className="author-box mt-80 p-5 d-flex align-items-center" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            {post.author.image && (
                            <div className="author-img me-4 flex-shrink-0" style={{ width: '110px', height: '110px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-primary)', padding: '5px' }}>
                                <img src={urlForImage(post.author.image).url()} alt={post.author.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                            </div>
                            )}
                            <div className="author-info">
                            <h5 style={{ margin: '0 0 8px 0', color: 'var(--color-primary)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>AI Lead Contributor</h5>
                            <h4 style={{ margin: '0 0 15px 0', fontWeight: 800, fontSize: '24px', color: '#fff' }}>{post.author.name}</h4>
                            {post.author.bio && (
                                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.7 }}>
                                    <PortableText value={post.author.bio} />
                                </div>
                            )}
                            </div>
                        </div>
                        )}

                        <div className="post-footer mt-60 text-center">
                             <Link href="/blog" className="thm-btn agency-btn">
                                <span className="text">Back to Reports</span>
                             </Link>
                        </div>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
