import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<null | "ok" | "error">(null);
  const [showPopup, setShowPopup] = useState(false);

  const socials = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      href: "mailto:mahamat.abbakabir@outlook.fr",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/mahamat-abbakabir-791a3b246/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/benarabi07",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setFeedback(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setIsSending(false);
      setFeedback("ok");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setIsSending(false);
      setFeedback("error");
    }
  };

  return (
    <>
      <section
        id="contact"
        className="mt-20 mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-b from-sky-50 via-white to-sky-50 shadow-md"
      >
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-sky-100/80 via-sky-50 to-transparent">
          <div className="absolute inset-x-0 bottom-6 flex justify-center gap-4 opacity-70">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-24 w-10 bg-white shadow-lg shadow-sky-100 rounded-sm"
              />
            ))}
          </div>
        </div>

        <div className="relative px-6 py-10 md:px-12 md:py-12">
          <p className="mt-2 text-center text-3xl font-medium text-sky-500 uppercase tracking-wide">
            Restons en contact
          </p>
          <div className="mt-8 flex justify-center gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-sky-500 text-xl shadow-lg shadow-sky-200 hover:-translate-y-1 hover:shadow-xl hover:text-sky-600 transition"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="relative mt-12 grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Discutons ensemble</h3>
              <p className="text-sm text-gray-600">
                Vous pouvez m&apos;écrire pour un stage ou pour un projet freelance.
                Je vous répondrai dès que possible.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative space-y-4 bg-white/90 backdrop-blur-sm border border-sky-100 shadow-lg shadow-sky-100 rounded-2xl p-5"
            >
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nom complet
                </label>
                <input
                  name="user_name"
                  className="w-full rounded-md border border-sky-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Ton nom complet"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Adresse mail
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full rounded-md border border-sky-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="ton.email@example.com"
                  required
                />
              </div>

              {/* <div>
                <label className="block text-sm font-medium mb-1">
                  Type de message
                </label>
                <select
                  name="message_type"
                  className="w-full rounded-md border border-sky-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <option>Stage</option>
                  <option>Projet freelance</option>
                  <option>Autre</option>
                </select>
              </div> */}

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-sky-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Bonjour, je vous contacte pour..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="mt-2 w-full rounded-md bg-sky-500 py-2 text-sm font-semibold text-white hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? "Envoi en cours..." : "Envoyer le message"}
              </button>

              {feedback === "error" && (
                <p className="mt-2 text-xs text-red-600">
                  ⚠️ Une erreur s&apos;est produite, réessaie plus tard.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className="bg-black/40 backdrop-blur-sm absolute inset-0" />

          <div
            className="
              relative bg-white rounded-xl shadow-2xl px-8 py-6 
              flex flex-col items-center gap-3
            "
            style={{ animation: "popup 0.35s ease-out" }}
          >
            <div className="text-green-600 text-4xl">✔</div>
            <p className="text-gray-800 font-semibold text-lg text-center">
              Message envoyé !
            </p>
            <p className="text-gray-500 text-sm">
              Merci pour votre message.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
