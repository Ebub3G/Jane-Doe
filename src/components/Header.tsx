
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
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md dark:bg-neutral/90' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <div className="font-bold text-xl md:text-2xl">
          <a href="#hero" className="text-neutral dark:text-white">Jane Doe</a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('blog')} className="nav-link">Blog</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
        </nav>
        
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-indigo hover:bg-indigo/90 text-white dark:bg-indigo dark:text-white dark:hover:bg-indigo/90 rounded-xl"
          >
            Let's Collaborate
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
