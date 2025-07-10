
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Youtube, Twitter } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      <div className="container-custom flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 animate-fade-in">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <div className="bg-red-600 rounded-full p-2">
              <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-neon-aqua font-semibold text-sm sm:text-base">2.5M Subscribers</span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white">
            <span className="block">Alex Chen</span>
            <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-neon-aqua mt-2">
              Tech Reviewer & Creator
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0">
            Unboxing the future of technology. In-depth reviews, first looks, and tech insights 
            that matter to millions of viewers worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-6 sm:mt-8 px-4 lg:px-0">
            <Button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-electric-blue hover:bg-neon-aqua text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Watch Latest Reviews
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="bg-electric-blue border-white/30 text-white hover:bg-white/10 hover:border-neon-aqua text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl transition-all duration-300"
            >
              Collaborate
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 px-4 lg:px-0">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">150M+</div>
              <div className="text-xs sm:text-sm text-white/60">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
              <div className="text-xs sm:text-sm text-white/60">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">5 Years</div>
              <div className="text-xs sm:text-sm text-white/60">Creating</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-aqua rounded-2xl blur-2xl opacity-30"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Alex Chen - Tech Reviewer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tech-themed decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-48 h-48 sm:w-64 sm:h-64 bg-electric-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-56 h-56 sm:w-72 sm:h-72 bg-neon-aqua/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-neon-aqua rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
