export default function Hero() {
  return (
    <section
      id="hero"
      className="py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      {/* Texte principal */}
      <div>
        <h1 className="text-4xl font-extrabold leading-tight">
          Bonjour, je suis{" "}
          <span className="text-indigo-600">
            Mahamat
          </span>
        </h1>

        <p className="mt-4 text-gray-600">
          Développeur Full-Stack passionné par la création
          d'applications web performantes, modernes et bien
          structurées. Je travaille avec React, Spring Boot,
          .NET et Docker.
        </p>

        {/* Boutons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-5 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            Me contacter
          </a>
        </div>

      </div>

      
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="h-64 w-full bg-gradient-to-r from-indigo-100 to-pink-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-gray-500">Projet en focus</p>
            <p className="mt-2 font-semibold">
              MonPion — Tic-Tac-Toe
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Jeu développé en .NET MVC — logique, tests et déploiement.
            </p>

            <a
              href="#projects"
              className="text-sm underline mt-4 inline-block"
            >
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
