import { useEffect, useRef, useState } from "react";

import reactLogo from "../assets/logos/react.svg";
import angularLogo from "../assets/logos/angular.svg";
import javascriptLogo from "../assets/logos/javascript.svg";
import htmlLogo from "../assets/logos/html5.svg";
import cssLogo from "../assets/logos/css3.svg";
import tailwindlogo from "../assets/logos/tailwind.svg";

import javaLogo from "../assets/logos/java.svg";
import springLogo from "../assets/logos/spring.svg";
import symfonylogo from "../assets/logos/symfony.svg";
import dotnetLogo from "../assets/logos/dotnet.svg";

import dockerLogo from "../assets/logos/docker.svg";
import gitlabLogo from "../assets/logos/gitlab.svg";
import postmanLogo from "../assets/logos/postman.svg";

const AUTO_PLAY_DELAY = 3000; // 3 sec

export default function TechCarousel() {
  const techs = [
    { name: "React", logo: reactLogo },
    { name: "Angular", logo: angularLogo },
    { name: "Tailwind CSS", logo: tailwindlogo },
    { name: "JavaScript", logo: javascriptLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Java", logo: javaLogo },
    { name: "Spring Boot", logo: springLogo },
    { name: "Symfony", logo: symfonylogo },
    { name: ".NET", logo: dotnetLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "GitLab CI/CD", logo: gitlabLogo },
    { name: "Postman", logo: postmanLogo },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % techs.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + techs.length) % techs.length);
  };

  const goTo = (i: number) => {
    setIndex((i + techs.length) % techs.length);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = window.setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DELAY);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Technologies principales
      </h2>

      <div
        className=" p-6 rounded-2xl shadow-md relative max-w-md mx-auto overflow-hidden"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >        
        <div
          className="flex transition-transform  "
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center py-8 px-6"
            >
              <div className="h-16 w-16 rounded-2xl bg-gray-50  flex items-center justify-center shadow-sm">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <p className="mt-4 text-base font-semibold text-center">
                {tech.name}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {index + 1} / {techs.length}
              </p>
            </div>
          ))}
        </div>

        {/* Flèche gauche */}
        {/* <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80  flex items-center justify-center shadow hover:bg-white"
        >
          ◀
        </button> */}

        {/* Flèche droite */}
        {/* <button
          type="button"
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80  flex items-center justify-center shadow hover:bg-white"
        >
          ▶
        </button> */}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {techs.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-4 bg-indigo-600" : "w-2 bg-gray-300"
              }`}
              aria-label={`Aller à la techno ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
