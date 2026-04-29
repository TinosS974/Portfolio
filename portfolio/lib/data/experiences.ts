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
    id: "zenith-rh",
    company: "Zenith RH",
    role: "Développeur Full Stack",
    period: "Mars – Août 2025",
    location: "Paris, France",
    description:
      "Stage de fin d'études (6 mois) — migration, refonte et optimisation d'une plateforme RH interne.",
    highlights: [
      "Migration front-end React JS → TypeScript : réduction de la codebase de 50%",
      "Refonte complète des tableaux de bord KPI : suppression de 5 tables redondantes",
      "Optimisation des performances : réduction du temps de chargement jusqu'à 3 secondes",
      "Automatisation E2E avec Playwright : migration de 150+ cas de tests manuels",
      "Onboarding et accompagnement technique des nouveaux stagiaires",
    ],
    tags: ["TypeScript", "React", "Playwright", "KPI", "E2E"],
    type: "internship",
  },
  {
    id: "phar",
    company: "PHAR",
    role: "Chef de Projet & Développeur Front-end",
    period: "2022 – 2025",
    location: "Paris, France",
    description:
      "Projet de fin d'études Epitech — 3 ans, équipe de 8 développeurs, méthode Agile SCRUM.",
    highlights: [
      "Pilotage complet : coordination d'une équipe de 8 devs, sprints, livrables, gestion des risques",
      "Recueil des besoins, spécifications fonctionnelles et techniques, roadmap produit",
      "Développement de l'app mobile en React Native / Expo et de la landing page",
      "Livraison d'une beta fonctionnelle disponible sur le Play Store Android",
      "Représentation du projet lors d'événements externes",
    ],
    tags: ["React Native", "Expo", "Agile SCRUM", "Chef de projet", "TypeScript"],
    type: "project",
  },
  {
    id: "departement-reunion",
    company: "Département de La Réunion",
    role: "Développeur Web",
    period: "2023",
    location: "La Réunion",
    description:
      "Stage — refonte complète d'une application interne métier.",
    highlights: [
      "Recueil des besoins utilisateurs et refonte complète de l'application",
      "Proposition et modernisation de la stack technologique",
      "Adaptation itérative selon les retours utilisateurs",
    ],
    tags: ["Web", "UX", "Refonte", "Agile"],
    type: "internship",
  },
];