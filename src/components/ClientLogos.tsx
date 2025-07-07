
import React from 'react';

const ClientLogos = () => {
  const partners = [
    { 
      name: "Apple", 
      logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Review Partner"
    },
    { 
      name: "Google", 
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Tech Collaboration"
    },
    { 
      name: "Samsung", 
      logo: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Launch Partner"
    },
    { 
      name: "Tesla", 
      logo: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "EV Coverage"
    },
    { 
      name: "Sony", 
      logo: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Audio Reviews"
    },
    { 
      name: "Microsoft", 
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      description: "Surface Partner"
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">
          Brand Partners
        </h2>
        <p className="text-slate-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
          Collaborating with leading tech companies to bring you the latest innovations
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center p-3 sm:p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">
                {partner.name}
              </h3>
              <p className="text-xs text-slate-500 text-center">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
