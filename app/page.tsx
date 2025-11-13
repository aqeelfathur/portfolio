import Navbar from '@/componentsHome/Navbar';
import Hero from '@/componentsHome/Hero';
import AboutSection from '@/componentsHome/AboutSection';
import ProjectSection from '@/componentsHome/ProjectSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black">
      <Navbar />
      <Hero />
      <ProjectSection />
      <AboutSection />
    </div>
  );
}