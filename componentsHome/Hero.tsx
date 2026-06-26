"use client";

import Image from "next/image";
import { ArrowDownRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { profile, quickFacts } from "./portfolioData";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div className="pointer-events-none absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex rounded-md border border-blue-300/30 bg-blue-300/10 px-3 py-2 text-sm font-semibold text-blue-100">
            {profile.roleLine}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Web systems builder with project delivery instincts.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {profile.name} is an Information Systems undergraduate in Surabaya
            who builds full-stack products, coordinates Scrum-based teams, and
            turns requirements into working software.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-purple-950 transition hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              View projects
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-purple-200 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              Contact Aqeel
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <article
                  key={fact.label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <Icon className="h-5 w-5 text-blue-200" aria-hidden="true" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white">{fact.value}</p>
                </article>
              );
            })}
          </div>
        </motion.div>

        <motion.aside
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Portfolio summary panel"
        >
          <div className="rounded-lg border border-purple-300/20 bg-slate-950/45 p-4 shadow-2xl shadow-black/30 sm:p-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/10">
              <Image
                src="/fotoaqeel.png"
                alt="Portrait of Ananda Aqeel Fathur Rahman"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[center_18%]"
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm text-slate-400">Current signal</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Full-stack + PM
                </p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm text-slate-400">Portfolio</p>
                <a
                  href={`https://${profile.portfolio}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-blue-200 hover:text-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                >
                  Live domain
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-md border border-purple-300/20 bg-purple-300/10 p-4 text-sm leading-6 text-purple-100">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p>{profile.summary}</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
