
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
    <section id="about" className="section-padding bg-white dark:bg-black relative">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral dark:text-white mb-2 text-center">
          About Alex
        </h2>
        <p className="text-textgray dark:text-white/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          The story behind the reviews
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <Card className="p-8 border border-red-500/20 bg-gradient-to-br from-neutral/5 to-red-500/5 dark:from-neutral/20 dark:to-red-500/10 rounded-xl">
              <h3 className="text-2xl font-bold text-neutral dark:text-white mb-6">
                My Journey in Tech
              </h3>
              <p className="text-textgray dark:text-white/80 mb-4">
                Started reviewing smartphones in college, now covering everything from electric vehicles 
                to smart home tech. My mission is simple: help people make informed decisions about 
                the technology that shapes our daily lives.
              </p>
              <p className="text-textgray dark:text-white/80 mb-6">
                From CES to Apple events, I bring you first-hand coverage of the latest innovations, 
                with honest reviews that cut through the marketing hype to give you the real story.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 dark:bg-neutral/30 rounded-lg">
                    <achievement.icon className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-neutral dark:text-white">
                      {achievement.value}
                    </div>
                    <div className="text-xs text-textgray dark:text-white/60">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-red-500/20 z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Alex working with tech equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-red-500/30 to-purple-600/30 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-neutral dark:text-white mb-4">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-lg font-semibold text-textgray dark:text-white/70">TechCrunch</span>
            <span className="text-lg font-semibold text-textgray dark:text-white/70">The Verge</span>
            <span className="text-lg font-semibold text-textgray dark:text-white/70">Wired</span>
            <span className="text-lg font-semibold text-textgray dark:text-white/70">Engadget</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
