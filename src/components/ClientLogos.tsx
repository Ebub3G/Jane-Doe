
import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: "Netflix", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Adobe", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Spotify", logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Airbnb", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Nike", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" }
  ];

  return (
    <section className="section-padding bg-white dark:bg-neutral">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral dark:text-white mb-2 text-center">
          Trusted by Leading Brands
        </h2>
        <p className="text-textgray dark:text-lavender/70 text-center mb-12 max-w-2xl mx-auto">
          I've had the privilege of working with amazing companies to bring their stories to life
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <div className="w-24 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
