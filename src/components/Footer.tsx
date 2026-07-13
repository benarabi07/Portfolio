import { useLanguage } from "../i18n";
export default function Footer() { const { language } = useLanguage(); return <footer className="mt-20 py-6 border-t text-center text-gray-600"><p className="text-sm">© {new Date().getFullYear()} Mahamat Abbakabir. {language === "fr" ? "Tous droits réservés." : "All rights reserved."}</p></footer>; }
