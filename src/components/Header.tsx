export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo / Identité */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <h1 className="text-lg font-semibold">Mahamat ABBAKABIR</h1>
            <p className="text-sm text-gray-500">Développeur Full-Stack</p>
          </div>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#hero" className="hover:text-indigo-600">Accueil</a>
          <a href="#projects" className="hover:text-indigo-600">Projets</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>

        {/* Menu Mobile (plus tard) */}
        <div className="md:hidden">
          {/* Le menu burger sera ajouté plus tard si tu veux */}
        </div>
      </div>
    </header>
  );
}
