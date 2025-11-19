export default function Footer() {
  return (
    <footer className="mt-20 py-6 border-t text-center text-gray-600">
      <p className="text-sm">
        © {new Date().getFullYear()} Ton Nom — Développeur Full-Stack.
        <br />
        Portfolio réalisé avec React, Vite & TailwindCSS.
      </p>

      <div className="flex justify-center gap-6 mt-4 text-sm">
        <a
          href="https://github.com/ton-utilisateur"
          target="_blank"
          className="hover:text-indigo-600"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/ton-profil"
          target="_blank"
          className="hover:text-indigo-600"
        >
          LinkedIn
        </a>

        <a
          href="mailto:ton.email@example.com"
          className="hover:text-indigo-600"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
