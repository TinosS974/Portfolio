export type Education = {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string;
};

export const education: Education[] = [
  {
    id: "epitech",
    school: "Epitech Réunion",
    degree: "Expert en Informatique — Bac+5",
    period: "2020 – 2025",
    location: "Saint-André, La Réunion",
    description:
      "Programmation bas/haut niveau orienté objet, développement web et mobile, architecture logicielle. Représentation de l'école lors d'événements et JPO.",
  },
  {
    id: "laval",
    school: "Université Laval",
    degree: "Génie Logiciel et Informatique",
    period: "2023 – 2024",
    location: "Québec, Canada",
    description:
      "Base de données SQL/NoSQL, développement et sécurité d'applications web, architecture logicielle, hébergement, déploiement, DevOps.",
  },
];