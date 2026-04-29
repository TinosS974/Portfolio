export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  type: "internship" | "project" | "fulltime";
};

export const experiences: Experience[] = [
  {
    id: "gazelle",
    company: "La Gazelle",
    role: "Lead Developer",
    period: "February 2026 – Present",
    location: "Paris, France",
    description:
      "Volunteer mission — development and maintenance of a content publishing application.",
    highlights: [
      "Technical lead: architecture decisions, tech stack choices, project management",
      "Custom WordPress development: themes, plugins, API integrations",
      "Ongoing maintenance: incident handling, regular updates, feature improvements",
    ],
    tags: ["WordPress", "Notion", "Lead"],
    type: "project",
  },
  {
    id: "zenith-rh",
    company: "Zenith RH",
    role: "Full Stack Developer",
    period: "March – August 2025",
    location: "Paris, France",
    description:
      "Final internship (6 months) — migration, redesign and optimization of an internal HR platform.",
    highlights: [
      "Front-end migration React JS → TypeScript: 50% codebase reduction",
      "Full KPI dashboard redesign: removed 5 redundant tables, simplified UI",
      "Performance optimization: reduced load time by up to 3 seconds on key pages",
      "E2E automation with Playwright: migrated 150+ manual test cases",
      "Onboarding and technical mentoring of new interns",
    ],
    tags: ["TypeScript", "React", "Playwright", "KPI", "E2E"],
    type: "internship",
  },
  {
    id: "phar",
    company: "PHAR",
    role: "Project Lead & Front-end Developer",
    period: "2022 – 2025",
    location: "Paris, France",
    description:
      "Epitech final project — 3 years, team of 8 developers, Agile SCRUM methodology.",
    highlights: [
      "Full project leadership: coordinated 8 devs, sprints, deliverables, risk management",
      "Requirements gathering, functional & technical specs, product roadmap",
      "Mobile app development in React Native / Expo and associated landing page",
      "Delivered a functional beta available on the Android Play Store",
      "Project representation at external events",
    ],
    tags: ["React Native", "Expo", "Agile SCRUM", "Project Lead", "TypeScript"],
    type: "project",
  },
  {
    id: "departement-reunion",
    company: "Département de La Réunion",
    role: "Web Developer",
    period: "2023",
    location: "La Réunion",
    description:
      "Internship — full redesign of an internal business application.",
    highlights: [
      "User needs gathering and full application redesign",
      "Proposed and modernized the technology stack",
      "Iterative adaptation based on user feedback",
    ],
    tags: ["Web", "UX", "Redesign", "Agile"],
    type: "internship",
  },
  {
    id: "federation-tourisme",
    company: "Fédération Réunionnaise de Tourisme",
    role: "Web Developer",
    period: "2021",
    location: "La Réunion",
    description:
      "Internship — development of a purchase order generation tool.",
    highlights: [
      "Automated a manual purchase order generation process",
      "Web development JS / phpMyAdmin: input form, PDF generation, data management",
      "Delivered a turnkey solution used daily by the team",
    ],
    tags: ["JavaScript", "phpMyAdmin", "PDF", "Data management"],
    type: "internship",
  },
];