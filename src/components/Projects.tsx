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
  SiGitlab,
  SiClevercloud,
  SiKeycloak,
  SiSwagger,
  SiLaravel,
  SiBootstrap,
  SiMongodb
} from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import ollcassistImg from "../assets/projects/ollcassist.png";
import gamingImg from "../assets/projects/morpion.png";
import admanagerImg from "../assets/projects/admanager.png";
import serviceRestImg from "../assets/projects/xmlprojet.png";
import terminologioImg from "../assets/projects/terminologio.png";
import wenaklabsImg from "../assets/projects/mizania.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: ollcassistImg,
      title: "OllcAssist - Chatbot d’assistance",
      desc: "Développement d’un chatbot d’assistance pour la plateforme Ollca et d’un studio de configuration permettant d’adapter son comportement et ses réponses.",
      techIcons: [SiSpringboot, SiAngular, SiDocker, SiKeycloak],
      ctaLabel: "Voir sur GitHub",
    },

    {
      id: 2,
      image: gamingImg,
      title: "GamingPlatform - Morpion en ligne",
      desc: "Réalisation d’un jeu de Morpion où chaque joueur cherche à aligner trois symboles, avec une détection automatique du gagnant",
      techIcons: [SiDotnet, SiBlazor, TbBrandCSharp],
      ctaLabel: "Voir sur GitHub",
    },

    {
      id: 3,
      image: admanagerImg,
      title: "ADManager - Gestion Active Directory",
      desc: "Développement d’une application de gestion Active Directory (Samba4/LDAP",
      techIcons: [SiSymfony, SiAngular, SiSwagger],
      ctaLabel: "Voir sur GitHub",
    },

    {
      id: 4,
      image: serviceRestImg,
      title: "Service REST - XML & Cloud",
      desc: `Développement d'un service REST permettant la gestion des documents XML et son déploiement dans le cloud.`,
      techIcons: [SiSpringboot, BsFiletypeXml, SiClevercloud, SiMongodb],
      ctaLabel: "Voir sur GitHub",
    },

    {
      id: 5,
      image: terminologioImg,
      title: "Terminologio - Plateforme illustrée",
      desc: "Plateforme interactive pour cartographier des concepts terminologiques.",
      techIcons: [SiJavascript, SiHtml5, SiPhp, SiMysql],
      ctaLabel: "Voir sur GitHub",
    },

    {
      id: 6,
      image: wenaklabsImg,
      title: "Stage - Développeur Full-Stack",
      desc: "Plateforme citoyenne (MVC). GitLab CI/CD, bonnes pratiques et qualité logicielle.",
      techIcons: [SiLaravel, SiBootstrap, SiMysql],
      ctaLabel: "Voir sur GitHub",
    },
  ];


  return (
    <section
      id="projects"
      className="mt-32 mb-20 px-8 py-16 rounded-3xl shadow-md bg-gradient-to-b from-sky-50 via-white to-sky-50"
    >
      <h2 className="text-3xl font-bold text-center text-sky-600">
        Mes projets
      </h2>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Sélection de projets académiques, personnels et professionnels sur
        lesquels j&apos;ai travaillé.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-3 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col overflow-hidden"
          >
            <div className="bg-gray-100 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-auto max-h-64 object-contain"
              />
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-2xl text-sky-600">
                {p.techIcons.map((Icon, idx) => (
                  <span
                    key={idx}
                    className="flex items-center justify-center bg-sky-50 border border-sky-100 rounded-md w-9 h-9"
                  >
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
