
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import DarkModeToggle from './DarkModeToggle';

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
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <div className="font-bold text-xl md:text-2xl">
          <a href="#hero" className="text-white">Alex Chen</a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollToSection('gallery')} className="text-white/80 hover:text-white transition-colors">Reviews</button>
          <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors">Categories</button>
          <button onClick={() => scrollToSection('blog')} className="text-white/80 hover:text-white transition-colors">Articles</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-white/80 hover:text-white transition-colors">Community</button>
        </nav>
        
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-red-600 hover:bg-red-700 text-white rounded-xl"
          >
            Partner With Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
