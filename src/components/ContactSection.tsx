
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal-black mb-2 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto px-4">
          Interested in collaboration, product reviews, or partnership opportunities?
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <Card className="border border-electric-blue/20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-charcoal-black mb-4 sm:mb-6 lg:mb-8">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-600 block text-sm lg:text-base">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-electric-blue/30 focus:border-electric-blue bg-white rounded-lg text-sm lg:text-base py-2 lg:py-3" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-gray-600 block text-sm lg:text-base">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="border-electric-blue/30 focus:border-electric-blue bg-white rounded-lg text-sm lg:text-base py-2 lg:py-3" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-600 block text-sm lg:text-base">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your product, collaboration idea, or question..." 
                    className="min-h-24 sm:min-h-32 lg:min-h-40 border-electric-blue/30 focus:border-electric-blue bg-white rounded-lg text-sm lg:text-base py-2 lg:py-3" 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-electric-blue hover:bg-neon-aqua text-white rounded-xl py-3 lg:py-4 text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6 sm:space-y-8">
            <Card className="border border-electric-blue/20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-charcoal-black mb-4 sm:mb-6 lg:mb-8">Connect With Me</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <a href="https://youtube.com/@alexchentech" className="flex items-center space-x-3 sm:space-x-4 text-gray-700 hover:text-charcoal-black transition-colors group">
                    <div className="bg-red-50 p-2 sm:p-3 rounded-full group-hover:bg-red-100 transition-colors">
                      <Youtube className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base lg:text-lg">YouTube</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-500">@alexchentech</p>
                    </div>
                  </a>
                  
                  <a href="https://twitter.com/alexchentech" className="flex items-center space-x-3 sm:space-x-4 text-gray-700 hover:text-charcoal-black transition-colors group">
                    <div className="bg-blue-50 p-2 sm:p-3 rounded-full group-hover:bg-blue-100 transition-colors">
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base lg:text-lg">Twitter</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-500">@alexchentech</p>
                    </div>
                  </a>
                  
                  <a href="https://instagram.com/alexchentech" className="flex items-center space-x-3 sm:space-x-4 text-gray-700 hover:text-charcoal-black transition-colors group">
                    <div className="bg-pink-50 p-2 sm:p-3 rounded-full group-hover:bg-pink-100 transition-colors">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base lg:text-lg">Instagram</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-500">@alexchentech</p>
                    </div>
                  </a>
                  
                  <a href="mailto:hello@alexchentech.com" className="flex items-center space-x-3 sm:space-x-4 text-gray-700 hover:text-charcoal-black transition-colors group">
                    <div className="bg-gray-100 p-2 sm:p-3 rounded-full group-hover:bg-gray-200 transition-colors">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base lg:text-lg">Business Email</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-500">hello@alexchentech.com</p>
                    </div>
                  </a>
                  
                  <a href="https://alexchentech.com" className="flex items-center space-x-3 sm:space-x-4 text-gray-700 hover:text-charcoal-black transition-colors group">
                    <div className="bg-gray-100 p-2 sm:p-3 rounded-full group-hover:bg-gray-200 transition-colors">
                      <Link className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base lg:text-lg">Website</h4>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-500">alexchentech.com</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-electric-blue/20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-charcoal-black mb-3 sm:mb-4 lg:mb-6">For Brands & PR</h3>
                <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">
                  Currently accepting product reviews and brand partnerships. 
                </p>
                <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">
                  Specializing in: Smartphones, Electric Vehicles, Smart Home, Audio Gear
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-electric-blue font-medium">
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
