'use client';

import React from 'react';
import { Code, Database, Users, Target, Briefcase, Sparkles, Mail, Linkedin, Github } from 'lucide-react';

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

export default function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-purple-400/20 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-16 h-16 border-2 border-blue-400/20 transform rotate-45"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Opening Statement */}
        <div className="mb-16 space-y-6">
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Hi! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">Aqeel</span>, an Information Systems student and tech enthusiast passionate about project management and data-driven development. I enjoy leading teams, solving problems, and turning ideas into impactful digital products.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I have experience managing agile projects, building full-stack web apps with Laravel, and visualizing insights with Tableau. My goal is to bridge the gap between business needs and technical execution.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="text-purple-400" />
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{skill.category}</h4>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start gap-2">
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
          <h3 className="text-3xl font-bold text-white mb-8">My Journey</h3>
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Over the past few years, I've led various student organization projects, including serving as Project Manager for <span className="text-purple-400 font-semibold">Emosense</span> and Event Coordinator for <span className="text-purple-400 font-semibold">HIMSI Community Service 2025</span>, where I successfully managed multi-division teams and achieved over 90% participant satisfaction. I also served as Garuda Coordinator in <span className="text-purple-400 font-semibold">AMERTA 2025</span>, guiding 17 mentors and ensuring smooth onboarding for 340 new students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <exp.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
                <p className="text-purple-400 text-sm font-semibold mb-3">{exp.project}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">Current Focus</h3>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-l-4 border-purple-500 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Currently, I'm working on <span className="text-purple-400 font-semibold">Emosense</span>, a project focused on emotion-based learning insights, where I serve as Project Manager ensuring sprint goals are met effectively.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm also exploring <span className="text-blue-400 font-semibold">data-driven project management</span> and how data can improve team efficiency and decision-making.
            </p>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              Outside of tech, I enjoy learning about <span className="text-purple-400">business strategy</span>, <span className="text-blue-400">UI/UX design</span>, and exploring productivity tools. I'm passionate about continuous learning and collaborating with people who share the same drive for innovation.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Connect!</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to collaborating on meaningful projects. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="mailto:your.email@example.com"
              className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-purple-500/30 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-purple-500/30 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}