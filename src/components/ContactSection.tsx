
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Youtube, Twitter, Instagram, Mail, Link } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-neutral">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral dark:text-white mb-2 text-center">
          Get In Touch
        </h2>
        <p className="text-textgray dark:text-white/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          Interested in collaboration, product reviews, or partnership opportunities?
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="border border-red-500/20 dark:border-transparent bg-white dark:bg-neutral/50 rounded-xl">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-neutral dark:text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-textgray dark:text-white/80 block text-sm">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-red-500/30 focus:border-red-500 dark:border-neutral/30 dark:focus:border-red-500 bg-white dark:bg-neutral/50 rounded-lg" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-textgray dark:text-white/80 block text-sm">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="border-red-500/30 focus:border-red-500 dark:border-neutral/30 dark:focus:border-red-500 bg-white dark:bg-neutral/50 rounded-lg" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-textgray dark:text-white/80 block text-sm">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your product, collaboration idea, or question..." 
                    className="min-h-32 border-red-500/30 focus:border-red-500 dark:border-neutral/30 dark:focus:border-red-500 bg-white dark:bg-neutral/50 rounded-lg" 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="border border-red-500/20 dark:border-transparent bg-white dark:bg-neutral/50 rounded-xl">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-neutral dark:text-white mb-6">Connect With Me</h3>
                
                <div className="space-y-6">
                  <a href="https://youtube.com/@alexchentech" className="flex items-center space-x-4 text-neutral hover:text-neutral/80 dark:text-white dark:hover:text-white/80 transition-colors">
                    <div className="bg-red-600/10 dark:bg-red-600/20 p-3 rounded-full">
                      <Youtube className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">YouTube</h4>
                      <p className="text-sm text-textgray dark:text-white/70">@alexchentech</p>
                    </div>
                  </a>
                  
                  <a href="https://twitter.com/alexchentech" className="flex items-center space-x-4 text-neutral hover:text-neutral/80 dark:text-white dark:hover:text-white/80 transition-colors">
                    <div className="bg-blue-500/10 dark:bg-blue-500/20 p-3 rounded-full">
                      <Twitter className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Twitter</h4>
                      <p className="text-sm text-textgray dark:text-white/70">@alexchentech</p>
                    </div>
                  </a>
                  
                  <a href="https://instagram.com/alexchentech" className="flex items-center space-x-4 text-neutral hover:text-neutral/80 dark:text-white dark:hover:text-white/80 transition-colors">
                    <div className="bg-pink-500/10 dark:bg-pink-500/20 p-3 rounded-full">
                      <Instagram className="w-5 h-5 text-pink-500 dark:text-pink-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Instagram</h4>
                      <p className="text-sm text-textgray dark:text-white/70">@alexchentech</p>
                    </div>
                  </a>
                  
                  <a href="mailto:hello@alexchentech.com" className="flex items-center space-x-4 text-neutral hover:text-neutral/80 dark:text-white dark:hover:text-white/80 transition-colors">
                    <div className="bg-neutral/10 dark:bg-white/10 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-neutral dark:text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Business Email</h4>
                      <p className="text-sm text-textgray dark:text-white/70">hello@alexchentech.com</p>
                    </div>
                  </a>
                  
                  <a href="https://alexchentech.com" className="flex items-center space-x-4 text-neutral hover:text-neutral/80 dark:text-white dark:hover:text-white/80 transition-colors">
                    <div className="bg-neutral/10 dark:bg-white/10 p-3 rounded-full">
                      <Link className="w-5 h-5 text-neutral dark:text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Website</h4>
                      <p className="text-sm text-textgray dark:text-white/70">alexchentech.com</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-red-500/20 dark:border-transparent bg-white dark:bg-neutral/50 rounded-xl">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-neutral dark:text-white mb-4">For Brands & PR</h3>
                <p className="text-textgray dark:text-white/80 mb-3">
                  Currently accepting product reviews and brand partnerships. 
                </p>
                <p className="text-textgray dark:text-white/80 mb-3">
                  Specializing in: Smartphones, Electric Vehicles, Smart Home, Audio Gear
                </p>
                <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                  Response time: 24-48 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
