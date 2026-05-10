import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Academic from '@/components/sections/Academic';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import EngineeringLog from '@/components/sections/EngineeringLog';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Academic />
      <Skills />
      <EngineeringLog />
      <Contact />
    </main>
  );
}
