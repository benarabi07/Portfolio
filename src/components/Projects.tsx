export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MonPion (Tic-Tac-Toe)",
      desc: "Jeu Tic-Tac-Toe développé en .NET MVC — logique de jeu, UI et déploiement.",
      tech: ["C#", ".NET MVC", "Bootstrap"],
      github: "https://github.com/ton-utilisateur/monpion",
      demo: "#"
    },
    {
      id: 2,
      title: "API Gestion CV (XML)",
      desc: "API REST en Java / Spring Boot pour gérer et transformer des CV au format XML.",
      tech: ["Java", "Spring Boot", "REST"],
      github: "https://github.com/ton-utilisateur/api-cv-xml",
      demo: "#"
    },
    {
      id: 3,
      title: "AD Manager (Samba4)",
      desc: "Outils d'administration Active Directory avec Samba 4.",
      tech: ["Python", "Samba4", "Shell"],
      github: "https://github.com/ton-utilisateur/ad-manager",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="mt-20">
      <h2 className="text-3xl font-bold">Projets</h2>
      <p className="text-gray-600 mt-2">
        Découvrez une sélection de projets personnels, académiques et professionnels.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((p) => (
          <article
            key={p.id}
            className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>

            {/* Technologies */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full border bg-gray-50"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Liens */}
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href={p.github}
                target="_blank"
                className="underline text-indigo-600"
              >
                Code
              </a>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
