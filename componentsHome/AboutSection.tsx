'use client';

import React, { useState, forwardRef } from 'react';
import { Code, Users, Target, Sparkles } from 'lucide-react';
import ConnectSection from './ConnectSection';
import EmailPopup from './EmailPopup';

const skills = [
  {
    category: "Technical Skills",
    icon: Code,
    items: ["Full-Stack Development (Laravel, HTML, CSS, JS)", "Data Analysis & Visualization (Python, Tableau)", "Project Management (Jira, Notion, Agile Framework)"]
  },
  {
    category: "Soft Skills",
    icon: Users,
    items: ["Team Leadership", "Sprint Planning", "Communication", "Problem-Solving"]
  }
];

const experiences = [
  {
    title: "Project Manager",
    project: "Emosense",
    description: "Leading emotion-based learning insights platform, managing sprint goals and cross-functional teams",
    icon: Target
  },
  {
    title: "Event Coordinator",
    project: "HIMSI Community Service 2025",
    description: "Successfully managed multi-division teams with over 90% participant satisfaction",
    icon: Users
  },
  {
    title: "Garuda Coordinator",
    project: "AMERTA 2025",
    description: "Guided 17 mentors and ensured smooth onboarding for 340 new students",
    icon: Sparkles
  }
];

interface AboutSectionProps {
  connectRef: React.RefObject<HTMLDivElement | null>;
}

const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(
  ({ connectRef }, ref) => {
    const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 border-2 border-purple-400/20 rounded-full"></div>
        <div className="absolute bottom-40 left-10 w-16 h-16 border-2 border-blue-400/20 transform rotate-45"></div>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              about me
            </h2>
            <div className="w-60 h-1 bg-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Opening Statement */}
          <div className="mb-16 space-y-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <p className="text-white text-lg leading-relaxed mb-4">
                Hi! I'm Aqeel, an Information Systems student and tech enthusiast passionate about project management and data-driven development. I enjoy leading teams, solving problems, and turning ideas into impactful digital products.
              </p>
              <p className="text-white text-lg leading-relaxed">
                I have experience managing agile projects, building full-stack web apps with Laravel, and visualizing insights with Tableau. My goal is to bridge the gap between business needs and technical execution.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              what i do
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-xl font-bold text-white">{skill.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="text-white flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">my journey</h3>
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8">
              <p className="text-white text-lg leading-relaxed">
                Over the past few years, I've led various student organization projects, including serving as Project Manager for <span className="text-purple-400 font-semibold">Emosense</span> and Event Coordinator for <span className="text-purple-400 font-semibold">HIMSI Community Service 2025</span>, where I successfully managed multi-division teams and achieved over 90% participant satisfaction. I also served as Garuda Coordinator in <span className="text-purple-400 font-semibold">AMERTA 2025</span>, guiding 17 mentors and ensuring smooth onboarding for 340 new students.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
                >
                  <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
                  <p className="text-purple-400 text-sm font-semibold mb-3">{exp.project}</p>
                  <p className="text-white text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">current focus</h3>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-purple-800 rounded-lg p-6">
              <p className="text-white leading-relaxed mb-4">
                Currently, I'm working on <span className="text-purple-400 font-semibold">Emosense</span>, a project focused on emotion-based learning insights, where I serve as Project Manager ensuring sprint goals are met effectively.
              </p>
              <p className="text-white leading-relaxed">
                I'm also exploring <span className="text-blue-400 font-semibold">data-driven project management</span> and how data can improve team efficiency and decision-making.
              </p>
            </div>
          </div>

          {/* Personal Touch */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <p className="text-white text-lg leading-relaxed text-center">
                Outside of tech, I enjoy learning about <span className="text-purple-400">business strategy</span>, <span className="text-blue-400">UI/UX design</span>, and exploring productivity tools. I'm passionate about continuous learning and collaborating with people who share the same drive for innovation.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <ConnectSection
            ref={connectRef}
            onEmailClick={() => setIsEmailPopupOpen(true)}
          />
        </div>
      </section>

      {/* Email Popup */}
      <EmailPopup 
        isOpen={isEmailPopupOpen} 
        onClose={() => setIsEmailPopupOpen(false)} 
      />
    </>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;