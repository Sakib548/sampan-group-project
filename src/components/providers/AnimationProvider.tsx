"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: ReactNode;
};

export default function AnimationProvider({
  children,
}: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Reset scroll and refresh ScrollTrigger on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // --------------------------------------------------
    // LENIS + GSAP + SCROLLTRIGGER SYNC
    // --------------------------------------------------

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    // Keep GSAP lag smoothing safe so tab switches don't lock scroll
    gsap.ticker.lagSmoothing(500, 33);

    // --------------------------------------------------
    // REVEAL ANIMATIONS
    // --------------------------------------------------

    const sections = gsap.utils.toArray<HTMLElement>(
      "main section:not([data-no-reveal])",
    );

    const revealAnimations: gsap.core.Tween[] = [];

    sections.forEach((section) => {
      const revealItems = section.querySelectorAll<HTMLElement>(
        ".reveal-item",
      );

      // IMPORTANT:
      // Don't hide the entire section.
      // Only animate its visual movement/opacity.
      gsap.set(section, {
        opacity: 0,
        y: 28,
      });

      if (revealItems.length) {
        gsap.set(revealItems, {
          opacity: 0,
          y: 18,
        });
      }

      const animation = gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 88%",
          once: true,
          invalidateOnRefresh: true,
        },
        onComplete: () => {
          // Remove inline styles after animation
          gsap.set(section, {
            clearProps: "opacity,transform",
          });
        },
      });

      revealAnimations.push(animation);

      if (revealItems.length) {
        const itemAnimation = gsap.to(revealItems, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true,
            invalidateOnRefresh: true,
          },
          onComplete: () => {
            gsap.set(revealItems, {
              clearProps: "opacity,transform",
            });
          },
        });

        revealAnimations.push(itemAnimation);
      }
    });

    // --------------------------------------------------
    // REFRESH AFTER LAYOUT IS READY
    // --------------------------------------------------

    const refreshScrollTrigger = () => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    // Initial refresh
    refreshScrollTrigger();

    // Refresh after images/fonts/layout settle
    window.addEventListener("load", refreshScrollTrigger);

    // Extra safety for dynamically changing layouts
    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    // --------------------------------------------------
    // CLEANUP
    // --------------------------------------------------

    return () => {
      window.removeEventListener("load", refreshScrollTrigger);
      window.clearTimeout(refreshTimer);

      gsap.ticker.remove(updateLenis);

      // Kill only the animations created by this provider
      revealAnimations.forEach((animation) => {
        animation.kill();
      });

      lenis.destroy();

      // Kill ScrollTriggers created by this provider
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return <>{children}</>;
}
