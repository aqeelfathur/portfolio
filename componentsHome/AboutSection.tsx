import {
  credentials,
  experiences,
  skillGroups,
} from "./portfolioData";

type AboutSectionProps = {
  variant: "about" | "experience" | "capabilities";
};

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
    <div className="mb-10 max-w-3xl sm:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

function AboutStory() {
  return (
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="About"
        title="A builder who stays close to both the product and the process."
        description="Aqeel works best where software needs structure: user flows, data models, API touchpoints, sprint targets, and team coordination."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-200">
            I am an Information Systems undergraduate at Universitas Airlangga
            with experience in full-stack web development, project management,
            and AI-assisted system development. My work has covered CRUD
            operations, authentication, API integration, database modeling, and
            deployment across Laravel/PHP, ReactJS, Golang, and PostgreSQL.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The through-line is delivery. I like building systems that solve a
            visible workflow problem, then keeping the team aligned enough to
            ship them. That means clarifying requirements, breaking work into
            manageable tasks, coordinating stakeholders, and staying involved in
            implementation details.
          </p>
        </article>

        <aside className="grid gap-4">
          <article className="rounded-lg border border-purple-300/20 bg-purple-950/35 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-200">
              Positioning
            </p>
            <p className="mt-4 text-2xl font-bold leading-tight text-white">
              Full-stack developer, project manager, and AI-assisted system
              builder.
            </p>
          </article>
          <article className="rounded-lg border border-blue-300/20 bg-blue-950/25 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
              Education
            </p>
            <h3 className="mt-4 text-xl font-bold text-white">
              {credentials.education.institution}
            </h3>
            <p className="mt-2 text-slate-300">{credentials.education.title}</p>
            <p className="mt-1 text-slate-400">
              {credentials.education.period} · {credentials.education.detail}
            </p>
          </article>
        </aside>
      </div>
    </div>
  );
}

function ExperienceTimeline() {
  return (
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Experience"
        title="Professional contribution and organization-scale coordination."
        description="The timeline separates software delivery work from organizational leadership, so the portfolio reads clearly to recruiters and clients."
      />

      <div className="grid gap-5">
        {experiences.map((experience) => (
          <article
            key={`${experience.organization}-${experience.period}`}
            className="grid gap-5 rounded-lg border border-white/10 bg-slate-950/40 p-6 lg:grid-cols-[0.32fr_1fr]"
          >
            <div>
              <span className="rounded-md border border-purple-300/30 bg-purple-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-purple-100">
                {experience.type}
              </span>
              <p className="mt-5 text-sm text-slate-400">{experience.period}</p>
              <p className="mt-2 text-sm text-slate-500">{experience.location}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
              <p className="mt-1 text-lg font-semibold text-blue-200">
                {experience.organization}
              </p>
              <ul className="mt-5 grid gap-3">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function CapabilityStack() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillGroups.map((group) => {
        const Icon = group.icon;
        return (
          <article
            key={group.title}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-purple-300/10 text-purple-100">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-slate-950/45 px-3 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function AboutSection({ variant }: AboutSectionProps) {
  if (variant === "experience") {
    return <ExperienceTimeline />;
  }

  if (variant === "capabilities") {
    return <CapabilityStack />;
  }

  return <AboutStory />;
}
