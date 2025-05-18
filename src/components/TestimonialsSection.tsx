
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "EcoTech",
      quote: "Jane's creative vision transformed our campaign. Her understanding of our brand and audience delivered content that not only looked amazing but also drove real engagement and conversions.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder",
      company: "Pulse Media",
      quote: "Working with Jane has been a game-changer for our content strategy. Her attention to detail and storytelling abilities have helped us connect with our audience in ways we never thought possible.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      position: "Creative Director",
      company: "Horizon Studios",
      quote: "Jane doesn't just create content, she crafts experiences. Her work consistently exceeds expectations and has been instrumental in growing our brand presence across multiple platforms.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-lavender/10 dark:bg-navy">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-2 text-center">
          Testimonials
        </h2>
        <p className="text-navy/70 dark:text-lavender/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          What clients and collaborators say about working with me
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="testimonial-gradient dark:bg-navy/50 border-0 shadow-xl">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-navy mb-6">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <blockquote className="text-lg md:text-xl text-navy/80 dark:text-white/90 mb-6 italic">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div>
                  <h4 className="font-semibold text-navy dark:text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-navy/70 dark:text-lavender/70">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              onClick={prevTestimonial} 
              variant="outline" 
              className="border-navy/30 text-navy dark:border-lavender/30 dark:text-lavender"
            >
              Previous
            </Button>
            <Button 
              onClick={nextTestimonial} 
              variant="outline" 
              className="border-navy/30 text-navy dark:border-lavender/30 dark:text-lavender"
            >
              Next
            </Button>
          </div>
          
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === activeIndex 
                    ? 'bg-navy dark:bg-lavender' 
                    : 'bg-navy/30 dark:bg-lavender/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
