import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      category: "Salon",
      images: [
        {
          url: "https://images.pexels.com/photos/3993323/pexels-photo-3993323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Precision Haircut"
        },
        {
          url: "https://images.pexels.com/photos/3993012/pexels-photo-3993012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Styling Session"
        },
        {
          url: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Salon Interior"
        },
        {
          url: "https://images.pexels.com/photos/3993310/pexels-photo-3993310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Color Application"
        },
        {
          url: "https://images.pexels.com/photos/4656750/pexels-photo-4656750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Hair Wash Station"
        },
        {
          url: "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Blow Dry Styling"
        },
      ]
    },
    {
      category: "Coffee Shop",
      images: [
        {
          url: "https://images.pexels.com/photos/1419918/pexels-photo-1419918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Latte Art"
        },
        {
          url: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Coffee Bean Selection"
        },
        {
          url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Espresso Preparation"
        },
        {
          url: "https://images.pexels.com/photos/6802982/pexels-photo-6802982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Tea Selection"
        },
        {
          url: "https://images.pexels.com/photos/6612711/pexels-photo-6612711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Pastry Display"
        },
        {
          url: "https://images.pexels.com/photos/4427881/pexels-photo-4427881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Coffee Bar"
        },
      ]
    },
    {
      category: "Results",
      images: [
        {
          url: "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Men's Style"
        },
        {
          url: "https://images.pexels.com/photos/4492160/pexels-photo-4492160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Women's Cut"
        },
        {
          url: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Color Transformation"
        },
        {
          url: "https://images.pexels.com/photos/4557473/pexels-photo-4557473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Style Finish"
        },
        {
          url: "https://images.pexels.com/photos/1619834/pexels-photo-1619834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Bob Cut"
        },
        {
          url: "https://images.pexels.com/photos/3998949/pexels-photo-3998949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          caption: "Precision Styling"
        },
      ]
    }
  ];

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6802982/pexels-photo-6802982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Gallery hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900 bg-opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-50 mb-6">Gallery</h1>
            <p className="text-xl text-cream-200 mb-8 max-w-xl">
              Explore our salon, coffee shop, and the beautiful results of our services
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          {galleryImages.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-20 last:mb-0">
              <h2 className="text-3xl font-bold text-brown-800 mb-8 text-center">{section.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.images.map((image, imageIndex) => (
                  <div 
                    key={imageIndex} 
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
                    onClick={() => openLightbox(image.url)}
                  >
                    <div className="h-72 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-medium text-brown-800">{image.caption}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-brown-800 hover:bg-brown-700 transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;