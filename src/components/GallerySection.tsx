
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Image, FileText, ExternalLink } from 'lucide-react';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const galleryItems = [
    {
      id: 1,
      title: "iPhone 15 Pro Max Review",
      type: "video",
      thumbnail: "/lovable-uploads/98fb3be6-2555-4178-92c9-58ff71316afd.png",
      icon: Play,
      category: "smartphone",
      views: "2.1M views"
    },
    {
      id: 2,
      title: "Tesla Model S Plaid: Track Day",
      type: "video",
      thumbnail: "/lovable-uploads/efa05f0b-a978-4c22-9bbb-0f2fba348b9e.png",
      icon: Play,
      category: "automotive",
      views: "1.8M views"
    },
    {
      id: 3,
      title: "CES 2024: Best Tech",
      type: "image",
      thumbnail: "/lovable-uploads/9cbf2178-3d36-4cf3-a732-a30f7138d27c.png",
      icon: Image,
      category: "events",
      views: "890K views"
    },
    {
      id: 4,
      title: "MacBook Pro M3 vs M2",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      icon: Play,
      category: "computers",
      views: "1.2M views"
    },
    {
      id: 5,
      title: "The Future of Foldables",
      type: "article",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      icon: FileText,
      category: "analysis",
      views: "650K reads"
    },
    {
      id: 6,
      title: "Studio Tour 2024",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      icon: Play,
      category: "behind-scenes",
      views: "2.5M views"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content' },
    { id: 'video', label: 'Videos' },
    { id: 'image', label: 'Photos' },
    { id: 'article', label: 'Articles' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeFilter);

  return (
    <section id="gallery" className="section-padding bg-ghost-white">
      <div className="container-custom">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-black mb-2 text-center">
          Latest Content
        </h2>
        <p className="text-charcoal-black/70 text-center text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 xs:mb-8 sm:mb-12 max-w-2xl mx-auto px-2 xs:px-4">
          Reviews, unboxings, and tech insights that millions trust
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 xs:mb-10 sm:mb-12 px-2 xs:px-4">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`rounded-full transition-all duration-300 px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base ${
                activeFilter === filter.id
                  ? "bg-electric-blue text-white hover:bg-neon-aqua shadow-lg"
                  : "border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue/50"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item opacity-0 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <Card className="overflow-hidden border-transparent h-full bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="relative h-32 xs:h-40 sm:h-48 md:h-60 w-full overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full bg-soft-purple flex items-center justify-center">
                    <item.icon className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-2 xs:left-3 sm:left-4 bg-charcoal-black/80 text-white px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded text-xs xs:text-sm font-medium">
                    {item.views}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button className="bg-electric-blue hover:bg-neon-aqua text-white rounded-full px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base shadow-lg">
                      <ExternalLink className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 mr-1.5 xs:mr-2" />
                      Watch Now
                    </Button>
                  </div>
                </div>
                <CardContent className="p-3 xs:p-4 sm:p-5 md:p-6">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-charcoal-black mb-1 xs:mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-xs xs:text-sm sm:text-base text-charcoal-black/60 capitalize font-medium">{item.category}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
