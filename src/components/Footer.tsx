
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-8 dark:bg-navy/95">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Jane Doe</h3>
            <p className="text-white/70 text-sm mt-1">Content Creator & Digital Storyteller</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm">
              &copy; {currentYear} Jane Doe. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/20 flex justify-center">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#about" className="text-sm text-white/70 hover:text-lavender transition-colors">About</a>
            <a href="#gallery" className="text-sm text-white/70 hover:text-lavender transition-colors">Gallery</a>
            <a href="#services" className="text-sm text-white/70 hover:text-lavender transition-colors">Services</a>
            <a href="#testimonials" className="text-sm text-white/70 hover:text-lavender transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm text-white/70 hover:text-lavender transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
