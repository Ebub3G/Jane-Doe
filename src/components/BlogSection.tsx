
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Foldable Phones Are Finally Ready",
      excerpt: "After years of promises, foldable technology has reached a turning point. Here's what changed and why now is the time.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Analysis",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      trending: true
    },
    {
      id: 2,
      title: "EV Charging Infrastructure: The Real Challenge",
      excerpt: "Beyond range anxiety lies the bigger question: Can charging infrastructure keep up with EV adoption?",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Electric Vehicles",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      trending: false
    },
    {
      id: 3,
      title: "AI in Smartphones: More Than Just Marketing",
      excerpt: "Separating real AI innovation from marketing hype in today's smartphone features.",
      date: "Dec 8, 2024",
      readTime: "5 min read",
      category: "Mobile Tech",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      trending: false
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center">
          Tech Insights
        </h2>
        <p className="text-slate-600 text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Deep dives, analysis, and thoughts on where technology is heading
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border border-slate-200 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-36 sm:h-48 w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-2">
                  <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  {post.trending && (
                    <span className="bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                  Read Full Article
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 sm:px-6 py-2 sm:py-3">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
