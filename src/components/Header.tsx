import { useState, type MouseEvent } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "../i18n";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isFr = language === "fr";
  const links = [
    ["#hero", isFr ? "Accueil" : "Home"],
    ["#apropos", isFr ? "À propos" : "About"],
    ["#projects", isFr ? "Projets" : "Projects"],
    ["#competences", isFr ? "Compétences" : "Skills"],
    ["#contact", "Contact"],
  ];
  const scroll = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    setIsOpen(false);
  };
  const selector = (
    <div
      className="flex rounded-lg border border-slate-200 bg-white/70 p-0.5 overflow-hidden text-xs font-semibold shadow-sm"
      aria-label="Language selector"
    >
      {(["fr", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`rounded-md px-2.5 py-1.5 transition-all ${language === item ? "bg-sky-600 text-white shadow-sm" : "text-slate-500 hover:bg-slate-100"}`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-700 shadow-lg shadow-sky-200 flex items-center justify-center text-white font-bold">
            MA
          </div>
          <h1 className="text-lg font-bold tracking-tight text-slate-800">
            Mahamat ABBAKABIR
          </h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scroll(e, href)}
              className="text-slate-600 transition-colors hover:text-sky-600"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">{selector}</div>
        <button
          type="button"
          className="md:hidden p-2 rounded-lg border border-slate-200 bg-white/80"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isFr ? "Ouvrir le menu" : "Open menu"}
        >
          {isOpen ? (
            <HiX className="h-5 w-5" />
          ) : (
            <HiMenu className="h-5 w-5" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100">
          <nav className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={(e) => scroll(e, href)}
                className="text-slate-700 hover:text-sky-600"
              >
                {label}
              </a>
            ))}
            {selector}
          </nav>
        </div>
      )}
    </header>
  );
}
