import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Certifications from "@/components/Certifications";
import Internships from "@/components/Internships";
import GitHubShowcase from "@/components/GitHubShowcase";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Resume />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Internships />
        <GitHubShowcase />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card-bg border-t border-card-border py-8 text-center text-xs sm:text-sm text-muted font-medium">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p>© 2026 SUROJU JYOTHI KRISHNA KANTH. All rights reserved.</p>
          <p className="opacity-80">
            Built with Next.js, React, Tailwind CSS and Framer Motion
          </p>
        </div>
      </footer>
    </>
  );
}
