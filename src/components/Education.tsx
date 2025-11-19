export default function Education() {
  const formations = [
    {
      id: 1,
      title: "Master Génie de l'informatique logicielle",
      year: "2023 – 2025",
      school: "Université de Rouen Normandie",
      logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/d/da/Universit%C3%A9_de_Rouen_Normandie_logo_2017.svg/512px-Universit%C3%A9_de_Rouen_Normandie_logo_2017.svg.png",
      link: "https://formation.univ-rouen.fr/fr/catalogue-de-l-offre-de-formation/master-lmd-XB/master-informatique-L56FBPB3/master-informatique-genie-de-l-informatique-logicielle-L56FBPLQ.html"
    },
    {
      id: 2,
      title: "Licence Génie Logiciel",
      year: "2020 – 2023",
      school: "ENASTIC (École Nationale Supérieure des TIC)",
      logo: "https://www.enastic.td/wp-content/uploads/2021/10/LOGO-ENASTIC-H-300x300.png",
      link: "https://www.enastic.td/"
    },
  ];

  return (
    <section id="education" className="mt-20">
      <h2 className="text-3xl font-bold text-center">Parcours Académique</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {formations.map((f) => (
          <div
            key={f.id}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">
              <img
                src={f.logo}
                alt={f.school}
                className="h-20 object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold text-center">{f.title}</h3>

            <p className="text-center text-sm mt-2">
              <strong>Année :</strong> {f.year}
            </p>

            <p className="text-center text-sm mt-1">
              <strong>Établissement :</strong> {f.school}
            </p>

            <div className="mt-5 flex justify-center">
              <a
                href={f.link}
                target="_blank"
                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
              >
                Voir les détails
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
