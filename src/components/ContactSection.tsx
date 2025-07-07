
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
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center">
          Get In Touch
        </h2>
        <p className="text-slate-600 text-center text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Interested in collaboration, product reviews, or partnership opportunities?
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <Card className="border border-blue-200 bg-white rounded-xl shadow-md">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-slate-600 block text-sm">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-blue-200 focus:border-blue-500 bg-white rounded-lg" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-slate-600 block text-sm">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="border-blue-200 focus:border-blue-500 bg-white rounded-lg" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-slate-600 block text-sm">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your product, collaboration idea, or question..." 
                    className="min-h-24 sm:min-h-32 border-blue-200 focus:border-blue-500 bg-white rounded-lg" 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6 sm:space-y-8">
            <Card className="border border-blue-200 bg-white rounded-xl shadow-md">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">Connect With Me</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <a href="https://youtube.com/@alexchentech" className="flex items-center space-x-3 sm:space-x-4 text-slate-700 hover:text-slate-900 transition-colors">
                    <div className="bg-red-50 p-2 sm:p-3 rounded-full">
                      <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">YouTube</h4>
                      <p className="text-xs sm:text-sm text-slate-500">@alexchentech</p>
                    </div>
                  </a>
                  
                  <a href="https://twitter.com/alexchentech" className="flex items-center space-x-3 sm:space-x-4 text-slate-700 hover:text-slate-900 transition-colors">
                    <div className="bg-blue-50 p-2 sm:p-3 rounded-full">
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">Twitter</h4>
                      <p className="text-xs sm:text-sm text-slate-500">@alexchentech</p>
                    </div>
                  </a>
                  
                  <a href="https://instagram.com/alexchentech" className="flex items-center space-x-3 sm:space-x-4 text-slate-700 hover:text-slate-900 transition-colors">
                    <div className="bg-pink-50 p-2 sm:p-3 rounded-full">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">Instagram</h4>
                      <p className="text-xs sm:text-sm text-slate-500">@alexchentech</p>
                    </div>
                  </a>
                  
                  <a href="mailto:hello@alexchentech.com" className="flex items-center space-x-3 sm:space-x-4 text-slate-700 hover:text-slate-900 transition-colors">
                    <div className="bg-slate-100 p-2 sm:p-3 rounded-full">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">Business Email</h4>
                      <p className="text-xs sm:text-sm text-slate-500">hello@alexchentech.com</p>
                    </div>
                  </a>
                  
                  <a href="https://alexchentech.com" className="flex items-center space-x-3 sm:space-x-4 text-slate-700 hover:text-slate-900 transition-colors">
                    <div className="bg-slate-100 p-2 sm:p-3 rounded-full">
                      <Link className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base">Website</h4>
                      <p className="text-xs sm:text-sm text-slate-500">alexchentech.com</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-blue-200 bg-white rounded-xl shadow-md">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4">For Brands & PR</h3>
                <p className="text-slate-600 mb-2 sm:mb-3 text-sm sm:text-base">
                  Currently accepting product reviews and brand partnerships. 
                </p>
                <p className="text-slate-600 mb-2 sm:mb-3 text-sm sm:text-base">
                  Specializing in: Smartphones, Electric Vehicles, Smart Home, Audio Gear
                </p>
                <p className="text-xs sm:text-sm text-blue-600 font-medium">
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
