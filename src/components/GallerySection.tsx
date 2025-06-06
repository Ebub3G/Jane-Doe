
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Image, FileText } from 'lucide-react';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Brand Story: Ocean Cleanup",
      type: "video",
      thumbnail: "/lovable-uploads/98fb3be6-2555-4178-92c9-58ff71316afd.png",
      icon: Play
    },
    {
      id: 2,
      title: "Travel Series: Hidden Cities",
      type: "video",
      thumbnail: "/lovable-uploads/efa05f0b-a978-4c22-9bbb-0f2fba348b9e.png",
      icon: Play
    },
    {
      id: 3,
      title: "Social Campaign: Green Earth",
      type: "image",
      thumbnail: "/lovable-uploads/9cbf2178-3d36-4cf3-a732-a30f7138d27c.png",
      icon: Image
    },
    {
      id: 4,
      title: "Product Launch: EcoWear",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: Play
    },
    {
      id: 5,
      title: "Article: Future of Digital Storytelling",
      type: "article",
      thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: FileText
    },
    {
      id: 6,
      title: "Behind the Scenes: Mountain Retreat",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      icon: Image
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-lavender/10 dark:bg-neutral/90">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral dark:text-white mb-2 text-center">
          Content Gallery
        </h2>
        <p className="text-textgray dark:text-lavender/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          Showcasing my recent work and creative projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <Card className="overflow-hidden border-transparent h-full bg-white dark:bg-neutral/50 shadow-lg rounded-xl">
                <div className="relative h-60 w-full overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 dark:bg-neutral/80 backdrop-blur-sm flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-indigo dark:text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-neutral dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-textgray dark:text-lavender/70 capitalize">{item.type}</p>
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
