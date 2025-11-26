import { useState } from "react";
import profilePic from "../assets/profile.png";

export default function Hero() {
  const [showCV, setShowCV] = useState(false);

  return (
    <>
      {!showCV && (
        <section
          id="hero"
          className="pt-28 pb-22 md:pt-30 md:pb-26 grid md:grid-cols-2 gap-14 items-center"
        >
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">
              Bonjour <br /> je suis{" "}
              <span className="text-blue-600">Mahamat</span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-lg">
              Étudiant en <strong>Master Génie Logiciel</strong> / Développeur
              Full-Stack. <br />
              Actuellement à la recherche d’une
              <strong> opportunité de stage</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setShowCV(true)}
                className="px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
              >
                Voir mon CV
              </button>

              <a
                href="#contact"
                className="px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
              >
                Me contacter
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-full border-4 border-gray-200 shadow-xl p-1">
              <img
                src={profilePic}
                alt="Mahamat"
                className="w-96 h-96 object-cover rounded-full"
              />
            </div>
          </div>
        </section>
      )}
      {showCV && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="p-4 shadow-md bg-white flex justify-between items-center">
            <button
              onClick={() => setShowCV(false)}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              ← Retour au portfolio
            </button>

            <a
              href="/cv.pdf"
              download
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Télécharger
            </a>
          </div>

          <div className="flex-1 overflow-auto p-4">
            <embed
              src="/cv.pdf"
              type="application/pdf"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
