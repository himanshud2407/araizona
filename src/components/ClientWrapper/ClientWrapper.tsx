"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    if (pathname.startsWith("/studio")) {
        return <>{children}</>;
    }

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        let animationFrame: number;

        const raf = (time: number) => {
            lenis.raf(time);
            animationFrame = requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrame);
            lenis.destroy();
        };
    }, []);

    // Re-initialize WOW on route change
    useEffect(() => {
        if (typeof window !== "undefined") {
            // @ts-ignore
            import("wowjs").then((WOW) => {
                const wow = new WOW.WOW({
                    live: false,
                });
                wow.init();
            });
        }
    }, [pathname]);

    // Re-initialize GSAP features on route change
    useEffect(() => {
        const applySplitTextReveal = () => {
            const elements = document.querySelectorAll<HTMLElement>(".xb-text-reveal");
            if (!elements.length) return;

            elements.forEach((el) => {
                // If it's a new page, we might want to re-run even if splitApplied was true? 
                // Or rather, pathname change should clear the data attribute or we just check if it exists in current DOM.
                if (el.dataset.splitApplied === "true") return;
                el.dataset.splitApplied = "true";

                try {
                    const split = new SplitText(el, {
                        type: "lines,words,chars",
                        linesClass: "split-line",
                    });

                    gsap.set(split.chars, { opacity: 0.3, x: -7 });

                    gsap.to(split.chars, {
                        scrollTrigger: {
                            trigger: el,
                            start: "top 92%",
                            end: "top 60%",
                            scrub: 1,
                            markers: false,
                        },
                        x: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.2,
                        ease: "power2.out",
                    });
                } catch (error) {
                    console.warn("SplitText failed:", error);
                }
            });
        };

        // Clear existing ScrollTriggers on route change
        ScrollTrigger.getAll().forEach((st) => st.kill());

        const timeout = setTimeout(() => {
            applySplitTextReveal();
            ScrollTrigger.refresh();
        }, 500);

        const observer = new MutationObserver(() => {
            requestAnimationFrame(applySplitTextReveal);
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, [pathname]);

    return (
        <div className="App lenis" id="scrool">
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
