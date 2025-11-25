import blob from "../assets/blob.svg";
import wave from "../assets/wave.svg";

export default function About() {
    return (
        <section id="apropos" className="relative mt-20 py-20 px-6">
{/* 
            <img
                src={wave}
                alt="background wave"
                className="absolute top-0 left-0 h-auto w-full pointer-events-none"
            /> */}

            <div className="relative z-10 bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl px-10 py-12 max-w-5xl mx-auto border border-sky-100">

                <h2 className="text-3xl font-bold text-center text-sky-600">
                    À propos de moi
                </h2>

                <div className="mt-8 space-y-4 text-gray-700 text-base leading-relaxed">

                    <div className="mt-8 max-w-4xl mx-auto space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                        <p>
                            Je suis <span className="font-semibold text-sky-600">Mahamat Abbakabir</span>, un
                            développeur Full-Stack passionné par les technologies modernes et leur impact
                            positif dans la société. J&apos;aime concevoir des solutions numériques qui
                            apportent une réelle valeur, notamment dans les domaines de l&apos;éducation, de
                            la gestion des informations et de l&apos;amélioration des services numériques.
                        </p>

                        <p>
                            Mon parcours m&apos;a permis d&apos;acquérir de solides compétences en{" "}
                            <strong>développement web</strong>, <strong>backend</strong>,{" "}
                            <strong>architecture logicielle</strong> et <strong>DevOps</strong>, en
                            travaillant avec des technologies comme <strong>Spring Boot</strong>,{" "}
                            <strong>.NET</strong>, <strong>Angular</strong>, <strong>React</strong>,{" "}
                            <strong>Docker</strong> et <strong>GitLab CI/CD</strong>.
                        </p>

                        <p>
                            Je crois profondément en l&apos;innovation accessible : construire des outils
                            simples, fiables et performants, qui facilitent la vie, améliorent l&apos;accès
                            à l&apos;information et soutiennent la prise de décision. Mon objectif est de
                            continuer à développer des solutions utiles, bien pensées et orientées
                            utilisateur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
