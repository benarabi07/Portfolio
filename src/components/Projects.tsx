import {
  SiSpringboot,
  SiAngular,
  SiDocker,
  SiDotnet,
  SiPhp,
  SiMysql,
  SiBlazor,
  SiSymfony,
  SiJavascript,
  SiHtml5,
  SiClevercloud,
  SiKeycloak,
  SiSwagger,
  SiMongodb,
} from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import ollcassistImg from "../assets/projects/ollcassist.png";
import gamingImg from "../assets/projects/morpion.png";
import admanagerImg from "../assets/projects/admanager.png";
import serviceRestImg from "../assets/projects/xmlprojet.png";
import terminologioImg from "../assets/projects/terminologio.png";
import { useLanguage } from "../i18n";

export default function Projects() {
  const { language } = useLanguage();
  const isFr = language === "fr";
  const projects = [
    {
      id: 1,
      image: ollcassistImg,
      title: "OllcAssist - Chatbot d'assistance",
      desc: isFr ? "Plateforme d'achat intelligente conçue par 46 collaborateurs. Conception d'une architecture microservices, développement d'APIs REST pour la gestion des commandes et intégration Keycloak pour l'authentification." : "Smart purchasing platform designed by 46 collaborators. Microservices architecture, REST APIs for order management and Keycloak authentication integration.",
      techIcons: [SiSpringboot, SiAngular, SiDocker, SiKeycloak],
      ctaLabel: "Voir sur GitHub",
    },
    {
      id: 2,
      image: gamingImg,
      title: "GamingPlatform - Morpion en ligne",
      desc: isFr ? "Plateforme gaming avec gestion des utilisateurs, rôles et sécurité applicative. Développement de la logique métier back-end et participation aux tests fonctionnels." : "Gaming platform with user, role and application security management. Back-end business logic development and functional testing.",
      techIcons: [SiDotnet, SiBlazor, TbBrandCSharp],
      ctaLabel: "Voir sur GitHub",
    },
    {
      id: 3,
      image: admanagerImg,
      title: "ADManager - Gestion Active Directory",
      desc: isFr ? "Développement d'une application de gestion Active Directory (Samba4/LDAP)." : "Development of an Active Directory management application (Samba4/LDAP).",
      techIcons: [SiSymfony, SiAngular, SiSwagger],
      ctaLabel: "Voir sur GitHub",
    },
    {
      id: 4,
      image: serviceRestImg,
      title: "Service REST - XML & Cloud",
      desc: isFr ? "Développement d'un service REST permettant la gestion des documents XML et son déploiement dans le cloud." : "Development of a REST service for managing XML documents and deploying it to the cloud.",
      techIcons: [SiSpringboot, BsFiletypeXml, SiClevercloud, SiMongodb],
      ctaLabel: "Voir sur GitHub",
    },
    {
      id: 5,
      image: terminologioImg,
      title: "Terminologio - Plateforme illustrée",
      desc: isFr ? "Plateforme interactive pour cartographier des concepts terminologiques." : "Interactive platform for mapping terminological concepts.",
      techIcons: [SiJavascript, SiHtml5, SiPhp, SiMysql],
      ctaLabel: "Voir sur GitHub",
    },
  ];

  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3);

  return (
    <section
      id="projects"
      className="section-surface mt-20 mb-20 px-6 md:px-8 py-16 rounded-3xl bg-white/65 backdrop-blur-sm"
    >
      <h2 className="text-3xl font-bold text-center text-sky-600">
        {isFr ? "Mes projets" : "My projects"}
      </h2>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        {isFr ? "Sélection de projets académiques, personnels et professionnels sur lesquels j’ai travaillé." : "A selection of academic, personal and professional projects I have worked on."}
      </p>

      {/* Ligne 1 : 3 projets */}
      <div className="mt-12 grid gap-10 lg:grid-cols-3 md:grid-cols-2">
        {firstRow.map((p) => (
          <article
            key={p.id}
            className="group bg-white/90 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-100 transition-all duration-300 flex flex-col overflow-hidden"
          >
            <div className="bg-slate-50 flex items-center justify-center overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-auto max-h-64 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xl text-sky-600">
                {p.techIcons.map((Icon, idx) => (
                  <span key={idx} className="flex items-center justify-center bg-sky-50 border border-sky-100 rounded-lg w-9 h-9">
                    <Icon />
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Ligne 2 : 2 projets centrés */}
      <div className="mt-10 flex justify-center gap-10 flex-wrap">
        {secondRow.map((p) => (
          <article
            key={p.id}
            className="group bg-white/90 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-100 transition-all duration-300 flex flex-col overflow-hidden w-full md:w-[calc(33.333%-1.25rem)]"
          >
            <div className="bg-slate-50 flex items-center justify-center overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-auto max-h-64 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xl text-sky-600">
                {p.techIcons.map((Icon, idx) => (
                  <span key={idx} className="flex items-center justify-center bg-sky-50 border border-sky-100 rounded-lg w-9 h-9">
                    <Icon />
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
