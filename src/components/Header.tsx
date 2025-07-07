
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-3 sm:py-4">
        <div className="font-bold text-lg sm:text-xl md:text-2xl">
          <a href="#hero" className="text-white">Alex Chen</a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">About</button>
          <button onClick={() => scrollToSection('gallery')} className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Reviews</button>
          <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Categories</button>
          <button onClick={() => scrollToSection('blog')} className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Articles</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Community</button>
        </nav>
        
        <div className="flex items-center">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Partner With Me</span>
            <span className="sm:hidden">Partner</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
