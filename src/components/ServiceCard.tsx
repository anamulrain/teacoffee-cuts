import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-brown-800 mb-2">{title}</h3>
        <p className="text-brown-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;