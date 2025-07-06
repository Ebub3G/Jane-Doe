
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
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-neutral via-neutral/95 to-neutral/90 dark:from-black dark:via-neutral dark:to-neutral relative overflow-hidden">
      <div className="container-custom flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <div className="bg-red-600 rounded-full p-2">
              <Youtube className="w-5 h-5 text-white" />
            </div>
            <span className="text-red-600 font-semibold">2.5M Subscribers</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            <span className="block">Alex Chen</span>
            <span className="block text-2xl md:text-3xl font-light text-white/80 mt-2">
              Tech Reviewer & Creator
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
            Unboxing the future of technology. In-depth reviews, first looks, and tech insights 
            that matter to millions of viewers worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <Button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-xl flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Latest Reviews
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
            >
              Collaborate
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">150M+</div>
              <div className="text-sm text-white/60">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/60">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5 Years</div>
              <div className="text-sm text-white/60">Creating</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
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
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
