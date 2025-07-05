
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ServicesSection from '@/components/ServicesSection';
import BlogSection from '@/components/BlogSection';
import ClientLogos from '@/components/ClientLogos';
import MediaKit from '@/components/MediaKit';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <BlogSection />
      <ClientLogos />
      <MediaKit />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
