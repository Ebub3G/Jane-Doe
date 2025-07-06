
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Smartphone, Car, Home, Headphones, Monitor } from 'lucide-react';

const ServicesSection = () => {
  const categories = [
    {
      title: "Smartphone Reviews",
      description: "In-depth analysis of the latest phones, from cameras to performance, helping you choose your next device.",
      icon: Smartphone,
      color: "text-blue-500"
    },
    {
      title: "Electric Vehicles",
      description: "First drives, range tests, and comprehensive reviews of the future of transportation.",
      icon: Car,
      color: "text-green-500"
    },
    {
      title: "Smart Home Tech",
      description: "Testing and reviewing the gadgets that make your home smarter, safer, and more efficient.",
      icon: Home,
      color: "text-purple-500"
    },
    {
      title: "Audio Equipment",
      description: "From earbuds to studio monitors, finding the perfect sound for every budget and use case.",
      icon: Headphones,
      color: "text-red-500"
    },
    {
      title: "Displays & Monitors",
      description: "Gaming monitors, professional displays, and TVs - visual technology that enhances your experience.",
      icon: Monitor,
      color: "text-yellow-500"
    },
    {
      title: "Tech Documentaries",
      description: "Behind-the-scenes content, factory tours, and deep dives into how technology is made.",
      icon: Video,
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-neutral/5 dark:bg-neutral/20">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral dark:text-white mb-2 text-center">
          Content Categories
        </h2>
        <p className="text-textgray dark:text-white/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          Covering the technology that matters most
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="services-card border border-neutral/10 dark:border-white/10 bg-white dark:bg-neutral/30 rounded-xl overflow-hidden group">
              <CardContent className="p-6">
                <div className="mb-4 bg-neutral/5 dark:bg-white/5 p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-neutral dark:text-white mb-3">{category.title}</h3>
                <p className="text-textgray dark:text-white/70 leading-relaxed">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
