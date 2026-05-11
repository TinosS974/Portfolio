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
  images?: string[];
  slideLabels?: string[];
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
    images: [
      "/projects/DishFinder/HomePage.webp",
      "/projects/DishFinder/SearchResults.webp",
      "/projects/DishFinder/filteredPanandResults.webp",
      "/projects/DishFinder/chatbot.webp",
      "/projects/DishFinder/chatbotResults.webp",
      "/projects/DishFinder/dashboardHomepage.webp",
      "/projects/DishFinder/updateItemExample.webp",

    ],
    slideLabels: ['Home page', 'Search results', 'Filtered pan and results', 'Chatbot', 'Chatbot results', 'Dashboard home', 'Update item form'],
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
    images: [
      "/projects/FunnySongChecker/login_page.webp",
      "/projects/FunnySongChecker/home_page.webp",
      "/projects/FunnySongChecker/recently_played.webp",
      "/projects/FunnySongChecker/searchbar.webp",
      "/projects/FunnySongChecker/searchResults.webp",
    ],
    slideLabels: ['Login', 'Home page with period filter', 'Recently played', 'Search bar', 'Search results'],
  },
];