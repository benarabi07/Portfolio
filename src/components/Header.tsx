import { useState } from "react";
import type { MouseEvent } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Accueil" },
    { href: "#apropos", label: "A propos" },
    { href: "#projects", label: "Projets" },
    { href: "#competences", label: "Compétences" },
    { href: "#contact", label: "Contact" },
  ];

  const handleSmoothScroll = (
    e: MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });

    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-300 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <h1 className="text-lg font-semibold">Mahamat ABBAKABIR</h1>
            {/* <p className="text-sm text-gray-500">Développeur Full-Stack</p> */}
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-blue-600 relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all" />
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
