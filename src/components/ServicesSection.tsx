
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Video, Smartphone, Car, Home, Headphones, Monitor } from 'lucide-react';

const ServicesSection = () => {
  const categories = [
    {
      title: "Smartphone Reviews",
      description: "In-depth analysis of the latest phones, from cameras to performance, helping you choose your next device.",
      icon: Smartphone,
      color: "text-electric-blue"
    },
    {
      title: "Electric Vehicles",
      description: "First drives, range tests, and comprehensive reviews of the future of transportation.",
      icon: Car,
      color: "text-neon-aqua"
    },
    {
      title: "Smart Home Tech",
      description: "Testing and reviewing the gadgets that make your home smarter, safer, and more efficient.",
      icon: Home,
      color: "text-soft-purple"
    },
    {
      title: "Audio Equipment",
      description: "From earbuds to studio monitors, finding the perfect sound for every budget and use case.",
      icon: Headphones,
      color: "text-electric-blue"
    },
    {
      title: "Displays & Monitors",
      description: "Gaming monitors, professional displays, and TVs - visual technology that enhances your experience.",
      icon: Monitor,
      color: "text-neon-aqua"
    },
    {
      title: "Tech Documentaries",
      description: "Behind-the-scenes content, factory tours, and deep dives into how technology is made.",
      icon: Video,
      color: "text-soft-purple"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal-black mb-2 text-center">
          Content Categories
        </h2>
        <p className="text-gray-600 text-center text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto px-4">
          Covering the technology that matters most
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {categories.map((category, index) => (
            <Card key={index} className="services-card border border-gray-200 bg-white rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="mb-3 sm:mb-4 lg:mb-6 bg-gray-100 p-3 sm:p-4 lg:p-5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <category.icon className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ${category.color}`} />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-charcoal-black mb-2 sm:mb-3 lg:mb-4">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
