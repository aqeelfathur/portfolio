"use client";

import { useRef } from "react";
import Navbar from "@/componentsHome/Navbar";
import Hero from "@/componentsHome/Hero";
import AboutSection from "@/componentsHome/AboutSection";
import ProjectSection from "@/componentsHome/ProjectSection";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);
  
  const smoothScrollTo = (target: HTMLElement) => {
    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 96;
    const distance = targetPosition - startPosition;
    const duration = 900;
    let start: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (!start) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(
        0,
        startPosition + distance * easeInOutCubic(progress)
      );

      if (elapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black">
      <Navbar
        onHeroClick={() => heroRef.current && smoothScrollTo(heroRef.current)}
        onProjectClick={() => projectRef.current && smoothScrollTo(projectRef.current)}
        onAboutClick={() => aboutRef.current && smoothScrollTo(aboutRef.current)}
        onConnectClick={() => connectRef.current && smoothScrollTo(connectRef.current)}
      />

      <div ref={heroRef} className="scroll-mt-28">
        <Hero />
      </div>

      <div ref={projectRef} className="scroll-mt-28">
        <ProjectSection />
      </div>

      <div ref={aboutRef} className="scroll-mt-28">
        <AboutSection connectRef={connectRef} />
      </div>
    </div>
  );
}