import logoWenaklabs from "../assets/logos/Wenaklabs.png";
import logoChadhub from "../assets/logos/CHADHUBDIGI.jpg";
import { useLanguage } from "../i18n";

export default function Experience() {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const experiences = isFr
    ? [
        {
          title: "Développeur Full-Stack",
          type: "CDI",
          year: "01/2022 – 08/2023",
          company: "Chadhubdigit",
          logo: logoChadhub,
          description:
            "Plateforme de gestion d’événements : planification, participants et réservations.",
          tasks: [
            "Conception et documentation d’API REST",
            "Développement des couches Repository, Service et Controller",
            "Tests unitaires et d’intégration",
            "Sécurisation avec Spring Security et Keycloak",
            "Correction des anomalies",
            "Tests front-end avec Cypress",
          ],
          stack: [
            "Java",
            "Spring Boot",
            "React.js",
            "MongoDB",
            "Keycloak",
            "OAuth2",
            "JWT",
            "Docker",
            "GitLab CI/CD",
          ],
          architecture: "Microservices",
        },
        {
          title: "Développeur Full-Stack",
          type: "Stage",
          year: "04/2021 – 12/2021",
          company: "WenakLabs",
          logo: logoWenaklabs,
          description:
            "Projet Mizania : plateforme de budget citoyen avec forum et suivi financier en temps réel.",
          tasks: [
            "Conception de fonctionnalit\u00e9s pour le suivi des budgets citoyens",
            "D\u00e9veloppement des fonctionnalit\u00e9s du forum de discussion",
            "Cr\u00e9ation de composants Vue.js r\u00e9actifs pour le forum et le suivi financier",
            "\u00c9criture de tests unitaires selon une approche TDD",
            "Am\u00e9lioration de l'interface et du parcours utilisateur",
          ],
          stack: [
            "Java",
            "Spring Boot",
            "Vue.js",
            "React.js",
            "MySQL",
            "Docker",
            "Git",
          ],
          architecture: "MVC",
        },
      ]
    : [
        {
          title: "Full-Stack Developer",
          type: "Permanent contract",
          year: "01/2022 – 08/2023",
          company: "Chadhubdigit",
          logo: logoChadhub,
          description:
            "Event management platform: scheduling, participants and booking tracking.",
          tasks: [
            "Designed and documented REST APIs",
            "Developed Repository, Service and Controller layers",
            "Wrote unit and integration tests",
            "Secured access with Spring Security and Keycloak",
            "Fixed staging and production issues",
            "Performed front-end tests with Cypress",
          ],
          stack: [
            "Java",
            "Spring Boot",
            "React.js",
            "MongoDB",
            "Keycloak",
            "OAuth2",
            "JWT",
            "Docker",
            "GitLab CI/CD",
          ],
          architecture: "Microservices",
        },
        {
          title: "Full-Stack Developer",
          type: "Internship",
          year: "04/2021 – 12/2021",
          company: "WenakLabs",
          logo: logoWenaklabs,
          description:
            "Mizania project: citizen-budget platform with discussion forum and real-time financial tracking.",
          tasks: [
            "Designed features for citizen budget tracking",
            "Developed discussion forum features",
            "Built reactive Vue.js components for the forum and financial tracking",
            "Wrote unit tests using a TDD approach",
            "Improved the interface and user journey",
          ],
          stack: [
            "Java",
            "Spring Boot",
            "Vue.js",
            "React.js",
            "MySQL",
            "Docker",
            "Git",
          ],
          architecture: "MVC",
        },
      ];

  const bredExperiences = isFr
    ? [
        {
          title: "Developpeur Full-Stack",
          type: "Stage de fin d'etudes",
          year: "07/2026 - 12/2026",
          company: "BRED Banque Populaire",
          logo: "",
          description:
            "Stage au sein du service Financements Retail, sur les projets de la feuille de route Financements.",
          tasks: [
            "Developpement de composants Java et Angular",
            "Conception de micro-services et de requetes SQL",
            "Developpement front-end Angular et back-end Java",
            "Ecriture de tests unitaires",
            "Participation aux ateliers de cadrage avec les equipes metier",
            "Participation aux rituels agiles de l'equipe",
          ],
          stack: [
            "Java",
            "Angular",
            "SQL",
            "Microservices",
            "Tests unitaires",
            "Agile",
          ],
          architecture: "Microservices",
        },
      ]
    : [
        {
          title: "Full-Stack Developer",
          type: "End-of-studies internship",
          year: "07/2026 - 12/2026",
          company: "BRED Banque Populaire",
          logo: "",
          description:
            "Internship within the Retail Financing team, contributing to the Financing roadmap projects.",
          tasks: [
            "Developed Java and Angular components",
            "Designed microservices and SQL queries",
            "Developed Angular front-end and Java back-end components",
            "Wrote unit tests",
            "Participated in scoping workshops with business teams",
            "Participated in the team's agile ceremonies",
          ],
          stack: [
            "Java",
            "Angular",
            "SQL",
            "Microservices",
            "Unit testing",
            "Agile",
          ],
          architecture: "Microservices",
        },
      ];

  return (
    <section
      id="experience"
      className="mt-20 mb-20 rounded-3xl border border-sky-100 bg-gradient-to-b from-sky-50 via-white to-sky-50 px-5 py-12 shadow-sm sm:px-8 sm:py-16"
    >
      <h2 className="text-center text-3xl font-bold text-sky-600">
        {isFr ? "Expériences professionnelles" : "Professional experience"}
      </h2>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-7">
        {[...bredExperiences, ...experiences].map((exp, index) => (
          <div
            key={`${exp.company}-${exp.year}`}
            className={`relative flex flex-col gap-5 overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${index === 0 ? "border-sky-200 shadow-sky-100/70 lg:col-span-2" : "border-slate-200/80 hover:border-sky-200"}`}
          >
            <div className="mb-2 flex min-h-16 justify-center">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="h-14 max-w-40 object-contain"
                />
              ) : (
                <span className="flex min-h-14 items-center text-xl font-bold tracking-tight text-[#e30613] sm:text-2xl">
                  {exp.company}
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                {exp.title}
              </h3>
              <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800">
                {exp.type}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500">
              {exp.company} · {exp.year}
            </p>
            <p className="text-sm leading-6 text-slate-600">
              {exp.description}
            </p>
            <ul className="space-y-2.5 text-sm leading-6 text-slate-700">
              {exp.tasks.map((task) => (
                <li key={task} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                  />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500">
              <strong>{isFr ? "Architecture" : "Architecture"}:</strong>{" "}
              {exp.architecture}
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
