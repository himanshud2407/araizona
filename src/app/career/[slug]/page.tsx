import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import CareerDetails from "@/main-component/CareerDetails/CareerDetails";
import { getJobBySlug, getAllJobSlugs } from "@/api/career";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllJobSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Opening Not Found | Araizona Careers",
    };
  }

  return {
    title: `${job.title} | Careers`,
    description: `${job.aboutRole.slice(0, 160)}... Location: ${job.location}, Experience: ${job.experience}, CTC: ${job.salary}.`,
    openGraph: {
      title: `${job.title} - Careers at Araizona`,
      description: `${job.title} in ${job.location}. Apply today to join Araizona Simplesphere Global Private Limited.`,
      url: `https://araizona.com/career/${job.slug}`,
      type: "website",
    },
  };
}

export default async function CareerJobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return (
      <div
        className="text-center py-5 ai-agency"
        style={{ backgroundColor: "#0A0E27", minHeight: "100vh", color: "#fff" }}
      >
        <Header />
        <div style={{ padding: "160px 20px" }}>
          <h2 className="mb-4" style={{ fontSize: "36px", fontWeight: 700 }}>
            Position Not Found
          </h2>
          <p
            style={{
              color: "var(--color-gray, #b2b3b7)",
              maxWidth: "500px",
              margin: "0 auto 30px",
              fontSize: "16px",
            }}
          >
            The role you are looking for may have been filled or the link has changed.
          </p>
          <Link href="/career" className="thm-btn agency-btn">
            <span className="text">Explore All Open Positions</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Google JobPosting Schema for SEO and Google Jobs rich snippet
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.aboutRole} Responsibilities: ${job.whatYouWillDo.join(
      ", "
    )}. Requirements: ${job.whatWeAreLookingFor.join(", ")}.`,
    datePosted: "2026-11-17",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
      sameAs: "https://araizona.com",
      logo: "https://araizona.com/images/logo/araizon-horizontal.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Wanwadi",
        addressRegion: "Pune, Maharashtra",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareerDetails job={job} />
    </>
  );
}
