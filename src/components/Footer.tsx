
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal-black text-white py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neon-aqua">Alex Chen</h3>
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base mt-1">Tech Reviewer & Creator</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
              &copy; {currentYear} Alex Chen. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-700 flex justify-center">
          <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-2">
            <a href="#about" className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-neon-aqua transition-colors">About</a>
            <a href="#gallery" className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-neon-aqua transition-colors">Reviews</a>
            <a href="#services" className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-neon-aqua transition-colors">Categories</a>
            <a href="#testimonials" className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-neon-aqua transition-colors">Community</a>
            <a href="#contact" className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-neon-aqua transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
