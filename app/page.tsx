"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/componentsHome/Navbar";
import Hero from "@/componentsHome/Hero";
import AboutSection from "@/componentsHome/AboutSection";
import ProjectSection from "@/componentsHome/ProjectSection";

function SlideUpSection({
  children,
  sectionRef,
}: {
  children: React.ReactNode;
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const inViewRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-10% 0px" });

  return (
    <div ref={sectionRef} style={{ scrollSnapAlign: "start" }}>
      <div ref={inViewRef}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const connectRef = useRef<HTMLDivElement | null>(null);

  const smoothScrollTo = (target: HTMLElement) => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen overflow-y-scroll bg-gradient-to-br from-purple-950 via-purple-900 to-black"
      style={{
        scrollSnapType: "y proximity",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar
        scrollContainerRef={scrollContainerRef}
        onHeroClick={() => heroRef.current && smoothScrollTo(heroRef.current)}
        onProjectClick={() => projectRef.current && smoothScrollTo(projectRef.current)}
        onAboutClick={() => aboutRef.current && smoothScrollTo(aboutRef.current)}
        onConnectClick={() => connectRef.current && smoothScrollTo(connectRef.current)}
      />

      {/* HERO — pass scrollContainerRef agar parallax sync */}
      <div ref={heroRef} style={{ scrollSnapAlign: "start" }}>
        <Hero scrollContainerRef={scrollContainerRef} />
      </div>

      <SlideUpSection sectionRef={projectRef}>
        <ProjectSection />
      </SlideUpSection>

      <SlideUpSection sectionRef={aboutRef}>
        <AboutSection connectRef={connectRef} />
      </SlideUpSection>
    </div>
  );
}