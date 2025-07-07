
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-6 sm:py-8 md:py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold">Alex Chen</h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">Tech Reviewer & Creator</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-300 text-xs sm:text-sm">
              &copy; {currentYear} Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-700 flex justify-center">
          <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2">
            <a href="#about" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#gallery" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">Reviews</a>
            <a href="#services" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">Categories</a>
            <a href="#testimonials" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">Community</a>
            <a href="#contact" className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
