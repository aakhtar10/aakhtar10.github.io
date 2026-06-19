import { About } from "@/components/portfolio/About";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Skills } from "@/components/portfolio/Skills";

export default function Home() {
  return (
<div className="relative min-h-screen bg-background text-foreground">
    <ScrollProgress/>
     <Navbar/>
     <main>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
     </main>
     <Footer/>
     <BackToTop/>
    </div>
  );
}
