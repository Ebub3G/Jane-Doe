
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
    <section id="gallery" className="section-padding bg-neutral/5 dark:bg-neutral/10">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral dark:text-white mb-2 text-center">
          Latest Content
        </h2>
        <p className="text-textgray dark:text-white/70 text-center text-lg mb-8 max-w-2xl mx-auto">
          Reviews, unboxings, and tech insights that millions trust
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "border-red-600/30 text-red-600 hover:bg-red-600/10 dark:border-red-400 dark:text-red-400"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-item opacity-0 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <Card className="overflow-hidden border-transparent h-full bg-white dark:bg-neutral/30 shadow-lg rounded-xl">
                <div className="relative h-60 w-full overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {item.views}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Watch Now
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-neutral dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-textgray dark:text-white/70 capitalize">{item.category}</p>
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
