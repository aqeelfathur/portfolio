'use client';

import Image from "next/image";
import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "FitTrack",
    description: "Full-stack fitness tracking web app with user management and workout analytics.",
    image: "/fittrack_logo.png",
    tags: ["Laravel", "PHP"],
    github: "https://github.com/aqeelfathur/fittrack-fix",
  },
  {
    id: 2,
    title: "PresenSee",
    description: "Real time dashboard for school absence with face recognition",
    image: "/presensee_logo.png",
    tags: ["Laravel", "PHP", "Python"],
    github: "https://github.com/aqeelfathur/PresenSee",
  }
];

export default function ProjectSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            my projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            showcase some of my work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-800 hover:shadow-2xl"
            >
              {/* Project Image/Placeholder */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                {project.image.startsWith("/") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className={`${project.image} w-full h-full transition-transform duration-500 group-hover:scale-105`} />
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.github}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-500 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center">
          <button className="group px-8 py-4 hadow-lg bg-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300">
            more
          </button>
        </div>
      </div>
    </section>
  );
}