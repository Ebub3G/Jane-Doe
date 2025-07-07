
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal-black mb-2 text-center">
          About Alex
        </h2>
        <p className="text-gray-600 text-center text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto px-4">
          The story behind the reviews
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="order-2 lg:order-1">
            <Card className="p-4 sm:p-6 md:p-8 lg:p-10 border border-electric-blue/20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal-black mb-4 sm:mb-6">
                My Journey in Tech
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                Started reviewing smartphones in college, now covering everything from electric vehicles 
                to smart home tech. My mission is simple: help people make informed decisions about 
                the technology that shapes our daily lives.
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
                From CES to Apple events, I bring you first-hand coverage of the latest innovations, 
                with honest reviews that cut through the marketing hype to give you the real story.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-3 sm:p-4 bg-white/70 rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105">
                    <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-electric-blue mx-auto mb-2" />
                    <div className="text-xs sm:text-sm lg:text-base font-semibold text-charcoal-black">
                      {achievement.value}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-500">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-xl overflow-hidden shadow-2xl border-4 border-electric-blue/20 z-10 relative hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Alex working with tech equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] bg-gradient-to-br from-electric-blue/30 to-neon-aqua/30 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal-black mb-3 sm:mb-4 lg:mb-6">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 opacity-60">
            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-600 hover:text-electric-blue transition-colors">TechCrunch</span>
            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-600 hover:text-electric-blue transition-colors">The Verge</span>
            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-600 hover:text-electric-blue transition-colors">Wired</span>
            <span className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-600 hover:text-electric-blue transition-colors">Engadget</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
