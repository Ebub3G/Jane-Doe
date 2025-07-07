
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
      color: "text-emerald-500"
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
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center">
          Content Categories
        </h2>
        <p className="text-slate-600 text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Covering the technology that matters most
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="services-card border border-slate-200 bg-white rounded-xl overflow-hidden group shadow-md">
              <CardContent className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4 bg-slate-100 p-3 sm:p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <category.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${category.color}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">{category.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
