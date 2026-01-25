'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-80 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-8 h-8 border-2 border-purple-400 opacity-30 animate-pulse"></div>
      <div className="absolute top-60 left-40 text-purple-400 opacity-20 text-4xl">+</div>
      <div className="absolute bottom-40 right-20 w-12 h-12 border-2 border-blue-400 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 text-blue-400 opacity-10 text-6xl">+</div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 gap-y-35 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Ananda {" "}
              <span className="text-transparent bg-clip-text bg-purple-500">
             Aqeel
              </span>
              <br />
              Fathur Rahman
              <br />
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-lg leading-relaxed">
              Full-Stack & Data Enthusiast | Passionate about Project Management & Digital Solutions | Information Systems Student at Universitas Airlangga
            </p>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative flex justify-center items-center">
            {/* Geometric Background */}
            <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl transform rotate-12 blur-xl"></div>
            <div className="absolute w-96 h-96 border-4 border-purple-500/30 rounded-3xl transform rotate-12"></div>
            
            {/* Person Placeholder */}
            <div className="relative z-10 w-72 h-72 bg-gradient-to-br from-purple-400/40 to-blue-400/40 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
              <Image
                src="/fotoaqeel.png" 
                alt="Creative Designer"
                width={288} 
                height={288} 
                className="object-cover rounded-full scale-120"
          
              />
            </div>

            {/* Decorative Shapes */}
            <Plus className="absolute top-10 right-10 text-blue-400 w-8 h-8 opacity-50 animate-pulse" />
            <div className="absolute bottom-10 left-10 w-6 h-6 border-2 border-purple-400 transform rotate-45 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
