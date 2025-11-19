export default function Contact() {
  return (
    <section id="contact" className="mt-20 mb-24 bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-gray-600 mt-2">
        Tu veux travailler avec moi ? Je suis disponible pour un stage en développement full-stack.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-10">

        {/* Infos de contact */}
        <div>
          <h4 className="font-semibold">Mail</h4>
          <p className="text-sm text-gray-600 mt-1">ton.email@example.com</p>

          <h4 className="font-semibold mt-5">LinkedIn</h4>
          <p className="text-sm text-gray-600 mt-1">linkedin.com/in/ton-profil</p>

          <h4 className="font-semibold mt-5">GitHub</h4>
          <p className="text-sm text-gray-600 mt-1">github.com/ton-utilisateur</p>
        </div>

        {/* Formulaire */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulaire simulé — à remplacer par une vraie intégration (Netlify, Formspree, etc.)");
          }}
        >
          <div>
            <label className="block text-sm font-medium">Nom</label>
            <input
              className="mt-1 block w-full rounded-md border px-3 py-2"
              placeholder="Ton nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              className="mt-1 block w-full rounded-md border px-3 py-2"
              placeholder="ton.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              className="mt-1 block w-full rounded-md border px-3 py-2"
              rows={4}
              placeholder="Bonjour, je vous contacte pour..."
            />
          </div>

          <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
