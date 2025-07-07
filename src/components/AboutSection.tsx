
import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Users, Zap, Globe } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Award, label: "Creator Awards", value: "3 Silver, 1 Gold" },
    { icon: Users, label: "Community", value: "2.5M Subscribers" },
    { icon: Zap, label: "Tech Events", value: "50+ Covered" },
    { icon: Globe, label: "Global Reach", value: "120+ Countries" }
  ];

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center">
          About Alex
        </h2>
        <p className="text-slate-600 text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          The story behind the reviews
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="order-2 lg:order-1">
            <Card className="p-4 sm:p-6 md:p-8 border border-blue-200 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
                My Journey in Tech
              </h3>
              <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Started reviewing smartphones in college, now covering everything from electric vehicles 
                to smart home tech. My mission is simple: help people make informed decisions about 
                the technology that shapes our daily lives.
              </p>
              <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                From CES to Apple events, I bring you first-hand coverage of the latest innovations, 
                with honest reviews that cut through the marketing hype to give you the real story.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-3 sm:p-4 bg-white/70 rounded-lg">
                    <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold text-slate-900">
                      {achievement.value}
                    </div>
                    <div className="text-xs text-slate-500">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-200 z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Alex working with tech equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-200/50 to-emerald-200/50 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-60">
            <span className="text-sm sm:text-lg font-semibold text-slate-600">TechCrunch</span>
            <span className="text-sm sm:text-lg font-semibold text-slate-600">The Verge</span>
            <span className="text-sm sm:text-lg font-semibold text-slate-600">Wired</span>
            <span className="text-sm sm:text-lg font-semibold text-slate-600">Engadget</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
