import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


import reactLogo from "../assets/logos/react.svg";
import angularLogo from "../assets/logos/angular.svg";
import javascriptLogo from "../assets/logos/javascript.svg";
import htmlLogo from "../assets/logos/html5.svg";
import cssLogo from "../assets/logos/css3.svg";
import tailwindlogo from "../assets/logos/tailwind.svg";
import javaLogo from "../assets/logos/java.svg";
import springLogo from "../assets/logos/spring.svg";
import symfonylogo from "../assets/logos/symfony.svg";
import dotnetLogo from "../assets/logos/dotnet.svg";
import c_sharpLogo from "../assets/logos/c_sharp.svg";
import phpLogo from "../assets/logos/php.svg";
import dockerLogo from "../assets/logos/docker.svg";
import gitlabLogo from "../assets/logos/gitlab.svg";
import postmanLogo from "../assets/logos/postman.svg";
import sonarqube from "../assets/logos/sonarqube.svg";
import figmaLogo from "../assets/logos/figma.svg";
import githubLogo from "../assets/logos/github.svg";
import mysqlLogo from "../assets/logos/mysql.svg";
import mongoDBLogo from "../assets/logos/mongodb.svg";
import postgreSqlOgo from "../assets/logos/postgresql.svg";
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", logo: reactLogo },
        { name: "Angular", logo: angularLogo },
        { name: "Tailwind CSS", logo: tailwindlogo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", logo: springLogo },
        { name: ".NET", logo: dotnetLogo },
        { name: "Symfony", logo: symfonylogo },
        { name: "Java", logo: javaLogo },
        { name: "C#", logo: c_sharpLogo },
        { name: "Php", logo: phpLogo },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", logo: dockerLogo },
        { name: "GitLab CI/CD", logo: gitlabLogo },
        { name: "Sonarqube", logo: sonarqube },
        { name: "Github", logo: githubLogo },

      ],
    },
    {
      title: "Base de données & autre",
      skills: [
        { name: "MySQL", logo: mysqlLogo },
        { name: "PostgreSQL", logo: postgreSqlOgo },
        { name: "MongoDB", logo: mongoDBLogo },
        { name: "Postman", logo: postmanLogo },
        { name: "Figma", logo: figmaLogo },        

      ],
    },
  ];

  return (
    <motion.section
      id="competences"
      className="mt-20 mb-20 px-6 py-16 rounded-3xl shadow-md bg-gradient-to-b from-sky-50 via-white to-sky-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center text-sky-600">Compétences</h2>

      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Un aperçu des technologies et outils que j&apos;utilise au quotidien.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            className="bg-white p-6 rounded-2xl shadow-lg "
            custom={idx}
            variants={categoryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-center mb-6">{cat.title}</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="p-4 rounded-xl shadow-sm flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-white"
                  whileHover={{ scale: 1.07, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 180, damping: 10 }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="h-10 w-10 object-contain"
                  />
                  <p className="mt-2 text-sm font-medium text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
