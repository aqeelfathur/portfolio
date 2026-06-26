import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  CalendarCheck,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Handshake,
  Layers3,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type Experience = {
  title: string;
  organization: string;
  location: string;
  period: string;
  type: "Work" | "Organization";
  points: string[];
};

export type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  contributions: string[];
  outcome: string;
  image?: string;
  github?: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export const profile = {
  name: "Ananda Aqeel Fathur Rahman",
  shortName: "Aqeel",
  location: "Surabaya, Indonesia",
  email: "aqeelfathurrahman@gmail.com",
  portfolio: "aqeelportfo.vercel.app",
  linkedin: "https://www.linkedin.com/in/ananda-aqeel-fathur-rahman/",
  github: "https://github.com/aqeelfathur",
  headline:
    "Information Systems undergraduate building web systems and coordinating delivery.",
  summary:
    "I bridge software development and project execution: translating requirements into working systems, coordinating teams through Scrum-based workflows, and shipping web products with clear ownership.",
  roleLine:
    "Full-stack development, project management, and AI-assisted system building.",
};

export const quickFacts = [
  { icon: GraduationCap, label: "Universitas Airlangga", value: "Information Systems, 2023-2027 expected" },
  { icon: MapPin, label: "Based in", value: profile.location },
  { icon: Mail, label: "Contact", value: profile.email },
];

export const metrics: Metric[] = [
  {
    value: "5+",
    label: "software projects",
    detail: "Laravel, ReactJS, Golang, PostgreSQL, API integration, and deployment.",
  },
  {
    value: "100%",
    label: "sprint completion",
    detail: "Selected academic projects delivered all planned Sprint 1-3 targets.",
  },
  {
    value: "50-300+",
    label: "participants coordinated",
    detail: "Programs delivered with cross-division student teams and stakeholders.",
  },
  {
    value: "92.5%",
    label: "satisfaction rate",
    detail: "HIMSI Community Service 2025 post-event survey result.",
  },
];

