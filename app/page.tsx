import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black">
      <Navbar />
      <Hero />
      <ProjectSection />
    </div>
  );
}