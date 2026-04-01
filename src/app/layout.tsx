import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/fontawesome.css";
import "../css/themify-icons.css";
import "../css/animate.css";
import "../css/mousecursor.css";
import "../css/imageRevealHover.css";
import "../css/custom-fonts.css";
import "../css/main.css";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
    title: {
      default: "Araizona | Building Systems. Empowering Growth.",
      template: "%s | Araizona",
    },
    description: "Araizona - Custom AI technology solutions, chatbots, and advanced marketing integrations for your business growth.",
    keywords: ["AI solutions", "technology", "agency", "chatbot", "marketing", "Araizona"],
    openGraph: {
      url: "https://araizona.com",
      title: "Araizona - Modern AI Solutions",
      description: "Building Systems. Empowering Growth. Simplifying the Future with Artificial Intelligence.",
      siteName: "Araizona",
      images: [
        {
          url: "/images/logo/araizon-horizontal.png", // Will default fallback if missing, assuming public assets
          width: 1200,
          height: 630,
          alt: "Araizona Preview",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Araizona - Custom AI technology",
      description: "Building Systems. Empowering Growth. Simplifying the Future.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.png', // Corrected path
      apple: '/favicon.png',
    },
};

import ClientWrapper from "../components/ClientWrapper/ClientWrapper";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="canonical" href="https://araizona.com" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Araizona",
                            "alternateName": "Araizona AI",
                            "url": "https://araizona.com",
                            "logo": "https://araizona.com/images/logo/araizon-horizontal.png",
                            "sameAs": [
                                "https://twitter.com/araizona",
                                "https://linkedin.com/company/araizona"
                            ],
                            "contactPoint": [
                                {
                                    "@type": "ContactPoint",
                                    "telephone": "+91-9322051181",
                                    "contactType": "customer service",
                                    "areaServed": "IN",
                                    "availableLanguage": ["English", "Hindi"]
                                }
                            ],
                            "description": "Araizona provides custom AI technology solutions, chatbots, and advanced marketing integrations for business growth."
                        }),
                    }}
                />
            </head>
            <body className={dmSans.className} suppressHydrationWarning>
                <ClientWrapper>{children}</ClientWrapper>
            </body>
        </html>
    );
}
