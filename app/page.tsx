"use client";

import { motion } from "motion/react";
import AboutSection from "@/componentsHome/AboutSection";
import ConnectSection from "@/componentsHome/ConnectSection";
import Hero from "@/componentsHome/Hero";
import Navbar from "@/componentsHome/Navbar";
import ProjectSection from "@/componentsHome/ProjectSection";
import { credentials, metrics, operatingPrinciples } from "@/componentsHome/portfolioData";

function AnimatedSection({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-28 px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

function MetricsSection() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/10"
        >
          <p className="text-4xl font-bold text-white">{metric.value}</p>
          <h3 className="mt-3 text-base font-semibold text-blue-200">{metric.label}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{metric.detail}</p>
        </article>
      ))}
    </div>
  );
}

function CapabilitySection() {
  return (
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Capability stack"
        title="Technical build work with delivery habits."
        description="The stack is intentionally practical: tools for building web systems, coordinating work, and keeping project communication legible."
      />

      <AboutSection variant="capabilities" />
    </div>
  );
}

function CredentialsSection() {
  const CertificationIcon = credentials.certification.icon;
  const FocusIcon = credentials.focus.icon;
  const PreferenceIcon = credentials.workPreference.icon;

  return (
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Credentials"
        title="Academic base, certified web fundamentals, practical direction."
        description="Aqeel is still early-career, so the portfolio foregrounds evidence: education, certification, shipped systems, and measurable coordination work."
      />

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-lg border border-purple-400/20 bg-purple-950/35 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-200">
            Education
          </p>
          <h3 className="mt-4 text-2xl font-bold text-white">{credentials.education.title}</h3>
          <p className="mt-2 text-lg text-blue-200">{credentials.education.institution}</p>
          <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <p className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3">
              {credentials.education.period}
            </p>
            <p className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3">
              {credentials.education.detail}
            </p>
          </div>
        </article>

        <div className="grid gap-4">
          {[
            {
              icon: CertificationIcon,
              title: credentials.certification.title,
              label: `${credentials.certification.issuer}, ${credentials.certification.year}`,
            },
            {
              icon: FocusIcon,
              title: credentials.focus.title,
              label: credentials.focus.detail,
            },
            {
              icon: PreferenceIcon,
              title: credentials.workPreference.title,
              label: credentials.workPreference.detail,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex gap-4 rounded-lg border border-white/10 bg-slate-950/45 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-400/10 text-blue-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PrinciplesSection() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
      {operatingPrinciples.map((principle) => {
        const Icon = principle.icon;
        return (
          <article
            key={principle.title}
            className="rounded-lg border border-white/10 bg-slate-950/35 p-5"
          >
            <Icon className="h-6 w-6 text-purple-200" aria-hidden="true" />
            <h3 className="mt-5 text-lg font-semibold text-white">{principle.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{principle.text}</p>
          </article>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.34),transparent_36%),linear-gradient(135deg,#16051f_0%,#28105c_42%,#05050b_100%)] text-white">
      <Navbar />

      <Hero />

      <AnimatedSection id="proof" className="py-12 sm:py-16">
        <MetricsSection />
      </AnimatedSection>

      <AnimatedSection id="about" className="py-16 sm:py-20">
        <AboutSection variant="about" />
      </AnimatedSection>

      <AnimatedSection id="experience" className="py-16 sm:py-20">
        <AboutSection variant="experience" />
      </AnimatedSection>

      <AnimatedSection id="projects" className="py-16 sm:py-20">
        <ProjectSection />
      </AnimatedSection>

      <AnimatedSection id="capabilities" className="py-16 sm:py-20">
        <CapabilitySection />
      </AnimatedSection>

      <AnimatedSection id="credentials" className="py-16 sm:py-20">
        <CredentialsSection />
      </AnimatedSection>

      <AnimatedSection id="contact" className="py-16 pb-24 sm:py-20 sm:pb-28">
        <ConnectSection />
      </AnimatedSection>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <PrinciplesSection />
      </section>
    </main>
  );
}