export const experiences: Experience[] = [
  {
    title: "Staff",
    organization: "PT Otak Kanan Indonesia",
    location: "Surabaya, Indonesia",
    period: "Feb 2026 - Jun 2026",
    type: "Work",
    points: [
      "Built and maintained frontend modules for SIMPONI, an omnichannel marketplace management platform for Shopee and TikTok Shop sellers.",
      "Developed platform connection pages, authentication flow handling, platform status checking, and API communication between ReactJS frontend and Golang backend.",
      "Supported vendor management and role-based access control by debugging API responses and improving frontend-backend data handling.",
    ],
  },
  {
    title: "Event Coordinator",
    organization: "HIMSI Community Service 2025",
    location: "Surabaya, Indonesia",
    period: "Mar 2025 - Jul 2025",
    type: "Organization",
    points: [
      "Led a 6-member event team for a two-day community service program.",
      "Structured responsibilities across Day 1 Rundown, Day 2 Rundown, Concept Development, and Games Coordination.",
      "Coordinated with other divisions to deliver learning materials, keep the event flow on time, and reach 92.5% satisfaction with 85% understanding.",
    ],
  },
  {
    title: "Staff",
    organization: "Himpunan Mahasiswa Sistem Informasi",
    location: "Surabaya, Indonesia",
    period: "Feb 2024 - Dec 2024",
    type: "Organization",
    points: [
      "Served as Steering Committee for Comparative Study and APRES events.",
      "Coordinated planning, execution, and evaluation across teams of over 60 students.",
      "Contributed to more than five Public Relations programs and achieved a 93/100 performance report score.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SIMPONI",
    role: "Full Stack Developer",
    period: "Feb 2026 - Present",
    description:
      "Omnichannel e-commerce management platform integrated with Shopee and TikTok Shop APIs using ReactJS, Golang, and gRPC-based microservices architecture.",
    stack: ["ReactJS", "Golang", "gRPC", "PostgreSQL", "Railway"],
    contributions: [
      "Implemented Authentication Platform and API service integration work.",
      "Integrated marketplace APIs for centralized seller operations.",
      "Deployed backend services and database infrastructure on Railway.",
    ],
    outcome:
      "Created a technical foundation for managing marketplace connection status, authentication, and seller dashboard workflows.",
  },
  {
    title: "SmartLibrary",
    role: "Project Manager",
    period: "Feb 2026 - Present",
    description:
      "AI-assisted digital library system featuring semantic book search powered by an LLM.",
    stack: ["Laravel", "LLM", "Project Planning", "System Architecture"],
    contributions: [
      "Lead project planning and team task allocation.",
      "Manage initiation artifacts including Business Charter and early documentation.",
      "Oversee architecture decisions for a Laravel-based digital library platform.",
    ],
    outcome:
      "Turned an AI-assisted library idea into a structured project with ownership, documentation, and architecture direction.",
  },
  {
    title: "PresenSee",
    role: "Project Manager and Full Stack Developer",
    period: "Nov 2025 - Dec 2025",
    description:
      "Web-based school attendance management system using Laravel, supporting real-time attendance and student-class management.",
    stack: ["Laravel", "PHP", "Authentication", "Database Modeling"],
    contributions: [
      "Executed 3 development sprints with 100% completion of planned targets and timelines.",
      "Designed and implemented backend architecture, attendance logic, and student-class relationships.",
      "Delivered frontend dashboard components for attendance workflows.",
    ],
    outcome:
      "Delivered a complete attendance system scope with reliable sprint execution and clear backend ownership.",
    image: "/presensee.png",
    github: "https://github.com/aqeelfathur/PresenSee",
  },
  {
    title: "EmoSense",
    role: "Project Manager",
    period: "Aug 2025 - Dec 2025",
    description:
      "Web-based application that detects emotions in Indonesian text using the IndoBERTweet model.",
    stack: ["Scrum", "BDD", "Backlog Management", "IndoBERTweet"],
    contributions: [
      "Managed a software development team using Scrum.",
      "Oversaw sprint planning, backlog prioritization, and task distribution.",
      "Ensured backlog items had clear Behavior-Driven Development outcomes.",
    ],
    outcome:
      "Delivered Sprints 1-3 with 100% target completion and clearer acceptance criteria for the team.",
  },
  {
    title: "FitTrack",
    role: "Full Stack Developer",
    period: "Feb 2025 - Mar 2025",
    description:
      "Web-based workout platform using Laravel, providing exercise programs, custom workout planning, and community workshops.",
    stack: ["Laravel", "PHP", "Calendar Scheduling", "Workout Management"],
    contributions: [
      "Completed 100% of development tasks on time through a bi-weekly milestone workflow.",
      "Implemented frontend and backend features for scheduling and workout modules.",
      "Aligned delivery with project scope and functional goals.",
    ],
    outcome:
      "Built a working fitness platform that connected workout planning, scheduling, and community program needs.",
    image: "/fittrack.png",
    github: "https://github.com/aqeelfathur/fittrack-fix",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Development",
    icon: Code2,
    items: [
      "PHP",
      "Laravel",
      "ReactJS",
      "Golang",
      "HTML",
      "CSS",
      "API Integration",
      "Authentication",
    ],
  },
  {
    title: "Data and Systems",
    icon: Database,
    items: ["PostgreSQL", "Database Modeling", "Deployment", "AI-assisted system development"],
  },
  {
    title: "Delivery",
    icon: CalendarCheck,
    items: ["Jira", "Notion", "GitHub Workflow", "Scrum", "Task Delegation", "Timeline Management"],
  },
  {
    title: "Collaboration",
    icon: UsersRound,
    items: [
      "Team Leadership",
      "Cross-Division Collaboration",
      "Effective Communication",
      "Problem Solving",
      "Analytical Thinking",
    ],
  },
];

export const operatingPrinciples = [
  { icon: Layers3, title: "Structure first", text: "Clarify scope, roles, and milestones before the team starts building." },
  { icon: Network, title: "Bridge the handoff", text: "Keep technical details readable for stakeholders and requirements useful for developers." },
  { icon: GitBranch, title: "Ship in increments", text: "Use sprint targets, backlog clarity, and review loops to keep work visible." },
  { icon: Handshake, title: "Own the delivery", text: "Stay close to implementation details without losing the bigger project flow." },
];

export const credentials = {
  education: {
    title: "Undergraduate Information Systems",
    institution: "Universitas Airlangga",
    period: "2023-2027 expected",
    detail: "GPA 3.54/4.00",
  },
  certification: {
    title: "Junior Web Programmer",
    issuer: "LSP/BNSP",
    year: "2025",
    icon: ShieldCheck,
  },
  focus: {
    title: "Current direction",
    icon: Sparkles,
    detail:
      "Full-stack web systems, AI-assisted product workflows, and project coordination for teams that need both builder energy and delivery discipline.",
  },
  workPreference: {
    title: "Good fit for",
    icon: BriefcaseBusiness,
    detail:
      "Internship roles, junior full-stack opportunities, project coordination work, and freelance web systems with clear business workflows.",
  },
};
