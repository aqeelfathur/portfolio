'use client';

import React, { forwardRef } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

interface ConnectSectionProps {
  onEmailClick: () => void;
}

const ConnectSection = forwardRef<HTMLDivElement, ConnectSectionProps>(
  ({ onEmailClick }, ref) => {
    return (
      <div ref={ref} className="text-center">
        <h3 className="text-2xl font-bold text-white mb-3">let's connect!</h3>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          I'm always open to collaborating on meaningful projects. Feel free to reach out!
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={onEmailClick}
            className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-purple-500/30 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </button>

          <a
            href="https://www.linkedin.com/in/ananda-aqeel-fathur-rahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-purple-500/30 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <a
            href="https://github.com/aqeelfathur"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-purple-500/30 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    );
  }
);

ConnectSection.displayName = "ConnectSection";

export default ConnectSection;
