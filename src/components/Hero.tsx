import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import profilePic from "../assets/profile.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const modalAnim: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: -40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 12,
    },
  },
};

export default function Hero() {
  const [openCV, setOpenCV] = useState(false);

  return (
    <>
      <motion.section
        id="hero"
        className="pt-28 pb-22 md:pt-30 md:pb-26 grid md:grid-cols-2 gap-14 items-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <h1 className="text-4xl font-extrabold leading-tight">
            Bonjour <br /> je suis{" "}
            <span className="text-blue-600">Mahamat</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-lg">
            Étudiant en <strong>Master Génie Logiciel</strong> / Développeur
            Full-Stack. <br />
            Actuellement à la recherche d’une <strong>opportunité de stage</strong>.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setOpenCV(true)}
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
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center justify-center">
          <div className="rounded-full border-4 border-gray-200 shadow-xl p-1 ">
            <img
              src={profilePic}
              alt="Mahamat"
              className=" w-96 h-96 object-cover rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {openCV && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            variants={modalAnim}
            initial="hidden"
            animate="visible"
            className="bg-white w-[90%] h-[90%] rounded-xl shadow-2xl overflow-hidden relative flex flex-col"
          >
            <button
              onClick={() => setOpenCV(false)}
              className="absolute top-3 right-4 text-3xl font-bold text-red-500 hover:text-red-700 transition"
            >
              ×
            </button>

            <div className="absolute top-3 left-4">
              <a
                href="/cv.pdf"
                download
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md shadow hover:bg-blue-700 transition"
              >
                Télécharger le CV
              </a>
            </div>
            <iframe src="/cv.pdf" className="w-full h-full" title="CV Mahamat"></iframe>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
