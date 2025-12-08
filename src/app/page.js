import About from "../components/About.jsx";
import Navbar from "../components/Navbar.jsx";
import Project from "../components/Project.jsx";



export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <Navbar />
        </header>

        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <About />
          </section>

          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected Projects">
            <Project />
          </section>
        </main>
      </div>
    </div>
  );
}
