import logoWenaklabs from "../assets/logos/Wenaklabs.png";
import logoChadhub from "../assets/logos/CHADHUBDIGI.jpg";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Développeur Full-Stack",
      type: "CDI",
      year: "01/2022 – 08/2023",
      company: "Chadhubdigit",
      logo: logoChadhub,
      description: "Plateforme de gestion d'événements (planification, gestion des participants, suivi des réservations).",
      tasks: [
        "Conception et documentation d'APIs REST",
        "Développement des couches Repository, Service, Controller",
        "Rédaction de tests unitaires et d'intégration",
        "Sécurisation des accès avec Spring Security et Keycloak",
        "Corrections des anomalies recette et production",
        "Tests front-end avec Cypress",
      ],
      stack: ["Java", "Spring Boot", "React.js", "MongoDB", "Keycloak", "OAuth2", "JWT", "Docker", "GitLab CI/CD"],
      architecture: "Microservices",
    },
    {
      id: 2,
      title: "Développeur Full-Stack",
      type: "Stage",
      year: "04/2021 – 12/2021",
      company: "WenakLabs",
      logo: logoWenaklabs,
      description: "Projet Mizania – Plateforme de budget citoyen avec forum de discussion et suivi financier en temps réel.",
      tasks: [
        "Conception et développement de fonctionnalités",
        "Développement de tests unitaires (approche TDD)",
        "Développement de composants réactifs en Vue.js",
        "Amélioration de l'expérience utilisateur (UX)",
      ],
      stack: ["Java", "Spring Boot", "Vue.js", "React.js", "MySQL", "Docker", "Git"],
      architecture: "MVC",
    },
  ];

  return (
    <section id="experience" className="mt-20 mb-20 px-6 py-16 rounded-3xl shadow-md bg-gradient-to-b from-sky-50 via-white to-sky-50">
      {/* Expériences professionnelles */}
      <h2 className="text-3xl font-bold text-center text-sky-600">Expériences Professionnelles</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col gap-3">
            <div className="flex justify-center mb-2">
              <img src={exp.logo} alt={exp.company} className="h-16 object-contain" />
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <span className="text-xs font-medium bg-sky-100 text-sky-700 px-2 py-1 rounded-full">{exp.type}</span>
            </div>

            <p className="text-sm text-gray-500">{exp.company} · {exp.year}</p>
            <p className="text-sm text-gray-600 italic">{exp.description}</p>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
            </ul>

            <p className="text-xs text-gray-500"><strong>Architecture :</strong> {exp.architecture}</p>

            <div className="flex flex-wrap gap-2 mt-1">
              {exp.stack.map((tech, i) => (
                <span key={i} className="text-xs bg-sky-50 text-sky-700 border border-sky-200 rounded-full px-2 py-0.5">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}