export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  year: string;
  href?: string;
  github?: string;
  featured?: boolean;
  status: "live" | "wip" | "archived";
};

export const projects: Project[] = [
  {
    id: "dishfinder",
    title: "DishFinder",
    description:
      "A dish finder app — browse & filter 500+ restaurants, add your own venue and menu as a pro, with an AI recommendation agent incoming.",
    longDescription:
      "Started as a tiramisu locator, evolved into a full restaurant & dish discovery platform. Professionals get a dashboard to list their restaurant and manage their menu. Currently integrating an AI agent via n8n for mood-based meal suggestions and chatbot recommendations.",
    tags: ["Next.js", "Prisma", "Vercel", "GitHub OAuth", "shadcn/ui", "Magic UI", "n8n"],
    year: "2026",
    href: undefined,
    github: "https://github.com/TinosS974/DishFinder",
    featured: true,
    status: "wip",
  },
  {
    id: "funny-song-checker",
    title: "FunnySongChecker",
    description:
      "A Spotify stats app — explore your top artists and most-played tracks with a clean interface.",
    longDescription:
      "Connects to the Spotify API to surface your listening habits: top artists, top tracks, and more. Built with Vite + React on the front, Node/Express on the back.",
    tags: ["React", "Vite", "Node.js", "Express", "Spotify API", "Tailwind", "DaisyUI"],
    year: "2025",
    href: "https://funnysongchecker-1.onrender.com/",
    github: "https://github.com/TinosS974/FunnySongChecker",
    featured: true,
    status: "live",
  },
];