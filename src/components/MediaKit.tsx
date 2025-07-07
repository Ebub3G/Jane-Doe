
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Users, Eye, Heart, TrendingUp, Youtube, Twitter, Instagram } from 'lucide-react';

const MediaKit = () => {
  const stats = [
    { icon: Users, label: "YouTube Subscribers", value: "2.5M", color: "text-electric-blue" },
    { icon: Eye, label: "Monthly Views", value: "15M+", color: "text-neon-aqua" },
    { icon: Heart, label: "Engagement Rate", value: "12.8%", color: "text-soft-purple" },
    { icon: TrendingUp, label: "Growth Rate", value: "+35%", color: "text-electric-blue" }
  ];

  const platforms = [
    { name: "YouTube", icon: Youtube, subscribers: "2.5M", color: "text-electric-blue" },
    { name: "Twitter", icon: Twitter, subscribers: "890K", color: "text-neon-aqua" },
    { name: "Instagram", icon: Instagram, subscribers: "1.2M", color: "text-soft-purple" }
  ];

  return (
    <section className="section-padding bg-ghost-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-black mb-2 text-center">
          Creator Statistics
        </h2>
        <p className="text-charcoal-black/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          Partnership opportunities and audience insights
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-electric-blue/20 bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-charcoal-black mb-6">
                Audience Reach
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="bg-ghost-white p-3 rounded-full">
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-charcoal-black mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-charcoal-black/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-electric-blue/20 bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-charcoal-black mb-6">
                Platform Breakdown
              </h3>
              <div className="space-y-6">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <platform.icon className={`w-6 h-6 ${platform.color}`} />
                      <span className="text-charcoal-black font-medium">{platform.name}</span>
                    </div>
                    <span className="text-lg font-bold text-charcoal-black">
                      {platform.subscribers}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-electric-blue/10">
                <h4 className="font-semibold text-lg text-charcoal-black mb-4">
                  Collaboration Rates
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal-black/70">Dedicated Review Video</span>
                    <span className="text-electric-blue font-medium">$15,000-25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-black/70">Product Integration</span>
                    <span className="text-electric-blue font-medium">$8,000-12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-black/70">Social Media Package</span>
                    <span className="text-electric-blue font-medium">$5,000-8,000</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button className="bg-electric-blue hover:bg-neon-aqua text-white rounded-xl">
            <Download className="w-4 h-4 mr-2" />
            Download Full Media Kit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;
