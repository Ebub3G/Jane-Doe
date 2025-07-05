
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Storytelling",
      excerpt: "Exploring how emerging technologies are reshaping the way we tell stories in the digital age.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Behind the Scenes: Creating Viral Content",
      excerpt: "A deep dive into the creative process behind some of my most successful content campaigns.",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Creative Process",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Building Authentic Brand Partnerships",
      excerpt: "How to create meaningful collaborations that benefit both creators and brands.",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section className="section-padding bg-lavender/10 dark:bg-neutral/90">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral dark:text-white mb-2 text-center">
          Latest Articles
        </h2>
        <p className="text-textgray dark:text-lavender/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          Insights, tips, and behind-the-scenes stories from my creative journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-transparent bg-white dark:bg-neutral/50 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-textgray dark:text-white/60 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-textgray dark:text-white/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-indigo hover:text-indigo/80 dark:text-lavender dark:hover:text-lavender/80">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-indigo hover:bg-indigo/90 text-white dark:bg-indigo dark:text-white rounded-xl">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
