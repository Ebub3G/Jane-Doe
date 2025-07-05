
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Users, Eye, Heart, TrendingUp } from 'lucide-react';

const MediaKit = () => {
  const stats = [
    { icon: Users, label: "Total Followers", value: "125K+", color: "text-blue-500" },
    { icon: Eye, label: "Monthly Views", value: "2.5M+", color: "text-green-500" },
    { icon: Heart, label: "Engagement Rate", value: "8.2%", color: "text-red-500" },
    { icon: TrendingUp, label: "Growth Rate", value: "+23%", color: "text-purple-500" }
  ];

  return (
    <section className="section-padding bg-lavender/10 dark:bg-neutral/90">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral dark:text-white mb-2 text-center">
          Media Kit
        </h2>
        <p className="text-textgray dark:text-lavender/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          Everything you need to know about working with me
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-transparent bg-white dark:bg-neutral/50 rounded-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-neutral dark:text-white mb-6">
                Audience Analytics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="bg-lavender dark:bg-lavender/10 p-3 rounded-full">
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-neutral dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-textgray dark:text-white/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-transparent bg-white dark:bg-neutral/50 rounded-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-neutral dark:text-white mb-6">
                Content Formats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral dark:text-white">Instagram Posts</span>
                  <span className="text-indigo dark:text-lavender font-medium">$500-800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral dark:text-white">Instagram Stories</span>
                  <span className="text-indigo dark:text-lavender font-medium">$200-350</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral dark:text-white">Video Content</span>
                  <span className="text-indigo dark:text-lavender font-medium">$1000-2000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral dark:text-white">Brand Partnership</span>
                  <span className="text-indigo dark:text-lavender font-medium">Custom Quote</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button className="bg-indigo hover:bg-indigo/90 text-white dark:bg-indigo dark:text-white rounded-xl">
            <Download className="w-4 h-4 mr-2" />
            Download Full Media Kit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;
