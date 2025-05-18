
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white to-lavender/30 dark:from-neutral dark:to-neutral/90 relative overflow-hidden">
      <div className="container-custom flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral dark:text-white">
            <span className="block">Jane Doe</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-neutral/80 dark:text-lavender font-light mt-2">
            Creating Stories That Connect
          </h2>
          <p className="text-lg md:text-xl text-textgray dark:text-white/70 max-w-2xl mx-auto lg:mx-0">
            Content creator, storyteller and digital artist crafting immersive visual experiences for brands and audiences worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <Button 
              onClick={scrollToContact}
              className="bg-indigo hover:bg-indigo/90 text-white text-lg px-8 py-6 rounded-xl dark:bg-indigo dark:text-white"
            >
              Hire Me
            </Button>
            <Button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              className="border-indigo text-indigo hover:bg-indigo/10 text-lg px-8 py-6 rounded-xl dark:border-lavender dark:text-lavender dark:hover:bg-lavender/20"
            >
              View My Work
            </Button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Jane Doe - Content Creator" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-lavender rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-lavender/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
