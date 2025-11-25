import logoRouen from "../assets/logos/rouen.png";
import logoEnastic from "../assets/logos/enastic.png";
import logoBac from "../assets/logos/ibnou.png";

export default function Education() {
  const formations = [
    {
      id: 1,
      title: "Master Génie de l'informatique logicielle",
      year: "2023 – 2025",
      school: "Université de Rouen Normandie",
      logo: logoRouen,
      link: "https://formation.univ-rouen.fr/fr/catalogue-de-l-offre-de-formation/master-lmd-XB/master-informatique-L56FBPB3/master-informatique-genie-de-l-informatique-logicielle-L56FBPLQ.html"
    },
    {
      id: 2,
      title: "Licence Génie Logiciel",
      year: "2019 – 2023",
      school: "ENASTIC (École Nationale Supérieure des TIC)",
      logo: logoEnastic,
      link: "https://www.enastic.td/"
    },
  ];

  return (
    <section id="education" className="mt-20 mb-20 px-6 py-16 rounded-3xl shadow-md bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <h2 className="text-3xl font-bold text-center text-sky-600">Parcours Académique</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
        {formations.map((f) => (
          <div
            key={f.id}
            className="bg-white p-6  rounded-xl shadow-md  hover:shadow-lg transition"
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
{/* 
            <div className="mt-5 flex justify-center">
              <a
                href={f.link}
                target="_blank"
                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
              >
                Voir les détails
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
