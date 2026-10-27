import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import { LanguageProvider } from "./i18n";

function App() {
  return (
    <LanguageProvider>
      <div className="portfolio-shell min-h-screen text-slate-800">
        <Header />
        <main className="max-w-5xl mx-auto px-4">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
