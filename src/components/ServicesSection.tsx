
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Edit, Instagram, Camera } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Video Production",
      description: "Full-service video creation from concept to final delivery, including filming, editing, and color grading.",
      icon: Video
    },
    {
      title: "Content Writing",
      description: "Engaging scripts, captions, and articles that tell your story and connect with your audience.",
      icon: Edit
    },
    {
      title: "Social Media Management",
      description: "Strategic planning and management of your social media presence to build engagement and followers.",
      icon: Instagram
    },
    {
      title: "UGC Creation",
      description: "Authentic user-generated style content that showcases your products in real-life contexts.",
      icon: Camera
    }
  ];

  return (
    <section id="services" className="section-padding bg-white dark:bg-neutral">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral dark:text-white mb-2 text-center">
          Services Offered
        </h2>
        <p className="text-textgray dark:text-lavender/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          Creative solutions to elevate your digital presence
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="services-card border border-lavender/30 dark:border-transparent bg-white dark:bg-neutral/50 rounded-xl">
              <CardContent className="p-6 md:p-8 flex flex-col items-center text-center md:text-left md:flex-row md:items-start">
                <div className="mb-4 md:mb-0 md:mr-6 bg-lavender dark:bg-lavender/10 p-4 rounded-full">
                  <service.icon className="w-8 h-8 text-indigo dark:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral dark:text-white mb-2">{service.title}</h3>
                  <p className="text-textgray dark:text-white/70">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
