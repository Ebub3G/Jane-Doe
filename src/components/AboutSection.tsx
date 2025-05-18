
import React from 'react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-navy/95 relative">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-2 text-center">
          About Me
        </h2>
        <p className="text-navy/70 dark:text-lavender/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          The creative mind behind the stories
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card className="p-6 md:p-8 border border-lavender/30 bg-white/80 backdrop-blur-sm dark:bg-navy/50">
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">
                My Journey
              </h3>
              <p className="text-navy/80 dark:text-white/80 mb-4">
                With over 6 years of experience in digital content creation, I've worked with brands and creators 
                across multiple industries to bring their stories to life. My approach combines technical expertise
                with creative storytelling to create content that resonates.
              </p>
              <p className="text-navy/80 dark:text-white/80 mb-4">
                I started my career in traditional media before transitioning to digital platforms, giving me a 
                unique perspective on how to create content that works across different mediums and audiences.
              </p>
              
              <div className="mt-8 border-t border-lavender/30 pt-6">
                <h4 className="font-semibold text-lg text-navy dark:text-white mb-3">
                  Fun Facts
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-navy/70 dark:text-lavender mr-2">•</span>
                    <p className="text-navy/80 dark:text-white/80">I've visited 23 countries to capture stories around the world</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy/70 dark:text-lavender mr-2">•</span>
                    <p className="text-navy/80 dark:text-white/80">My content has reached over 20 million views across platforms</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-navy/70 dark:text-lavender mr-2">•</span>
                    <p className="text-navy/80 dark:text-white/80">I once filmed a documentary while surviving on a deserted island for a week</p>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-2xl border-4 border-white dark:border-navy z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Jane Doe at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 bg-lavender/40 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
