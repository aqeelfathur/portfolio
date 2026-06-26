import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "./portfolioData";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "ananda-aqeel-fathur-rahman",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "aqeelfathur",
    href: profile.github,
    icon: Github,
    external: true,
  },
];

export default function ConnectSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="overflow-hidden rounded-lg border border-purple-300/20 bg-purple-950/35">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
              Contact
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Need someone who can build and coordinate?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Reach out for internship opportunities, junior developer roles,
              freelance web systems, or project work that needs someone
              comfortable moving between requirements and implementation.
            </p>
            <a
              href={`https://${profile.portfolio}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              {profile.portfolio}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-slate-950/40 p-4 transition hover:border-blue-300/40 hover:bg-blue-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">{link.label}</span>
                      <span className="block truncate text-sm text-slate-400">{link.value}</span>
                    </span>
                  </span>
                  <ExternalLink
                    className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-blue-200"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
