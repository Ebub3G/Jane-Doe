
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Instagram, MessageSquare, Link } from 'lucide-react';
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
        <p className="text-textgray dark:text-lavender/70 text-center text-lg mb-12 max-w-2xl mx-auto">
          Let's discuss your project or collaboration opportunities
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="border border-lavender/30 dark:border-transparent bg-white dark:bg-neutral/50 rounded-xl">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-neutral dark:text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-textgray dark:text-white/80 block text-sm">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-lavender/30 focus:border-indigo dark:border-neutral/30 dark:focus:border-lavender bg-white dark:bg-neutral/50 rounded-lg" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-textgray dark:text-white/80 block text-sm">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="border-lavender/30 focus:border-indigo dark:border-neutral/30 dark:focus:border-lavender bg-white dark:bg-neutral/50 rounded-lg" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-textgray dark:text-white/80 block text-sm">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="min-h-32 border-lavender/30 focus:border-indigo dark:border-neutral/30 dark:focus:border-lavender bg-white dark:bg-neutral/50 rounded-lg" 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-indigo hover:bg-indigo/90 text-white dark:bg-indigo dark:text-white dark:hover:bg-indigo/90 rounded-xl"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="border border-lavender/30 dark:border-transparent bg-white dark:bg-neutral/50 rounded-xl">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-neutral dark:text-white mb-6">Connect With Me</h3>
                
                <div className="space-y-6">
                  <a href="#" className="flex items-center space-x-4 text-neutral hover:text-neutral/80 dark:text-white dark:hover:text-white/80 transition-colors">
                    <div className="bg-lavender dark:bg-lavender/10 p-3 rounded-full">
                      <Instagram className="w-5 h-5 text-indigo dark:text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Instagram</h4>
                      <p className="text-sm text-textgray dark:text-white/70">@janedoecreates</p>
                    </div>
                  </a>
                  
                  <a href="mailto:hello@janedoe.com" className="flex items-center space-x-4 text-neutral hover:text-neutral/80 dark:text-white dark:hover:text-white/80 transition-colors">
                    <div className="bg-lavender dark:bg-lavender/10 p-3 rounded-full">
                      <MessageSquare className="w-5 h-5 text-indigo dark:text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm text-textgray dark:text-white/70">hello@janedoe.com</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center space-x-4 text-neutral hover:text-neutral/80 dark:text-white dark:hover:text-white/80 transition-colors">
                    <div className="bg-lavender dark:bg-lavender/10 p-3 rounded-full">
                      <Link className="w-5 h-5 text-indigo dark:text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Website</h4>
                      <p className="text-sm text-textgray dark:text-white/70">janedoe.com</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-lavender/30 dark:border-transparent bg-white dark:bg-neutral/50 rounded-xl">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-neutral dark:text-white mb-4">Availability</h3>
                <p className="text-textgray dark:text-white/80">
                  Currently available for freelance projects, collaborations, and consulting work.
                </p>
                <p className="text-textgray dark:text-white/80 mt-2">
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
