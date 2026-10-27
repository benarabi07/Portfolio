import { useState } from "react";
import profilePic from "../assets/profile.png";
import { useLanguage } from "../i18n";

export default function Hero() {
  const [showCV, setShowCV] = useState(false);
  const { language } = useLanguage();
  const isFr = language === "fr";
  return (
    <>
      {!showCV && (
        <section
          id="hero"
          className="pt-24 pb-16 md:pt-32 md:pb-28 grid md:grid-cols-2 gap-14 items-center"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {isFr ? "Bonjour" : "Hello"}
              <br />
              {isFr ? "je suis" : "I am"}{" "}
              <span className="bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                Mahamat
              </span>
            </h1>
            <p className="mt-6 text-slate-600 leading-relaxed max-w-lg">
              {isFr ? (
                <>
                  Étudiant en <strong>Master Génie Logiciel</strong> /
                  Développeur Full-Stack.
                  <br />
                  Actuellement à la recherche d’une{" "}
                  <strong>opportunité de stage</strong>.
                </>
              ) : (
                <>
                  Graduate student in <strong>Software Engineering</strong> /
                  Full-Stack Developer.
                  <br />
                  Currently looking for an{" "}
                  <strong>internship opportunity</strong>.
                </>
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setShowCV(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-700 text-white font-medium shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {isFr ? "Voir mon CV" : "View my résumé"}
              </button>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white/70 font-medium transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                {isFr ? "Me contacter" : "Contact me"}
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-[2rem] bg-gradient-to-br from-sky-200 to-indigo-200 p-1 shadow-2xl shadow-sky-200/60">
              <img
                src={profilePic}
                alt="Mahamat"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-[1.8rem]"
              />
            </div>
            <div className="-mt-6 relative rounded-xl border border-white/80 bg-white/85 px-6 py-3 text-center shadow-lg shadow-sky-200/60 backdrop-blur">
              <p className="font-bold tracking-tight text-slate-800">
                Mahamat Abbakabir
              </p>
              <p className="mt-0.5 text-sm text-sky-700">
                Full-Stack Developer
              </p>
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
              {isFr ? "← Retour au portfolio" : "← Back to portfolio"}
            </button>
            <a
              href="/cv.pdf"
              download
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {isFr ? "Télécharger" : "Download"}
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
