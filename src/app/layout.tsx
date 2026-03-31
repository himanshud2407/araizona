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
    title: "Araizona - Building Systems. Empowering Growth. Simplifying the Future.",
    description: "Araizona - AI Solutions for Building Systems and Empowering Growth.",
};

import ClientWrapper from "../components/ClientWrapper/ClientWrapper";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={dmSans.className} suppressHydrationWarning>
                <ClientWrapper>{children}</ClientWrapper>
            </body>
        </html>
    );
}
