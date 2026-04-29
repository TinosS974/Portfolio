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
    degree: "Expert in Computer Science — Master's level (Bac+5)",
    period: "2020 – 2025",
    location: "Saint-André, La Réunion",
    description:
      "Low/high-level object-oriented programming, web and mobile development, software architecture. School representative at events and open days.",
  },
  {
    id: "laval",
    school: "Université Laval",
    degree: "Software Engineering & Computer Science",
    period: "2023 – 2024",
    location: "Québec, Canada",
    description:
      "SQL/NoSQL databases, web application development and security, software architecture, hosting, deployment, DevOps.",
  },
];