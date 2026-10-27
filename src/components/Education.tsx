import logoRouen from "../assets/logos/rouen.png";
import logoEnastic from "../assets/logos/enastic.png";
import { useLanguage } from "../i18n";
export default function Education() {
  const { language } = useLanguage();
  const isFr = language === "fr";
  const formations = [
    {
      title: isFr
        ? "Master Génie de l’informatique logicielle"
        : "Master’s degree in Software Engineering",
      year: "2023 – 2025",
      school: "University of Rouen Normandy",
      logo: logoRouen,
    },
    {
      title: isFr
        ? "Licence Génie Logiciel"
        : "Bachelor’s degree in Software Engineering",
      year: "2019 – 2023",
      school: "ENASTIC (National School of ICT)",
      logo: logoEnastic,
    },
  ];
  return (
    <section
      id="education"
      className="mt-20 mb-20 px-6 py-16 rounded-3xl shadow-md bg-gradient-to-b from-sky-50 via-white to-sky-50"
    >
      <h2 className="text-3xl font-bold text-center text-sky-600">
        {isFr ? "Parcours académique" : "Education"}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {formations.map((f) => (
          <div
            key={f.title}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
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
              <strong>{isFr ? "Année" : "Year"}:</strong> {f.year}
            </p>
            <p className="text-center text-sm mt-1">
              <strong>{isFr ? "Établissement" : "Institution"}:</strong>{" "}
              {f.school}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
