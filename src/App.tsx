import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";


function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App