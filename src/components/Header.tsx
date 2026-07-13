import { useState, type MouseEvent } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "../i18n";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isFr = language === "fr";
  const links = [["#hero", isFr ? "Accueil" : "Home"], ["#apropos", isFr ? "À propos" : "About"], ["#projects", isFr ? "Projets" : "Projects"], ["#competences", isFr ? "Compétences" : "Skills"], ["#contact", "Contact"]];
  const scroll = (e: MouseEvent<HTMLAnchorElement>, target: string) => { e.preventDefault(); const el = document.querySelector(target); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }); setIsOpen(false); };
  const selector = <div className="flex rounded-md border border-gray-200 overflow-hidden text-xs font-semibold" aria-label="Language selector">{(["fr", "en"] as const).map(item => <button key={item} type="button" onClick={() => setLanguage(item)} className={`px-2.5 py-1.5 ${language === item ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>{item.toUpperCase()}</button>)}</div>;
  return <header className="bg-white shadow-sm sticky top-0 z-50"><div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between"><div className="flex items-center gap-3"><div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 flex items-center justify-center text-white font-bold">MA</div><h1 className="text-lg font-semibold">Mahamat ABBAKABIR</h1></div><nav className="hidden md:flex gap-6 text-sm">{links.map(([href, label]) => <a key={href} href={href} onClick={e => scroll(e, href)} className="text-blue-600">{label}</a>)}</nav><div className="hidden md:block">{selector}</div><button type="button" className="md:hidden p-2 rounded-md border border-gray-300" onClick={() => setIsOpen(!isOpen)} aria-label={isFr ? "Ouvrir le menu" : "Open menu"}>{isOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}</button></div>{isOpen && <div className="md:hidden bg-white border-t"><nav className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">{links.map(([href, label]) => <a key={href} href={href} onClick={e => scroll(e, href)} className="text-blue-600">{label}</a>)}{selector}</nav></div>}</header>;
}
