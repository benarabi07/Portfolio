import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useLanguage } from "../i18n";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<"ok" | "error" | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const { language } = useLanguage();
  const isFr = language === "fr";
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);
    setFeedback(null);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setFeedback("ok");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setFeedback("error");
    } finally {
      setIsSending(false);
    }
  };
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
  return (
    <>
      <section
        id="contact"
        className="mt-20 mb-24 relative overflow-hidden rounded-3xl bg-gradient-to-b from-sky-50 via-white to-sky-50 shadow-md"
      >
        <div className="relative px-6 py-10 md:px-12 md:py-12">
          <p className="mt-2 text-center text-3xl font-medium text-sky-500 uppercase tracking-wide">
            {isFr ? "Restons en contact" : "Let’s stay in touch"}
          </p>
          <div className="mt-8 flex justify-center gap-5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-sky-500 text-xl shadow-lg shadow-sky-200 hover:-translate-y-1 transition"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="relative mt-12 grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                {isFr ? "Discutons ensemble" : "Let’s talk"}
              </h3>
              <p className="text-sm text-gray-600">
                {isFr
                  ? "Vous pouvez m’écrire pour un stage ou un projet freelance. Je vous répondrai dès que possible."
                  : "Feel free to contact me about an internship or freelance project. I will reply as soon as possible."}
              </p>
            </div>
            <form
              ref={formRef}
              onSubmit={submit}
              className="relative space-y-4 bg-white/90 backdrop-blur-sm border border-sky-100 shadow-lg shadow-sky-100 rounded-2xl p-5"
            >
              <label className="block text-sm font-medium">
                {isFr ? "Nom complet" : "Full name"}
                <input
                  name="user_name"
                  placeholder={isFr ? "Votre nom complet" : "Your full name"}
                  required
                  className="mt-1 w-full rounded-md border border-sky-300 px-3 py-2 text-sm"
                />
              </label>
              <label className="block text-sm font-medium">
                {isFr ? "Adresse e-mail" : "Email address"}
                <input
                  type="email"
                  name="user_email"
                  placeholder="name@example.com"
                  required
                  className="mt-1 w-full rounded-md border border-sky-300 px-3 py-2 text-sm"
                />
              </label>
              <label className="block text-sm font-medium">
                Message
                <textarea
                  name="message"
                  rows={4}
                  placeholder={
                    isFr
                      ? "Bonjour, je vous contacte pour…"
                      : "Hello, I am contacting you about…"
                  }
                  required
                  className="mt-1 w-full rounded-md border border-sky-300 px-3 py-2 text-sm"
                />
              </label>
              <button
                type="submit"
                disabled={isSending}
                className="mt-2 w-full rounded-md bg-sky-500 py-2 text-sm font-semibold text-white hover:bg-sky-600 disabled:opacity-60"
              >
                {isSending
                  ? isFr
                    ? "Envoi en cours…"
                    : "Sending…"
                  : isFr
                    ? "Envoyer le message"
                    : "Send message"}
              </button>
              {feedback === "error" && (
                <p className="text-xs text-red-600">
                  {isFr
                    ? "Une erreur s’est produite. Réessayez plus tard."
                    : "Something went wrong. Please try again later."}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className="bg-black/40 backdrop-blur-sm absolute inset-0" />
          <div className="relative bg-white rounded-xl shadow-2xl px-8 py-6 flex flex-col items-center gap-3">
            <div className="text-green-600 text-4xl">✓</div>
            <p className="text-gray-800 font-semibold text-lg">
              {isFr ? "Message envoyé !" : "Message sent!"}
            </p>
            <p className="text-gray-500 text-sm">
              {isFr
                ? "Merci pour votre message."
                : "Thank you for your message."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
