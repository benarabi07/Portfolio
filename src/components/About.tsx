export default function About() {
    return (
        <section id="apropos" className="relative mt-20 py-20 px-6">

            <div className="relative z-10 bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl px-10 py-12 max-w-5xl mx-auto border border-sky-100">

                <h2 className="text-3xl font-bold text-center text-sky-600">
                    À propos de moi
                </h2>

                {/* --- Layout image gauche / texte droite --- */}
                <div className="mt-12 flex flex-col md:flex-row items-center gap-10">

                    {/* IMAGE */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/profile.png"
                            alt="Photo"
                            className="w-full h-full object-cover rounded-3xl shadow-lg"
                        />
                    </div>

                    {/* TEXTE */}
                    <div className="w-full md:w-2/3 space-y-4 text-gray-700 leading-relaxed">

                        <p>
                            Je suis <span className="font-semibold text-sky-600">Mahamat Abbakabir</span>, un
                            développeur Full-Stack passionné par les technologies modernes et leur impact
                            positif dans la société. J'aime concevoir des solutions numériques qui apportent
                            une réelle valeur, notamment dans l'éducation, la gestion des informations et
                            l'amélioration des services numériques.
                        </p>

                        <p>
                            Mon parcours m'a permis d'acquérir de solides compétences en{" "}
                            <strong>développement web</strong>, <strong>backend</strong>,{" "}
                            <strong>architecture logicielle</strong> et <strong>DevOps</strong>, en
                            travaillant avec <strong>Spring Boot</strong>, <strong>.NET</strong>,{" "}
                            <strong>Angular</strong>, <strong>React</strong>, <strong>Docker</strong> et{" "}
                            <strong>GitLab CI/CD</strong>.
                        </p>

                        <p>
                            Je crois profondément en l'innovation accessible : construire des outils simples,
                            fiables et performants qui facilitent la vie, améliorent l'accès à l'information
                            et soutiennent la prise de décision.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
