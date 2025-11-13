'use client';

import React, { useState } from 'react';
import { Code, Database, Users, Target, Briefcase, Sparkles, Mail, Linkedin, Github, X, Send } from 'lucide-react';

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

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Status {
  type: string;
  message: string;
}

function EmailPopup({ isOpen, onClose }: EmailPopupProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<Status>({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Email sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          onClose();
          setStatus({ type: '', message: '' });
        }, 2000);
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send email. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-8 pb-6 border-b border-purple-500/20">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          </div>
          <p className="text-gray-300">Send me a message and I'll respond as soon as possible!</p>
        </div>

        {/* Form */}
        <div className="p-8 space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-white font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-white font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
              placeholder="Project Collaboration"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-white font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
              placeholder="Tell me about your project or inquiry..."
            />
          </div>

          {/* Status Message */}
          {status.message && (
            <div className={`p-4 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                : 'bg-red-500/20 border border-red-500/30 text-red-300'
            }`}>
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading || !formData.name || !formData.email || !formData.subject || !formData.message}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
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
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-3">let's connect!</h3>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              I'm always open to collaborating on meaningful projects. Feel free to reach out!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button 
                onClick={() => setIsEmailPopupOpen(true)}
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
        </div>
      </section>

      {/* Email Popup */}
      <EmailPopup 
        isOpen={isEmailPopupOpen} 
        onClose={() => setIsEmailPopupOpen(false)} 
      />
    </>
  );
}